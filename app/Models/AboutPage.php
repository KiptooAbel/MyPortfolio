<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutPage extends Model
{
    use HasFactory;

    protected $table = 'about_page';

    protected $fillable = [
        'title',
        'bio',
        'short_description',
        'profile_image',
        'experiences',
        'education',
        'testimonials',
        'certifications',
        'personal_info'
    ];

    protected $casts = [
        'experiences' => 'array',
        'education' => 'array',
        'testimonials' => 'array',
        'certifications' => 'array',
        'personal_info' => 'array'
    ];

    public static function getAboutData()
    {
        return self::first();
    }
}