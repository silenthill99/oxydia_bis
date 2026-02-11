<?php

use App\Http\Controllers\CGUController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GestionImageController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index'])->name('accueil');

Route::get("/projects", function () {
    return Inertia::render("Nos projets");
})->name('projects');

Route::get("/rules-pvp", function () {
    return Inertia::render("Règlement Pvp Faction", [
        "phpVersion" => PHP_VERSION,
    ]);
})->name('rules-pvp');

Route::get("/rules-rp", function () {
    return Inertia::render("Règlement RP");
})->name('rules-rp');

Route::get("/rules-hp", function () {
    return Inertia::render("Règlement Harry PoCraft");
})->name('rules-hp');

Route::get('/dashboard', DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get("/contacts", function () {
    return Inertia::render("Contacts");
})->middleware("auth")->name('contacts');

Route::post("/contacts", [MessageController::class, 'store'])->name('messages.store');

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::resource("/images", ImageController::class)->except("index", "show");
    Route::get("/gestion-images", GestionImageController::class)->name("gestion-images");
});

Route::resource("images", ImageController::class)->only("index");

Route::get("/cgu", CGUController::class)->name("cgu");

require __DIR__.'/auth.php';
