const artworksData = [
  {
    id: "mona-lisa",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "1503",
    movement: "renaissance",
    medium: "Oil on poplar panel",
    dimensions: "77 cm × 53 cm",
    location: "Musée du Louvre, Paris",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    description: "The portrait of Lisa Gherardini, wife of Francesco del Giocondo, famously known as the Mona Lisa, is a masterpiece of the Italian Renaissance. Her enigmatic expression, the subtlety of the forms, and the atmospheric illusionism were novel qualities that have made the painting world-famous."
  },
  {
    id: "starry-night",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    movement: "modern-symbolism",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm",
    location: "Museum of Modern Art, New York",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    description: "Painted from the window of his asylum room at Saint-Rémy-de-Provence just before sunrise, this work reflects Van Gogh's turbulent emotional state. The swirling night sky, vibrant cypresses, and glowing stars showcase his unique post-impressionist vision."
  },
  {
    id: "girl-pearl-earring",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "1665",
    movement: "baroque",
    medium: "Oil on canvas",
    dimensions: "44.5 cm × 39 cm",
    location: "Mauritshuis, The Hague",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg",
    description: "An iconic Dutch Golden Age masterwork. It is not a portrait, but a 'tronie'—a study of a head in exotic clothing, featuring an oversized pearl earring as the focal point, demonstrating Vermeer's unmatched mastery of light and reflection."
  }
];

// Экспортируем данные для main.js
window.artworksData = artworksData;
