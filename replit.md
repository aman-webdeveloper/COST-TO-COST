# Cost To Cost - Multi-Page E-Commerce Website

## Project Overview
A professional multi-page website for "Cost To Cost" - a technology products shop. Built with pure HTML, CSS, and JavaScript (no frameworks), featuring modern design, smooth animations, and full responsiveness.

## Project Structure
```
/
├── index.html           # Home page with hero, carousels, testimonials
├── about.html          # About Us page with AOS animations
├── products.html       # Products catalog with filtering
├── contact.html        # Contact form page
├── css/
│   └── styles.css      # Complete styling for all pages
├── js/
│   ├── main.js         # AOS initialization & navigation
│   ├── carousel.js     # Client/Partner/Testimonial carousels
│   ├── products.js     # Product catalog & WhatsApp integration
│   └── contact.js      # Contact form handling
└── images/             # Stock images for hero, clients, testimonials
```

## Features Implemented

### Home Page (index.html)
- ✅ Two-column hero section with image and CTA
- ✅ Client carousel with 6 logos (auto-sliding)
- ✅ Partner carousel with 6 logos (auto-sliding)
- ✅ Testimonials section with 12 reviews in 4-per-row carousel
- ✅ Star ratings for each testimonial
- ✅ Consistent navbar and footer

### About Us Page (about.html)
- ✅ 4 informative sections about the company
- ✅ AOS (Animate On Scroll) animations on all sections
- ✅ Alternating left/right layout for visual variety
- ✅ Consistent navbar and footer

### Products Page (products.html)
- ✅ 6 product categories: Laptop, Printer, Memory, Networking, Desktop, Storage
- ✅ 20 products per category (120 total products)
- ✅ Category filter tabs (All Products + individual categories)
- ✅ Each product displays: icon, name, description, price
- ✅ "Shop on WhatsApp" button on every product
- ✅ WhatsApp integration with pre-filled product name and price
- ✅ Responsive grid layout

### Contact Us Page (contact.html)
- ✅ Contact form with Name, Email, Phone, Message fields
- ✅ Form validation (all fields required)
- ✅ Submit triggers mailto: with form data
- ✅ Contact information sidebar
- ✅ AOS animations
- ✅ Consistent navbar and footer

## Technical Implementation

### Libraries Used (CDN)
- **AOS (Animate On Scroll)**: v2.3.1 - Scroll animations
- **Font Awesome**: v6.4.0 - Icons
- **Google Fonts**: Poppins - Typography

### Responsive Design
- Desktop: Full multi-column layouts
- Tablet: Adapted 2-column layouts
- Mobile: Single-column stacked layouts
- Hamburger menu for mobile navigation

### Animations & Effects
- AOS scroll animations on About and Contact pages
- Hover effects on buttons and product cards
- Auto-sliding carousels for clients and partners
- Manual navigation for testimonials carousel
- Smooth transitions throughout

### WhatsApp Integration
- Phone number: +1 (555) 123-4567
- Pre-filled message format:
  ```
  Hi! I'm interested in purchasing:
  
  *Product:* [Product Name]
  *Price:* [Price]
  
  Please provide more details.
  ```

## Product Catalog Summary
- **Laptops**: 20 products (Dell, HP, Lenovo, ASUS, etc.)
- **Printers**: 20 products (HP, Canon, Epson, Brother, etc.)
- **Memory**: 20 products (Corsair, G.Skill, Kingston, etc.)
- **Networking**: 20 products (TP-Link, Netgear, ASUS, etc.)
- **Desktops**: 20 products (Dell, HP, Apple, Lenovo, etc.)
- **Storage**: 20 products (Samsung, WD, Crucial, Seagate, etc.)

**Total Products**: 120

## Running the Project
The website is served using Python's built-in HTTP server:
```bash
python3 -m http.server 5000
```
Access at: http://localhost:5000

## Design Philosophy
- Clean, modern, professional aesthetic
- Gradient hero sections for visual impact
- Consistent color scheme (blue/purple primary colors)
- White space for readability
- Mobile-first responsive design
- Accessibility considerations

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive down to 320px width

## Recent Changes
- 2025-10-18: Initial project creation with all 4 pages
- Complete product catalog with 120 items
- Full responsive design implementation
- WhatsApp integration for all products
- **Enhanced Home Page (Latest Update)**:
  - Hero section with AOS fade animations (fade-right for content, fade-left for image)
  - Modern button design with arrow icon and smooth hover effects
  - Automatic carousel animations for clients and partners using CSS keyframes
  - Grayscale to color hover effects on client/partner logos
  - Enhanced testimonial cards with quotation marks, borders, and advanced hover animations
  - Section subtitles added to all sections for better context
  - Improved overall aesthetics with modern, attractive design
