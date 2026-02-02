# Apple Care - Mobile Repair Service

A modern, responsive web application for Apple Care mobile repair services built with Next.js 16, React 19, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Service Booking**: Dedicated booking page with secure form validation
- **Service Gallery**: Comprehensive display of repair services offered
- **Security Enhanced**: Input sanitization and XSS protection
- **Admin Dashboard**: Basic admin interface for service management

## Pages

- **Home** (`/`): Landing page with hero section, services overview, and testimonials
- **Services** (`/services`): Detailed service listings and pricing
- **Book Now** (`/book`): Secure booking form for appointments
- **About** (`/about`): Company information and team details
- **Admin** (`/admin`): Administrative dashboard and login

## Security Features

- Input sanitization to prevent XSS attacks
- Enhanced form validation with proper regex patterns
- Date validation to prevent past date selection
- Phone number formatting and validation
- Email validation with robust regex
- HTML tag stripping from user inputs

## Tech Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Tailwind CSS animations

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/username/apple_care.git
   cd apple_care
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Security Updates

This project includes security fixes for:
- Next.js vulnerabilities (updated to 16.1.6)
- XSS prevention through input sanitization
- Form validation enhancements
- Date validation improvements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run security checks
5. Submit a pull request

## License

This project is private and proprietary.