<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('about_page', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('bio');
            $table->text('short_description');
            $table->string('profile_image')->nullable();
            $table->json('experiences')->nullable();
            $table->json('education')->nullable();
            $table->json('testimonials')->nullable();
            $table->json('certifications')->nullable();
            $table->json('personal_info')->nullable(); // For info like age, residence, etc.
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('about_page');
    }
};