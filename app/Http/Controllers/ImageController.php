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
        $imageName = time() . "_" . $image->getClientOriginalName();
        $image->storeAs('images', $imageName, 'public');

        $data['image_path'] = "/images/".$imageName;

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
            $imageName = time() . "_" . $file->getClientOriginalName();
            $file->storeAs('images', $imageName, 'public');

            $data['image_path'] = "/images/".$imageName;
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
