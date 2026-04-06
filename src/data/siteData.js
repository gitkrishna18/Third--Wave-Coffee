// ──────────────────────────────────────────────
// Third Wave Coffee – Noida  |  Site Data
// ──────────────────────────────────────────────
// All branch-specific content lives here so that
// future updates only require changes in one file.
// ──────────────────────────────────────────────

export const branchInfo = {
  brandName: "Third Wave Coffee",
  tagline: "Specialty Coffee. Everyday Moments.",
  city: "Noida",
  branchName: "Sector 63, Noida",
  address:
    "Unit No 5B, Route No 63, The Foodies Hub, Near Metro Station, Noida Sector 63, Noida, Uttar Pradesh, 201307",
  phone: "08904859944",
  phoneFormatted: "089 048 59944",
  hours: "Open daily · 8:00 AM – 12:00 AM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890!2d77.3900!3d28.6270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzM3LjIiTiA3N8KwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  googleMapsLink:
    "https://www.google.com/maps/dir//Sector+63+Noida+Uttar+Pradesh+201307",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Order", href: "#order" },
  { label: "Visit", href: "#visit" },
];

export const heroContent = {
  headline: "Fresh coffee. Bright conversations.\nEveryday moments.",
  subheading:
    "Expertly brewed specialty coffee, fresh bakes, and a warm café experience — crafted for your everyday ritual.",
  primaryCTA: { label: "Order Now", href: "#order" },
  secondaryCTA: { label: "Visit Café", href: "#visit" },
  badges: ["Dine In", "Takeaway", "Delivery"],
};

export const aboutContent = {
  sectionLabel: "Our Story",
  headline: "Specialty coffee, brewed with purpose.",
  description: [
    "At Third Wave Coffee, every cup tells a story — from ethically sourced beans to expertly crafted brews. We believe great coffee should be an everyday experience, not a luxury.",
    "Our cafés are designed as warm, inclusive spaces — perfect for quick coffee runs, deep work sessions, casual catch-ups, or simply slowing down with a good brew.",
  ],
  stats: [
    { value: "100+", label: "Outlets Nationwide" },
    { value: "50+", label: "Unique Beverages" },
    { value: "4.5★", label: "Average Rating" },
  ],
};

export const features = [
  {
    icon: "☕",
    title: "Specialty Coffee",
    description:
      "Single-origin arabica beans, freshly roasted and expertly brewed for every cup.",
  },
  {
    icon: "🥐",
    title: "Fresh Bakes & Desserts",
    description:
      "Artisan pastries, cakes, and savory bites baked fresh throughout the day.",
  },
  {
    icon: "🚀",
    title: "Dine In / Takeaway / Delivery",
    description:
      "Enjoy at the café, grab it to go, or get it delivered right to your door.",
  },
  {
    icon: "💻",
    title: "Great for Work Breaks",
    description:
      "Power outlets, free Wi-Fi, and the perfect ambience for focused work sessions.",
  },
  {
    icon: "🌿",
    title: "Warm Modern Spaces",
    description:
      "Contemporary interiors with cozy corners, natural light, and green touches.",
  },
  {
    icon: "🔁",
    title: "Everyday Coffee Rituals",
    description:
      "Whether it's the morning brew or the 4 PM pick-me-up — we're your stop.",
  },
];

// ── Top Picks / Most Loved ──────────────────

export const topPicks = [
  {
    name: "Cappuccino",
    description: "Velvety steamed milk meets a bold espresso shot — our signature classic.",
    price: "₹249",
    tag: "Bestseller",
    image: "/images/coffee-closeup.png",
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours. Smooth, low-acid, and dangerously refreshing.",
    price: "₹279",
    tag: "Must Try",
    image: "/images/cold-brew.png",
  },
  {
    name: "Butter Croissant",
    description: "Flaky, golden, and freshly baked every morning. Perfect with any coffee.",
    price: "₹199",
    tag: "Popular",
    image: "/images/croissant.png",
  },
  {
    name: "Chocolate Truffle Cake",
    description: "Rich Belgian chocolate layered with silky ganache. A crowd favorite.",
    price: "₹349",
    tag: "Bestseller",
    image: "/images/chocolate-cake.png",
  },
];

// ── Menu (with descriptions) ────────────────

