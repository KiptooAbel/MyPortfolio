<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        // Get skills grouped by category
        $skills = Skill::getByCategory();
        
        // Get featured projects for homepage
        $projects = Project::orderBy('order')
            ->orderBy('featured', 'desc')
            ->get();
    
        return Inertia::render('Home', [
            'skills' => $skills,
            'projects' => $projects,
        ]);
    }
}