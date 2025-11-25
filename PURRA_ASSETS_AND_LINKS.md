# Purra Assets & Links Reference

Complete reference for all logos, images, and official links used across Purra's platforms.

## 🖼️ Logo Assets

### Primary Logos
```
Main Logo (Email Templates):
https://purra.ai/Logo_1.png

Old S3 URLs (Deprecated):
https://purraasserts.s3.il-central-1.amazonaws.com/images/logo.png

Hero Image:
https://purraasserts.s3.il-central-1.amazonaws.com/images/Hero.jpg
```

### Local Assets (Web App)
```
Primary Logo (Full):
/lovable-uploads/af6216ad-d02c-4682-a54a-b700dc203605.png

Brand Icon (Small):
/src/assets/purra-brand-icon.png
/src/assets/purra-logo.png

Rating Icon (SVG):
/src/assets/images/purra_brand_icon_reating.svg
```

### Usage Recommendations
- **Email Headers**: Use S3 CDN logo for reliability
- **Web Headers**: Use lovable-uploads logo (served from web)
- **Small Icons**: Use brand icon assets
- **Email Width**: 150px for logo, 600px for hero image

## 🔗 Official Links

### Main Websites
```
Main Website:      https://purra.ai
Web Application:   https://app.purra.ai
Dashboard:         https://app.purra.ai/dashboard
```

### Company Pages
```
About Us:          https://purra.ai/about
Contact:           https://purra.ai/contact
Terms of Service:  https://purra.ai/terms
Privacy Policy:    https://purra.ai/privacy
Refund Policy:     https://purra.ai/refund-policy
```

### Platform Features (app.purra.ai)
```
Search:            /search
Price Index:       /price-index
AI Reports:        /reports
Monitoring:        /monitoring
Pricing:           /pricing
Profile:           /profile
```

### Documentation & Support
```
Documentation:     /docs
API Reference:     /api
Support:           /support
Status:            /status
```

## 📧 Contact Information

### Email
```
Primary:           info@purra.ai
```

### Phone
```
International:     +972-535221224
```

### Office Address
```
Beit HaMilenium
Hatidhar 2
Raanana, 4366504
Israel
```

## 🌐 Social Media

### Official Social Links
```
LinkedIn:          https://www.linkedin.com/company/purra/
Instagram:         https://www.instagram.com/purra.ai/
```

### Social Media Icons (S3 CDN)
```
LinkedIn Icon:     https://purraasserts.s3.il-central-1.amazonaws.com/images/linkedin.png
Instagram Icon:    https://purraasserts.s3.il-central-1.amazonaws.com/images/instagram.png
Facebook Icon:     https://purraasserts.s3.il-central-1.amazonaws.com/images/facebook.png
Pinterest Icon:    https://purraasserts.s3.il-central-1.amazonaws.com/images/pinterest.png
X/Twitter Icon:    https://purraasserts.s3.il-central-1.amazonaws.com/images/x.png
```

### Social Sharing URLs
```
Facebook Share:    https://www.facebook.com/sharer/sharer.php?u={URL}&quote={TEXT}
Twitter Share:     https://twitter.com/intent/tweet?text={TEXT}&url={URL}
LinkedIn Share:    https://www.linkedin.com/sharing/share-offsite/?url={URL}
```

## 🔌 Integration Assets

### Payment Partners
```
Paddle Logo:       /assets/images/paddle-logo.svg
Grow Logo:         /assets/images/grow-logo.png
```

### Placeholder Images
```
Profile Dummy:     /assets/images/dummy_profile.png
OG Image:          /og-image.png
SEO Image:         /seo-img.jpg
Placeholder:       /placeholder.svg
```

## 🎨 Email Template Variables

### Standard Email Variables
```html
{{ emailTitle }}           - Email subject/title
{{ headerTitle }}          - Main header text
{{ headerSubtitle }}       - Header subtitle text
{{ userName }}             - User's first name
{{ userEmail }}            - User's email address
{{ mainContent }}          - Main email body content
{{ additionalContent }}    - Additional paragraphs
{{ ctaUrl }}              - Call-to-action button URL
{{ ctaText }}             - Call-to-action button text
{{ unsubscribeUrl }}      - Unsubscribe link URL
```

### Asset Variables for Templates
```html
Logo URL:
https://purraasserts.s3.il-central-1.amazonaws.com/images/logo.png

Hero Image URL:
https://purraasserts.s3.il-central-1.amazonaws.com/images/Hero.jpg

LinkedIn Icon:
https://purraasserts.s3.il-central-1.amazonaws.com/images/linkedin.png

Instagram Icon:
https://purraasserts.s3.il-central-1.amazonaws.com/images/instagram.png
```

