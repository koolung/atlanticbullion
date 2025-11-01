# Image Directory Structure

This directory contains all images for the Atlantic Bullion website.

## Directory Structure

```
public/images/
├── hero/           # Hero section background images
├── products/       # Product photos (gold, silver, platinum, etc.)
├── about/          # About section images
└── README.md       # This file
```

## Usage Guidelines

### File Formats
- **Recommended**: WebP, AVIF for best performance
- **Supported**: JPG, PNG, SVG, GIF

### Naming Convention
- Use lowercase letters and hyphens
- Be descriptive: `gold-coins-collection.webp`
- Include dimensions if multiple sizes: `hero-bg-1920x1080.jpg`

### Recommended Sizes

#### Hero Section
- Desktop: 1920x1080 or 2560x1440
- Mobile: 768x1024 (portrait orientation)

#### Product Images
- Square format: 400x400 or 800x800
- High resolution for zoom functionality

#### About Section
- Various sizes depending on layout needs
- Consider responsive breakpoints

## Next.js Image Optimization

All images in the `public/images/` folder can be referenced in components using:

```jsx
import Image from 'next/image'

<Image
  src="/images/products/gold-coin.jpg"
  alt="Gold coin description"
  width={400}
  height={400}
  priority // Use for above-the-fold images
/>
```

## Performance Tips

1. **Optimize images** before uploading (use tools like TinyPNG)
2. **Use appropriate dimensions** - don't upload massive files
3. **Add alt text** for accessibility
4. **Use `priority` prop** for important above-the-fold images
5. **Consider lazy loading** for images below the fold

## File Upload Instructions

1. Upload your images to the appropriate subdirectory
2. Use descriptive filenames
3. Update the components to reference your new images
4. Test responsive behavior on different screen sizes