<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
use Inertia\Inertia;

class GestionImageController extends Controller
{
    public function __invoke()
    {
        $images = Image::all();
        return Inertia::render('GestionImages', [
            'images' => ImageResource::collection($images),
        ]);
    }
}
