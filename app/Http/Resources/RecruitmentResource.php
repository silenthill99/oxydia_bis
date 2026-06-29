<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecruitmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'from' => new UserResource($this->whenLoaded('from')),
            'discord_id' => $this->discord_id,
            'minecraft_pseudo' => $this->minecraft_pseudo,
            'age' => $this->age,
            'role' => $this->role,
            'reason' => $this->reason,
            'why_you' => $this->why_you,
            'experiences' => $this->experiences,
            'languages' => $this->languages,
        ];
    }
}
