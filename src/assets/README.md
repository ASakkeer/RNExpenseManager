# Assets Directory

This directory contains all static assets for the React Native Expense Manager app.

## Directory Structure

```
assets/                      # Root level assets (recommended for React Native)
├── images/
│   ├── onboarding/          # Onboarding screen images
│   │   ├── slide1.png
│   │   ├── slide2.png
│   │   └── slide3.png
│   ├── icons/               # App icons and small graphics
│   │   ├── home.png
│   │   ├── profile.png
│   │   └── sheets.png
│   └── backgrounds/         # Background images and patterns
│       └── pattern.png

src/assets/                  # Alternative location (may require Metro config)
└── images/
    └── onboarding/
        ├── slide1.png
        ├── slide2.png
        └── slide3.png
```

## Usage in Code

### Local Images (Recommended)
```javascript
// For local images in assets/ (root level)
const imageSource = require('../../../assets/images/onboarding/slide1.png');

<Image source={imageSource} style={styles.image} />
```

### Remote Images
```javascript
// For remote images (URLs)
const imageSource = { uri: 'https://example.com/image.png' };

<Image source={imageSource} style={styles.image} />
```

## Image Guidelines

- **Format**: Use PNG for images with transparency, JPG for photos
- **Size**: Optimize images for mobile (consider @2x and @3x for high-DPI screens)
- **Naming**: Use lowercase with underscores (e.g., `slide_1.png`)
- **Dimensions**: 
  - Onboarding images: 400x300px (2x: 800x600px, 3x: 1200x900px)
  - Icons: 24x24px (2x: 48x48px, 3x: 72x72px)

## Platform-Specific Assets

- **Android**: `android/app/src/main/assets/images/`
- **iOS**: `ios/RNExpenseManager/Images.xcassets/`

## Best Practices

1. Use local images for better performance and offline support
2. Optimize images before adding to the project
3. Use consistent naming conventions
4. Consider different screen densities (@2x, @3x)
5. Keep file sizes small for faster app loading
