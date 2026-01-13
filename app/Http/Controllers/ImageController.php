<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
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
}
