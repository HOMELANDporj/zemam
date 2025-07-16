# Zemam Technologies - Official Website

A modern, responsive website for Zemam Technologies, showcasing our expertise in software development, AI, and digital transformation.

## 🚀 Features

- **Modern Design**: Clean, professional design with gold and teal color scheme
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: 
  - CV modal for Samuel Getnet
  - Service modals with detailed descriptions
  - Project showcase with filtering
  - Functional contact form
- **Performance Optimized**: Fast loading with optimized images and code
- **SEO Friendly**: Proper meta tags and structured data
- **PWA Ready**: Progressive Web App capabilities
- **Analytics**: User interaction tracking
- **Error Handling**: Graceful error boundaries

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router, React Icons
- **Styling**: CSS3 with custom properties and animations
- **Performance**: Web Vitals monitoring
- **Analytics**: Custom analytics utility
- **Build Tool**: Create React App

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
- Contact form with validation
- Loading spinners and error boundaries
- Animated page transitions

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

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ContactForm.jsx
│   ├── ErrorBoundary.jsx
│   └── LoadingSpinner.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── Careers.jsx
│   ├── Contact.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   └── ZemamPage.jsx
├── utils/              # Utility functions
│   └── analytics.js
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
- Success/error states
- Analytics tracking
- Responsive design

### Mobile Menu
- Hamburger menu for mobile devices
- Smooth slide-out animation
- Company logo in mobile menu

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

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

## 📈 Analytics

The website includes analytics tracking for:
- Page views
- CV downloads/views
- Service modal interactions
- Contact form submissions
- Project views

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
