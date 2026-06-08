<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\FeatureCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FeatureController extends Controller
{
    public function index(Request $request)
    {
        $query = Feature::query()->with('category');

        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', "%{$request->search}%")
                    ->orWhere('description', 'like', "%{$request->search}%");
            });
        }

        $features = $query->orderByDesc('created_at')->paginate(10);

        return inertia('features/index', [
            'features' => $features,
            'filters' => $request->only(['category_id', 'search']),
            'categories' => FeatureCategory::orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function create()
    {
        return inertia('features/create', [
            'categories' => FeatureCategory::orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => ['required', 'exists:feature_categories,id'],
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'featured_image' => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = $request->file('featured_image')->store('features', 'public');
        }

        $feature = Feature::create($validated);

        return redirect()->route('features.index')->with('success', 'Feature created successfully.');
    }

    public function show(Feature $feature)
    {
        $feature->load('category');

        return inertia('features/show', [
            'feature' => $feature,
        ]);
    }

    public function edit(Feature $feature)
    {
        $feature->load('category');

        return inertia('features/edit', [
            'feature' => $feature,
            'categories' => FeatureCategory::orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function update(Request $request, Feature $feature)
    {
        $validated = $request->validate([
            'category_id' => ['nullable', 'exists:feature_categories,id'],
            'title' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'featured_image' => ['nullable', 'image', 'max:2048'],
        ]);

        $data = array_filter($validated, fn ($value) => $value !== null && $value !== '');

        if ($request->boolean('remove_image')) {
            if ($feature->featured_image) {
                Storage::disk('public')->delete($feature->featured_image);
            }
            $data['featured_image'] = null;
        } elseif ($request->hasFile('featured_image')) {
            if ($feature->featured_image) {
                Storage::disk('public')->delete($feature->featured_image);
            }
            $data['featured_image'] = $request->file('featured_image')->store('features', 'public');
        }

        $feature->update($data);

        return redirect()->route('features.index')->with('success', 'Feature updated successfully.');
    }

    public function destroy(Feature $feature)
    {
        if ($feature->featured_image) {
            Storage::disk('public')->delete($feature->featured_image);
        }

        $feature->delete();

        return redirect()->route('features.index')->with('success', 'Feature deleted successfully.');
    }
}
