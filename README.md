# Clickity Hero Section

A modern, responsive hero section component built with Next.js, React, TypeScript, and Tailwind CSS, replicating the design from the provided mockup.

## 🚀 Features

- **Pixel-perfect Design**: Closely matches the provided design mockup
- **Responsive Layout**: Works seamlessly across mobile, tablet, and desktop devices
- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Component Architecture**: Clean, reusable components with proper separation of concerns
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Testing**: Comprehensive test coverage with Jest and React Testing Library
- **shadcn/ui Integration**: Uses shadcn/ui components for consistent design system

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Package Manager**: npm

## 📦 Components

### Header
- Navigation with logo and menu items
- Authentication buttons (Login/Sign up)
- Responsive design with mobile-friendly navigation

### HeroSection
- Large, bold heading with call-to-action
- Subtitle with icon
- Primary action button
- Feature cards grid

### FeatureCards
- **Drop a Link**: Input field for video links
- **Create New Avatar**: Avatar creation with user selection
- **Use Template**: Template preview with user indicator
- **Use a Preset**: Preset configuration options
- **Connect Your Account**: Account connection interface

## 🎨 Design Specifications

The implementation closely follows the provided design with:
- **Colors**: Accurate color matching for backgrounds and text
- **Typography**: Proper font weights and sizes
- **Spacing**: Consistent padding and margins
- **Layout**: Grid-based responsive layout
- **Visual Hierarchy**: Clear information hierarchy with proper contrast

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── __tests__/
│   │   └── HeroSection.test.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   └── FeatureCards.tsx
└── lib/
    └── utils.ts
```

## 🎯 Key Implementation Details

### Responsive Design
- Mobile-first approach with Tailwind CSS breakpoints
- Grid layout that adapts from 1 column (mobile) to 3 columns (desktop)
- Flexible card heights and spacing

### Visual Fidelity
- Exact color matching using Tailwind's color palette
- Proper icon sizing and positioning
- Consistent border radius and shadows
- Accurate typography scaling

### Code Quality
- TypeScript for type safety
- Clean component architecture
- Proper prop interfaces
- Comprehensive testing
- ESLint configuration for code quality

## 🔧 Customization

The components are built to be easily customizable:
- Colors can be adjusted in the Tailwind classes
- Spacing and sizing can be modified through utility classes
- Content can be easily updated by modifying the component props
- Icons can be swapped out using Lucide React

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested across various screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is for demonstration purposes.
