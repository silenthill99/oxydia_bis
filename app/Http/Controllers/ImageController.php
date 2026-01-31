<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\Request;
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

    public function store(Request $request)
    {
        $data = $request->validate([
            "server_name" => "required|string|max:255",
            "image" => "required|file|image|mimes:jpeg,png,jpg",
            'image_name' => "required|string|max:255"
        ]);

        $image = $request->file('image');
        $imageName = time() . "_" . $image->getClientOriginalName();
        $image->storeAs('images', $imageName, 'public');

        $data['image_path'] = "/images/".$imageName;

        Auth::user()->images()->create($data);

        return redirect()->route('images.index');
    }
}
