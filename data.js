const gifts = [
  // Small gifts (under 20€)
  {
    name: "Un Coffret de Thés Gourmands",
    description: "Une sélection de thés parfumés pour les amateurs de saveurs délicates.",
    priceRange: "small"
  },
  {
    name: "Un Livre Best-Seller",
    description: "Le dernier roman à succès pour des heures de lecture passionnante.",
    priceRange: "small"
  },
  {
    name: "Une Bougie Parfumée Artisanale",
    description: "Une bougie faite main aux senteurs relaxantes.",
    priceRange: "small"
  },
  {
    name: "Un Mug Personnalisé",
    description: "Une tasse unique avec un design original.",
    priceRange: "small"
  },
  {
    name: "Un Kit de Jardinage",
    description: "Le nécessaire pour débuter son petit jardin d'herbes aromatiques.",
    priceRange: "small"
  },
  {
    name: "Un Carnet de Notes Artistique",
    description: "Un beau carnet pour écrire ses pensées et dessiner.",
    priceRange: "small"
  },
  {
    name: "Une Paire de Chaussettes Rigolotes",
    description: "Des chaussettes colorées et originales pour égayer la journée.",
    priceRange: "small"
  },
  {
    name: "Un Porte-Clés Tech",
    description: "Un porte-clés intelligent pour retrouver ses objets perdus.",
    priceRange: "small"
  },
  {
    name: "Un Set de Pâtisserie",
    description: "Les ustensiles essentiels pour réaliser de délicieux gâteaux.",
    priceRange: "small"
  },
  {
    name: "Un Puzzle 3D",
    description: "Un puzzle créatif pour construire une belle structure en 3D.",
    priceRange: "small"
  },

  // Medium gifts (under 50€)
  {
    name: "Une Enceinte Bluetooth Portable",
    description: "Pour écouter sa musique partout avec un son de qualité.",
    priceRange: "medium"
  },
  {
    name: "Un Kit de Dégustation de Vins",
    description: "Une sélection de vins pour découvrir de nouveaux cépages.",
    priceRange: "medium"
  },
  {
    name: "Un Hamac de Jardin",
    description: "Pour se détendre confortablement en extérieur.",
    priceRange: "medium"
  },
  {
    name: "Un Coffret de Soins Visage",
    description: "Des produits naturels pour prendre soin de sa peau.",
    priceRange: "medium"
  },
  {
    name: "Un Jeu de Société Stratégique",
    description: "Un jeu captivant pour des soirées entre amis.",
    priceRange: "medium"
  },
  {
    name: "Une Lampe Design",
    description: "Une lampe moderne pour une ambiance chaleureuse.",
    priceRange: "medium"
  },
  {
    name: "Un Support pour Smartphone",
    description: "Un support ajustable et élégant pour bureau ou voiture.",
    priceRange: "medium"
  },
  {
    name: "Un Kit de Mixologie",
    description: "Pour préparer des cocktails comme un professionnel.",
    priceRange: "medium"
  },
  {
    name: "Un Sac de Sport Tendance",
    description: "Un sac pratique et stylé pour toutes les activités.",
    priceRange: "medium"
  },
  {
    name: "Une Manette de Jeu Sans Fil",
    description: "Pour les sessions de gaming sur PC ou smartphone.",
    priceRange: "medium"
  },

  // Big gifts (under 100€)
  {
    name: "Un Casque Audio Bluetooth",
    description: "Un casque sans fil avec une excellente qualité sonore.",
    priceRange: "big"
  },
  {
    name: "Une Montre Connectée",
    description: "Pour suivre son activité et rester connecté avec style.",
    priceRange: "big"
  },
  {
    name: "Un Robot de Cuisine Compact",
    description: "L'assistant parfait pour préparer de bons petits plats.",
    priceRange: "big"
  },
  {
    name: "Un Sac à Dos Antivol",
    description: "Un sac sécurisé et élégant pour ordinateur et effets personnels.",
    priceRange: "big"
  },
  {
    name: "Une Machine à Café Design",
    description: "Pour savourer un délicieux café chaque matin.",
    priceRange: "big"
  },
  {
    name: "Un Kit Photo pour Smartphone",
    description: "Des objectifs professionnels pour sublimer ses photos.",
    priceRange: "big"
  },
  {
    name: "Une Enceinte Intelligente",
    description: "Un assistant vocal pour la maison avec un son premium.",
    priceRange: "big"
  },
  {
    name: "Un Set de Yoga Complet",
    description: "Tout le nécessaire pour pratiquer le yoga à la maison.",
    priceRange: "big"
  },
  {
    name: "Une Cave à Vin Électrique",
    description: "Pour conserver ses vins à la température idéale.",
    priceRange: "big"
  },
  {
    name: "Un Drone Débutant",
    description: "Un drone facile à piloter pour des photos aériennes.",
    priceRange: "big"
  },

  // Luxury gifts (Smic LinkedIn > 100€)
  {
    name: "Un iPhone Dernier Cri",
    description: "Le dernier smartphone Apple avec toutes ses fonctionnalités premium.",
    priceRange: "luxury"
  },
  {
    name: "Une Console PS5",
    description: "La console next-gen de Sony avec ses performances exceptionnelles.",
    priceRange: "luxury"
  },
  {
    name: "Un MacBook Air",
    description: "L'ordinateur portable Apple, parfait pour la productivité et le style.",
    priceRange: "luxury"
  },
  {
    name: "Une TV OLED 4K",
    description: "Une expérience visuelle incomparable avec des couleurs éclatantes.",
    priceRange: "luxury"
  },
  {
    name: "Un Voyage All Inclusive aux Maldives",
    description: "Une semaine de rêve dans un paradis tropical, tout compris.",
    priceRange: "luxury"
  },
  {
    name: "Une Montre Apple Watch Ultra",
    description: "La montre connectée haut de gamme avec suivi d'activité avancé.",
    priceRange: "luxury"
  },
  {
    name: "Un Robot Cuisine Thermomix",
    description: "Le robot culinaire ultime pour des préparations dignes d'un chef.",
    priceRange: "luxury"
  },
  {
    name: "Un Sac de Luxe",
    description: "Un sac de créateur intemporel et élégant.",
    priceRange: "luxury"
  },
  {
    name: "Un Week-end à Dubai",
    description: "Un séjour de luxe dans la ville la plus extravagante du monde.",
    priceRange: "luxury"
  },
  {
    name: "Un iPad Pro avec Apple Pencil",
    description: "La tablette ultime pour les créatifs et les professionnels.",
    priceRange: "luxury"
  }
];
