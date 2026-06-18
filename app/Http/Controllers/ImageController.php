<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateImageRequest;
use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
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
        $data['image_path'] = $image->store('images', 'public');

        Auth::user()->images()->create($data);

        return redirect()->route('images.index');
    }

    public function edit(Image $image)
    {
        Gate::authorize('update', $image);
        return Inertia::render("Images/edit", [
           'image' => new ImageResource($image)
        ]);
    }

    public function update(UpdateImageRequest $request, Image $image)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            if (Storage::disk('public')->exists($image->image_path)) {
                Storage::disk('public')->delete($image->image_path);
            }
            $file = $request->file('image');
            $data['image_path'] = $file->store('images', 'public');
        }

        $image->update($data);
        return redirect()->route('images.index');
    }

    public function destroy(Image $image) {
        $this->authorize("delete", $image);

        if (Storage::disk("public")->exists($image->image_path))
        {
            Storage::disk("public")->delete($image->image_path);
        }

        $image->delete();
        return redirect()->route('images.index');
    }
}
