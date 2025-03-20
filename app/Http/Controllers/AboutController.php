<?php

namespace App\Http\Controllers;

use App\Models\AboutPage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AboutController extends Controller
{
    /**
     * Display the about page for visitors
     */
    public function index()
    {
        $about = AboutPage::getAboutData();
        return Inertia::render('About', [
            'about' => $about,
        ]);
    }

    /**
     * Display the about page management interface
     */
    public function adminIndex()
    {
        $about = AboutPage::getAboutData();
        return Inertia::render('Admin/About/Index', [
            'about' => $about,
        ]);
    }

    /**
     * Show the form for creating a new about page
     */
    public function create()
    {
        return Inertia::render('Admin/About/Create');
    }

    /**
     * Store a newly created about page
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'bio' => 'required|string',
            'short_description' => 'required|string',
            'profile_image' => 'nullable|image|max:2048',
            'experiences' => 'nullable|array',
            'education' => 'nullable|array',
            'testimonials' => 'nullable|array',
            'certifications' => 'nullable|array',
            'personal_info' => 'nullable|array',
        ]);

        // Handle file upload if provided
        if ($request->hasFile('profile_image')) {
            $path = $request->file('profile_image')->store('profile_images', 'public');
            $validated['profile_image'] = $path;
        }

        AboutPage::create($validated);

        return redirect()->route('admin.about.index')->with('success', 'About page created successfully.');
    }

    /**
     * Show the form for editing the about page
     */
    public function edit(AboutPage $about)
    {
        return Inertia::render('Admin/About/Edit', [
            'about' => $about,
        ]);
    }

    /**
     * Update the about page
     */
    public function update(Request $request, AboutPage $about)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'bio' => 'required|string',
            'short_description' => 'required|string',
            'profile_image' => 'nullable|image|max:2048',
            'experiences' => 'nullable|array',
            'education' => 'nullable|array',
            'testimonials' => 'nullable|array',
            'certifications' => 'nullable|array',
            'personal_info' => 'nullable|array',
        ]);

        // Handle file upload if provided
        if ($request->hasFile('profile_image')) {
            // Delete old image if exists
            if ($about->profile_image) {
                Storage::disk('public')->delete($about->profile_image);
            }
            $path = $request->file('profile_image')->store('profile_images', 'public');
            $validated['profile_image'] = $path;
        }

        $about->update($validated);

        return redirect()->route('admin.about.index')->with('success', 'About page updated successfully.');
    }

    /**
     * Remove the about page
     */
    public function destroy(AboutPage $about)
    {
        // Delete profile image if exists
        if ($about->profile_image) {
            Storage::disk('public')->delete($about->profile_image);
        }

        $about->delete();

        return redirect()->route('admin.about.index')->with('success', 'About page deleted successfully.');
    }

    /**
     * Show the about page details
     */
    public function show(AboutPage $about)
    {
        return Inertia::render('Admin/About/Show', [
            'about' => $about,
        ]);
    }
}