/* ==========================================================================
   CLASSICAL PAINTINGS DATASET
   ========================================================================== */
const masterpieces = [
  {
    id: 1,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "1503",
    movement: "Renaissance",
    category: "renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    medium: "Oil on poplar panel",
    dimensions: "77 cm × 53 cm",
    location: "Musée du Louvre, Paris",
    description: "The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'. The painting's novel qualities include the subject's expression, which is frequently described as enigmatic.",
    sizeClass: "size-sm",
    alignClass: "align-self-start",
    speed: -0.08
  },
  {
    id: 2,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    movement: "Post-Impressionism",
    category: "realism-impressionism",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm",
    location: "Museum of Modern Art, New York",
    description: "Painted from the window of his asylum room at Saint-Rémy-de-Provence, Van Gogh's masterpiece is a turbulent visualization of the cosmos. The swirling sky, incandescent stars, and glowing crescent moon dominate the canvas, contrasting with the dark, silent silhouette of the cypress tree in the foreground. It represents a deeply emotional, spiritual projection of his internal mental landscape.",
    sizeClass: "size-md",
    alignClass: "align-self-center",
    speed: 0.06
  },
  {
    id: 3,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "1486",
    movement: "Renaissance",
    category: "renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg",
    medium: "Tempera on canvas",
    dimensions: "172.5 cm × 278.5 cm",
    location: "Uffizi Gallery, Florence",
    description: "Depicting the goddess Venus emerging from the sea foam as a fully-grown woman, Botticelli's painting is one of the most famous and iconic images of the Italian Renaissance. The work is characterized by its elegant, decorative lines, mythological theme, and classical depiction of female beauty, representing a Neo-Platonic philosophical ideal of divine love manifesting in physical form.",
    sizeClass: "size-xl",
    alignClass: "align-self-center",
    speed: -0.03
  },
  {
    id: 4,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "1665",
    movement: "Baroque",
    category: "baroque",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/1665_Girl_with_a_Pearl_Earring.jpg",
    medium: "Oil on canvas",
    dimensions: "44.5 cm × 39 cm",
    location: "Mauritshuis, The Hague",
    description: "Often referred to as the 'Mona Lisa of the North', Vermeer's masterpiece is not a portrait in the traditional sense but a 'tronie'—a study of a head in exotic clothing. The painting is renowned for its remarkable depiction of light, the delicate glance of the subject, the soft transitions of shadow, and the single, luminous pearl that anchors the entire composition.",
    sizeClass: "size-sm",
    alignClass: "align-self-end",
    speed: 0.08
  },
  {
    id: 5,
    title: "The Scream",
    artist: "Edvard Munch",
    year: "1893",
    movement: "Expressionism / Symbolism",
    category: "modern-symbolism",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73.5_cm%2C_National_Gallery_of_Norway.jpg",
    medium: "Oil, tempera, pastel and crayon on cardboard",
    dimensions: "91 cm × 73.5 cm",
    location: "National Gallery, Oslo",
    description: "Munch's iconic artwork represents the ultimate visual expression of modern existential dread. The agonized figure with a skeletal face stands on a bridge under a blood-red sky, clutching its head in terror as a 'great, infinite scream' passes through nature. The sweeping, fluid brushstrokes and jarring colors amplify the intense psychological panic of the scene.",
    sizeClass: "size-sm",
    alignClass: "align-self-start",
    speed: -0.06
  },
  {
    id: 6,
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1907",
    movement: "Symbolism / Art Nouveau",
    category: "modern-symbolism",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Art_Project.jpg",
    medium: "Oil on canvas with gold leaf",
    dimensions: "180 cm × 180 cm",
    location: "Österreichische Galerie Belvedere, Vienna",
    description: "The pinnacle of Klimt's 'Golden Phase', this painting depicts a couple locked in an intimate embrace on the edge of a flower-strewn meadow. The figures are enveloped in luxurious, highly decorative robes patterned with geometric shapes and shimmering gold leaf, reflecting Klimt's preoccupation with romantic love, sensuality, and spiritual union.",
    sizeClass: "size-md",
    alignClass: "align-self-center",
    speed: 0.05
  },
  {
    id: 7,
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: "1656",
    movement: "Baroque",
    category: "baroque",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
    medium: "Oil on canvas",
    dimensions: "318 cm × 276 cm",
    location: "Museo del Prado, Madrid",
    description: "A complex and enigmatic masterpiece, Las Meninas raises profound questions about reality and illusion. The painting depicts a grand room in the Royal Alcazar of Madrid during the reign of King Philip IV. The young Infanta Margaret Theresa is surrounded by her entourage of maids, dwarfs, a dog, and Velázquez himself, who looks directly at the viewer as he paints a massive canvas.",
    sizeClass: "size-lg",
    alignClass: "align-self-end",
    speed: -0.05
  },
  {
    id: 8,
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "1831",
    movement: "Edo Period / Landscape",
    category: "romanticism",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg",
    medium: "Woodblock print; ink and color on paper",
    dimensions: "25.7 cm × 37.9 cm",
    location: "Various institutions (e.g. Metropolitan Museum of Art)",
    description: "Hokusai's woodblock print is a masterpiece of Japanese ukiyo-e art. It depicts an enormous cresting wave threatening three boats off the coast of the prefecture of Kanagawa, with Mount Fuji rising serenely in the distant background. The print represents a dramatic, beautifully composed juxtaposition of the terrifying, kinetic power of nature against the eternal, quiet stability of the sacred mountain.",
    sizeClass: "size-md",
    alignClass: "align-self-start",
    speed: 0.04
  },
  {
    id: 9,
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: "1512",
    movement: "Renaissance",
    category: "renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    medium: "Fresco",
    dimensions: "280 cm × 570 cm",
    location: "Sistine Chapel, Vatican City",
    description: "Forming part of the Sistine Chapel ceiling, Michelangelo's fresco depicts the Biblical creation narrative in which God breathes life into Adam. The near-contact between the outstretched, powerful finger of God and the relaxed, receptive finger of Adam has become one of the most celebrated and reproduced gestures in art history, symbolizing the spark of human divinity.",
    sizeClass: "size-xl",
    alignClass: "align-self-center",
    speed: -0.02
  },
  {
    id: 10,
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    year: "1872",
    movement: "Impressionism",
    category: "realism-impressionism",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    medium: "Oil on canvas",
    dimensions: "48 cm × 63 cm",
    location: "Musée Marmottan Monet, Paris",
    description: "This painting gave birth to the name of the Impressionist movement. Depicting the port of Le Havre at dawn, Monet uses loose, rapid brushstrokes to capture the fleeting effect of the orange sun rising through the cold blue mist. Rather than replicating architectural details, the canvas focuses on capturing the immediate atmosphere and sensory impression of the moment.",
    sizeClass: "size-lg",
    alignClass: "align-self-start",
    speed: 0.07
  },
  {
    id: 11,
    title: "Nighthawks",
    artist: "Edward Hopper",
    year: "1942",
    movement: "Modern Realism",
    category: "modern-symbolism",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg",
    medium: "Oil on canvas",
    dimensions: "84.1 cm × 152.4 cm",
    location: "Art Institute of Chicago, Chicago",
    description: "Hopper's cinematic painting depicts four customers and an employee in a brightly-lit downtown diner at night, viewed through a seamless glass window. The severe geometry, cold fluorescent lighting, and lack of visible entrance door evoke a profound sense of urban alienation, quiet loneliness, and atmospheric mystery in mid-century America.",
    sizeClass: "size-xl",
    alignClass: "align-self-center",
    speed: -0.04
  },
  {
    id: 12,
    title: "Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich",
    year: "1818",
    movement: "Romanticism",
    category: "romanticism",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
    medium: "Oil on canvas",
    dimensions: "94.8 cm × 74.8 cm",
    location: "Kunsthalle Hamburg, Hamburg",
    description: "A quintessential expression of the Romantic Sublime, this painting shows a solitary traveller standing atop a rocky precipice, looking out over a vast mountain landscape shrouded in thick fog. Seen from behind (the Rückenfigur technique), the figure invites the viewer to share in his silent, spiritual contemplation of the scale and mystery of nature.",
    sizeClass: "size-sm",
    alignClass: "align-self-start",
    speed: 0.06
  },
  {
    id: 13,
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    year: "1642",
    movement: "Baroque",
    category: "baroque",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Night_Watch_-_Rembrandt_van_Rijn.jpg",
    medium: "Oil on canvas",
    dimensions: "363 cm × 437 cm",
    location: "Rijksmuseum, Amsterdam",
    description: "Famed for its colossal scale, dramatic chiaroscuro (contrast of light and shadow), and dynamic composition, Rembrandt's group portrait depicts a civic guard company marching out. Instead of a static lineup, Rembrandt curates a theatrical scene teeming with movement, sound, and mysterious light that illuminates a young girl in gold.",
    sizeClass: "size-xl",
    alignClass: "align-self-center",
    speed: -0.03
  },
  {
    id: 14,
    title: "The Garden of Earthly Delights",
    artist: "Hieronymus Bosch",
    year: "1505",
    movement: "Northern Renaissance",
    category: "renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg",
    medium: "Oil on oak panels (Triptych)",
    dimensions: "220 cm × 389 cm",
    location: "Museo del Prado, Madrid",
    description: "Bosch's triptych is a breathtakingly complex and surreal narrative masterpiece. It depicts three distinct scenes: the creation of Eve in Eden on the left; a sprawling, chaotic landscape of earthly temptations and surreal pleasures in the center; and a terrifying, nightmarish vision of hell's torment on the right, filled with bizarre hybrid monsters and machinery.",
    sizeClass: "size-xl",
    alignClass: "align-self-center",
    speed: 0.05
  },
  {
    id: 15,
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    year: "1830",
    movement: "Romanticism",
    category: "romanticism",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
    medium: "Oil on canvas",
    dimensions: "260 cm × 325 cm",
    location: "Musée du Louvre, Paris",
    description: "Commemorating the July Revolution of 1830, Delacroix's painting is a powerful allegory of freedom. A woman embodying Liberty stands bare-chested over barricades, waving the French flag and urging a diverse group of armed citizens forward. The composition's energy, rich colors, and raw drama define the heroic spirit of Romantic art.",
    sizeClass: "size-lg",
    alignClass: "align-self-end",
    speed: -0.05
  },
  {
    id: 16,
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    artist: "Georges Seurat",
    year: "1886",
    movement: "Pointillism / Neo-Impressionism",
    category: "realism-impressionism",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    medium: "Oil on canvas",
    dimensions: "207.6 cm × 308 cm",
    location: "Art Institute of Chicago, Chicago",
    description: "Seurat's monumental work is the leading example of Pointillist technique, composed entirely of millions of tiny, scientifically juxtaposed dots of pure color that blend in the viewer's eye. The composition depicts Parisian society relaxing in a park by the Seine, frozen in monumental, statue-like poses that lend the scene a timeless quality.",
    sizeClass: "size-xl",
    alignClass: "align-self-center",
    speed: -0.02
  },
  {
    id: 17,
    title: "The School of Athens",
    artist: "Raphael",
    year: "1511",
    movement: "Renaissance",
    category: "renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    medium: "Fresco",
    dimensions: "500 cm × 770 cm",
    location: "Apostolic Palace, Vatican City",
    description: "Raphael's fresco is a visual summary of classical Greek philosophy. Set inside a grand, cavernous Roman basilica constructed in linear perspective, the painting depicts history's greatest philosophers. In the center, Plato points upwards to the realm of ideals, while Aristotle gestures downwards to the empirical world, representing the intellectual balance of the Renaissance.",
    sizeClass: "size-xl",
    alignClass: "align-self-center",
    speed: 0.04
  },
  {
    id: 18,
    title: "The Arnolfini Portrait",
    artist: "Jan van Eyck",
    year: "1434",
    movement: "Northern Renaissance",
    category: "renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg",
    medium: "Oil on oak panel",
    dimensions: "82.2 cm × 60 cm",
    location: "National Gallery, London",
    description: "This painting is celebrated for its incredible mastery of detail and early use of oil paint. It shows Giovanni di Nicolao Arnolfini and his wife in a domestic chamber. The work is famous for its intricate symbolism (the single candle, the dog, the discarded clogs) and the convex mirror in the background, which reflects two figures entering the room.",
    sizeClass: "size-sm",
    alignClass: "align-self-start",
    speed: -0.07
  },
  {
    id: 19,
    title: "The Swing",
    artist: "Jean-Honoré Fragonard",
    year: "1767",
    movement: "Rococo",
    category: "baroque",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Jean-Honor%C3%A9_Fragonard_-_The_Swing_-_WGA8181.jpg",
    medium: "Oil on canvas",
    dimensions: "81 cm × 64.2 cm",
    location: "Wallace Collection, London",
    description: "A masterpiece of the French Rococo, this painting captures the playfulness, sensuality, and decadence of the 18th-century court. It depicts a young woman suspended on a swing in an overgrown garden, kicked high by a bishop in the shadows, allowing her lover hiding in the rose bushes below to catch an intimate glimpse of her skirts.",
    sizeClass: "size-sm",
    alignClass: "align-self-center",
    speed: 0.08
  },
  {
    id: 20,
    title: "Ophelia",
    artist: "John Everett Millais",
    year: "1852",
    movement: "Pre-Raphaelite",
    category: "romanticism",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg",
    medium: "Oil on canvas",
    dimensions: "76.2 cm × 111.8 cm",
    location: "Tate Britain, London",
    description: "Millais' painting depicts Shakespeare's Ophelia singing while floating down a river before drowning. Renowned for its hyper-realistic botanical details, Millais painted the luxury riverbanks of Surrey outdoors over five months. The painting captures the tragic, haunting beauty of Ophelia's surrender to death amidst thriving nature.",
    sizeClass: "size-lg",
    alignClass: "align-self-end",
    speed: -0.05
  },
  {
    id: 21,
    title: "The Lady of Shalott",
    artist: "John William Waterhouse",
    year: "1888",
    movement: "Pre-Raphaelite / Romanticism",
    category: "romanticism",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project.jpg",
    medium: "Oil on canvas",
    dimensions: "153 cm × 200 cm",
    location: "Tate Britain, London",
    description: "Based on Tennyson's poem, this work illustrates the tragic climax of the Lady of Shalott, who leaves her tower to cruise down the river to Camelot, facing her imminent death. Waterhouse combines meticulous Pre-Raphaelite naturalism with moody, atmospheric brushstrokes, conveying a sense of melancholic destiny and poetic doom.",
    sizeClass: "size-md",
    alignClass: "align-self-start",
    speed: 0.05
  },
  {
    id: 22,
    title: "Saturn Devouring His Son",
    artist: "Francisco Goya",
    year: "1823",
    movement: "Romanticism / Black Paintings",
    category: "romanticism",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
    medium: "Mixed media on wall, transferred to canvas",
    dimensions: "143.5 cm × 81.4 cm",
    location: "Museo del Prado, Madrid",
    description: "One of Goya's famous 'Black Paintings', painted directly onto the walls of his house. The painting depicts the Greek myth of the Titan Cronus (Saturn) eating his children to prevent a prophecy of overthrow. Goya's depiction is horrifyingly raw and expressionistic, reflecting his internal madness, disillusionment, and terror of aging and destruction.",
    sizeClass: "size-sm",
    alignClass: "align-self-center",
    speed: -0.08
  },
  {
    id: 23,
    title: "The Tower of Babel",
    artist: "Pieter Bruegel the Elder",
    year: "1563",
    movement: "Northern Renaissance",
    category: "renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg",
    medium: "Oil on panel",
    dimensions: "114 cm × 155 cm",
    location: "Kunsthistorisches Museum, Vienna",
    description: "Bruegel's depiction of the tower is an architectural marvel. He renders a massive, labyrinthine structure built into a coastal hill. The painting is filled with tiny details showing workers, masons, and stone-cutters, highlighting human engineering and industrial pride, which is contrasted against the inevitable biblical fall of the tower.",
    sizeClass: "size-lg",
    alignClass: "align-self-start",
    speed: 0.04
  },
  {
    id: 24,
    title: "Whistler's Mother",
    artist: "James McNeill Whistler",
    year: "1871",
    movement: "Realism / Tonalism",
    category: "realism-impressionism",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Arrangement_in_Grey_and_Black_no._1_has_been_restored_-_proport.jpg",
    medium: "Oil on canvas",
    dimensions: "144.3 cm × 162.4 cm",
    location: "Musée d'Orsay, Paris",
    description: "Officially titled 'Arrangement in Grey and Black No. 1', this portrait of Whistler's mother represents a milestone in Tonalist design. Whistler was preoccupied with formal composition and color harmony, painting a highly simplified, geometric arrangement of muted gray, dark black, and clean frames that evokes a feeling of solemn dignity.",
    sizeClass: "size-md",
    alignClass: "align-self-center",
    speed: -0.04
  },
  {
    id: 25,
    title: "Flaming June",
    artist: "Frederic Leighton",
    year: "1895",
    movement: "Academic Classicism / Symbolism",
    category: "modern-symbolism",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Frederic_Leighton_-_Flaming_June_-_Google_Art_Project.jpg",
    medium: "Oil on canvas",
    dimensions: "120 cm × 120 cm",
    location: "Museo de Arte de Ponce, Ponce",
    description: "Leighton's masterpiece is a stunning study in form and color. It shows a sleeping woman curled in a circle, draped in a sheer, brilliant orange dress that flows like flames around her body. The rich Mediterranean light, marble terrace, and shimmering sea represent a luxurious, idealized aesthetic of sensual rest.",
    sizeClass: "size-sm",
    alignClass: "align-self-start",
    speed: 0.07
  },
  {
    id: 26,
    title: "The Raft of the Medusa",
    artist: "Théodore Géricault",
    year: "1819",
    movement: "Romanticism",
    category: "romanticism",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Barque_de_la_M%C3%A9duse.jpg",
    medium: "Oil on canvas",
    dimensions: "491 cm × 716 cm",
    location: "Musée du Louvre, Paris",
    description: "A monumental icon of Romanticism, Géricault's painting depicts the survivors of the shipwreck of the Medusa. Arranged in a double-pyramidal composition, the figures express a dramatic emotional spectrum from absolute despair to desperate hope, as they wave towards a tiny vessel on the horizon, lit by a turbulent storm sky.",
    sizeClass: "size-xl",
    alignClass: "align-self-center",
    speed: -0.02
  },
  {
    id: 27,
    title: "The Gleaners",
    artist: "Jean-François Millet",
    year: "1857",
    movement: "Realism",
    category: "realism-impressionism",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Jean-Fran%C3%A7ois_Millet_-_Des_glaneuses.jpg",
    medium: "Oil on canvas",
    dimensions: "84 cm × 112 cm",
    location: "Musée d'Orsay, Paris",
    description: "Millet's painting is a fundamental milestone of Realist art. It depicts three peasant women bending down to glean stray grains of wheat from the fields after harvest. The warm, low evening sun gives the women a monumental, heroic weight, reflecting Millet's deep respect for the working class and the harsh realities of rural labor.",
    sizeClass: "size-md",
    alignClass: "align-self-center",
    speed: 0.05
  },
  {
    id: 28,
    title: "Napoleon Crossing the Alps",
    artist: "Jacques-Louis David",
    year: "1801",
    movement: "Neoclassicism / Romanticism",
    category: "romanticism",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
    medium: "Oil on canvas",
    dimensions: "260 cm × 221 cm",
    location: "Château de Malmaison, Rueil-Malmaison",
    description: "An idealized equestrian portrait commissioned by the King of Spain, David's painting shows a heroic Napoleon Bonaparte leading his army across the Great St. Bernard Pass. The wild wind blowing Bonaparte's cloak, the rearing horse, and Napoleon's calm, commanding gaze represent a political propaganda masterpiece of Neoclassical and early Romantic aesthetics.",
    sizeClass: "size-md",
    alignClass: "align-self-start",
    speed: -0.06
  },
  {
    id: 29,
    title: "Lady with an Ermine",
    artist: "Leonardo da Vinci",
    year: "1490",
    movement: "Renaissance",
    category: "renaissance",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
    medium: "Oil on walnut panel",
    dimensions: "54.8 cm × 40.3 cm",
    location: "Czartoryski Museum, Kraków",
    description: "One of only four portraits of women painted by Leonardo, it depicts Cecilia Gallerani, the mistress of Ludovico Sforza, Duke of Milan. The ermine she holds is a symbol of purity and a pun on her surname, while Leonardo's revolutionary use of 'contrapposto' (body twist) and delicate sfumato shading infuses the subject with psychological depth.",
    sizeClass: "size-sm",
    alignClass: "align-self-start",
    speed: 0.08
  },
  {
    id: 30,
    title: "The Anatomy Lesson of Dr. Nicolaes Tulp",
    artist: "Rembrandt van Rijn",
    year: "1632",
    movement: "Baroque",
    category: "baroque",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/d8/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
    medium: "Oil on canvas",
    dimensions: "169.5 cm × 216.5 cm",
    location: "Mauritshuis, The Hague",
    description: "Rembrandt's breakthrough masterpiece. It depicts Dr. Nicolaes Tulp explaining the musculature of the arm to medical professionals. Unlike standard static guild portraits of the era, Rembrandt organizes the figures in a dynamic pyramid, with light flooding the corpse, capturing the intellectual curiosity and realism of the Dutch Golden Age.",
    sizeClass: "size-lg",
    alignClass: "align-self-end",
    speed: -0.05
  }
];

