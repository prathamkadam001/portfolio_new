# Lead Tracking

The site sends GA4 events through `src/lib/analytics.ts` and `TrackedLink`.

## Events

| Event | Meaning |
| --- | --- |
| `business_website_cta_click` | Visitor clicked a main business website CTA |
| `contact_click` | Visitor clicked a contact-page or contact-intent CTA |
| `whatsapp_click` | Visitor clicked a WhatsApp link |
| `email_click` | Visitor clicked an email link |
| `phone_click` | Visitor clicked a phone link |
| `contact_form_submit` | Visitor attempted to submit the contact form |
| `contact_form_success` | FormSubmit accepted the enquiry |
| `contact_form_error` | FormSubmit or network failed |
| `social_profile_click` | Visitor clicked LinkedIn, Instagram, or GitHub from the footer |
| `project_live_click` | Visitor clicked through to a live project website |

## Common Parameters

Tracked links automatically include:

- `destination`
- `current_path`
- `outbound`
- custom `location`

## GA4 Check

After deployment, open GA4 Realtime and test:

1. Click footer WhatsApp.
2. Click footer email and phone.
3. Click a project live website.
4. Submit a test contact form only when you are ready to receive the email.

Mark these as key events in GA4 if you want lead reports:

- `whatsapp_click`
- `email_click`
- `phone_click`
- `contact_form_success`
