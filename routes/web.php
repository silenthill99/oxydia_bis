<?php

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/essai', function () {
    return Inertia::render("Essai", [
        'user' => Auth::user(),
        'message' => "Bonjour depuis Laravel"
    ]);
});

Route::get("/contacts", function () {
    return Inertia::render("Contacts");
})->middleware("auth")->name('contacts');

Route::post("/contacts", function () {
    return Inertia::render("Contacts");
});

require __DIR__.'/auth.php';
