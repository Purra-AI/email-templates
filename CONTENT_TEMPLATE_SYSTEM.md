# Content & Template System

Complete guide to the Purra email content and template system.

## 🎯 Overview

The Purra email system separates **content** (translations, copy) from **presentation** (HTML templates) using a build process that compiles them into final email HTML files for each language.

### Key Features

- ✅ **Multi-language support**: 7 languages (en, he, hi, fr, zh, ja, de)
- ✅ **RTL support**: Automatic right-to-left layout for Hebrew
- ✅ **Content-first**: Write copy once, reuse across all languages
- ✅ **Dynamic variables**: Runtime placeholders like `{{ firstName }}`
- ✅ **Type-safe**: JSON schema validation for content
- ✅ **Automated build**: Single command compiles all templates
- ✅ **UTM tracking**: Automatic analytics tracking on all links

---

## 📁 Directory Structure

```
email-templates/
├── content/                    # JSON files with translations
│   ├── authentication/
│   │   ├── welcome-email.json
│   │   └── password-reset.json
│   ├── reports/
│   │   └── due-diligence-report-ready.json
│   └── ...
├── templates/                  # HTML template files
│   ├── authentication/
│   │   ├── welcome-email.html
│   │   └── password-reset.html
│   ├── reports/
│   │   └── due-diligence-report-ready.html
│   └── ...
├── compiled/                   # Generated files (gitignored)
│   ├── en/
│   │   ├── authentication/
│   │   │   ├── welcome-email.html
│   │   │   └── password-reset.html
│   │   └── reports/
│   │       └── due-diligence-report-ready.html
│   ├── he/                    # Hebrew (RTL)
│   ├── hi/                    # Hindi
│   ├── fr/                    # French
│   ├── zh/                    # Chinese
│   ├── ja/                    # Japanese
│   └── de/                    # German
├── builder/
│   ├── compile.js             # Main compiler script
│   └── templates/
│       └── base-layout.html   # Base HTML layout
└── package.json               # Build scripts
```

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Build All Templates

```bash
npm run build
```

This will:
- Read all content JSON files from `content/`
- Find matching templates in `templates/`
- Compile for all 7 languages
- Output to `compiled/{lang}/{category}/{email-name}.html`

### 3. Watch Mode (Development)

```bash
npm run build:watch
```

Automatically recompiles when you change content or templates.

---

## 📝 Creating a New Email Template

### Step 1: Create Content JSON

Create `content/{category}/{email-id}.json`:

```json
{
  "id": "trial-expiring-3d",
  "category": "billing",
  "campaignName": "trial_expiring_3d",
  "layout": "base",
  "dynamicFields": [
    "firstName",
    "trialEndDate",
    "upgradeUrl"
  ],
  "translations": {
    "en": {
      "subject": "Your Purra Trial Expires in 3 Days",
      "preheader": "Don't lose access to your vendor insights",
      "header": {
        "title": "Trial Ending Soon",
        "subtitle": "3 days remaining"
      },
      "body": {
        "greeting": "Hi {{ firstName }},",
        "intro": "Your Purra trial ends on {{ trialEndDate }}.",
        "features": [
          {
            "title": "Unlimited Vendor Research",
            "description": "Continue accessing comprehensive due diligence reports"
          }
        ]
      },
      "cta": {
        "primary": {
          "text": "Upgrade Now",
          "url": "{{ upgradeUrl }}"
        }
      }
    },
    "he": {
      "subject": "תקופת הניסיון של Purra מסתיימת בעוד 3 ימים",
      "preheader": "אל תאבדו גישה לתובנות הספקים שלכם",
      "header": {
        "title": "תקופת הניסיון מסתיימת בקרוב",
        "subtitle": "נותרו 3 ימים"
      },
      "body": {
        "greeting": "שלום {{ firstName }},",
        "intro": "תקופת הניסיון של Purra שלכם מסתיימת ב-{{ trialEndDate }}.",
        "features": [
          {
            "title": "מחקר ספקים ללא הגבלה",
            "description": "המשיכו לגשת לדוחות בדיקת נאותות מקיפים"
          }
        ]
      },
      "cta": {
        "primary": {
          "text": "שדרגו עכשיו",
          "url": "{{ upgradeUrl }}"
        }
      }
    }
    // Add other languages: hi, fr, zh, ja, de
  }
}
```

### Step 2: Create Template HTML

Create `templates/{category}/{email-id}.html`:

