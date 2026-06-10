type AnalyticsValue = string | number | boolean | null | undefined

export const analyticsEvents = {
  businessWebsiteCtaClick: "business_website_cta_click",
  contactClick: "contact_click",
  contactFormError: "contact_form_error",
  contactFormSubmit: "contact_form_submit",
  contactFormSuccess: "contact_form_success",
  emailClick: "email_click",
  projectLiveClick: "project_live_click",
  phoneClick: "phone_click",
  socialProfileClick: "social_profile_click",
  whatsappClick: "whatsapp_click",
} as const

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents]

export type AnalyticsParams = Record<string, AnalyticsValue>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (
      command: "event" | "config" | "js",
      target: string | Date,
      params?: AnalyticsParams
    ) => void
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params: AnalyticsParams = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  window.gtag("event", eventName, {
    ...params,
    transport_type: "beacon",
  })
}
