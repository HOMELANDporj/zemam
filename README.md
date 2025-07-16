# Zemam Technologies - Official Website

A modern, responsive website for Zemam Technologies, showcasing our expertise in software development, AI, and digital transformation.

## 🚀 Features

### Core Features
- **Modern Design**: Clean, professional design with gold and teal color scheme
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: 
  - CV modal for Samuel Getnet
  - Service modals with detailed descriptions
  - Project showcase with filtering
  - Functional contact form with toast notifications
- **Performance Optimized**: Fast loading with optimized images and code
- **SEO Friendly**: Proper meta tags, structured data, and sitemap
- **PWA Ready**: Progressive Web App capabilities with service worker
- **Analytics**: User interaction tracking
- **Error Handling**: Graceful error boundaries

### New Enhancements
- **Toast Notifications**: Success, error, warning, and info messages
- **Cookie Consent**: GDPR-compliant cookie consent banner
- **Scroll to Top**: Smooth scroll-to-top button
- **Loading States**: Beautiful loading spinners
- **Error Boundaries**: Graceful error handling with user-friendly messages
- **Service Worker**: Offline support and caching
- **Lazy Loading**: Image optimization for better performance
- **Enhanced SEO**: Open Graph, Twitter Cards, structured data
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router, React Icons
- **Styling**: CSS3 with custom properties and animations
- **Performance**: Web Vitals monitoring, lazy loading
- **Analytics**: Custom analytics utility
- **PWA**: Service worker for offline support
- **Build Tool**: Create React App
- **Development**: ESLint, TypeScript support

## 📱 Pages

1. **Home/Landing Page** - Hero section, company overview, projects showcase
2. **About** - Company mission, vision, founder profile with CV modal
3. **Services** - Detailed service offerings with interactive modals
4. **Projects** - Portfolio with category filtering
5. **Careers** - Job opportunities and company culture
6. **Contact** - Contact information and functional contact form

## 🎨 Design System

### Colors
- **Primary Teal**: `#00bfae`
- **Primary Gold**: `#FFD700`
- **Dark**: `#181c23`
- **White**: `#fff`

### Typography
- **Font Family**: Inter, Sora, Space Grotesk
- **Weights**: 400, 600, 800, 900

### Components
- Responsive navigation with mobile menu
- Modal components for CV and services
- Contact form with validation and toast notifications
- Loading spinners and error boundaries
- Animated page transitions
- Toast notification system
- Cookie consent banner
- Scroll-to-top button

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/zemam-technologies.git
cd zemam-technologies
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run analyze` - Builds and serves the app for analysis
- `npm run lighthouse` - Runs Lighthouse performance audit

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ContactForm.jsx
│   ├── ErrorBoundary.jsx
│   ├── LoadingSpinner.jsx
│   ├── Toast.jsx
│   ├── ToastContext.jsx
│   ├── CookieConsent.jsx
│   └── ScrollToTop.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── Careers.jsx
│   ├── Contact.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   └── ZemamPage.jsx
├── utils/              # Utility functions
│   ├── analytics.js
│   └── lazyLoad.js
├── assets/             # Images and static files
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🌟 Key Features

### CV Modal
- Click on Samuel's section to view his CV
- A4 size modal with responsive design
- Available on both About page and landing page

### Service Modals
- Interactive service cards with detailed descriptions
- Click-to-position modal opening
- Responsive design for all screen sizes

### Contact Form
- Form validation with error handling
- Toast notifications for success/error states
- Analytics tracking
- Responsive design

### Mobile Menu
- Hamburger menu for mobile devices
- Smooth slide-out animation
- Company logo in mobile menu

### Toast Notifications
- Success, error, warning, and info messages
- Auto-dismiss with configurable duration
- Multiple toasts support
- Responsive design

### Cookie Consent
- GDPR-compliant cookie consent banner
- Persistent storage of user choice
- Responsive design
- Smooth animations

### Scroll to Top
- Appears when scrolling down
- Smooth scroll animation
- Responsive design
- Hover effects

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **Service Worker**: Offline support and caching
- **Lazy Loading**: Optimized image loading

## 🔧 Customization

### Adding New Services
1. Update `services` array in `src/pages/Services.jsx`
2. Add service details and descriptions
3. Icons are from React Icons (FontAwesome)

### Adding New Projects
1. Update `projects` array in `src/pages/Projects.jsx`
2. Add project images, descriptions, and categories
3. Update category filters if needed

### Styling Changes
- Main styles in `src/App.css`
- Page-specific styles in respective CSS files
- CSS custom properties for easy theming

### Toast Notifications
```javascript
import { useToast } from './components/ToastContext';

const { showSuccess, showError, showWarning, showInfo } = useToast();

// Usage
showSuccess('Operation completed successfully!');
showError('Something went wrong');
showWarning('Please check your input');
showInfo('Here is some information');
```

## 📈 Analytics

The website includes analytics tracking for:
- Page views
- CV downloads/views
- Service modal interactions
- Contact form submissions
- Project views
- Error occurrences

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy automatically on push

### Environment Variables
Create a `.env` file with:
```
REACT_APP_CONTACT_EMAIL=your-email@example.com
REACT_APP_CONTACT_PHONE=your-phone-number
REACT_APP_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 🔒 Security

- HTTPS enforcement
- Content Security Policy
- XSS protection
- Secure headers
- Input validation

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Focus management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: lemengetnetsami@gmail.com
- **Phone**: +251-933831252
- **Location**: Addis Ababa, Ethiopia

---

**Built with ❤️ by Zemam Technologies**
