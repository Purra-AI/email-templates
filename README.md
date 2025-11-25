# Purra Email Templates

Professional email templates following Purra's design language with electric blue gradients, modern typography, and futuristic styling.

## 🎨 Design System

### Colors
- **Primary Gradient**: `linear-gradient(135deg, #0d1e4c 0%, #113391 50%, #1e40af 100%)`
- **Electric Blue**: `#0d9cdb`
- **Text Colors**:
  - Primary: `#1f1f1f`
  - Secondary: `#4a4a4a`
  - Muted: `#6b7280`

### Typography
- **Font Family**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`
- **Font Sizes**:
  - Header Title: `28px` (mobile: `24px`)
  - Greeting: `18px`
  - Body Text: `16px`
  - Footer: `13px`

### Components
- **Electric Button**: Gradient background with shadow glow effects
- **Info Cards**: Glassmorphism-style cards with subtle gradients
- **Feature Lists**: Checkmark bullets with electric blue accents
- **Dividers**: Gradient dividers with electric blue glow
- **Badges**: Status badges with semantic colors

## 📁 Available Templates

### 1. `purra-modern-template.html`
**Base template** with placeholders for all common email components.

**Variables to replace:**
```
{{ emailTitle }}          - Email subject/title
{{ headerTitle }}         - Main header text
{{ headerSubtitle }}      - Header subtitle
{{ userName }}            - Recipient's name
{{ mainContent }}         - Main email body
{{ ctaUrl }}             - Call-to-action button URL
{{ ctaText }}            - Call-to-action button text
{{ additionalContent }}   - Additional paragraphs
{{ unsubscribeUrl }}     - Unsubscribe link URL
{{ campaignName }}        - Campaign name for UTM tracking (e.g., welcome_email, newsletter_jan2024)
```

**Optional sections** (uncomment to use):
- Info Card
- Features List
- Stats/Metrics
- Badges

### 2. `welcome-email-example.html`
**Welcome email** demonstrating the template in action with real content.

**Use case:** New user onboarding

## 🚀 Usage

### Method 1: Direct Variable Replacement
```javascript
const template = fs.readFileSync('purra-modern-template.html', 'utf8');
const emailHtml = template
  .replace(/{{ userName }}/g, 'John Doe')
  .replace(/{{ headerTitle }}/g, 'Welcome to Purra')
  .replace(/{{ mainContent }}/g, 'Your account has been created...');
```

### Method 2: Template Engine (Handlebars)
```javascript
const Handlebars = require('handlebars');
const template = Handlebars.compile(templateSource);
const emailHtml = template({
  userName: 'John Doe',
  headerTitle: 'Welcome to Purra',
  mainContent: 'Your account has been created...'
});
```

### Method 3: EJS (Node.js)
```javascript
const ejs = require('ejs');
const emailHtml = ejs.render(templateSource, {
  userName: 'John Doe',
  headerTitle: 'Welcome to Purra',
  mainContent: 'Your account has been created...'
});
```

## 📧 Email Types & Recommended Content

### Welcome Email
- **Header**: "Welcome to Purra!"
- **Include**: Features list, Getting started card, Dashboard CTA
- **Tone**: Warm, enthusiastic

### Report Ready Notification
- **Header**: "Your Report is Ready"
- **Include**: Stats/metrics, Download CTA, Info card
- **Tone**: Professional, informative

### Subscription Update
- **Header**: "Your Plan Has Been Updated"
- **Include**: Plan details card, Features list, Support CTA
- **Tone**: Clear, reassuring

### Due Diligence Complete
- **Header**: "Vendor Research Complete"
- **Include**: Risk rating badge, Key findings, View report CTA
- **Tone**: Professional, data-driven

### Market Analysis Ready
- **Header**: "Market Analysis Complete"
- **Include**: Stats (trade volume, suppliers, price trends), View report CTA
- **Tone**: Analytical, professional

## 🎯 Component Examples

### Using Info Card
```html
<div class="info-card">
  <h3 class="info-card-title">
    💡 Pro Tip
  </h3>
  <p class="info-card-text">
    Run your first due diligence report within the next 24 hours to get 10% off!
  </p>
