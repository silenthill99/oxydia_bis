<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $fillable = [
        'name',
        'logo_path',
        'website',
        'discord',
        'creator_name',
        'email',
        'infos',
        'position',
        'is_active',
    ];
}
