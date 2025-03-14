<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::getByCategory();
        
        return Inertia::render('Skills', [
            'skills' => $skills,
            'categories' => $skills->keys()
        ]);
    }
}