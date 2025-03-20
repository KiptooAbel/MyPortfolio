<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\AboutController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



// Public routes
Route::get('/projects', [ProjectController::class, 'index'])->name('projects');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/skills', [SkillController::class, 'index'])->name('skills');
Route::get('/about', [AboutController::class, 'index'])->name('about');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    
    Route::get('/contacts', [ContactController::class, 'adminIndex'])->name('admin.contact.index');
    Route::get('/contacts/{message}', [ContactController::class, 'show'])->name('admin.contact.show');
    Route::delete('/contacts/{message}', [ContactController::class, 'destroy'])->name('admin.contact.destroy');

    Route::get('/project', [ProjectController::class, 'adminIndex'])->name('admin.projects.index');
    Route::get('/project/create', [ProjectController::class, 'create'])->name('admin.projects.create');
    Route::post('/project', [ProjectController::class, 'store'])->name('admin.projects.store');
    Route::get('/project/{project}/edit', [ProjectController::class, 'edit'])->name('admin.projects.edit');
    Route::put('/project/{project}', [ProjectController::class, 'update'])->name('admin.projects.update');
    Route::delete('/project/{project}', [ProjectController::class, 'destroy'])->name('admin.projects.destroy');
    Route::get('/project/{project}', [ProjectController::class, 'show'])->name('admin.projects.show');
});



require __DIR__.'/auth.php';