/* ==========================================================================
   WIKIMEDIA COMMONS THUMBNAIL HELPER
   ========================================================================== */
function getWikimediaThumbnail(originalUrl, width = 500) {
  return originalUrl;
}

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initNavigation();
  initMasterpieceGrid();
  initTextureReel();
  initArchitecturalGrid();
  initProceduralAudio();
  initScrollObservers();
  initParallaxEngine();
});

/* ----------------------------------------------------
   1. CUSTOM CURSOR
---------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  const cursorText = document.getElementById("customCursorText");

  if (!cursor) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    cursorX += dx * 0.15;
    cursorY += dy * 0.15;
    
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  const bindHoverEvents = () => {
    document.querySelectorAll("a, button, .filter-btn, .texture-card, .arch-card").forEach(el => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "true";

      el.addEventListener("mouseenter", () => cursor.classList.add("hovering-link"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hovering-link"));
    });
  };

  bindHoverEvents();
  window.bindCursorHovers = bindHoverEvents;
}

/* ----------------------------------------------------
   2. NAVIGATION OVERLAY
---------------------------------------------------- */
function initNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const navOverlay = document.getElementById("navOverlay");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navOverlay) return;

  const toggleMenu = () => {
    const isActive = navOverlay.classList.toggle("active");
    document.body.classList.toggle("nav-active", isActive);
    
    const label = menuToggle.querySelector(".btn-label");
    if (label) {
      label.innerText = isActive ? "CLOSE" : "EXHIBITIONS";
    }
  };

  menuToggle.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navOverlay.classList.contains("active")) {
        toggleMenu();
      }
    });
  });
}

