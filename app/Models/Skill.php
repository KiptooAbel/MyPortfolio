<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'icon',
        'description',
        'proficiency',
        'category',
        'order',
        'featured'
    ];

    // Get skills grouped by category
    public static function getByCategory()
    {
        return self::orderBy('category')
            ->orderBy('order')
            ->get()
            ->groupBy('category');
    }
}