```html
<!-- Header Section -->
<tr>
  <td class="header">
    <img src="https://purra.ai/Logo_1.png" alt="Purra Logo" class="header-logo" width="150" />
    <h1 class="header-title" data-i18n="header.title"></h1>
    <p class="header-subtitle" data-i18n="header.subtitle"></p>
  </td>
</tr>

<!-- Body Content -->
<tr>
  <td class="content">
    <!-- Greeting -->
    <p class="greeting" data-i18n="body.greeting"></p>

    <!-- Intro Text -->
    <p class="body-text" data-i18n="body.intro"></p>

    <!-- Feature Card -->
    <div class="info-card">
      <h3 class="info-card-title" data-i18n="body.features[0].title"></h3>
      <p class="info-card-text" data-i18n="body.features[0].description"></p>
    </div>

    <!-- Primary CTA Button -->
    <div class="btn-container">
      <a href="{{ cta.primary.url }}?utm_source=email&utm_medium=email&utm_campaign={{ campaignName }}"
         class="btn-electric"
         data-i18n="cta.primary.text"></a>
    </div>

    <!-- Footer Message -->
    <p class="body-text">
      Best regards,<br>
      <strong>The Purra Team</strong>
    </p>
  </td>
</tr>
```

### Step 3: Build

```bash
npm run build
```

Your compiled emails will be in `compiled/{lang}/{category}/{email-id}.html` for all 7 languages!

---

## 🎨 Template Components

### Available CSS Classes

#### Buttons
- `.btn-electric` - Primary electric blue gradient button
- `.btn-secondary` - Secondary outline button

#### Cards
- `.info-card` - Glassmorphism-style info card
- `.info-card-title` - Card title (16px, bold)
- `.info-card-text` - Card body text

#### Lists
- `.features-list` - Checkmark list (✓)

#### Stats
```html
<table class="stats-container">
  <tr>
    <td class="stat-item">
      <span class="stat-value">{{ value }}</span>
      <span class="stat-label">Label</span>
    </td>
  </tr>
</table>
```

#### Dividers
- `.divider` - Electric blue gradient divider

---

## 🔤 Translation Keys (data-i18n)

Use `data-i18n` attributes to mark translatable content:

```html
<h1 data-i18n="header.title"></h1>
<!-- Becomes: <h1>Welcome to Purra</h1> in English -->
<!-- Becomes: <h1>ברוכים הבאים ל-Purra</h1> in Hebrew -->
```

### Dot Notation
Access nested JSON with dots:

```json
{
  "body": {
    "greeting": "Hi {{ firstName }},"
  }
}
```

```html
<p data-i18n="body.greeting"></p>
```

### Array Access
Use bracket notation:

```json
{
  "features": [
    { "title": "Feature 1" },
    { "title": "Feature 2" }
  ]
}
```

```html
<h3 data-i18n="features[0].title"></h3>
<h3 data-i18n="features[1].title"></h3>
```

---

## 🔧 Dynamic Variables

Use `{{ variableName }}` for runtime replacement:

### In Content JSON
```json
{
  "dynamicFields": ["firstName", "companyName", "dashboardUrl"],
  "translations": {
    "en": {
      "body": {
        "greeting": "Hi {{ firstName }},"
      }
    }
  }
}
```

### In Template HTML
```html
<a href="{{ dashboardUrl }}">Go to Dashboard</a>
```

### At Runtime (Backend)
```javascript
const template = compiledHtml;
const personalized = template
  .replace(/\{\{\s*firstName\s*\}\}/g, user.firstName)
  .replace(/\{\{\s*dashboardUrl\s*\}\}/g, `https://app.purra.ai/dashboard?userId=${user.id}`)
  .replace(/\{\{\s*unsubscribeUrl\s*\}\}/g, generateUnsubscribeUrl(user.email));

await sendEmail({
  to: user.email,
  subject: translations.en.subject,
  html: personalized
});
```

---

## 🌍 Multi-Language Support

### Supported Languages

| Code | Language | Font | RTL |
|------|----------|------|-----|
| `en` | English | Inter | No |
| `he` | Hebrew (עברית) | Inter + Noto Sans Hebrew | **Yes** |
| `hi` | Hindi (हिंदी) | Inter + Noto Sans Devanagari | No |
| `fr` | French | Inter | No |
| `zh` | Chinese (中文) | Inter + Noto Sans CJK SC | No |
| `ja` | Japanese (日本語) | Inter + Noto Sans CJK JP | No |
| `de` | German | Inter | No |

### RTL (Right-to-Left) Layout

Hebrew emails automatically get:
- `dir="rtl"` attribute
- `text-align: right` for content
- Reversed padding/margins (`padding-right` instead of `padding-left`)
- Proper font stack with Hebrew support

---

## 📊 Content JSON Schema

### Required Fields

```typescript
interface EmailContent {
  id: string;                    // Unique identifier (kebab-case)
  category: string;              // Category folder name
  campaignName: string;          // UTM campaign name (snake_case)
  layout: "base" | "simple";     // Layout type
  dynamicFields: string[];       // Runtime variables
  translations: {
    [lang: string]: {
      subject: string;           // Email subject line
      preheader: string;         // Preview text
      header: {
        title: string;
        subtitle: string;
      };
      body: {
        greeting: string;
        intro: string;
        [key: string]: any;      // Flexible structure
      };
      cta: {
        primary: {
          text: string;
          url: string;
        };
        secondary?: {
          text: string;
          url: string;
        };
      };
    };
  };
}
```

---

## 🔗 UTM Tracking

All links automatically include UTM parameters:

```html
<a href="{{ ctaUrl }}?utm_source=email&utm_medium=email&utm_campaign={{ campaignName }}">
```

### Campaign Naming Convention

Use `snake_case`:
- `welcome_email`
- `trial_expiring_3d`
- `report_ready_dd`
- `password_reset`

See [UTM_TRACKING_GUIDE.md](UTM_TRACKING_GUIDE.md) for details.

---

## 🧪 Testing

### Test Compilation

```bash
npm run build
```

### Verify Output

```bash
# Check English version
open compiled/en/authentication/welcome-email.html

