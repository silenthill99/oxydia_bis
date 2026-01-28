<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Image extends Model
{
    use AuthorizesRequests;
    protected $fillable = [
        "image_path",
        "server_name",
        "image_name"
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
