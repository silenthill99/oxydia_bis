<x-mail::message>
# Introduction

de : {{$user->email}}

    {{$message->message}}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
