<x-mail::message>

Bonjour {{ $user->name }},

Merci pour votre candidature au sein de Nebralis.

Un membre du staff vous répondra sous peu par message privé sur Discord afin de vous apporter une réponse et, éventuellement, de vous proposer un rendez-vous.

Cordialement,<br>
{{ config('app.name') }}
</x-mail::message>