## 📱 App Deep Links

### User Actions
```
Login:             https://app.purra.ai/login
Signup:            https://app.purra.ai/signup
Forgot Password:   https://app.purra.ai/forgot-password
Unsubscribe:       https://app.purra.ai/unsubscribe
```

### Reports & Analytics
```
View Report:       https://app.purra.ai/vendor-research/report/{reportId}
Market Analysis:   https://app.purra.ai/market-analysis/report/{reportId}
Generate Report:   https://app.purra.ai/reports
```

### Account Management
```
Profile Settings:  https://app.purra.ai/profile
Subscription:      https://app.purra.ai/pricing
Invoices:          https://app.purra.ai/profile#invoices
Activity Feed:     https://app.purra.ai/activity-feed
```

## 🔐 OAuth & Authentication

### LinkedIn OAuth
```
Authorization:     https://www.linkedin.com/oauth/v2/authorization
Token Exchange:    https://www.linkedin.com/oauth/v2/accessToken
User Profile:      https://api.linkedin.com/v2/me
User Email:        https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))
Client ID:         78pfgd5ia0s1bn
Redirect URI:      https://app.purra.ai/auth/linkedin/callback
```

## 📊 Analytics & Tracking

### UTM Parameters (Recommended)
```
Email Campaign:    ?utm_source=email&utm_medium=email&utm_campaign={campaign_name}
Newsletter:        ?utm_source=newsletter&utm_medium=email&utm_campaign=weekly
Social:            ?utm_source=social&utm_medium={platform}&utm_campaign={campaign_name}
```

## 🎯 Email Template Examples

### Welcome Email
```
Header Title:      "Welcome to Purra!"
Header Subtitle:   "Your Supply Chain Intelligence Journey Begins"
CTA Text:          "Explore Your Dashboard"
CTA URL:           https://app.purra.ai/dashboard
```

### Report Ready
```
Header Title:      "Your Report is Ready"
Header Subtitle:   "Due Diligence Analysis Complete"
CTA Text:          "View Report"
CTA URL:           https://app.purra.ai/vendor-research/report/{reportId}
```

### Subscription Update
```
Header Title:      "Your Plan Has Been Updated"
Header Subtitle:   "Subscription Changes Confirmed"
CTA Text:          "Manage Subscription"
CTA URL:           https://app.purra.ai/profile#subscription
```

### Password Reset
```
Header Title:      "Reset Your Password"
Header Subtitle:   "We received a request to reset your password"
CTA Text:          "Reset Password"
CTA URL:           https://app.purra.ai/reset-password?token={resetToken}
```

## 🔧 Technical Notes

### S3 CDN Configuration
- **Region**: `il-central-1` (Israel Central)
- **Bucket**: `purraasserts`
- **Base URL**: `https://purraasserts.s3.il-central-1.amazonaws.com`
- **Path**: `/images/`

### Image Specifications
- **Logo**: PNG format, transparent background, 150px width recommended
- **Hero**: JPG format, 600px width for email, responsive
- **Social Icons**: PNG format, 32px × 32px for web, any size for email

### Email Client Compatibility
- All S3 assets are publicly accessible
- Use absolute URLs (not relative paths)
- Always include alt text for images
- Specify width/height attributes for email clients

## 📝 Best Practices

### Image Usage
1. Always use S3 CDN URLs for emails (not local paths)
2. Include `alt` attributes for accessibility
3. Specify width/height to prevent layout shifts
4. Use CDN URLs to ensure deliverability

### Link Usage
1. Use absolute URLs starting with `https://`
2. Add UTM parameters for tracking
3. Include unsubscribe links in all marketing emails
4. Test all links before sending

### Branding Consistency
1. Use official logo dimensions (150px width for email)
2. Maintain electric blue color scheme (#0d1e4c, #113391)
3. Use Inter font family when possible
4. Follow email template design system

## 🆕 New Asset Requests

To request new assets or report broken links:
- **Email**: info@purra.ai
- **Subject**: Asset Request - [Description]
- **Include**: Use case, dimensions needed, format preference

## 📄 Version History

- **v1.0** - Initial asset compilation (Nov 2024)
- Includes all logos, links, and social media references
- S3 bucket paths verified
- Social media links updated

---

**Last Updated**: November 2024
**Maintained By**: Purra Design Team
**Contact**: info@purra.ai
