<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Image extends Model
{
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
