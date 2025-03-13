@component('mail::message')
# New Contact Form Submission

You have received a new message from your portfolio website:

**Name:** {{ $contactMessage->name }}

**Email:** {{ $contactMessage->email }}

**Subject:** {{ $contactMessage->subject ?? 'N/A' }}

**Message:**
{{ $contactMessage->message }}

@component('mail::button', ['url' => route('admin.contact.show', $contactMessage->id)])
View Message
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent