<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    // Public view
    public function index()
    {
        $skills = Skill::getByCategory();
                
        return Inertia::render('Skills', [
            'skills' => $skills,
            'categories' => $skills->keys()
        ]);
    }
    
    // Admin views
    public function adminIndex()
    {
        $skills = Skill::orderBy('order')->get();
        
        return Inertia::render('Admin/Skills/Index', [
            'skills' => $skills
        ]);
    }
    
    public function create()
    {
        $categories = Skill::select('category')->distinct()->pluck('category');
        
        return Inertia::render('Admin/Skills/Create', [
            'categories' => $categories
        ]);
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'proficiency' => 'required|integer|min:0|max:100',
            'category' => 'required|string|max:255',
            'order' => 'required|integer|min:0',
            'featured' => 'boolean'
        ]);
        
        Skill::create($validated);
        
        return redirect()->route('admin.skills.index')->with('success', 'Skill created successfully');
    }
    
    public function show(Skill $skill)
    {
        return Inertia::render('Admin/Skills/Show', [
            'skill' => $skill
        ]);
    }
    
    public function edit(Skill $skill)
    {
        $categories = Skill::select('category')->distinct()->pluck('category');
        
        return Inertia::render('Admin/Skills/Edit', [
            'skill' => $skill,
            'categories' => $categories
        ]);
    }
    
    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'proficiency' => 'required|integer|min:0|max:100',
            'category' => 'required|string|max:255',
            'order' => 'required|integer|min:0',
            'featured' => 'boolean'
        ]);
        
        $skill->update($validated);
        
        return redirect()->route('admin.skills.index')->with('success', 'Skill updated successfully');
    }
    
    public function destroy(Skill $skill)
    {
        $skill->delete();
        
        return redirect()->route('admin.skills.index')->with('success', 'Skill deleted successfully');
    }
}