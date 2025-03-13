<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'E-Commerce Platform',
                'description' => 'A full-featured e-commerce platform built with Laravel, Inertia.js, and React. Includes product management, cart functionality, payment integration, and user authentication.',
                'image' => '/images/projects/ecommerce.jpg',
                'github_url' => 'https://github.com/username/ecommerce',
                'live_url' => 'https://ecommerce-demo.example.com',
                'technologies' => ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
                'featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Task Management App',
                'description' => 'A collaborative task management application with real-time updates. Features include task assignments, progress tracking, deadline notifications, and team collaboration tools.',
                'image' => '/images/projects/task-manager.jpg',
                'github_url' => 'https://github.com/username/task-manager',
                'live_url' => 'https://taskapp.example.com',
                'technologies' => ['Laravel', 'Vue.js', 'Pusher', 'Tailwind CSS'],
                'featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Portfolio Website',
                'description' => 'A responsive developer portfolio showcasing projects and skills. Built with modern web technologies and featuring dynamic content management.',
                'image' => '/images/projects/portfolio.jpg',
                'github_url' => 'https://github.com/username/portfolio',
                'live_url' => null,
                'technologies' => ['React', 'Tailwind CSS', 'Framer Motion'],
                'featured' => false,
                'order' => 3,
            ],
            [
                'title' => 'Weather Application',
                'description' => 'A weather forecasting application that provides real-time weather data and forecasts. Integrates with external APIs for accurate weather information.',
                'image' => '/images/projects/weather-app.jpg',
                'github_url' => 'https://github.com/username/weather-app',
                'live_url' => 'https://weather.example.com',
                'technologies' => ['React', 'Node.js', 'OpenWeather API'],
                'featured' => false,
                'order' => 4,
            ],
            [
                'title' => 'Blog Platform',
                'description' => 'A content management system for creating and managing blog posts. Features include rich text editing, categories, tags, and user comments.',
                'image' => '/images/projects/blog.jpg',
                'github_url' => 'https://github.com/username/blog-platform',
                'live_url' => 'https://blog.example.com',
                'technologies' => ['Laravel', 'Livewire', 'Alpine.js', 'MySQL'],
                'featured' => false,
                'order' => 5,
            ],
            [
                'title' => 'Real Estate Listings',
                'description' => 'A property listing platform for real estate agents and home buyers. Includes property search, filtering, and contact features.',
                'image' => '/images/projects/real-estate.jpg',
                'github_url' => 'https://github.com/username/real-estate',
                'live_url' => null,
                'technologies' => ['Laravel', 'React', 'Inertia.js', 'PostgreSQL'],
                'featured' => false,
                'order' => 6,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}