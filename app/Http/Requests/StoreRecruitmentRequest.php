<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRecruitmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // (?!.*\.\.) veux dire "Pas de ..."
            'discord_id' => ['required', 'string', 'min:2', 'mag:32', 'regex:/^(?!.*\.\.)[a-z0-9_.]+$/'],
            'minecraft_pseudo' => ['required', 'string', 'min:3', 'max:16', 'regex:/^[a-zA-Z0-9_]+$/'],
            'age' => ['required', 'integer', 'min:1'],
            'role' => ['required', 'string', 'max:255'],
            'reason' => ['required', 'string'],
            'why_you' => ['required', 'string'],
            'experiences' => ['nullable', 'string'],
            'languages' => ['required_if:role,Développeur', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'discord_id.regex' => "L'identifiant discord n'est pas valide",
            'minecraft_pseudo.regex' => 'Le pseudo Minecraftg ne peut contenir que des lettres, des chiffres et les caractères _ et .',
        ];
    }
}
