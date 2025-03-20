<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use App\Models\ContactMessage;
use App\Models\AboutPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard with portfolio statistics.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // Get projects stats
        $totalProjects = Project::count();
        $featuredProjects = Project::where('featured', true)->count();
        
        // Get skills stats
        $totalSkills = Skill::count();
        $skillCategories = Skill::select('category')->distinct()->count();
        
        // Get unread messages count
        $unreadMessages = ContactMessage::where('read', false)->count();
        
        // Calculate profile completeness
        $aboutData = AboutPage::getAboutData();
        $profileCompleteness = $this->calculateProfileCompleteness($aboutData);
        
        // Get recent activity
        $recentActivity = $this->getRecentActivity();
        
        // Compile stats for the dashboard
        $stats = [
            'projects' => [
                'total' => $totalProjects,
                'featured' => $featuredProjects,
            ],
            'skills' => [
                'total' => $totalSkills,
                'categories' => $skillCategories,
            ],
            'messages' => [
                'unread' => $unreadMessages,
            ],
            'profile' => [
                'completeness' => $profileCompleteness,
            ],
            'recentActivity' => $recentActivity,
        ];
        
        return Inertia::render('Dashboard', [
            'stats' => $stats,
        ]);
    }
    
    /**
     * Calculate the profile completeness percentage based on AboutPage data.
     *
     * @param \App\Models\AboutPage|null $aboutData
     * @return int
     */
    private function calculateProfileCompleteness($aboutData)
    {
        if (!$aboutData) {
            return 0;
        }
        
        $fields = [
            'title', 'bio', 'short_description', 'profile_image',
            'experiences', 'education', 'testimonials', 'certifications', 'personal_info'
        ];
        
        $completedFields = 0;
        
        foreach ($fields as $field) {
            if (!empty($aboutData->$field)) {
                if (is_array($aboutData->$field) && count($aboutData->$field) > 0) {
                    $completedFields++;
                } elseif (!is_array($aboutData->$field)) {
                    $completedFields++;
                }
            }
        }
        
        return round(($completedFields / count($fields)) * 100);
    }
    
    /**
     * Get recent activity for the dashboard.
     *
     * @return array
     */
    private function getRecentActivity()
    {
        $activity = [];
        
        // Recent projects
        $recentProjects = Project::orderBy('created_at', 'desc')
            ->select('id', 'title', 'created_at')
            ->limit(3)
            ->get();
            
        foreach ($recentProjects as $project) {
            $activity[] = [
                'date' => $project->created_at->format('Y-m-d'),
                'action' => 'Added new project',
                'title' => $project->title,
                'type' => 'project',
                'id' => $project->id,
            ];
        }
        
        // Recent skills
        $recentSkills = Skill::orderBy('created_at', 'desc')
            ->select('id', 'name', 'created_at')
            ->limit(3)
            ->get();
            
        foreach ($recentSkills as $skill) {
            $activity[] = [
                'date' => $skill->created_at->format('Y-m-d'),
                'action' => 'Added new skill',
                'title' => $skill->name,
                'type' => 'skill',
                'id' => $skill->id,
            ];
        }
        
        // Recent messages
        $recentMessages = ContactMessage::orderBy('created_at', 'desc')
            ->select('id', 'subject', 'created_at')
            ->limit(3)
            ->get();
            
        foreach ($recentMessages as $message) {
            $activity[] = [
                'date' => $message->created_at->format('Y-m-d'),
                'action' => 'Received message',
                'title' => $message->subject ?: 'No subject',
                'type' => 'message',
                'id' => $message->id,
            ];
        }
        
        // Sort by date (newest first)
        usort($activity, function($a, $b) {
            return strtotime($b['date']) - strtotime($a['date']);
        });
        
        // Return only the most recent 5 activities
        return array_slice($activity, 0, 5);
    }
}