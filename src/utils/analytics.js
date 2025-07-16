// Analytics utility for tracking user interactions
class Analytics {
  constructor() {
    this.events = [];
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  // Track page views
  trackPageView(pageName) {
    if (!this.isEnabled) return;
    
    const event = {
      type: 'pageview',
      page: pageName,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  // Track user interactions
  trackEvent(eventName, properties = {}) {
    if (!this.isEnabled) return;
    
    const event = {
      type: 'event',
      name: eventName,
      properties,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  // Track CV downloads/views
  trackCVView() {
    this.trackEvent('cv_viewed', {
      source: 'about_section',
      timestamp: new Date().toISOString()
    });
  }

  // Track service modal opens
  trackServiceModal(serviceName) {
    this.trackEvent('service_modal_opened', {
      service: serviceName,
      timestamp: new Date().toISOString()
    });
  }

  // Track contact form submissions
  trackContactForm() {
    this.trackEvent('contact_form_submitted', {
      timestamp: new Date().toISOString()
    });
  }

  // Track project views
  trackProjectView(projectName) {
    this.trackEvent('project_viewed', {
      project: projectName,
      timestamp: new Date().toISOString()
    });
  }

  // Send analytics data (placeholder for actual analytics service)
  sendToAnalytics(event) {
    // In production, you would send this to Google Analytics, Mixpanel, etc.
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
    
    // Example: Google Analytics 4
    if (window.gtag) {
      window.gtag('event', event.name || event.type, {
        event_category: 'user_interaction',
        event_label: event.page || event.properties?.service || event.properties?.project,
        value: 1
      });
    }
  }

  // Get analytics summary
  getSummary() {
    return {
      totalEvents: this.events.length,
      pageViews: this.events.filter(e => e.type === 'pageview').length,
      interactions: this.events.filter(e => e.type === 'event').length,
      events: this.events
    };
  }
}

// Create singleton instance
const analytics = new Analytics();

export default analytics; 