</div>
```

### Using Features List
```html
<ul class="features-list">
  <li><strong>Feature Name:</strong> Description of the feature</li>
  <li><strong>Another Feature:</strong> More details here</li>
  <li><strong>Third Feature:</strong> Additional information</li>
</ul>
```

### Using Stats/Metrics
```html
<table class="stats-container" border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td class="stat-item">
      <span class="stat-value">250+</span>
      <span class="stat-label">Suppliers</span>
    </td>
    <td class="stat-item">
      <span class="stat-value">$2.5M</span>
      <span class="stat-label">Trade Volume</span>
    </td>
    <td class="stat-item">
      <span class="stat-value">15</span>
      <span class="stat-label">Countries</span>
    </td>
  </tr>
</table>
```

### Using Badges
```html
<span class="badge badge-success">Completed</span>
<span class="badge badge-warning">Processing</span>
<span class="badge badge-info">New Report</span>
```

## 📱 Responsive Design

All templates are **fully responsive** and optimized for:
- Desktop (600px container)
- Tablet (auto-scaling)
- Mobile (full width, adjusted padding and font sizes)

### Mobile Optimizations
- Reduced padding: `30px 20px`
- Smaller header: `24px`
- Stacked stats instead of side-by-side
- Touch-friendly button sizing

## ✅ Email Client Compatibility

Tested and optimized for:
- ✅ Gmail (Web, iOS, Android)
- ✅ Apple Mail (macOS, iOS)
- ✅ Outlook (2016+, Office 365, Web)
- ✅ Yahoo Mail
- ✅ Thunderbird
- ✅ Samsung Mail

### Compatibility Features
- Inline CSS (no external stylesheets)
- Table-based layout for old clients
- MSO-specific styles for Outlook
- Web-safe fonts with fallbacks
- Retina-ready images

## 🔧 Customization

### Changing Colors
Update the gradient in the header section:
```css
.header {
  background: linear-gradient(135deg, #0d1e4c 0%, #113391 50%, #1e40af 100%);
}
```

### Changing Fonts
Update the font-family in body styles:
```css
body {
  font-family: 'YourFont', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Adding New Components
Follow the BEM-style naming convention:
- `.component-name` for blocks
- `.component-name__element` for elements
- `.component-name--modifier` for modifiers

## 📝 Best Practices

1. **Subject Lines**: Keep under 50 characters
2. **Preview Text**: Add compelling preview text (first 80-100 chars)
3. **Images**: Always include alt text and use CDN URLs
4. **Links**: Use absolute URLs, not relative
5. **CTA Buttons**: One primary CTA per email
6. **Testing**: Test across multiple email clients before sending
7. **Personalization**: Use recipient's name in greeting
8. **Unsubscribe**: Always include unsubscribe link

## 🐛 Troubleshooting

### Images Not Showing
- Ensure images are hosted on a CDN (S3, Cloudinary, etc.)
- Use absolute URLs starting with `https://`
- Add `alt` text for accessibility

### Layout Broken in Outlook
- Check that all tables have `border="0" cellpadding="0" cellspacing="0"`
- Use `mso-table-lspace: 0pt; mso-table-rspace: 0pt;` styles
- Avoid CSS Grid or Flexbox (not supported)

### Gmail Clips Email
- Keep total email size under 102KB
- Minimize inline CSS where possible
- Use external CSS where Gmail supports it

## 📞 Support

For questions or issues with email templates:
- **Email**: info@purra.ai
- **Phone**: +972-535221224
- **Address**: Beit HaMilenium, Hatidhar 2, Raanana, 4366504, Israel
- **Documentation**: https://docs.purra.ai

## 📄 License

© 2024 Purra. All rights reserved.