/* ----------------------------------------------------
   3. PROCEDURAL AMBIENT SYNTHESIZER
---------------------------------------------------- */
let audioCtx = null;
let soundNodes = null;

function initProceduralAudio() {
  const audioToggle = document.getElementById("audioToggle");
  if (!audioToggle) return;

  audioToggle.addEventListener("click", () => {
    if (!audioCtx) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
        startAmbientDrone();
        audioToggle.classList.add("playing");
        audioToggle.querySelector(".btn-label").innerText = "SOUND ON";
      } catch (e) {
        console.error("Web Audio API not supported", e);
      }
    } else {
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
        audioToggle.classList.add("playing");
        audioToggle.querySelector(".btn-label").innerText = "SOUND ON";
      } else if (audioCtx.state === "running") {
        audioCtx.suspend();
        audioToggle.classList.remove("playing");
        audioToggle.querySelector(".btn-label").innerText = "SOUND OFF";
      }
    }
  });
}

function startAmbientDrone() {
  const frequencies = [65.41, 98.00, 130.81, 164.81, 195.99];
  const oscillators = [];

  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.0, audioCtx.currentTime);
  masterGain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 4.0);

  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.Q.value = 1.5;
  filter.frequency.setValueAtTime(350, audioCtx.currentTime);

  const delay = audioCtx.createDelay(1.0);
  delay.delayTime.value = 0.6;
  const feedback = audioCtx.createGain();
  feedback.gain.value = 0.45;

  const lfo = audioCtx.createOscillator();
  lfo.frequency.value = 0.08;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 120;
  
  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);
  lfo.start();

  frequencies.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();
    
    osc.type = idx % 2 === 0 ? "sine" : "triangle";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.detune.value = (Math.random() - 0.5) * 12;

    if (idx > 2) {
      const vibrato = audioCtx.createOscillator();
      vibrato.frequency.value = 2.0 + Math.random();
      const vibratoGain = audioCtx.createGain();
      vibratoGain.gain.value = 3;
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc.frequency);
      vibrato.start();
    }

    const vol = idx === 0 ? 0.4 : idx === 1 ? 0.3 : 0.15;
    oscGain.gain.setValueAtTime(vol, audioCtx.currentTime);

    osc.connect(oscGain);
    oscGain.connect(filter);
    osc.start();
    oscillators.push(osc);
  });

  filter.connect(masterGain);
  filter.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  feedback.connect(masterGain);

  masterGain.connect(audioCtx.destination);

  soundNodes = { masterGain, filter, oscillators };
}

