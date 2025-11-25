# Email Templates - Directory Structure

Organized structure for all 66 Purra email templates across 7 languages.

## 📁 Root Directory Structure

```
Email templates/
├── authentication-security/            # Authentication & security templates
├── onboarding-user-journey/            # Onboarding & engagement
├── reports-analytics/                  # Reports & data templates
├── subscription-billing/               # Billing & subscription
├── engagement-marketing/               # Marketing & newsletters
├── notifications-alerts/               # Notifications & alerts
├── reengagement/                       # Re-engagement campaigns
├── admin-support/                      # Admin & support templates
├── assets/                             # Images, fonts, and resources
├── locales/                            # Translation files (7 languages)
├── base-templates/                     # Core reusable templates
├── examples/                           # Working examples
└── docs/                              # Documentation
```

---

## 1️⃣ Authentication & Security (7 templates)

```
authentication-security/
├── welcome-email.html                  # ✅ Exists (needs upgrade)
├── email-verification.html             # ❌ Missing
├── otp-verification.html               # 🔄 Legacy (redesign)
├── login-credentials.html              # 🔄 Legacy (redesign)
├── password-reset.html                 # 🔄 Legacy (redesign)
├── password-changed.html               # ❌ Missing
└── suspicious-login-alert.html         # ❌ Missing
```

**Campaign Names:**
- `welcome_email`
- `email_verification`
- `otp_verification`
- `login_credentials`
- `password_reset`
- `password_changed`
- `security_alert`

---

## 2️⃣ Onboarding & User Journey (10 templates)

### Welcome Series
```
onboarding-user-journey/welcome-series/
├── welcome-day0-platform-overview.html # 🔧 In Progress
├── onboarding-day1.html                # ❌ Missing
├── onboarding-day3.html                # ❌ Missing
├── onboarding-day7.html                # ❌ Missing
└── onboarding-complete.html            # 🔄 Legacy
```

**Campaign Names:**
- `welcome_email`
- `onboarding_day1`
- `onboarding_day3`
- `onboarding_day7`
- `onboarding_complete`

### User Engagement & Surveys
```
onboarding-user-journey/user-engagement-surveys/
├── survey-find-what-need.html          # ❌ Missing (NEW)
├── feature-spotlight.html              # ❌ Missing (NEW)
├── demo-offer-calendly.html            # ❌ Missing (NEW)
└── feedback-call-invitation.html       # ❌ Missing (NEW)
```

**Campaign Names:**
- `survey_find_need`
- `feature_spotlight`
- `demo_offer`
- `feedback_call`

### Profile Setup
```
onboarding-user-journey/profile-setup/
├── complete-profile-reminder.html      # ❌ Missing
└── questionnaire-complete.html         # 🔄 Legacy
```

**Campaign Names:**
- `profile_reminder`
- `questionnaire_complete`

---

## 3️⃣ Reports & Analytics (8 templates)

### Vendor Research
```
reports-analytics/vendor-research/
├── due-diligence-report-ready.html     # ❌ Missing
├── vendor-research-started.html        # ❌ Missing
└── research-failed-error.html          # ❌ Missing
```

**Campaign Names:**
- `report_ready_dd`
- `research_started`
- `research_failed`

### Data Reports
```
reports-analytics/data-reports/
├── data-ready.html                     # 🔄 Legacy
├── vendors-report.html                 # 🔄 Legacy (EJS)
├── new-vendors-report.html             # 🔄 Legacy (EJS)
├── modern-vendors-report.html          # 🔄 Legacy (EJS)
└── custom-report-ready.html            # ❌ Missing
```

**Campaign Names:**
- `data_ready`
- `vendors_report`
- `new_vendors_report`
- `modern_vendors_report`
- `custom_report`

---

## 4️⃣ Subscription & Billing (16 templates)

### Subscription Management
```
subscription-billing/subscription-management/
├── plan-subscription.html              # 🔄 Legacy
├── subscription-expired.html           # 🔄 Legacy
├── subscription-renewal.html           # ❌ Missing
├── subscription-upgraded.html          # ❌ Missing
├── subscription-downgraded.html        # ❌ Missing
└── subscription-cancelled.html         # ❌ Missing
```

**Campaign Names:**
- `plan_subscribed`
- `subscription_expired`
- `subscription_renewal`
- `subscription_upgraded`
- `subscription_downgraded`
- `subscription_cancelled`

### Billing & Payments
```
subscription-billing/billing-payments/
├── invoice-receipt.html                # 🔄 Legacy
├── payment-success.html                # ❌ Missing
├── payment-failed.html                 # ❌ Missing
├── payment-retry-reminder.html         # ❌ Missing
└── coupon-applied.html                 # 🔄 Legacy
```