export const menuCategories = [
  {
    name: "Signature Coffee",
    items: [
      { name: "Cappuccino", description: "Classic espresso with velvety steamed milk and rich microfoam", price: "₹249", tag: "Bestseller", image: "/images/coffee-closeup.png" },
      { name: "Hazelnut Latte", description: "Smooth latte infused with roasted hazelnut syrup", price: "₹299", tag: null, image: "/images/flat-white.png" },
      { name: "Caramel Macchiato", description: "Espresso layered with vanilla milk and caramel drizzle", price: "₹319", tag: "Popular", image: "/images/caramel-macchiato.png" },
      { name: "Flat White", description: "Double ristretto with a thin layer of silky microfoam", price: "₹269", tag: null, image: "/images/flat-white.png" },
    ],
  },
  {
    name: "Cold Coffee",
    items: [
      { name: "Lemon Cold Brew", description: "18-hour cold brew with a citrus twist and tonic water", price: "₹279", tag: "Must Try", image: "/images/cold-brew.png" },
      { name: "Classic Cold Coffee", description: "Chilled espresso blended with milk and a hint of vanilla", price: "₹249", tag: null, image: "/images/cold-brew.png" },
      { name: "Vietnamese Iced Coffee", description: "Bold dark roast with sweetened condensed milk over ice", price: "₹289", tag: null, image: "/images/caramel-macchiato.png" },
      { name: "Mocha Frappe", description: "Blended chocolate, espresso, and ice topped with cream", price: "₹299", tag: "Popular", image: "/images/mocha-frappe.png" },
    ],
  },
  {
    name: "Tea & Refreshers",
    items: [
      { name: "Matcha Latte", description: "Ceremonial-grade matcha whisked with steamed oat milk", price: "₹269", tag: null, image: "/images/matcha-latte.png" },
      { name: "Mango Iced Tea", description: "Fresh mango pulp with green tea and a dash of lime", price: "₹199", tag: "Refreshing", image: "/images/mango-iced-tea.png" },
      { name: "Berry Blast Cooler", description: "Mixed berries blended with sparkling water and mint", price: "₹229", tag: null, image: "/images/mango-iced-tea.png" },
      { name: "Classic Chai", description: "Aromatic Indian spiced tea brewed fresh with ginger", price: "₹149", tag: null, image: "/images/matcha-latte.png" },
    ],
  },
  {
    name: "Quick Bites",
    items: [
      { name: "Pesto Panini", description: "Grilled panini with basil pesto, mozzarella, and sun-dried tomatoes", price: "₹299", tag: null, image: "/images/sandwich.png" },
      { name: "Chicken Club Sandwich", description: "Triple-layered with grilled chicken, lettuce, and house mayo", price: "₹349", tag: "Popular", image: "/images/sandwich.png" },
      { name: "Mushroom & Cheese Toast", description: "Sautéed mushrooms with melted cheddar on sourdough", price: "₹269", tag: null, image: "/images/sandwich.png" },
      { name: "Corn & Jalapeño Wrap", description: "Spiced corn and jalapeño cream cheese in a wheat wrap", price: "₹249", tag: null, image: "/images/sandwich.png" },
    ],
  },
  {
    name: "Desserts & Cakes",
    items: [
      { name: "Belgian Chocolate Truffle Cake", description: "Layers of dark chocolate sponge with ganache frosting", price: "₹349", tag: "Bestseller", image: "/images/chocolate-cake.png" },
      { name: "Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone cream", price: "₹299", tag: null, image: "/images/tiramisu.png" },
      { name: "Citrus Cake", description: "Light orange-lemon sponge with a tangy cream glaze", price: "₹249", tag: null, image: "/images/cheesecake.png" },
      { name: "New York Cheesecake", description: "Dense, creamy baked cheesecake with a buttery biscuit base", price: "₹329", tag: null, image: "/images/cheesecake.png" },
    ],
  },
  {
    name: "Bakery Specials",
    items: [
      { name: "Mango Croissant", description: "Buttery croissant filled with fresh mango cream", price: "₹199", tag: "Seasonal", image: "/images/croissant.png" },
      { name: "Walnut Chocolate Brownie", description: "Fudgy dark chocolate brownie loaded with toasted walnuts", price: "₹229", tag: "Must Try", image: "/images/brownie.png" },
      { name: "Almond Danish", description: "Flaky puff pastry with almond frangipane filling", price: "₹189", tag: null, image: "/images/croissant.png" },
      { name: "Blueberry Muffin", description: "Soft vanilla muffin studded with fresh blueberries", price: "₹169", tag: null, image: "/images/brownie.png" },
    ],
  },
];

