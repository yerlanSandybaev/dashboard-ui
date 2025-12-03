# Portfolio Dashboard UI 🚀

A modern, responsive portfolio dashboard built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful blue color scheme and showcases your projects, skills, and achievements in an elegant interface.

![Portfolio Dashboard](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

- **📊 Dashboard Overview** - Track projects, skills, GitHub stars, and profile views
- **💼 Project Management** - Display recent projects with progress tracking
- **🎯 Skills Visualization** - Beautiful progress bars showing skill proficiency
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI** - Blue gradient theme with glass-morphism effects
- **⚡ Fast Performance** - Built on Next.js 15 with App Router
- **🌙 Smooth Animations** - Hover effects and transitions throughout

## 🎨 Design Highlights

- **Color Scheme**: Blue, cyan, and slate gradient palette
- **Components**: Modular and reusable React components
- **Icons**: Heroicons for consistent iconography
- **Typography**: Clean, modern font hierarchy
- **Layout**: Responsive grid system with mobile-first approach

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dashboard-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

  -> https://dashboard-ui-pied-five.vercel.app/#projects




1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

## 📁 Project Structure

```
dashboard-ui/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── Header.tsx          # Top header with search
│   ├── StatsCards.tsx      # Statistics cards
│   ├── ProjectsSection.tsx # Projects list
│   ├── SkillsChart.tsx     # Skills progress bars
│   └── ActivityFeed.tsx    # Recent activity feed
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🎯 Customization

### Update Personal Information

Edit `components/Sidebar.tsx`:
```typescript
<div className="w-10 h-10 rounded-full ...">
  YOUR_INITIALS
</div>
<p className="text-sm font-medium text-white truncate">Your Name</p>
<p className="text-xs text-gray-400 truncate">your@email.com</p>
```

### Modify Projects

Edit `components/ProjectsSection.tsx` to add your own projects:
```typescript
const projects = [
  {
    id: 1,
    name: 'Your Project',
    status: 'Active',
    progress: 85,
    tech: ['Next.js', 'TypeScript'],
    // ... more fields
  },
];
```

### Update Skills

Edit `components/SkillsChart.tsx`:
```typescript
const skills = [
  { name: 'Your Skill', level: 90, color: 'from-blue-500 to-cyan-500' },
];
```

### Change Colors

Update Tailwind classes in components or modify `tailwind.config.ts` for global color changes.

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ and Next.js
