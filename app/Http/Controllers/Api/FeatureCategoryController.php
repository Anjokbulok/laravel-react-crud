<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FeatureCategory;
use Illuminate\Http\JsonResponse;

class FeatureCategoryController extends Controller
{
    public function index(): JsonResponse
    {
        $categories = FeatureCategory::orderBy('name')->get(['id', 'name', 'slug', 'description']);

        return response()->json($categories);
    }

    public function store(\Illuminate\Http\Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);

        $category = FeatureCategory::create($validated);

        return response()->json($category, 201);
    }

    public function show(FeatureCategory $featureCategory): JsonResponse
    {
        return response()->json($featureCategory);
    }

    public function update(\Illuminate\Http\Request $request, FeatureCategory $featureCategory): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);

        $featureCategory->update($validated);

        return response()->json($featureCategory);
    }

    public function destroy(FeatureCategory $featureCategory): JsonResponse
    {
        $featureCategory->delete();

        return response()->json(null, 204);
    }
}
