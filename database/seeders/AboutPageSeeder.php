<?php

namespace Database\Seeders;

use App\Models\AboutPage;
use Illuminate\Database\Seeder;

class AboutPageSeeder extends Seeder
{
    public function run()
    {
        AboutPage::create([
            'title' => 'About Me',
            'bio' => "Hi, I'm Abel Kiptoo, a passionate full-stack developer with over 5 years of experience building web applications. I specialize in creating exceptional digital experiences using modern technologies like React, Laravel, and Inertia.js. My journey in web development started when I was in college, and since then, I've been dedicated to crafting clean, efficient, and user-friendly applications.

I believe that great software is not just about writing code; it's about solving real problems and creating intuitive experiences. I'm constantly learning and exploring new technologies to stay at the forefront of web development.",
            
            'short_description' => "Full-stack developer with expertise in React, Laravel, and Inertia.js, dedicated to building exceptional digital experiences.",
            
            'profile_image' => 'images/profile.jpg',
            
            'experiences' => json_encode([
                [
                    'title' => 'Senior Full Stack Developer',
                    'company' => 'TechInnovate Solutions',
                    'period' => '2021 - Present',
                    'description' => 'Leading development of enterprise web applications using React, Laravel, and Inertia.js. Implementing CI/CD pipelines and mentoring junior developers.'
                ],
                [
                    'title' => 'Web Developer',
                    'company' => 'Digital Craft Agency',
                    'period' => '2018 - 2021',
                    'description' => 'Developed responsive websites and web applications for various clients. Worked with React, Vue.js, and Laravel.'
                ],
                [
                    'title' => 'Junior Developer',
                    'company' => 'StartUp Hub',
                    'period' => '2016 - 2018',
                    'description' => 'Started as an intern and progressed to junior developer. Worked on front-end development using HTML, CSS, and JavaScript.'
                ]
            ]),
            
            'education' => json_encode([
                [
                    'degree' => 'BSc in Computer Science',
                    'institution' => 'University of Technology',
                    'period' => '2012 - 2016',
                    'description' => 'Graduated with first-class honors. Specialized in software engineering and web technologies.'
                ],
                [
                    'degree' => 'Web Development Bootcamp',
                    'institution' => 'Code Academy',
                    'period' => '2015',
                    'description' => 'Intensive 12-week program focused on modern web development practices.'
                ]
            ]),
            
            'testimonials' => json_encode([
                [
                    'text' => 'Abel is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive.',
                    'author' => 'John Smith',
                    'position' => 'CTO at TechInnovate Solutions'
                ],
                [
                    'text' => 'Working with Abel was a pleasure. He understood our requirements perfectly and delivered a solution that exceeded our expectations.',
                    'author' => 'Sarah Johnson',
                    'position' => 'Project Manager at Digital Craft'
                ]
            ]),
            
            'certifications' => json_encode([
                [
                    'name' => 'AWS Certified Developer',
                    'issuer' => 'Amazon Web Services',
                    'year' => '2022'
                ],
                [
                    'name' => 'Laravel Certification',
                    'issuer' => 'Laravel',
                    'year' => '2021'
                ],
                [
                    'name' => 'React Developer Certification',
                    'issuer' => 'Meta',
                    'year' => '2020'
                ]
            ]),
            
            'personal_info' => json_encode([
                'full_name' => 'Abel Kiptoo',
                'email' => 'hello@abelkiptoo.com',
                'location' => 'Nairobi, Kenya',
                'languages' => ['English', 'Swahili'],
                'interests' => ['Coding', 'Reading', 'Hiking', 'Photography']
            ])
        ]);
    }
}