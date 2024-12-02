const gifts = [
  // Small budget gifts (under 20€)
  {
    name: "Une Tasse Personnalisée",
    description: "Une tasse unique avec un message ou une photo spéciale.",
    priceRange: "small"
  },
  {
    name: "Un Livre de Poche",
    description: "Un roman captivant pour s'évader.",
    priceRange: "small"
  },
  {
    name: "Une Plante Succulente",
    description: "Une petite plante décorative facile à entretenir.",
    priceRange: "small"
  },
  {
    name: "Un Porte-clés Original",
    description: "Un accessoire pratique et personnalisé.",
    priceRange: "small"
  },
  {
    name: "Des Chaussettes Rigolotes",
    description: "Des chaussettes colorées avec des motifs amusants.",
    priceRange: "small"
  },
  {
    name: "Un Carnet de Notes",
    description: "Un joli carnet pour noter ses idées.",
    priceRange: "small"
  },
  {
    name: "Un Masque Facial",
    description: "Un masque relaxant pour un moment de détente.",
    priceRange: "small"
  },
  {
    name: "Une Bougie Parfumée",
    description: "Une petite bougie pour une ambiance cozy.",
    priceRange: "small"
  },
  {
    name: "Un Mug Thermos",
    description: "Pour garder son café chaud toute la matinée.",
    priceRange: "small"
  },
  {
    name: "Un Puzzle de Poche",
    description: "Un petit puzzle pour se divertir.",
    priceRange: "small"
  },
  {
    name: "Un Set de Stickers",
    description: "Des autocollants décoratifs et originaux.",
    priceRange: "small"
  },
  {
    name: "Une Gourde Eco-friendly",
    description: "Une gourde réutilisable pour rester hydraté.",
    priceRange: "small"
  },
  {
    name: "Un Support de Téléphone",
    description: "Un support pratique pour bureau ou voiture.",
    priceRange: "small"
  },
  {
    name: "Un Set de Marque-pages",
    description: "Des marque-pages élégants pour les lecteurs.",
    priceRange: "small"
  },
  {
    name: "Un Mini Ventilateur USB",
    description: "Pour se rafraîchir pendant l'été.",
    priceRange: "small"
  },
  {
    name: "Un Pack de Post-it Créatifs",
    description: "Des notes adhésives colorées et originales.",
    priceRange: "small"
  },
  {
    name: "Une Paire de Gants Tactiles",
    description: "Des gants pour utiliser son smartphone au chaud.",
    priceRange: "small"
  },
  {
    name: "Un Set de Badges Fun",
    description: "Des badges décoratifs pour personnaliser ses affaires.",
    priceRange: "small"
  },
  {
    name: "Un Organiseur de Câbles",
    description: "Pour ranger ses câbles proprement.",
    priceRange: "small"
  },
  {
    name: "Un Mini Album Photo",
    description: "Un petit album pour conserver ses souvenirs.",
    priceRange: "small"
  },

  // Medium budget gifts (under 50€)
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
  {
    name: "Un Casque Audio Gaming",
    description: "Un casque pour une expérience de jeu immersive.",
    priceRange: "medium"
  },
  {
    name: "Un Écran de Projection Portable",
    description: "Pour des présentations ou des soirées cinéma.",
    priceRange: "medium"
  },
  {
    name: "Un Kit de Réparation de Bicyclette",
    description: "Pour les amateurs de vélo qui veulent être autonomes.",
    priceRange: "medium"
  },
  {
    name: "Un Appareil Photo Instantané",
    description: "Pour des photos physiques instantanées.",
    priceRange: "medium"
  },
  {
    name: "Un Set de Câbles et Adaptateurs",
    description: "Pour connecter tous ses appareils sans souci.",
    priceRange: "medium"
  },
  {
    name: "Un Éclairage LED pour Ordinateur",
    description: "Pour une ambiance lumineuse personnalisée.",
    priceRange: "medium"
  },
  {
    name: "Un Microphone USB pour Podcast",
    description: "Pour enregistrer des podcasts de qualité.",
    priceRange: "medium"
  },
  {
    name: "Un Kit de Nettoyage pour Écran",
    description: "Pour garder ses écrans propres et sans rayures.",
    priceRange: "medium"
  },
  {
    name: "Un Sac à Dos pour Ordinateur Portable",
    description: "Un sac pratique et protecteur pour son ordinateur.",
    priceRange: "medium"
  },
  {
    name: "Un Set de Haut-parleurs pour Ordinateur",
    description: "Pour une expérience audio améliorée.",
    priceRange: "medium"
  },
  {
    name: "Un Disque Dur Externe",
    description: "Pour sauvegarder ses données importantes.",
    priceRange: "medium"
  },
  {
    name: "Un Kit de Réparation de Téléphone",
    description: "Pour les réparations de téléphone DIY.",
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
  {
    name: "Un Écran de Gaming 24 Pouces",
    description: "Un écran pour une expérience de jeu fluide.",
    priceRange: "big"
  },
  {
    name: "Un Ordinateur Portable Ultrabook",
    description: "Un ordinateur portable léger et puissant.",
    priceRange: "big"
  },
  {
    name: "Un Projecteur LED pour Maison",
    description: "Pour des projections de films ou de jeux.",
    priceRange: "big"
  },
  {
    name: "Un Set de Cuisson Induction",
    description: "Un set de pots et de casseroles pour une cuisson saine.",
    priceRange: "big"
  },
  {
    name: "Un Appareil de Musculation pour Maison",
    description: "Un appareil pour rester en forme chez soi.",
    priceRange: "big"
  },
  {
    name: "Un Écran de Surveillance pour Maison",
    description: "Pour une sécurité renforcée à la maison.",
    priceRange: "big"
  },
  {
    name: "Un Kit de Réparation de Maison",
    description: "Pour les petits travaux de réparation.",
    priceRange: "big"
  },
  {
    name: "Un Set de Jardinage Électrique",
    description: "Des outils pour un jardinage facile et efficace.",
    priceRange: "big"
  },
  {
    name: "Un Système de Son pour Maison",
    description: "Un système de son pour une expérience audio immersive.",
    priceRange: "big"
  },
  {
    name: "Un Appareil de Nettoyage à Vapeur",
    description: "Pour un nettoyage en profondeur sans produits chimiques.",
    priceRange: "big"
  },
  {
    name: "Un Set de Câbles pour Maison",
    description: "Des câbles pour connecter tous ses appareils.",
    priceRange: "big"
  },
  {
    name: "Un Éclairage LED pour Maison",
    description: "Un éclairage personnalisable pour une ambiance unique.",
    priceRange: "big"
  },
  {
    name: "Un Système de Sécurité pour Maison",
    description: "Un système pour une sécurité renforcée.",
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
  },
  {
    name: "Une Cave à Vin Connectée",
    description: "Pour les amateurs de vin, avec contrôle via smartphone.",
    priceRange: "luxury"
  },
  {
    name: "Un Home Cinema Bose",
    description: "Une expérience sonore immersive pour votre salon.",
    priceRange: "luxury"
  },
  {
    name: "Un Vélo Électrique Haut de Gamme",
    description: "Pour des balades sans effort avec style.",
    priceRange: "luxury"
  },
  {
    name: "Un Appareil Photo Professionnel",
    description: "Pour des photos de qualité professionnelle.",
    priceRange: "luxury"
  },
  {
    name: "Un Spa Gonflable Premium",
    description: "Pour transformer son jardin en oasis de détente.",
    priceRange: "luxury"
  },
  {
    name: "Un Set de Bagages Louis Vuitton",
    description: "Voyagez avec élégance et style.",
    priceRange: "luxury"
  },
  {
    name: "Une Machine à Expresso Professionnelle",
    description: "Pour un café digne des meilleurs baristas.",
    priceRange: "luxury"
  },
  {
    name: "Un Drone DJI Pro",
    description: "Pour des prises de vue aériennes professionnelles.",
    priceRange: "luxury"
  },
  {
    name: "Un Tapis de Course Connecté",
    description: "Avec écran intégré et programmes d'entraînement personnalisés.",
    priceRange: "luxury"
  },
  {
    name: "Un Bureau Ergonomique Motorisé",
    description: "Pour un espace de travail optimal et confortable.",
    priceRange: "luxury"
  }
];
