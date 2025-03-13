<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmission;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index()
    {
        return Inertia::render('Contact');
    }

    /**
     * Store a new contact message.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        $contactMessage = ContactMessage::create($validated);

        // Optional: Send an email notification
        // Uncomment if you have email configured
        /*
        Mail::to('your-email@example.com')->send(
            new ContactFormSubmission($contactMessage)
        );
        */

        return redirect()->back()->with('success', 'Thank you for your message! I will get back to you soon.');
    }

    /**
     * Admin: Display a list of contact messages.
     */
    public function adminIndex()
    {
        $messages = ContactMessage::orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Admin/Contact/Index', [
            'messages' => $messages,
        ]);
    }

    /**
     * Admin: Show a specific message.
     */
    public function show(ContactMessage $message)
    {
        // Mark as read when viewed
        if (!$message->read) {
            $message->update(['read' => true]);
        }

        return Inertia::render('Admin/Contact/Show', [
            'message' => $message,
        ]);
    }

    /**
     * Admin: Delete a message.
     */
    public function destroy(ContactMessage $message)
    {
        $message->delete();

        return redirect()->route('admin.contact.index')
            ->with('message', 'Contact message deleted successfully.');
    }
}