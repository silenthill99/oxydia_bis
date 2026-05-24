<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function changeRole(User $user, Request $request)
    {
        $data = $request->validate([
            'role' => ['required', 'exists:roles,id'],
        ]);
        $user->roles()->sync($data['role']);
    }
}
