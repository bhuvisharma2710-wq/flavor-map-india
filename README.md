# Flavor Map India

Build the frontend homepage for my college project:

"FlavorMap India – A Regional Indian Food Explorer"

IMPORTANT:

This is the FIRST development stage of the project.

Build ONLY the homepage/frontend UI.

DO NOT build the backend, database, authentication, admin panel, APIs, recommendation system, or other pages yet.

==================================================

PROJECT CONCEPT

==================================================

FlavorMap India is a web-based platform for exploring India's regional cuisine.

The eventual platform will allow users to:

- Explore Indian cuisine state-wise

- Discover festival-specific recipes

- Learn about the cultural significance of dishes

- Explore traditional cooking videos

- Learn about regional ingredients

- Search for recipes

- Eventually support multilingual content

The purpose is not simply to provide recipes. The platform should help users understand the regional and cultural background behind Indian food.

==================================================

CURRENT TASK

==================================================

Create ONLY a polished homepage for FlavorMap India.

The homepage should look like a real modern food and cultural discovery website that can be demonstrated to a college project guide.

Do not create fake backend functionality.

Use static/local sample data for now.

==================================================

TECHNOLOGY

==================================================

Use:

- React

- JavaScript/TypeScript if required by the existing Lovable setup

- Modern CSS/Tailwind if appropriate for the project

- Component-based architecture

Keep the project clean and easy for a college student to understand.

Do not introduce unnecessary technologies.

==================================================

PAGE STRUCTURE

==================================================

Create the homepage with the following sections.

--------------------------------------------------

1. NAVIGATION BAR

--------------------------------------------------

Create a clean responsive navigation bar.

Brand:

FLAVORMAP INDIA

Navigation items:

- Home

- Explore by State

- Festivals

- Ingredient Guide

- Search

Home should appear as the active section.

The other navigation items can temporarily point to placeholder sections or non-functional routes because those pages will be developed later.

On mobile, use a clean hamburger/mobile navigation.

==================================================

2. HERO SECTION

==================================================

Create a visually strong hero section.

Main heading:

"Explore the Flavours of India"

Supporting text:

"Discover regional recipes, culinary traditions, cultural stories, festivals and ingredients from across India."

Primary button:

"Explore Indian Cuisine"

Secondary button:

"Discover by State"

The hero should immediately communicate that this is an Indian regional food exploration platform.

Use an attractive Indian food/cuisine visual.

The design should feel premium and authentic rather than like a generic AI-generated website.

==================================================

3. EXPLORE BY STATE

==================================================

Create a section titled:

"Explore by State"

Description:

"Discover the unique flavours and culinary traditions of different regions of India."

Create a small representative set of state cards.

Use:

- Rajasthan

- Gujarat

- Kerala

- Punjab

- West Bengal

- Tamil Nadu

Each card should contain:

- State name

- Short description

- Food/cuisine image

- "Explore" button

Do not try to display every Indian state on the homepage.

Use structured local data rather than duplicating the content manually.

Example conceptual data:

[

  {

    name: "Rajasthan",

    description: "...",

    image: "..."

  }

]

Make the data easy to replace with API data later.

==================================================

4. FESTIVAL FOOD SECTION

==================================================

Create a section titled:

"Flavours of Indian Festivals"

Show cards for:

- Diwali

- Holi

- Pongal

- Onam

Each card should contain:

- Festival name

- Short description

- Food-related image

- "Explore Recipes" button

Use local sample data.

==================================================

5. CULTURAL HERITAGE SECTION

==================================================

Create a visually interesting section titled:

"More Than Just Food"

Explain briefly that Indian cuisine is deeply connected with:

- Regional traditions

- Cultural heritage

- Festivals

- Traditional cooking practices

- Local communities

The section should communicate this idea:

"We are not just showing users how to cook a dish; we are helping them understand the culture behind the food."

Keep the text concise.

==================================================

6. REGIONAL INGREDIENT GUIDE

==================================================

Create a section titled:

"Discover Regional Ingredients"

Description:

"Learn about ingredients that give India's regional cuisines their distinctive flavours."

Show 3–4 ingredient cards.

Each card should include:

- Ingredient name

- Short description

- Appropriate image

Use local/static sample data.

==================================================

7. TRADITIONAL COOKING VIDEOS

==================================================

Create a section titled:

"Traditional Cooking, Preserved"

Description should explain that the platform will eventually provide traditional cooking videos.

Create 3 attractive video preview cards.

Each card should contain:

- Thumbnail

- Video title

- Short description

- Play icon/button

For now, these are visual placeholders.

DO NOT implement actual video streaming or backend functionality.

==================================================

8. FINAL CALL TO ACTION

==================================================

Create a visually strong CTA section.

Heading:

"Ready to Explore India's Culinary Heritage?"

Button:

"Start Exploring"

==================================================

9. FOOTER

==================================================

Create a professional footer containing:

- FlavorMap India

- Short project description

- Navigation links

- Copyright text

==================================================

VISUAL DESIGN

==================================================

The website should have a strong Indian culinary identity.

Design characteristics:

- Modern

- Elegant

- Professional

- Warm

- Cultural

- Food-focused

- Clean

- Spacious

- Easy to navigate

Use a warm Indian-inspired color palette.

Suggested visual direction:

- Warm earthy tones

- Saffron/orange accents

- Cream/off-white backgrounds

- Deep green or similarly rich accent colors

- Dark readable text

Do not make the website excessively colorful.

Do not use excessive gradients.

Do not use excessive animations.

Do not overcrowd the interface.

==================================================

IMAGES

==================================================

Use high-quality food/cultural imagery where appropriate.

Images should be visually consistent.

If using external image sources, structure the code so image URLs can easily be replaced later.

Avoid broken images.

Provide meaningful alt text.

==================================================

RESPONSIVE DESIGN

==================================================

The homepage must work properly on:

- Desktop

- Laptop

- Tablet

- Mobile

Check:

- Navigation

- Hero

- Cards

- Images

- Buttons

- Footer

- Spacing

Nothing should overflow horizontally.

==================================================

COMPONENT STRUCTURE

==================================================

Keep the application component-based.

Create reusable components such as:

- Navbar

- Hero

- StateCard

- FestivalCard

- IngredientCard

- CulturalSection

- VideoCard

- CTASection

- Footer

Do not create unnecessary components.

The homepage should be organized cleanly.

==================================================

DATA

==================================================

Use local/static sample data for:

- States

- Festivals

- Ingredients

- Videos

Do not hard-code repeated content directly throughout the UI.

The structure should make it easy to replace static data with API/database data later.

==================================================

FUTURE ARCHITECTURE

==================================================

The eventual project will use a MERN-style architecture:

React frontend

        ↓

Node.js + Express.js backend

        ↓

Mongoose

        ↓

MongoDB

However, DO NOT implement any of this backend now.

Only create the frontend homepage.

The current static data will eventually be replaced by backend/API data.

==================================================

IMPORTANT PROJECT SCOPE

==================================================

Do NOT add:

- Login/signup

- Admin dashboard

- Payment system

- AI recommendations

- Social media system

- Reviews

- Ratings

- Chatbot

- Complex authentication

- Database

- Backend

- APIs

- User profile

- Mobile application

These may be considered later as future scope.

==================================================

CODE QUALITY

==================================================

The generated code must be:

- Clean

- Readable

- Maintainable

- Component-based

- Easy to understand

- Easy to modify later

Do not generate unnecessarily complicated code.

Avoid unnecessary dependencies.

==================================================

FINAL CHECK

==================================================

Before finishing:

1. Make sure the homepage loads correctly.

2. Check for console errors.

3. Check that all images load.

4. Check that buttons and navigation do not produce errors.

5. Check desktop responsiveness.

6. Check mobile responsiveness.

7. Make sure there is no horizontal overflow.

8. Make sure all sections have consistent spacing.

9. Make sure the design looks professional enough for a college project presentation.

IMPORTANT:

STOP after completing the homepage.

Do not start building the backend, database, recipe pages, state pages, festival pages, or authentication.

I will give you the next instruction after reviewing the homepage.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/356ab6ee-4709-4ccb-8181-7b63e3cff8c2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
