<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'skills' => \App\Models\Skill::getByCategory(), // Add this line to get skills data
    ]);
});

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
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
   
    // Skills CRUD
    Route::get('/skill', [SkillController::class, 'adminIndex'])->name('admin.skills.index');
    Route::get('/skill/create', [SkillController::class, 'create'])->name('admin.skills.create');
    Route::post('/skill', [SkillController::class, 'store'])->name('admin.skills.store');
    Route::get('/skill/{skill}/edit', [SkillController::class, 'edit'])->name('admin.skills.edit');
    Route::put('/skill/{skill}', [SkillController::class, 'update'])->name('admin.skills.update');
    Route::delete('/skill/{skill}', [SkillController::class, 'destroy'])->name('admin.skills.destroy');
    Route::get('/skill/{skill}', [SkillController::class, 'show'])->name('admin.skills.show');
    
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

    Route::get('/about-admin', [AboutController::class, 'adminIndex'])->name('admin.about.index');
    Route::get('/about-admin/create', [AboutController::class, 'create'])->name('admin.about.create');
    Route::post('/about-admin', [AboutController::class, 'store'])->name('admin.about.store');
    Route::get('/about-admin/{about}/edit', [AboutController::class, 'edit'])->name('admin.about.edit');
    Route::put('/about-admin/{about}', [AboutController::class, 'update'])->name('admin.about.update');
    Route::delete('/about-admin/{about}', [AboutController::class, 'destroy'])->name('admin.about.destroy');
    Route::get('/about-admin/{about}', [AboutController::class, 'show'])->name('admin.about.show');
});



require __DIR__.'/auth.php';