# Check Hebrew (RTL) version
open compiled/he/authentication/welcome-email.html
```

### Email Client Testing

Test in:
- Gmail (web, iOS, Android)
- Outlook (desktop, web)
- Apple Mail (macOS, iOS)
- Yahoo Mail
- ProtonMail

Use [Litmus](https://litmus.com) or [Email on Acid](https://www.emailonacid.com) for automated testing.

---

## 🐛 Troubleshooting

### "Template not found" Error

**Problem**: `❌ Template not found: /templates/category/email-id.html`

**Solution**: Ensure template filename matches content JSON `id`:
- Content: `content/billing/trial-expired.json` → `id: "trial-expired"`
- Template: `templates/billing/trial-expired.html`

### Missing Translations

**Problem**: `⚠️  Translation not found for key: body.greeting`

**Solution**: Add the missing key to your content JSON:
```json
{
  "translations": {
    "en": {
      "body": {
        "greeting": "Hi {{ firstName }},"
      }
    }
  }
}
```

### Dynamic Variables Not Replacing

**Problem**: `{{ firstName }}` appears literally in email

**Solution**: Variables are **runtime placeholders**. Replace them in your backend:
```javascript
html = html.replace(/\{\{\s*firstName\s*\}\}/g, user.firstName);
```

### RTL Layout Issues

**Problem**: Hebrew text appears left-aligned

**Solution**: Hebrew is automatically set to RTL. Check:
1. Compiled file has `dir="rtl"` attribute
2. CSS uses `{{ startSide }}` and `{{ endSide }}` variables
3. Font includes Hebrew support

---

## 📚 Examples

### Example 1: Welcome Email

- **Content**: [content/authentication/welcome-email.json](content/authentication/welcome-email.json)
- **Template**: [templates/authentication/welcome-email.html](templates/authentication/welcome-email.html)
- **Compiled**: `compiled/en/authentication/welcome-email.html`

### Example 2: Password Reset

- **Content**: [content/authentication/password-reset.json](content/authentication/password-reset.json)
- **Template**: [templates/authentication/password-reset.html](templates/authentication/password-reset.html)
- **Compiled**: `compiled/he/authentication/password-reset.html` (RTL)

### Example 3: Report Ready

- **Content**: [content/reports/due-diligence-report-ready.json](content/reports/due-diligence-report-ready.json)
- **Template**: [templates/reports/due-diligence-report-ready.html](templates/reports/due-diligence-report-ready.html)
- **Compiled**: `compiled/zh/reports/due-diligence-report-ready.html`

---

## 🔄 Build Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    npm run build                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
            ┌────────────────┐
            │ builder/       │
            │ compile.js     │
            └────────┬───────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
   ┌─────────┐             ┌──────────┐
   │ Load    │             │ Load     │
   │ content │             │ template │
   │ JSON    │             │ HTML     │
   └────┬────┘             └────┬─────┘
        │                       │
        └───────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │ For each language:   │
         │ - Apply translations │
         │ - Replace i18n keys  │
         │ - Keep {{ vars }}    │
         │ - Wrap in layout     │
         │ - Set RTL if Hebrew  │
         └──────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │ Output to:           │
         │ compiled/{lang}/     │
         │   {category}/        │
         │   {email-id}.html    │
         └──────────────────────┘
```

---

## 🎯 Best Practices

### Content

1. **Keep it concise**: Email copy should be scannable
2. **Use active voice**: "Get started" not "Getting started"
3. **Clear CTAs**: One primary action per email
4. **Mobile-first**: Most emails are read on mobile

### Templates

1. **Semantic HTML**: Use proper heading hierarchy
2. **Inline critical CSS**: Email clients strip `<style>` tags
3. **Tables for layout**: Flexbox/Grid don't work in email
4. **Test everywhere**: Email clients are inconsistent

### Translations

1. **Context matters**: Provide translator notes for ambiguous text
2. **Keep variables**: Don't translate `{{ firstName }}`
3. **RTL testing**: Always preview Hebrew emails
4. **Character limits**: Some languages are 30% longer than English

---

## 📞 Support

For questions or issues:
- **GitHub**: [Purra-AI/email-templates](https://github.com/Purra-AI/email-templates)
- **Email**: info@purra.ai
- **Docs**: See `/docs/` folder

---

**Last Updated**: November 2024
**Version**: 1.0.0
**Maintained By**: Purra Engineering Team
