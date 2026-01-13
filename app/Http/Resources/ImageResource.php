<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "server_name" => $this->resource->server_name,
            "image_name" => $this->resource->image_name,
            "image_path" => $this->resource->image_path
        ];
    }
}
