<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    public function run()
    {
        $skills = [
            // Frontend
            [
                'name' => 'React',
                'icon' => 'react',
                'description' => 'Building interactive user interfaces with React',
                'proficiency' => 90,
                'category' => 'Frontend',
                'order' => 1,
                'featured' => true
            ],
            [
                'name' => 'TypeScript',
                'icon' => 'typescript',
                'description' => 'Type-safe JavaScript development',
                'proficiency' => 85,
                'category' => 'Frontend',
                'order' => 2,
                'featured' => true
            ],
            [
                'name' => 'Tailwind CSS',
                'icon' => 'tailwind',
                'description' => 'Creating responsive, utility-first designs',
                'proficiency' => 95,
                'category' => 'Frontend',
                'order' => 3,
                'featured' => true
            ],
            
            // Backend
            [
                'name' => 'Laravel',
                'icon' => 'laravel',
                'description' => 'Building robust web applications with Laravel',
                'proficiency' => 90,
                'category' => 'Backend',
                'order' => 1,
                'featured' => true
            ],
            [
                'name' => 'Node.js',
                'icon' => 'nodejs',
                'description' => 'Server-side JavaScript development',
                'proficiency' => 80,
                'category' => 'Backend',
                'order' => 2,
                'featured' => true
            ],
            [
                'name' => 'Inertia.js',
                'icon' => 'inertia',
                'description' => 'Building modern monolithic applications',
                'proficiency' => 85,
                'category' => 'Frontend',
                'order' => 4,
                'featured' => true
            ],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}