<?php

namespace App\Http\Controllers;

use App\Models\AboutPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $aboutData = AboutPage::getAboutData();
        
        return Inertia::render('About', [
            'aboutData' => $aboutData
        ]);
    }
}