**Campaign Names:**
- `invoice_receipt`
- `payment_success`
- `payment_failed`
- `payment_retry`
- `coupon_applied`

### Trial Management
```
subscription-billing/trial-management/
├── trial-started.html                  # ❌ Missing
├── trial-expiring-7d.html              # ❌ Missing
├── trial-expiring-3d.html              # ❌ Missing
├── trial-expiring-1d.html              # ❌ Missing
└── trial-expired.html                  # ❌ Missing
```

**Campaign Names:**
- `trial_started`
- `trial_expiring_7d`
- `trial_expiring_3d`
- `trial_expiring_1d`
- `trial_expired`

---

## 5️⃣ Engagement & Marketing (8 templates)

### Newsletters & Updates
```
engagement-marketing/newsletters-updates/
├── newsletter-monthly.html             # 🔄 Legacy
├── weekly-digest-insights.html         # ❌ Missing (NEW)
├── product-update.html                 # ❌ Missing
├── feature-announcement.html           # ❌ Missing
└── blog-post-digest.html               # ❌ Missing
```

**Campaign Names:**
- `newsletter_monthly`
- `weekly_digest`
- `product_update`
- `feature_announcement`
- `blog_digest`

### Promotional
```
engagement-marketing/promotional/
├── special-offer.html                  # ❌ Missing
├── webinar-invitation.html             # ❌ Missing
└── event-invitation.html               # ❌ Missing
```

**Campaign Names:**
- `special_offer`
- `webinar_invite`
- `event_invite`

---

## 6️⃣ Notifications & Alerts (8 templates)

### Price Monitoring
```
notifications-alerts/price-monitoring/
├── price-alert-increase.html           # ❌ Missing
├── price-alert-decrease.html           # ❌ Missing
└── price-alert-threshold.html          # ❌ Missing
```

**Campaign Names:**
- `price_alert_increase`
- `price_alert_decrease`
- `price_alert_threshold`

### Activity Notifications
```
notifications-alerts/activity-notifications/
├── new-message.html                    # ❌ Missing
├── request-quote-response.html         # 🔄 Legacy
├── supplier-connect.html               # 🔄 Legacy
└── team-invitation.html                # ❌ Missing
```

**Campaign Names:**
- `new_message`
- `quote_request`
- `supplier_connect`
- `team_invitation`

---

## 7️⃣ Re-engagement (3 templates)

```
reengagement/
├── inactive-30d.html                   # ❌ Missing
├── inactive-60d.html                   # ❌ Missing
└── win-back-campaign.html              # ❌ Missing
```

**Campaign Names:**
- `reactivation_30d`
- `reactivation_60d`
- `win_back_campaign`

---

## 8️⃣ Admin & Support (6 templates)

### Team & Collaboration
```
admin-support/team-collaboration/
├── team-member-added.html              # 🔄 Legacy
├── team-role-changed.html              # ❌ Missing
└── user-removed-team.html              # ❌ Missing
```

**Campaign Names:**
- `team_member_added`
- `team_role_changed`
- `user_removed`

### Support
```
admin-support/support/
├── support-ticket-created.html         # ❌ Missing
├── support-ticket-resolved.html        # ❌ Missing
└── feedback-request.html               # ❌ Missing
```

**Campaign Names:**
- `support_ticket`
- `support_resolved`
- `feedback_request`

---

## 📦 Assets Directory

```
assets/
├── images/
│   ├── logo.png                        # Purra main logo
│   ├── logo-white.png                  # White version for dark backgrounds
│   ├── hero-banner.jpg                 # Email header image
│   ├── icon-linkedin.svg               # Social media icons
│   ├── icon-instagram.svg
│   ├── icon-facebook.svg
│   ├── icon-twitter.svg
│   └── placeholder/                    # Placeholder images
│       ├── report-preview.png
│       ├── dashboard-preview.png
│       └── feature-preview.png
├── fonts/
│   ├── inter/                          # Latin scripts (en, fr, de)
│   ├── noto-sans-hebrew/              # Hebrew (he)
│   ├── noto-sans-devanagari/          # Hindi (hi)
│   └── noto-sans-cjk/                 # Chinese, Japanese (zh, ja)
└── README.md                           # Asset documentation
```

---

## 🌍 Locales Directory (Translation Files)

