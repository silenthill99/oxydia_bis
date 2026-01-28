<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ImageController extends Controller
{
    public function index()
    {
        $serverRp = Image::where('server_name', 'server_rp')->get();

        return Inertia::render("Images/index", [
            "serverRp" => ImageResource::collection($serverRp),
        ]);
    }

    public function create()
    {
        $this->authorize("create", Image::class);

        return Inertia::render("Images/create");
    }
}