function adjustAmbientDroneForRoom(roomName) {
  if (!audioCtx || !soundNodes) return;
  const { filter, oscillators } = soundNodes;
  
  if (roomName === "Foyer") {
    filter.frequency.setValueAtTime(350, audioCtx.currentTime);
    filter.Q.setValueAtTime(1.5, audioCtx.currentTime);
    oscillators.forEach(osc => osc.detune.linearRampToValueAtTime(0, audioCtx.currentTime + 1.0));
  } else if (roomName === "Masterpiece Gallery") {
    filter.frequency.setValueAtTime(550, audioCtx.currentTime);
    filter.Q.setValueAtTime(1.5, audioCtx.currentTime);
    oscillators.forEach((osc, idx) => {
      if (idx === 3) osc.detune.linearRampToValueAtTime(-100, audioCtx.currentTime + 2.0);
    });
  } else if (roomName === "Texture Reel") {
    filter.frequency.setValueAtTime(450, audioCtx.currentTime);
    filter.Q.setValueAtTime(4.0, audioCtx.currentTime);
    oscillators.forEach((osc, idx) => {
      osc.detune.linearRampToValueAtTime((idx - 2) * 20, audioCtx.currentTime + 1.5);
    });
  } else if (roomName === "Architectural Dimensions") {
    filter.frequency.setValueAtTime(220, audioCtx.currentTime);
    filter.Q.setValueAtTime(1.0, audioCtx.currentTime);
    oscillators.forEach(osc => osc.detune.linearRampToValueAtTime(0, audioCtx.currentTime + 1.0));
  }
}