```
locales/
├── en/
│   ├── authentication.json
│   ├── onboarding.json
│   ├── reports.json
│   ├── billing.json
│   ├── marketing.json
│   ├── notifications.json
│   ├── reengagement.json
│   ├── admin.json
│   └── common.json                     # Shared strings
├── he/                                 # Hebrew translations
│   └── [same structure as en/]
├── hi/                                 # Hindi translations
│   └── [same structure as en/]
├── fr/                                 # French translations
│   └── [same structure as en/]
├── zh/                                 # Chinese translations
│   └── [same structure as en/]
├── ja/                                 # Japanese translations
│   └── [same structure as en/]
└── de/                                 # German translations
    └── [same structure as en/]
```

---

## 🎨 Base Templates

```
base-templates/
├── purra-modern-template.html          # Main base template
├── purra-rtl-template.html             # RTL version (Hebrew)
├── purra-simple-template.html          # Minimal version (transactional)
└── components/
    ├── header.html                     # Reusable header
    ├── footer.html                     # Reusable footer
    ├── cta-button.html                 # Call-to-action button
    ├── info-card.html                  # Info card component
    ├── feature-list.html               # Feature list component
    └── stats-section.html              # Stats/metrics section
```

---

## 📚 Examples

```
examples/
├── welcome-email-example.html          # ✅ Complete welcome email
├── demo-offer-example.html             # Demo with Calendly integration
├── weekly-digest-example.html          # Personalized digest
└── multi-language-example.html         # Shows i18n implementation
```

---

## 📄 Documentation

```
docs/
├── EMAIL_TEMPLATES_MASTER_LIST.md      # Complete catalog
├── UTM_TRACKING_GUIDE.md               # Analytics tracking
├── PURRA_ASSETS_AND_LINKS.md           # Asset reference
├── VERIFICATION_CHECKLIST.md           # Testing checklist
├── IMAGE_ISSUE_SOLUTION.md             # Troubleshooting
├── STATUS_SUMMARY.md                   # Project status
├── FINAL_UPDATE_SUMMARY.md             # Change log
└── README.md                           # Main documentation
```

---

## 🚀 Usage

### Creating a New Template

1. **Choose the category** folder (e.g., `authentication-security/`)
2. **Copy base template**:
   ```bash
   cp base-templates/purra-modern-template.html authentication-security/email-verification.html
   ```
3. **Update content** and variables
4. **Add translations** to `locales/[lang]/authentication.json`
5. **Test** across email clients
6. **Document** in master list

### File Naming Convention

Format: `[descriptive-name].html`

Examples:
- ✅ `password-reset.html`
- ✅ `trial-expiring-7d.html`
- ✅ `due-diligence-report-ready.html`
- ❌ `email1.html` (not descriptive)
- ❌ `PasswordReset.html` (use kebab-case)

---

## 📊 Template Status Summary

| Category | Total | Exists | Legacy | Missing |
|----------|-------|--------|--------|---------|
| Authentication & Security | 7 | 1 | 4 | 2 |
| Onboarding & User Journey | 10 | 0 | 2 | 8 |
| Reports & Analytics | 8 | 0 | 4 | 4 |
| Subscription & Billing | 16 | 0 | 4 | 12 |
| Engagement & Marketing | 8 | 0 | 1 | 7 |
| Notifications & Alerts | 8 | 0 | 2 | 6 |
| Re-engagement | 3 | 0 | 0 | 3 |
| Admin & Support | 6 | 0 | 1 | 5 |
| **Total** | **66** | **1** | **18** | **47** |

---

## 🔄 Migration Plan

### Phase 1: Organize Existing Templates
- [x] Create directory structure
- [x] Move existing templates to organized folders
- [ ] Update legacy templates to new design
- [ ] Add translations for existing templates

### Phase 2: Build Missing Templates
- [ ] High priority templates (authentication, billing)
- [ ] Medium priority (reports, onboarding)
- [ ] Low priority (marketing, promotional)

### Phase 3: Internationalization
- [ ] Add English translations (default)
- [ ] Add Hebrew translations (RTL)
- [ ] Add Hindi, French, German translations
- [ ] Add Chinese, Japanese translations

---

## 🛠️ Development Tools

### Recommended Tools
- **VS Code** with HTML/CSS extensions
- **Browser DevTools** for testing
- **Email on Acid** or **Litmus** for cross-client testing
- **Handlebars** for templating
- **i18next** for translations

### Build Commands
```bash
# Compile translations
npm run compile-translations

# Test templates
npm run test-templates

# Build production templates
npm run build

# Deploy to email service
npm run deploy
```

---

## 📞 Support

For questions about the directory structure or template organization:
- **GitHub**: https://github.com/Purra-AI/email-templates
- **Email**: info@purra.ai
- **Documentation**: See `/docs/` folder

---

**Last Updated**: November 2024
**Maintained By**: Purra Design & Engineering Team
