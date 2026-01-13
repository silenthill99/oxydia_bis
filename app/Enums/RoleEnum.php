<?php

namespace App\Enums;

enum RoleEnum: string
{
    case PLAYER = "player";
    case ADMIN = "admin";

    public function label(): string
    {
        return match ($this) {
            self::PLAYER => "Joueur",
            self::ADMIN => "Administrateur",
        };

    }
}
