<?php

use App\Enums\RoleEnum;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->enum('role', RoleEnum::cases());
            $table->timestamps();
        });

        Schema::create('role_user', function (Blueprint $table) {
            $table->foreignIdFor(Role::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
        });

        foreach (RoleEnum::cases() as $role) {
            DB::table('roles')->insert([
                'role' => $role->value,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_user');
        Schema::dropIfExists('roles');
    }
};