/* ----------------------------------------------------
   4. DYNAMIC MASTERPIECE GRID
---------------------------------------------------- */
function initMasterpieceGrid() {
  const grid = document.getElementById("masterpieceGrid");
  if (!grid) return;

  grid.innerHTML = "";

  masterpieces.forEach(art => {
    const card = document.createElement("div");
    card.className = `painting-card ${art.sizeClass} ${art.alignClass}`;
    card.setAttribute("data-category", art.category);
    card.setAttribute("data-id", art.id);

    card.dataset.speed = art.speed || 0.05;

    const thumbUrl = getWikimediaThumbnail(art.image, 500);

    card.innerHTML = `
      <div class="painting-parallax-wrap">
        <div class="painting-frame">
          <img src="${thumbUrl}" alt="${art.title}" class="lazy-load-img" style="opacity: 0; transition: opacity 0.8s ease;">
        </div>
        <div class="painting-label">
          <h4 class="painting-title">${art.title}</h4>
          <div class="painting-info">
            <span class="painting-artist">${art.artist}</span>
            <span class="painting-year">(${art.year})</span>
          </div>
        </div>
      </div>
    `;

    const img = card.querySelector("img");
    img.onload = () => {
      img.style.opacity = 1;
    };

    card.addEventListener("mouseenter", () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.classList.add("hovering-card");
        document.getElementById("customCursorText").innerText = "VIEW";
      }
    });

    card.addEventListener("mouseleave", () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.classList.remove("hovering-card");
        document.getElementById("customCursorText").innerText = "";
      }
    });

    card.addEventListener("click", () => openArtworkModal(art));
    grid.appendChild(card);
  });

  if (window.bindCursorHovers) window.bindCursorHovers();

  const entryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        entryObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.05
  });

  document.querySelectorAll(".painting-card").forEach(card => {
    entryObserver.observe(card);
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterGallery(btn.getAttribute("data-filter"));
    });
  });
}

