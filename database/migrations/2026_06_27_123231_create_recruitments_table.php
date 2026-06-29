<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recruitments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('from')->constrained('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('discord_id');
            $table->string('minecraft_pseudo');
            $table->integer('age');
            $table->enum('role', ['Constructeur', 'Modérateur', 'Développeur', 'Community Manager', 'Animateur']);
            $table->text('reason');
            $table->text('why_you');
            $table->text('experiences')->nullable();
            $table->tinyText('languages')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recruitments');
    }
};
