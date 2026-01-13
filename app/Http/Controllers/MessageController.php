<?php

namespace App\Http\Controllers;

use App\Mail\MessageSendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'subject' => ['required', "string", "max:255"],
            "server" => ["required", "string", "max:255"],
            "message" => ['required', 'string']
        ]);

        $user = Auth::user();

        $message = $user->messages()->create($data);

        Mail::to("florian.graziani@sfr.fr")->send(new MessageSendMail($user, $message));

        return redirect()->back();
    }
}