function filterGallery(filterVal) {
  const cards = document.querySelectorAll(".painting-card");
  
  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    if (filterVal === "all" || cardCategory === filterVal) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

/* ----------------------------------------------------
   5. ROOM 03: FUTURISTIC TEXTURE REEL (REDESIGNED)
---------------------------------------------------- */
function initTextureReel() {
  const track = document.getElementById("textureSliderTrack");
  const outer = document.getElementById("textureSliderOuter");
  const scrollbarProgress = document.querySelector(".viewfinder-scrollbar-progress");

  if (!track || !outer || typeof texturesData === 'undefined') return;

  track.innerHTML = "";

  // Dynamic aspect ratio cycle for Pinterest layout
  const aspectClasses = ["aspect-tall", "aspect-square", "aspect-wide"];

  texturesData.forEach((tex, idx) => {
    const card = document.createElement("div");
    const aspectClass = aspectClasses[idx % aspectClasses.length];
    card.className = `texture-card ${aspectClass} ${idx === 0 ? 'active' : ''}`;
    card.setAttribute("data-id", tex.id);

    card.innerHTML = `
      <img src="${tex.image}" alt="${tex.title}" loading="lazy">
      <div class="texture-card-title">${tex.title}</div>
    `;

    card.addEventListener("click", () => {
      selectTexture(tex, card);
    });

    track.appendChild(card);
  });

  // Smooth dragging physics with momentum
  let isDown = false;
  let startX;
  let scrollLeft;
  let velocity = 0;
  let lastX = 0;
  let lastTime = 0;
  let rafId = null;

  outer.addEventListener("mousedown", (e) => {
    isDown = true;
    cancelAnimationFrame(rafId);
    outer.style.cursor = 'grabbing';
    startX = e.pageX - outer.offsetLeft;
    scrollLeft = outer.scrollLeft;
    lastX = e.pageX;
    lastTime = Date.now();
  });

  outer.addEventListener("mouseleave", () => {
    isDown = false;
    outer.style.cursor = '';
    applyInertia();
  });

  outer.addEventListener("mouseup", () => {
    isDown = false;
    outer.style.cursor = '';
    applyInertia();
  });

  outer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - outer.offsetLeft;
    const walk = (x - startX) * 1.5;
    
    // Calculate drag velocity
    const now = Date.now();
    const dt = now - lastTime;
    if (dt > 0) {
      velocity = (e.pageX - lastX) / dt;
    }
    
    outer.scrollLeft = scrollLeft - walk;
    lastX = e.pageX;
    lastTime = now;
    
    updateScrollBarProgress();
  });

  // Scroll wheel support
  outer.addEventListener("scroll", updateScrollBarProgress);

  function updateScrollBarProgress() {
    const maxScroll = outer.scrollWidth - outer.clientWidth;
    const scrolledPct = maxScroll > 0 ? (outer.scrollLeft / maxScroll) * 100 : 0;
    if (scrollbarProgress) {
      scrollbarProgress.style.width = `${scrolledPct}%`;
    }
  }

  function applyInertia() {
    if (Math.abs(velocity) < 0.1) return;
    
    function inertiaLoop() {
      outer.scrollLeft -= velocity * 15;
      velocity *= 0.92; // Friction damping coefficient
      
      updateScrollBarProgress();
      
      if (Math.abs(velocity) > 0.05) {
        rafId = requestAnimationFrame(inertiaLoop);
      }
    }
    rafId = requestAnimationFrame(inertiaLoop);
  }

  // Set initial readout panel contents
  if (texturesData.length > 0) {
    updateReadoutPanel(texturesData[0]);
  }

  function selectTexture(tex, cardElement) {
    document.querySelectorAll(".texture-card").forEach(c => c.classList.remove("active"));
    cardElement.classList.add("active");

    // Center selected card smoothly
    const cardWidth = cardElement.offsetWidth;
    const cardLeft = cardElement.offsetLeft;
    const outerWidth = outer.offsetWidth;
    outer.scrollTo({
      left: cardLeft - outerWidth / 2 + cardWidth / 2,
      behavior: 'smooth'
    });

    updateReadoutPanel(tex);
  }

  function updateReadoutPanel(tex) {
    document.getElementById("readoutTitle").innerText = tex.title;
    document.getElementById("readoutDescription").innerText = tex.description;
    
    const specsContainer = document.getElementById("readoutSpecs");
    if (specsContainer) {
      specsContainer.innerHTML = `
        <div class="spec-row"><span class="label">REFRACTION:</span><span class="value">${tex.specs.refraction}</span></div>
        <div class="spec-row"><span class="label">RESONANCE:</span><span class="value">${tex.specs.resonance}</span></div>
        <div class="spec-row"><span class="label">VISCOSITY:</span><span class="value">${tex.specs.viscosity}</span></div>
        <div class="spec-row"><span class="label">COMPOSITION:</span><span class="value">${tex.specs.structure}</span></div>
        <div class="spec-row"><span class="label">OPACITY:</span><span class="value">${tex.specs.opacity}</span></div>
      `;
    }

    const timestamp = document.getElementById("readoutTimestamp");
    if (timestamp) {
      const now = new Date();
      timestamp.innerText = `SYS.T: ${now.toTimeString().split(' ')[0]}.${now.getMilliseconds().toString().substring(0,2)}`;
    }
  }
}

