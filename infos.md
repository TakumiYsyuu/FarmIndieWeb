🌿 Cozy Countryside — UI Design System

Project: Indie Farming Web Game
Theme: Cozy Countryside / Storybook Farming
Mode: Light Theme
Design Direction: Warm, natural, peaceful, friendly, and slightly vintage.

1. Design Philosophy

The visual identity should feel like entering a peaceful countryside village.

Design principles:

Warm cream backgrounds instead of pure white.
Muted sage and botanical greens as primary brand colors.
Warm brown and beige for rustic details.
Soft pastel accents for game-related elements.
Rounded corners and subtle shadows.
Clean, readable interfaces with charming illustrations.

Recommended visual balance:

55% Cream and neutral colors
20% White surfaces
15% Green shades
5% Brown accents
5% Decorative colors 2. Complete Color Palette
2.1 Primary Brand Colors
Token HEX Closest Tailwind Equivalent Usage
sage-50 #EEF2E9 green-50 Pale backgrounds
sage-100 #DCE6D4 green-100 Selected backgrounds
sage-300 #A8B99A green-300 Decorative elements
sage-500 #829875 green-600 Primary buttons
sage-700 #627A59 green-800 Hover states
forest-800 #455B43 green-900 Strong headings
2.2 Neutral Colors
Token HEX Closest Tailwind Equivalent Usage
cream-50 #F7F6EF stone-50 Main background
cream-100 #F2F0E7 stone-100 Secondary background
cream-200 #E8E3D6 stone-200 Dividers
beige-300 #DDDCCF stone-300 Borders
surface-white #FFFFFF white Cards and forms
text-primary #454D40 stone-800 Main text
text-secondary #85887D stone-500 Secondary text
text-disabled #B8B9AE stone-400 Disabled text
2.3 Accent Colors
Token HEX Closest Tailwind Equivalent Usage
harvest-300 #E8C77D amber-300 Rewards and coins
terracotta-400 #D9957B orange-300 Decorative accents
strawberry-400 #D98789 rose-300 Favorites and hearts
lavender-300 #B9A9C9 purple-300 Rare items
wood-500 #A78362 amber-700 Wooden UI elements
water-300 #A9C9D4 sky-200 Water and weather
2.4 Semantic Colors
Purpose HEX Tailwind Equivalent
Success #72966B green-600
Warning #D9AC54 amber-500
Error #C87570 red-400
Information #78A7BA sky-500 3. Component Styling
Buttons
Type Background Text Hover
Primary sage-500 White sage-700
Secondary White sage-700 sage-50
Tertiary sage-100 forest-800 sage-300
Danger #C87570 White #B85F5A

Button specifications:

Height: 48–52px
Border radius: 12px
Font weight: 600
Transition: 200ms
Cursor: Pointer
Include focus and disabled states.
Input Fields
Property Value
Background cream-100
Text text-primary
Placeholder text-secondary
Border beige-300
Focus border sage-500
Border radius 10px
Height 48–52px

Input behavior:

Default: Beige border.
Hover: Slightly darker border.
Focus: Sage border with subtle ring.
Error: Muted red border.
Disabled: Muted background.
Cards
Property Value
Background White
Border beige-300 or transparent
Radius 16px
Padding 24px
Shadow 0 4px 16px rgba(69,77,64,0.06)
Navigation
Background: cream-50
Text: text-primary
Active link: sage-700
Active background: sage-100
Hover background: sage-50
Height: 64–76px
Badges
Type Background Text
Success sage-100 forest-800
Warning #F8EBCB #85652E
Error #F5DEDC #A94F4B
Information #E0EDF1 #426D7D 4. Typography

Recommended fonts:

Headings: Fraunces
Body: Nunito

Element Size Weight
Hero heading 48–64px 700
Page heading 32–40px 700
Section heading 24–30px 700
Card heading 18–20px 700
Body 14–16px 400
Labels 13–14px 600
Helper text 12px 400

Use dark forest green for major headings and warm charcoal for regular text.

5. Layout and Spacing

Use an 8px-based spacing system.

Property Value
Main content width 1200px
Login/register card 420–480px
Card radius 16px
Input radius 10px
Button radius 12px
Card padding 24px
Input height 48–52px
Button height 48–52px
Section spacing 64–96px
Small spacing 8px
Medium spacing 16px
Large spacing 24px 6. Page-Specific Guidelines
Landing Page /

