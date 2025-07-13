# EJEGIS Website

A modern, responsive website built with Next.js, React, and Tailwind CSS. This project serves as the official website for EJEGIS, featuring a clean, professional design with smooth animations and interactive components.

## Features

- 🚀 Built with Next.js 15 (App Router)
- 🎨 Styled with Tailwind CSS
- ✨ Modern UI components using Radix UI/Shadcn UI
- 🌓 Dark/light mode support
- 📱 Fully responsive design
- ⚡ Optimized for performance

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm (pnpm recommended)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ejegis-website.git
   cd ejegis-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `dev` - Start the development server
- `build` - Build the application for production
- `start` - Start the production server
- `lint` - Run ESLint

## Project Structure

```
src/
  app/               # App Router
    components/      # Reusable components
    lib/            # Utility functions and configs
    styles/         # Global styles and Tailwind config
  public/           # Static assets
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible UI components
- [Formspree](https://formspree.io/) - Form handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