export const coffeeExperience = {
  sectionLabel: "The Coffee Experience",
  headline: "From bean to cup — crafted with care.",
  features: [
    {
      title: "Ethically Sourced",
      description:
        "Our arabica beans are sourced directly from sustainable farms across India's finest coffee-growing regions.",
    },
    {
      title: "Carefully Roasted",
      description:
        "Small-batch roasting brings out distinct flavor profiles — from bright citrusy notes to deep chocolate undertones.",
    },
    {
      title: "Expertly Crafted",
      description:
        "Our trained baristas craft every beverage with precision — for enthusiasts and everyday coffee lovers alike.",
    },
    {
      title: "Fresh Every Day",
      description:
        "Every brew is made fresh on demand — because coffee tastes best when it's made for the moment.",
    },
  ],
};

export const ambienceImages = [
  { src: "/images/ambience-1.png", alt: "Modern café interior with warm lighting" },
  { src: "/images/ambience-2.png", alt: "Fresh pastry display" },
  { src: "/images/ambience-3.png", alt: "Work-friendly café space" },
  { src: "/images/coffee-closeup.png", alt: "Specialty latte art" },
  { src: "/images/barista.png", alt: "Barista crafting espresso" },
  { src: "/images/cold-brew.png", alt: "Iced cold brew coffee" },
];

// ── Walk-in Section ──────────────────────────

export const walkInSection = {
  headline: "Walk in. We've got you covered.",
  subtext:
    "No reservations needed — just drop by for great coffee, good conversations, and a comfortable space.",
  points: [
    { icon: "🪑", title: "Comfortable Seating", description: "Cozy corners, open tables, and window seats for every mood." },
    { icon: "💻", title: "Work-Friendly Space", description: "Free Wi-Fi, charging points, and a quiet focus-friendly ambience." },
    { icon: "⚡", title: "Quick Service", description: "Your order is ready fast — whether it's a quick espresso or a full spread." },
  ],
};

// ── Testimonials (realistic format) ──────────

export const testimonials = [
  {
    name: "Amit S.",
    role: "Freelancer",
    rating: 5,
    text: "This is genuinely the best specialty coffee in Noida. The cappuccino is consistently perfect, and the space is ideal for taking work calls.",
    initials: "AS",
  },
  {
    name: "Riya M.",
    role: "Designer",
    rating: 5,
    text: "The vibe is exactly what Noida needed — clean, modern, never too loud. The cold brew is my go-to, and the Belgian chocolate cake is incredible.",
    initials: "RM",
  },
  {
    name: "Karan D.",
    role: "Software Engineer",
    rating: 5,
    text: "Great Wi-Fi, comfortable seating, and coffee that actually tastes like specialty coffee. I work from here at least three times a week.",
    initials: "KD",
  },
  {
    name: "Sneha P.",
    role: "Content Creator",
    rating: 5,
    text: "The mango croissant is worth the visit alone. Pair it with a matcha latte — you'll keep coming back. Such a well thought-out menu.",
    initials: "SP",
  },
];

export const orderOptions = [
  {
    title: "Order for Delivery",
    description: "Get your favorites delivered to your doorstep.",
    icon: "🛵",
    cta: "Order Now",
    href: "#",
  },
  {
    title: "Takeaway",
    description: "Skip the wait — order ahead and pick up.",
    icon: "☕",
    cta: "Order Ahead",
    href: "#",
  },
  {
    title: "Call Store",
    description: "Speak with our team for custom orders.",
    icon: "📞",
    cta: "Call Now",
    href: "tel:08904859944",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "Menu", href: "#menu" },
    { label: "Order Online", href: "#order" },
    { label: "Visit Café", href: "#visit" },
    { label: "About Us", href: "#about" },
  ],
  social: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "Facebook", href: "#", icon: "facebook" },
  ],
};
