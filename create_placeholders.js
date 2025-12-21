const fs = require("fs");
const path = require("path");

// Function to create SVG placeholder
function createPlaceholderSVG(width, height, text, filename) {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#e5e7eb"/>
  <text x="${width / 2}" y="${
    height / 2
  }" font-family="Arial, sans-serif" font-size="${
    Math.min(width, height) / 8
  }" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;

  fs.writeFileSync(path.join(__dirname, "public", "assets", filename), svg);
  console.log(`Created: ${filename}`);
}

// Create all placeholder images
const placeholders = [
  // Hero/banner image (wide format)
  {
    width: 1200,
    height: 600,
    text: "Hero Image",
    filename: "hero-surabaya.svg",
  },

  // Service images (square format)
  {
    width: 400,
    height: 300,
    text: "Driver Service",
    filename: "service-driver.svg",
  },
  {
    width: 400,
    height: 300,
    text: "Airport Service",
    filename: "airport-juanda.svg",
  },
  {
    width: 400,
    height: 300,
    text: "Family Travel",
    filename: "family-travel.svg",
  },

  // Car images (rectangular format)
  { width: 500, height: 300, text: "Avanza", filename: "car-avanza.svg" },
  { width: 500, height: 300, text: "Innova", filename: "car-innova.svg" },
  { width: 500, height: 300, text: "Brio", filename: "car-brio.svg" },
  { width: 500, height: 300, text: "Fortuner", filename: "car-fortuner.svg" },
  { width: 500, height: 300, text: "Xpander", filename: "car-xpander.svg" },
  { width: 500, height: 300, text: "Hiace", filename: "car-hiace.svg" },
  { width: 500, height: 300, text: "Alphard", filename: "car-alphard.svg" },
  { width: 500, height: 300, text: "Pajero", filename: "car-pajero.svg" },
];

placeholders.forEach((p) =>
  createPlaceholderSVG(p.width, p.height, p.text, p.filename)
);

console.log("All placeholder images created successfully!");
