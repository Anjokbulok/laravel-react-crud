<?php

use App\Http\Controllers\FeatureController;
use App\Http\Controllers\Api\FeatureCategoryController;
use App\Http\Controllers\Api\FeatureController as ApiFeatureController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/features');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('features', \App\Http\Controllers\FeatureController::class);

Route::prefix('api')->group(function () {
    Route::get('/features', [ApiFeatureController::class, 'index'])->name('api.features.index');
    Route::get('/features/{feature}', [ApiFeatureController::class, 'show'])->name('api.features.show');
    Route::post('/features', [ApiFeatureController::class, 'store'])->name('api.features.store');
    Route::put('/features/{feature}', [ApiFeatureController::class, 'update'])->name('api.features.update');
    Route::delete('/features/{feature}', [ApiFeatureController::class, 'destroy'])->name('api.features.destroy');

    Route::get('/categories', [FeatureCategoryController::class, 'index'])->name('api.categories.index');
    Route::get('/categories/{featureCategory}', [FeatureCategoryController::class, 'show'])->name('api.categories.show');
    Route::post('/categories', [FeatureCategoryController::class, 'store'])->name('api.categories.store');
    Route::put('/categories/{featureCategory}', [FeatureCategoryController::class, 'update'])->name('api.categories.update');
    Route::delete('/categories/{featureCategory}', [FeatureCategoryController::class, 'destroy'])->name('api.categories.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
