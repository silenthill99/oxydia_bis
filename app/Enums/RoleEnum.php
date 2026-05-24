<?php

namespace App\Enums;

enum RoleEnum: string
{
    case PLAYER = 'player';
    case RESPONSABLE = 'responsable';
    case ADMIN = 'admin';

    public function label(): string
    {
        return match ($this) {
            self::PLAYER => 'Joueur',
            self::RESPONSABLE => "Responsable d'équipe",
            self::ADMIN => 'Administrateur',
        };
    }

    public function level(): int
    {
        return match ($this) {
            self::PLAYER => 1,
            self::RESPONSABLE => 2,
            self::ADMIN => 3,
        };
    }
}
