<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Recruitment extends Model
{
    protected $fillable = [
        'discord_id',
        'minecraft_pseudo',
        'age',
        'role',
        'reason',
        'why_you',
        'experiences',
        'languages',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'from');
    }
}
