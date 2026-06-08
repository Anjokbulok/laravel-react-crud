<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Feature;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class FeatureController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Feature::query()->with('category');

        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->has('is_published')) {
            $query->where('is_published', $request->boolean('is_published'));
        }

        if ($request->has('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', "%{$request->search}%")
                    ->orWhere('description', 'like', "%{$request->search}%");
            });
        }

        $features = $query->orderByDesc('created_at')->paginate(15);

        return response()->json($features);
    }

    public function store(Request $request): JsonResponse
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
        $feature->load('category');

        return response()->json($feature, 201);
    }

    public function show(Feature $feature): JsonResponse
    {
        $feature->load('category');

        return response()->json($feature);
    }

    public function update(Request $request, Feature $feature): JsonResponse
    {
        $validated = $request->validate([
            'category_id' => ['required', 'exists:feature_categories,id'],
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'featured_image' => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('featured_image')) {
            if ($feature->featured_image) {
                Storage::disk('public')->delete($feature->featured_image);
            }
            $validated['featured_image'] = $request->file('featured_image')->store('features', 'public');
        }

        $feature->update($validated);
        $feature->load('category');

        return response()->json($feature);
    }

    public function destroy(Feature $feature): JsonResponse
    {
        if ($feature->featured_image) {
            Storage::disk('public')->delete($feature->featured_image);
        }

        $feature->delete();

        return response()->json(null, 204);
    }
}
