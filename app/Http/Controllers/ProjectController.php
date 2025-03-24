<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display the projects page.
     */
    public function index()
    {
        $projects = Project::orderBy('order')
            ->orderBy('featured', 'desc')
            ->get();

        return Inertia::render('Projects', [
            'projects' => $projects,
        ]);
    }

    /**
     * For admin section - Display a listing of the projects
     */
    public function adminIndex()
    {
        $projects = Project::orderBy('order')->get();

        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects,
        ]);
    }

    /**
     * For admin section - Show the form for creating a new project
     */
    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    /**
     * For admin section - Store a newly created project
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|string|max:255',
            'live_url' => 'nullable|url|max:255',
            'technologies' => 'nullable|array',
            'featured' => 'boolean',
            'order' => 'integer',
        ]);

        Project::create($validated);

        return redirect()->route('admin.projects.index')
            ->with('message', 'Project created successfully.');
    }

    /**
     * For admin section - Show the form for editing the specified project
     */
    public function edit(Project $project)
    {
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
        ]);
    }

    /**
     * For admin section - Update the specified project
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|string|max:255',
            'live_url' => 'nullable|url|max:255',
            'technologies' => 'nullable|array',
            'featured' => 'boolean',
            'order' => 'integer',
        ]);

        $project->update($validated);

        return redirect()->route('admin.projects.index')
            ->with('message', 'Project updated successfully.');
    }

    /**
     * For admin section - Remove the specified project
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return redirect()->route('admin.projects.index')
            ->with('message', 'Project deleted successfully.');
    }

    /**
     * For admin section - Display the specified project
     */
    public function show(Project $project)
    {
        return Inertia::render('Admin/Projects/Show', [
            'project' => $project,
        ]);
    }

/**
 * Display a single project for public view
 */
public function publicShow(Project $project)
{
    return Inertia::render('ProjectDetail', [
        'project' => $project,
    ]);
}
}