/* ----------------------------------------------------
   6. ROOM 04: ARCHITECTURAL DIMENSIONS
---------------------------------------------------- */
function initArchitecturalGrid() {
  const grid = document.getElementById("architecturalGrid");
  if (!grid || typeof architectureData === 'undefined') return;

  grid.innerHTML = "";

  architectureData.forEach(arch => {
    const card = document.createElement("div");
    card.className = "arch-card";
    card.setAttribute("data-id", arch.id);

    card.innerHTML = `
      <div class="arch-frame">
        <img src="${arch.image}" alt="${arch.title}" loading="lazy">
      </div>
      <div class="arch-info">
        <span class="arch-designer">${arch.designer}</span>
        <h4 class="arch-title">${arch.title}</h4>
      </div>
    `;

    card.addEventListener("click", () => openArchitecturalDrawer(arch));
    grid.appendChild(card);
  });

  const archObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        archObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.05
  });

  document.querySelectorAll(".arch-card").forEach(card => {
    archObserver.observe(card);
  });

  if (window.bindCursorHovers) window.bindCursorHovers();
}

function openArchitecturalDrawer(arch) {
  const drawer = document.getElementById("archDrawer");
  if (!drawer) return;

  document.getElementById("drawerImage").src = arch.image;
  document.getElementById("drawerImage").alt = arch.title;
  document.getElementById("drawerDesigner").innerText = arch.designer;
  document.getElementById("drawerTitle").innerText = arch.title;
  document.getElementById("drawerPhilosophy").innerText = arch.philosophy;
  document.getElementById("drawerDescription").innerText = arch.description;

  const tagsContainer = document.getElementById("drawerMaterials");
  if (tagsContainer) {
    tagsContainer.innerHTML = "";
    arch.materials.forEach(mat => {
      const tag = document.createElement("span");
      tag.className = "drawer-tag";
      tag.innerText = mat;
      tagsContainer.appendChild(tag);
    });
  }

  drawer.classList.add("active");
  document.body.style.overflow = "hidden";

  const cursor = document.getElementById("customCursor");
  if (cursor) {
    cursor.classList.remove("hovering-card");
    cursor.classList.add("hovering-link");
  }

  const closeDrawer = () => {
    drawer.classList.remove("active");
    document.body.style.overflow = "";
    if (cursor) {
      cursor.classList.remove("hovering-link");
    }
    cleanupDrawerBindings();
  };

  const closeBtn = document.getElementById("drawerCloseBtn");
  const backdrop = document.getElementById("archDrawerBackdrop");

  const escClose = (e) => {
    if (e.key === "Escape") closeDrawer();
  };

  closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  window.addEventListener("keydown", escClose);

  function cleanupDrawerBindings() {
    closeBtn.removeEventListener("click", closeDrawer);
    backdrop.removeEventListener("click", closeDrawer);
    window.removeEventListener("keydown", escClose);
  }
}

