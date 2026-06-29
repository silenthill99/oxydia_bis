<?php

namespace App\Enums;

enum RoleEnum: string
{
    case PLAYER = 'player';
    case BUILDER = 'builder';
    case MODERATOR = 'moderator';
    case COMMUNITY_MANAGER = 'community-manager';
    case ANIMATOR = 'animator';
    case DEVELOPER = 'developer';
    case RESPONSABLE = 'responsable';
    case ADMIN = 'admin';

    public function label(): string
    {
        return match ($this) {
            self::PLAYER => 'Joueur',
            self::BUILDER => 'Constructeur',
            self::RESPONSABLE => "Responsable d'équipe",
            self::MODERATOR => 'Modérateur',
            self::COMMUNITY_MANAGER => 'Community Manager',
            self::ANIMATOR => 'Animateur',
            self::DEVELOPER => 'Développeur',
            self::ADMIN => 'Administrateur',
        };
    }

    public function level(): int
    {
        return match ($this) {
            self::PLAYER => 1,
            self::BUILDER, self::MODERATOR, self::COMMUNITY_MANAGER, self::ANIMATOR => 5,
            self::DEVELOPER => 6,
            self::RESPONSABLE => 7,
            self::ADMIN => 8,
        };
    }
}
