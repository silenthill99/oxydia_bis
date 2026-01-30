<?php

namespace App\Http\Controllers;

use App\Enums\RoleEnum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Auth::user()->load('messages', 'roles');

        $roles = Auth::user()->roles->map(fn($role) => [
            'id' => $role->id,
            'role' => RoleEnum::from($role->role)->label(),
        ]);

        return Inertia::render('Dashboard', [
            "roles" => $roles,
        ]);
    }
}
