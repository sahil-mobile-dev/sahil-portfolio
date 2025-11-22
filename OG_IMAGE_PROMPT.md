# Open Graph Image Generation Prompt

## Image Specifications
- **Dimensions:** 1200 x 630 pixels (Open Graph standard)
- **Format:** JPEG or PNG
- **Aspect Ratio:** 1.91:1
- **File Size:** < 8MB (recommended < 300KB for performance)

## Design Description

Create a professional, modern Open Graph image for a Flutter developer portfolio with the following elements:

### Visual Composition
1. **Background:**
   - Sleek gradient background transitioning from deep blue (#1e40af) to vibrant cyan (#06b6d4)
   - Subtle geometric patterns or abstract shapes suggesting mobile app interfaces
   - Modern tech aesthetic with glassmorphism or subtle grid overlays

2. **Main Text:**
   - **Primary Heading:** "Sahil Chudasama" 
     - Large, bold, professional sans-serif font (e.g., Inter, Roboto)
     - White or light-colored text for contrast
     - Position: Upper-center or left-center
   
   - **Subheading:** "Flutter Developer & Mobile App Engineer"
     - Medium-sized, clean font
     - Slightly muted color (light gray or cyan)
     - Position: Below name

3. **Visual Elements:**
   - Flutter logo or icon (tastefully integrated, not overwhelming)
   - Mobile device mockup silhouettes showing app interfaces
   - Abstract code snippets or curly braces in background (subtle, semi-transparent)
   - Iconography representing: Firebase, Dart, mobile devices, API connections

4. **Accent Elements:**
   - Small badge or label with "Portfolio" or "Available for Work"
   - Decorative lines, dots, or connectivity nodes suggesting technology/networking
   - Subtle shadow effects and depth for modern 3D feel

5. **Color Palette:**
   - Primary: Blue (#2563eb)
   - Accent: Cyan/Teal (#06b6d4)
   - Highlights: Purple (#7c3aed) or Orange (#f97316)
   - Text: White (#ffffff) and Light Gray (#e5e7eb)
   - Background: Dark gradient or deep blue/navy

### Style Guidelines
- **Professional yet creative** - balance between corporate and designer aesthetics
- **Modern and clean** - avoid clutter, embrace negative space
- **Tech-forward** - incorporate subtle tech elements (circuits, code, devices)
- **High contrast** - ensure text is easily readable at any size
- **Brand consistent** - align with portfolio website's color scheme

### Mood & Tone
- Innovative and forward-thinking
- Professional and trustworthy
- Creative and visually striking
- Tech-savvy and modern
- Approachable and friendly

### Technical Requirements
- Ensure text remains readable even when scaled to thumbnail size (500px width)
- Avoid important content in the outer 10% of the image (may be cropped on some platforms)
- Test visibility on both light and dark backgrounds
- Optimize for social media preview (Facebook, LinkedIn, Twitter, WhatsApp)

## Usage Notes
After generation:
1. Save as `/public/images/og-image.jpg`
2. Also create Twitter-specific version at 2:1 ratio (1200x600) as `/public/images/twitter-card.jpg`
3. Test preview using:
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