Visual direction:

Large illustrated countryside hero.
Warm cream background.
Sage primary CTA.
Storybook-style illustrations.
Feature cards with soft backgrounds.
Subtle decorative flowers and plants.

Suggested hero copy:

A little farm, a world of possibilities.

Grow your crops, raise your animals, and build a peaceful life in your own little countryside.

Primary CTA: Start Your Journey
Secondary CTA: Explore the Game

Login Page /login

Layout:

Split-screen design.
Left: Farm illustration.
Right: Clean login card.

Components:

Welcome heading.
Email field.
Password field.
Remember me.
Forgot password link.
Login button.
Registration link.

Suggested heading:

Welcome back, farmer!

Your little farm has been waiting for you.

Registration Page /register

Components:

Username.
Email address.
Password.
Confirm password.
Terms and conditions.
Create account button.
Existing account login link.

Suggested heading:

Let's start something wonderful!

Your countryside adventure begins here.

Forgot Password /forgot-password

Components:

Email field.
Send reset link button.
Confirmation message.
Back to login link.
Resend email option.

Suggested heading:

Forgot your password?

No worries! We'll help you get back to your farm.

Game Page /game

Important UI elements:

Player HUD.
Currency and resources.
Energy indicator.
Inventory.
Farm navigation.
Crop management.
Notifications.
Shop interface.
Settings menu.

Use the same palette, but allow more colorful accents for crops, items, rewards, and gameplay indicators.

7. Interaction and UX Guidelines

All interactive elements should have these states:

State Expected Behavior
Default Normal appearance
Hover Slight color change
Active Darker or pressed appearance
Focus Visible accessible focus ring
Disabled Muted colors and no interaction
Loading Spinner or loading indicator
Error Clear validation message
Success Positive confirmation

Additional UX recommendations:

Use consistent button styling throughout.
Display validation errors near the relevant input.
Keep forms simple and easy to understand.
Add loading feedback during authentication.
Make navigation responsive.
Maintain readable text contrast.
Use clear confirmation before destructive actions. 8. CSS Design Tokens
css
:root {
/_ Primary brand _/
--sage-50: #EEF2E9;
--sage-100: #DCE6D4;
--sage-300: #A8B99A;
--sage-500: #829875;
--sage-700: #627A59;
--forest-800: #455B43;

/_ Neutral _/
--cream-50: #F7F6EF;
--cream-100: #F2F0E7;
--cream-200: #E8E3D6;
--beige-300: #DDDCCF;
--surface-white: #FFFFFF;

/_ Text _/
--text-primary: #454D40;
--text-secondary: #85887D;
--text-disabled: #B8B9AE;

/_ Accents _/
--harvest-300: #E8C77D;
--terracotta-400: #D9957B;
--strawberry-400: #D98789;
--lavender-300: #B9A9C9;
--wood-500: #A78362;
--water-300: #A9C9D4;

/_ Semantic _/
--success: #72966B;
--warning: #D9AC54;
--error: #C87570;
--info: #78A7BA;

/_ Typography _/
--font-heading: 'Fraunces', serif;
--font-body: 'Nunito', sans-serif;

/_ Radius _/
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;

/_ Shadows _/
--shadow-card:
0 4px 16px rgba(69, 77, 64, 0.06);

--shadow-modal:
0 12px 36px rgba(69, 77, 64, 0.12);
}

9. Tailwind CSS Implementation Notes

The color tokens above are custom semantic names. They are not official Tailwind colors.

For Tailwind CSS, define them in your theme configuration so the project can use utilities like:

bg-cream-50
bg-sage-500
text-forest-800
border-beige-300
hover:bg-sage-700
focus:ring-sage-500

Keep the same token names throughout the application rather than using arbitrary HEX values in individual components.

10. Final Design Direction

Overall aesthetic: Cozy countryside, storybook farming, soft botanical colors.

Primary identity: Sage green.

Main background: Warm cream.

Typography: Fraunces + Nunito.

UI style: Rounded, clean, soft shadows, subtle borders.

Illustration style: Hand-painted countryside, watercolor or charming indie-game artwork.

Important: The UI should remain light and minimal. Let the farm artwork, characters, crops, and environment provide the vibrant colors.

The result should feel like a peaceful little farming world from the landing page all the way into the actual game.