/* ----------------------------------------------------
   7. PARALLAX SCROLLING ENGINE
---------------------------------------------------- */
function initParallaxEngine() {
  const activeRoomName = document.getElementById("activeRoomName");

  function updateParallaxElements() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const viewCenter = viewportHeight / 2;

    const foyerContent = document.getElementById("foyerContent");
    if (foyerContent) {
      foyerContent.style.setProperty("--foyer-parallax-y", `${scrollTop * 0.45}px`);
    }

    const headers = document.querySelectorAll(".section-header");
    headers.forEach(header => {
      const rect = header.getBoundingClientRect();
      const headerCenter = rect.top + rect.height / 2;
      
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const distFromCenter = headerCenter - viewCenter;
        const ratio = distFromCenter / (viewportHeight / 2);
        header.style.setProperty("--header-parallax-y", `${ratio * -35}px`);
      }
    });

    const paintingCards = document.querySelectorAll(".painting-card:not(.hidden).in-view");
    paintingCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const distFromCenter = cardCenter - viewCenter;
        const ratio = distFromCenter / (viewportHeight / 2);
        
        const speed = parseFloat(card.dataset.speed) || 0.05;
        
        const wrap = card.querySelector(".painting-parallax-wrap");
        if (wrap) {
          const wrapOffset = ratio * (speed * 1100);
          wrap.style.setProperty("--card-parallax-y", `${wrapOffset}px`);
        }

        const img = card.querySelector("img");
        if (img) {
          const imgOffset = ratio * (-speed * 500);
          img.style.setProperty("--img-parallax-y", `${imgOffset}px`);
        }
      }
    });

    const archCards = document.querySelectorAll(".arch-card.in-view");
    archCards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const distFromCenter = cardCenter - viewCenter;
        const ratio = distFromCenter / (viewportHeight / 2);
        const speed = idx % 2 === 0 ? 0.06 : -0.04;
        
        const img = card.querySelector("img");
        if (img) {
          const imgOffset = ratio * (-speed * 450);
          img.style.setProperty("--arch-parallax-y", `${imgOffset}px`);
        }
      }
    });

    requestAnimationFrame(updateParallaxElements);
  }

  requestAnimationFrame(updateParallaxElements);
}

/* ----------------------------------------------------
   8. SCROLL OBSERVERS & ROOM TRACKER
---------------------------------------------------- */
function initScrollObservers() {
  const sections = document.querySelectorAll(".section");
  const activeRoomName = document.getElementById("activeRoomName");
  const progress = document.getElementById("indicatorProgress");

  if (!sections || !activeRoomName) return;

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -25% 0px",
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const roomName = entry.target.getAttribute("data-room");
        activeRoomName.innerText = roomName;
        
        adjustAmbientDroneForRoom(roomName);

        document.querySelectorAll(".nav-link").forEach(link => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(sec => observer.observe(sec));

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPct = (scrollTop / docHeight) * 100;
    
    if (progress) {
      progress.style.width = `${scrolledPct}%`;
    }
  });
}
