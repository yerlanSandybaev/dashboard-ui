# Customization Guide 🎨

This guide will help you personalize your portfolio dashboard with your own information, projects, and styling.

## 📝 Personal Information

### Update Your Profile
**File**: `components/Sidebar.tsx` (lines 62-68)

```typescript
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
  YI  {/* Change to your initials */}
</div>
<div className="flex-1 min-w-0">
  <p className="text-sm font-medium text-white truncate">Your Name</p>
  <p className="text-xs text-gray-400 truncate">your.email@example.com</p>
</div>
```

### Update Page Title & Description
**File**: `app/layout.tsx` (lines 17-20)

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio Dashboard",
  description: "A portfolio dashboard showcasing my projects and skills",
};
```

## 💼 Adding Your Projects

**File**: `components/ProjectsSection.tsx` (lines 5-42)

Replace the example projects with your own:

```typescript
const projects = [
  {
    id: 1,
    name: 'Your Project Name',           // Project title
    status: 'Active',                     // Active | In Progress | Completed
    progress: 85,                         // 0-100
    tech: ['React', 'Node.js', 'AWS'],   // Tech stack array
    lastUpdate: '2 hours ago',           // Last update time
    stats: { 
      views: '2.3K',                      // View count
      stars: 45                           // Star count
    },
  },
  // Add more projects...
];
```

### Project Status Colors
- `Completed` → Green badge
- `Active` → Blue badge
- `In Progress` → Yellow badge

## 🎯 Updating Your Skills

**File**: `components/SkillsChart.tsx` (lines 3-9)

Add your skills with proficiency levels:

```typescript
const skills = [
  { 
    name: 'React/Next.js',              // Skill name
    level: 90,                          // 0-100 proficiency
    color: 'from-blue-500 to-cyan-500' // Gradient colors
  },
  { 
    name: 'Python', 
    level: 85, 
    color: 'from-cyan-500 to-sky-500' 
  },
  // Add more skills...
];
```

### Available Color Gradients
```typescript
'from-blue-500 to-cyan-500'      // Blue to Cyan
'from-cyan-500 to-sky-500'       // Cyan to Sky
'from-sky-500 to-blue-500'       // Sky to Blue
'from-blue-600 to-indigo-500'    // Blue to Indigo
'from-indigo-500 to-blue-600'    // Indigo to Blue
'from-purple-500 to-blue-500'    // Purple to Blue
```

## 📊 Customizing Statistics

**File**: `components/StatsCards.tsx` (lines 5-32)

Update your stats:

```typescript
const stats = [
  {
    name: 'Total Projects',        // Stat name
    value: '24',                   // Stat value
    change: '+12%',                // Change indicator
    icon: BriefcaseIcon,           // Icon component
    color: 'from-blue-500 to-blue-600',  // Gradient
  },
  // Add more stats...
];
```

### Available Icons
Import from `@heroicons/react/24/outline`:
- `BriefcaseIcon` - Projects
- `CodeBracketIcon` - Code/Skills
- `StarIcon` - Stars/Favorites
- `EyeIcon` - Views
- `UserGroupIcon` - Followers
- `ChartBarIcon` - Analytics
- `TrophyIcon` - Achievements

## 📰 Activity Feed Updates

**File**: `components/ActivityFeed.tsx` (lines 3-29)

Add your recent activities:

```typescript
const activities = [
  {
    id: 1,
    type: 'project',               // Activity type
    message: 'Your activity description',
    time: '2 hours ago',
    icon: '🚀',                     // Emoji icon
  },
  // Add more activities...
];
```

### Activity Emojis
- `🚀` - Deployments/Launches
- `🎓` - Learning/Courses
- `⭐` - Achievements
- `💡` - New Projects
- `🎨` - Design Updates
- `🐛` - Bug Fixes
- `✨` - New Features
- `📝` - Documentation

## 🎨 Changing Colors

### Option 1: Component Level
Update Tailwind classes in each component:

```typescript
// Blue gradient
className="bg-gradient-to-r from-blue-600 to-cyan-600"

// Purple gradient
className="bg-gradient-to-r from-purple-600 to-pink-600"

// Green gradient
className="bg-gradient-to-r from-green-600 to-emerald-600"
```

### Option 2: Global Theme
**File**: `tailwind.config.ts`

Add custom colors:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
};
```

### Option 3: CSS Variables
**File**: `app/globals.css`

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #06b6d4;
  --background: #0f172a;
}
```

## 🔗 Updating Navigation Links

**File**: `components/Sidebar.tsx` (lines 11-18)

Customize menu items:

```typescript
const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, href: '/' },
  { name: 'Projects', icon: BriefcaseIcon, href: '/projects' },
  { name: 'Blog', icon: DocumentTextIcon, href: '/blog' },
  // Add your own menu items...
];
```

## 🖼️ Adding a Profile Picture

Replace the initials with an image:

**File**: `components/Sidebar.tsx`

```typescript
// Replace this:
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
  JP
</div>

// With this:
<Image
  src="/profile.jpg"  // Add your image to /public folder
  alt="Profile"
  width={40}
  height={40}
  className="rounded-full"
/>
```

## 📱 Social Media Links

Add social links to your sidebar:

**File**: `components/Sidebar.tsx`

```typescript
<div className="flex gap-4 px-6 py-4">
  <a href="https://github.com/yourusername" className="text-gray-400 hover:text-blue-400">
    <GitHubIcon className="w-5 h-5" />
  </a>
  <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-blue-400">
    <LinkedInIcon className="w-5 h-5" />
  </a>
  <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-blue-400">
    <TwitterIcon className="w-5 h-5" />
  </a>
</div>
```

## 🌐 Adding Real Data

### Connect to GitHub API

Create a new file: `lib/github.ts`

```typescript
export async function getGitHubStats(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  
  return {
    repos: data.public_repos,
    followers: data.followers,
    stars: data.public_gists, // or calculate from repos
  };
}
```

Use in your component:

```typescript
'use client';
import { useEffect, useState } from 'react';
import { getGitHubStats } from '@/lib/github';

export default function StatsCards() {
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    getGitHubStats('yourusername').then(setStats);
  }, []);
  
  // Use stats in your component...
}
```

## 🎭 Animation Customization

### Hover Effects
```typescript
// Slow hover
className="transition-all duration-500"

// Fast hover
className="transition-all duration-150"

// Scale on hover
className="hover:scale-105 transition-transform"

// Lift on hover
className="hover:-translate-y-1 hover:shadow-xl transition-all"
```

## 💾 Save Your Changes

After customizing, test locally:

```bash
npm run dev
```

Then commit and push:

```bash
git add .
git commit -m "Customize portfolio with personal information"
git push
```

## 🎨 Design Tips

1. **Keep it consistent** - Use the same color palette throughout
2. **Don't overload** - Show your best 4-6 projects
3. **Update regularly** - Keep your activity feed fresh
4. **Be accurate** - Set realistic skill levels
5. **Add personality** - Use emojis and personal touches

## 📚 Resources

- [Heroicons](https://heroicons.com/) - Icon library
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) - Color palette
- [Coolors](https://coolors.co/) - Color scheme generator
- [GitHub API](https://docs.github.com/en/rest) - Fetch real data

---

Need help? Check the main README or open an issue!

**Happy Customizing! 🎉**
