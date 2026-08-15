export interface Translation {
  title: string;
  description: string;
  history: string;
}

export interface Artifact {
  id: string;
  year: number;
  imageUrl: string;
  videoEmbedUrl?: string;
  websiteUrl?: string;
  type: 'image' | 'video' | 'website';
  era: string;
  source?: string;
  en: Translation;
  fr: Translation;
}

export interface Room {
  id: string;
  era: string;
  icon: string;
  en: { title: string; description: string };
  fr: { title: string; description: string };
}

export const ROOMS: Room[] = [
  {
    id: 'dawn',
    era: '1960-1989',
    icon: 'Network',
    en: {
      title: 'The Dawn (1960s-1980s)',
      description: 'From ARPANET to the first protocols. The birth of connectivity.'
    },
    fr: {
      title: 'L\'Aube (1960-1980)',
      description: 'De l\'ARPANET aux premiers protocoles. La naissance de la connectivité.'
    }
  },
  {
     id: 'web1',
     era: '1990-1999',
     icon: 'Globe',
     en: {
       title: 'World Wide Web 1.0',
       description: 'The era of static pages, dial-up, and the first browsers.'
     },
     fr: {
       title: 'World Wide Web 1.0',
       description: 'L\'ère des pages statiques, du bas débit et des premiers navigateurs.'
     }
  },
  {
    id: 'p2p',
    era: '2000-2009',
    icon: 'Share2',
    en: {
      title: 'The Social & P2P Revolution',
      description: 'Napster, MySpace, and the rise of the digital community.'
    },
    fr: {
      title: 'La Révolution Sociale & P2P',
      description: 'Napster, MySpace et l\'ascension de la communauté numérique.'
    }
  },
  {
    id: 'modern',
    era: '2010-Present',
    icon: 'Smartphone',
    en: {
      title: 'The Modern Web (2010-Present)',
      description: 'The era of smartphone dominance, streaming, and creative sandboxes.'
    },
    fr: {
      title: 'Le Web Moderne (2010-Présent)',
      description: 'L\'ère de la domination du smartphone, du streaming et des bacs à sable créatifs.'
    }
  }
];

export const ARTIFACTS: Artifact[] = [
  {
    id: 'cern-first-page',
    year: 1991,
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop',
    websiteUrl: 'https://info.cern.ch/hypertext/WWW/TheProject.html',
    type: 'website',
    era: 'web1',
    source: 'CERN / Tim Berners-Lee',
    en: {
      title: 'The First Web Page',
      description: 'The foundation of the World Wide Web, serving as a gateway to the hypertext revolution.',
      history: 'On August 6, 1991, Tim Berners-Lee posted a short summary of the World Wide Web project on the alt.hypertext newsgroup. This page, hosted on his NeXT cube at CERN, explained how to create webpages and search for information. It marks the transition from the Internet as a technical infrastructure to the Web as a global information space.'
    },
    fr: {
      title: 'La Première Page Web',
      description: 'La fondation du World Wide Web, servant de porte d\'entrée à la révolution de l\'hypertexte.',
      history: 'Le 6 août 1991, Tim Berners-Lee a publié un court résumé du projet World Wide Web sur le groupe de discussion alt.hypertext. Cette page, hébergée sur son cube NeXT au CERN, expliquait comment créer des pages web et rechercher des informations. Elle marque le passage de l\'Internet comme infrastructure technique au Web comme espace d\'information mondial.'
    }
  },
  {
    id: 'arpanet-map',
    year: 1969,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Arpanet_logical_map%2C_march_1977.png',
    type: 'image',
    era: 'dawn',
    source: 'ARPANET / DARPA',
    en: {
      title: 'ARPANET Logical Map',
      description: 'A visual documentation of the first four nodes that birthed the global network.',
      history: 'By late 1969, the network consisted of four nodes: UCLA, SRI (Stanford), UC Santa Barbara, and the University of Utah. The first message ever sent occurred between UCLA and SRI on October 29; the system crashed after the first two letters of "LOGIN" were typed, making "LO" the first digital utterance of the internet.'
    },
    fr: {
      title: 'Carte Logique de l\'ARPANET',
      description: 'Une documentation visuelle des quatre premiers nœuds qui ont donné naissance au réseau mondial.',
      history: 'Fin 1969, le réseau se composait de quatre nœuds : UCLA, SRI (Stanford), UC Santa Barbara et l\'Université de l\'Utah. Le premier message jamais envoyé a eu lieu entre UCLA et SRI le 29 octobre ; le système a planté après la saisie des deux premières lettres de "LOGIN", faisant de "LO" la première parole numérique de l\'internet.'
    }
  },
  {
    id: 'first-email',
    year: 1971,
    imageUrl: 'https://www.guinnessworldrecords.com/news/2015/8/60/images/1971-first-email-392972.jpg',
    type: 'image',
    era: 'dawn',
    source: 'Ray Tomlinson / BBN Technologies / Image : Guinness World Records',
    en: {
      title: 'The First Email (@)',
      description: 'The moment electronic mail moved beyond single machines to interconnected networks.',
      history: 'Engineer Ray Tomlinson was looking for a way to address a user on a specific host. He looked at his keyboard and chose the "@" symbol because it was rarely used in usernames. The content of the very first test message is forgotten, but Tomlinson believes it was something like "QWERTYUIOP".'
    },
    fr: {
      title: 'Le Premier E-mail (@)',
      description: 'Le moment où le courrier électronique a dépassé les machines isolées pour des réseaux interconnectés.',
      history: 'L\'ingénieur Ray Tomlinson cherchait un moyen d\'adresser un utilisateur sur un hôte spécifique. Il a regardé son clavier et a choisi le symbole "@" car il était rarement utilisé dans les noms d\'utilisateurs. Le contenu du tout premier message de test est oublié, mais Tomlinson pense que c\'était quelque chose comme "QWERTYUIOP".'
    }
  },
  {
    id: 'first-spam',
    year: 1978,
    imageUrl: 'https://i.redd.it/izehe89ewcbg1.jpeg',
    type: 'image',
    era: 'dawn',
    source: 'Gary Thuerk / Digital Equipment Corp',
    en: {
      title: 'The First Spam Email',
      description: 'The birth of junk mail on the early ARPANET.',
      history: 'On May 3, 1978, Gary Thuerk, a marketing manager at Digital Equipment Corp, sent a mass email to 393 ARPANET users to promote a new computer system. While it sparked outrage and a reprimand from the military, it also proved that the network could be used for mass communication—for better or worse.'
    },
    fr: {
      title: 'Le Premier Spam',
      description: 'La naissance du courrier indésirable sur l\'ARPANET.',
      history: 'Le 3 mai 1978, Gary Thuerk, responsable marketing chez Digital Equipment Corp, a envoyé un e-mail groupé à 393 utilisateurs de l\'ARPANET pour promouvoir un nouveau système informatique. Bien qu\'il ait suscité l\'indignation, il a prouvé que le réseau pouvait être utilisé pour une communication de masse.'
    }
  },
  {
    id: 'dancing-baby',
    year: 1996,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    videoEmbedUrl: 'https://www.youtube.com/embed/-5x5OXfe9KY',
    type: 'video',
    era: 'web1',
    source: 'Character Studio / Autodesk',
    en: {
      title: 'The Dancing Baby (Oogachaka)',
      description: 'The primal meme of the 1990s, symbolizing the uncanny valley of early digital life.',
      history: 'While technically a "source code" test file for the Character Studio software, the "Baby Cha-Cha" became a cultural phenomenon after appearing on the TV show Ally McBeal. It was shared via early email chains, proving that humor and the "weird" were the primary drivers of web virality.'
    },
    fr: {
      title: 'Le Bébé Dansant (Oogachaka)',
      description: 'Le mème originel des années 1990, symbolisant la "vallée dérangeante" de la première vie numérique.',
      history: 'Bien qu\'il s\'agisse techniquement d\'un fichier de test pour le logiciel Character Studio, le "Baby Cha-Cha" est devenu un phénomène culturel après être apparu dans la série télévisée Ally McBeal. Il était partagé via les premières chaînes d\'e-mails, prouvant que l\'humour et le "bizarre" étaient les principaux moteurs de la viralité du web.'
    }
  },
  {
    id: 'aol-cd',
    year: 1998,
    imageUrl: 'https://dn721902.ca.archive.org/0/items/America_Online_Platinum_Premier_1000_Hours_Free_Version_7.0_RA1101R13_AOL_2001/America%20Online%20Platinum%20Premier%20-%201000%20Hours%20Free%20-%20Version%207.0%20(RA1101R13)(AOL)(2001).jpg',
    type: 'image',
    era: 'web1',
    source: 'America Online (AOL)',
    en: {
      title: 'AOL CD-ROM "1000 Hours Free"',
      description: 'The physical key that unlocked the digital world for millions of households.',
      history: 'America Online launched a massive marketing campaign, distributing millions of these discs in everything from pizza boxes to magazines. The distinctive screech of the 56k modem and the friendly "You\'ve Got Mail!" voice became the sonic signature of a generation entering the Information Age.'
    },
    fr: {
      title: 'CD-ROM AOL "1000 Heures Gratuites"',
      description: 'La clé physique qui a ouvert le monde numérique pour des millions de foyers.',
      history: 'America Online a lancé une campagne marketing massive, distribuant des millions de ces disques dans tout, des boîtes à pizza aux magazines. Le crissement distinctif du modem 56k et la voix amicale "Vous avez un message !" sont devenus la signature sonore d\'une génération entrant dans l\'ère de l\'information.'
    }
  },
  {
    id: 'napster',
    year: 1999,
    imageUrl: 'https://i.redd.it/6g15j3bjwjx41.jpg',
    type: 'website',
    era: 'p2p',
    source: 'Napster / Shawn Fanning',
    en: {
      title: 'Napster Interface',
      description: 'The disruption that fractured the music industry\'s control over distribution.',
      history: 'Before Napster, the music industry was largely a physical business. By allowing users to browse and download files directly from each other\'s hard drives, Napster introduced the concept of the "Celestial Jukebox"—the idea that every song ever recorded could be available at the click of a button.'
    },
    fr: {
      title: 'Interface Napster',
      description: 'La disruption qui a brisé le contrôle de l\'industrie musicale sur la distribution.',
      history: 'Avant Napster, l\'industrie de la musique était largement une activité physique. En permettant aux utilisateurs de parcourir et de télécharger des fichiers directement depuis les disques durs des autres, Napster a introduit le concept du "Juke-box Céleste"—l\'idée que chaque chanson jamais enregistrée pourrait être disponible d\'un simple clic.'
    }
  },
  {
    id: 'space-jam',
    year: 1996,
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
    websiteUrl: 'https://www.spacejam.com/1996/',
    type: 'website',
    era: 'web1',
    source: 'Warner Bros.',
    en: {
      title: 'Space Jam Website',
      description: 'A digital time capsule capturing the aesthetic peak of "Web 1.0" design.',
      history: 'Launched in 1996, the site features a classic starfield background, primitive table-based layouts, and a "circular" navigation menu. It remains one of the few high-profile promotional sites from that era that hasn\'t been updated or removed, standing as a living relic of web history.'
    },
    fr: {
      title: 'Site Web Space Jam',
      description: 'Une capsule temporelle numérique capturant l\'apogée esthétique du design "Web 1.0".',
      history: 'Lancé en 1996, le site présente un fond étoilé classique, des mises en page primitives basées sur des tableaux et un menu de navigation "circulaire". Il reste l\'un des rares sites promotionnels de haut profil de cette époque qui n\'a pas été mis à jour ou supprimé, constituant une relique vivante de l\'histoire du web.'
    }
  },
  {
    id: 'aol-mail-sound',
    year: 1995,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/AOL_logo.svg',
    videoEmbedUrl: 'https://www.youtube.com/embed/DGOgSPVBmIE?autoplay=1',
    type: 'video',
    era: 'web1',
    source: 'America Online (AOL)',
    en: {
      title: "AOL 'You've Got Mail'",
      description: 'The four most iconic words of the 1990s internet experience.',
      history: 'Recorded by Elwood Edwards in 1989 on a cassette deck in his living room, this greeting became the signature sound of America Online. It represented the excitement of digital connection before the era of constant notifications, signaling that someone, somewhere, had sent you a personal message.'
    },
    fr: {
      title: "AOL 'Vous avez un message'",
      description: 'Les quatre mots les plus emblématiques de l\'expérience internet des années 90.',
      history: 'Enregistré par Elwood Edwards en 1989 sur un magnétophone dans son salon, ce salut est devenu la signature sonore d\'America Online. Il représentait l\'excitation de la connexion numérique avant l\'ère des notifications constantes, signalant que quelqu\'un, quelque part, vous avait envoyé un message personnel.'
    }
  },
  {
    id: 'dial-up-connection',
    year: 1992,
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2574&auto=format&fit=crop',
    videoEmbedUrl: 'https://www.youtube.com/embed/D1UY7eDRXrs?autoplay=1',
    type: 'video',
    era: 'web1',
    source: 'America Online (AOL)',
    en: {
      title: 'The Dial-Up Handshake',
      description: 'The mechanical symphony of a civilization moving from analog to digital.',
      history: 'This sequence of noises was actually the modem "negotiating" with the ISP server to find a common language for data transmission. The high-pitched squeals and static were data being sent over voice lines, a sonic bridge that millions crossed every day to enter the digital realm.'
    },
    fr: {
      title: 'La Connexion Bas Débit',
      description: 'La symphonie mécanique d\'une civilisation passant de l\'analogique au numérique.',
      history: 'Cette séquence de bruits était en fait le modem en train de "négocier" avec le serveur du fournisseur d\'accès pour trouver un langage commun de transmission de données. Les sifflements aigus et les parasites étaient des données envoyées sur des lignes vocales, un pont sonore que des millions de personnes traversaient chaque jour.'
    }
  },
  {
    id: 'msn-messenger',
    year: 1999,
    imageUrl: 'https://spectator.com/wp-content/uploads/2023/11/Screen-Shot-2023-11-30-at-13.52.34.png?w=1097',
    type: 'image',
    era: 'p2p',
    source: 'Microsoft',
    en: {
      title: 'MSN Messenger',
      description: 'The social hub for a decade, defined by status messages and custom emojis.',
      history: 'Launched in 1999, MSN Messenger became the primary communication tool for teens and young adults globally. It introduced features like the "Nudge", "Winks", and personal status messages that served as the precursor to social media updates. Its distinct notification sounds are etched into the memories of millions.'
    },
    fr: {
      title: 'MSN Messenger',
      description: 'Le cœur social d\'une décennie, défini par les messages de statut et les emojis personnalisés.',
      history: 'Lancé en 1999, MSN Messenger est devenu l\'outil de communication principal pour les adolescents et les jeunes adultes du monde entier. Il a introduit des fonctionnalités comme le "Nudge", les "Winks" et les messages de statut personnels qui ont servi de précurseurs aux mises à jour des réseaux sociaux.'
    }
  },
  {
    id: 'xbox-banned-ad',
    year: 2002,
    imageUrl: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=2069&auto=format&fit=crop',
    videoEmbedUrl: 'https://www.youtube.com/embed/_IexQrWwGM0',
    type: 'video',
    era: 'p2p',
    source: 'Microsoft / Xbox',
    en: {
      title: 'Xbox: Life is Short (Banned Ad)',
      description: "A provocative commercial that captured the 'Early 2000s' marketing edge.",
      history: 'Known as the "Champagne" ad, it depicted a baby being launched from a hospital bed and rapidly aging through a life trajectory before crashing into a grave. The ad was banned in several countries for being too disturbing, but it succeeded in positioning Xbox as a bold, mature gaming platform.'
    },
    fr: {
      title: 'Xbox : "Life is Short" (Pub Bannie)',
      description: 'Une publicité provocatrice qui a capturé l\'audace marketing du début des années 2000.',
      history: 'Connue sous le nom de publicité "Champagne", elle dépeignait un bébé projeté hors d\'un lit d\'hôpital et vieillissant rapidement tout au long de sa vie avant de s\'écraser dans une tombe. La publicité a été interdite dans plusieurs pays car jugée trop troublante, mais elle a réussi à positionner la Xbox comme une plateforme de jeu audacieuse.'
    }
  },
  {
    id: 'xbox-360-dashboard',
    year: 2005,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Xbox_360_Logo.svg',
    videoEmbedUrl: 'https://www.youtube.com/embed/PSw8Dxid5oI',
    type: 'video',
    era: 'p2p',
    source: 'Microsoft / Xbox',
    en: {
      title: 'Xbox Live on Xbox 360',
      description: 'The revolution of online console gaming and digital connectivity.',
      history: 'Launched in 2002 but reaching its zenith on the Xbox 360 in 2005, Xbox Live redefined how we played together. It introduced Gamertags, Achievements, and a seamless friend list that worked across all games, creating the first true global social network for gamers.'
    },
    fr: {
      title: 'Xbox Live sur Xbox 360',
      description: 'La révolution du jeu en ligne sur console et de la connectivité numérique.',
      history: 'Lancé en 2002 mais atteignant son apogée sur la Xbox 360 en 2005, le Xbox Live a redéfinit notre façon de jouer ensemble. Il a introduit les Gamertags, les Succès et une liste d\'amis unifiée, créant ainsi le premier véritable réseau social mondial pour les joueurs.'
    }
  },
  {
    id: 'minecraft-xbox360',
    year: 2012,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
    videoEmbedUrl: 'https://www.youtube.com/embed/SkyVk7lyZYQ',
    type: 'video',
    era: 'modern',
    source: 'Mojang / Microsoft / YouTube : ProfessorBiggy',
    en: {
      title: 'Minecraft: Xbox 360 Edition',
      description: 'The creative phenomenon that defined a decade of digital play.',
      history: 'Released in May 2012, the Xbox 360 edition of Minecraft brought the sandbox revolution to consoles. It became a cultural touchstone for "Gen Z", fostering a new era of digital creativity, collaboration, and community-driven content that transcended traditional gaming boundaries.'
    },
    fr: {
      title: 'Minecraft : Xbox 360 Edition',
      description: 'Le phénomène créatif qui a défini une décennie de jeu numérique.',
      history: 'Sortie en mai 2012, l\'édition Xbox 360 de Minecraft a apporté la révolution sandbox aux consoles. Elle est devenue une référence culturelle pour la "Génération Z", favorisant une nouvelle ère de créativité numérique, de collaboration et de contenu communautaire.'
    }
  },
  {
    id: 'windows-95-ad',
    year: 1995,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Windows_95_logo.png',
    videoEmbedUrl: 'https://www.youtube.com/embed/Tw-GGT6900s',
    type: 'video',
    era: 'web1',
    source: 'Microsoft',
    en: {
      title: 'Windows 95: Start Me Up',
      description: 'The operating system that brought the GUI to the masses.',
      history: 'Launched in August 1995 with the Rolling Stones\' "Start Me Up," Windows 95 introduced the Start menu and taskbar, fundamentally changing how users interacted with computers and paving the way for the modern desktop experience.'
    },
    fr: {
      title: 'Windows 95 : Start Me Up',
      description: 'Le système d\'exploitation qui a apporté l\'interface graphique au grand public.',
      history: 'Lancé en août 1995 avec la chanson "Start Me Up" des Rolling Stones, Windows 95 a introduit le menu Démarrer et la barre des tâches, changeant fondamentalement la façon dont les utilisateurs interagissent avec les ordinateurs.'
    }
  },
  {
    id: 'windows-xp-ad',
    year: 2001,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Windows_XP_Logo.svg',
    videoEmbedUrl: 'https://www.youtube.com/embed/4Xbs4-aV3Cs',
    type: 'video',
    era: 'p2p',
    source: 'Microsoft',
    en: {
      title: 'Windows XP: "Yes You Can"',
      description: 'The stability and iconic "Bliss" of the early 2000s.',
      history: 'Windows XP merged Microsoft\'s consumer and business lines onto the NT kernel, providing unprecedented stability. Its "Luna" theme and "Bliss" wallpaper became visual hallmarks of the turn of the millennium.'
    },
    fr: {
      title: 'Windows XP : "Yes You Can"',
      description: 'La stabilité et l\'emblématique "Colline Verdoyante" du début des années 2000.',
      history: 'Windows XP a fusionné les gammes grand public et professionnelles de Microsoft sur le noyau NT, offrant une stabilité sans précédent. Son thème "Luna" et son fond d\'écran "Bliss" sont devenus des références visuelles.'
    }
  },
  {
    id: 'windows-7-ad',
    year: 2009,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Windows_7_logo.svg',
    videoEmbedUrl: 'https://www.youtube.com/embed/8mNRLKkkQOE',
    type: 'video',
    era: 'p2p',
    source: 'Microsoft',
    en: {
      title: 'Windows 7: "My Idea"',
      description: 'The refinement and perfection of the classic Windows desktop.',
      history: 'Released in 2009, Windows 7 fixed the performance issues of Vista and introduced Aero Peek and the Pinning feature. It remains one of the most beloved versions of Windows for its speed and usability.'
    },
    fr: {
      title: 'Windows 7 : "Mon Idée"',
      description: 'Le raffinement et la perfection de l\'ordinateur de bureau Windows classique.',
      history: 'Sorti en 2009, Windows 7 a corrigé les problèmes de performance de Vista et a introduit Aero Peek. Il reste l\'une des versions les plus appréciées de Windows pour sa rapidité.'
    }
  },
  {
    id: 'windows-8-ad',
    year: 2012,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Windows_8_logo_and_wordmark.svg',
    videoEmbedUrl: 'https://www.youtube.com/embed/YlX7vdYgF04',
    type: 'video',
    era: 'modern',
    source: 'Microsoft',
    en: {
      title: 'Windows 8: Reimagine',
      description: 'The controversial pivot to a touch-first interface.',
      history: 'Windows 8 introduced the "Metro" design language and replaced the Start menu with a Start screen full of live tiles. While polarizing, it marked a significant shift towards unifying tablet and desktop experiences.'
    },
    fr: {
      title: 'Windows 8 : Réimaginer',
      description: 'Le pivot controversé vers une interface tactile.',
      history: 'Windows 8 a introduit le langage de conception "Metro" et a remplacé le menu Démarrer par un écran d\'accueil. C\'était une tentative d\'unifier l\'expérience tablette et bureau.'
    }
  },
  {
    id: 'ipod-shuffle',
    year: 2005,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/IPod_shuffle_first_gen.png',
    videoEmbedUrl: 'https://www.youtube.com/embed/TE4EEwQAfxo',
    type: 'video',
    era: 'p2p',
    source: 'Apple',
    en: {
      title: 'iPod Shuffle: Life is Random',
      description: 'The minimalist music player that eliminated the screen.',
      history: 'Introduced in 2005, the iPod Shuffle was Apple\'s first player without a screen, encouraging users to "embrace the random." Its iconic lanyard design and simplicity made digital music more portable and fashion-forward than ever before.'
    },
    fr: {
      title: 'iPod Shuffle : Life is Random',
      description: 'Le lecteur de musique minimaliste qui a supprimé l\'écran.',
      history: 'Introduit en 2005, l\'iPod Shuffle était le premier lecteur d\'Apple sans écran, encourageant les utilisateurs à "embrasser l\'aléatoire". Son design emblématique et sa simplicité ont rendu la musique numérique plus portable que jamais.'
    }
  },
  {
    id: 'me-at-the-zoo',
    year: 2005,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/YouTube_Logo_2005.png',
    videoEmbedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    type: 'video',
    era: 'p2p',
    source: 'YouTube / Jawed Karim',
    en: {
      title: 'Me at the zoo',
      description: 'The first video ever uploaded to YouTube.',
      history: 'Uploaded on April 23, 2005, by YouTube co-founder Jawed Karim, this 19-second video of elephants at the San Diego Zoo marked the beginning of a digital revolution. It transformed the internet from a place where we consumed professional content to a place where anyone could broadcast themselves.'
    },
    fr: {
      title: 'Me at the zoo',
      description: 'La toute première vidéo mise en ligne sur YouTube.',
      history: 'Mise en ligne le 23 avril 2005 par le co-fondateur de YouTube, Jawed Karim, cette vidéo de 19 secondes d\'éléphants au zoo de San Diego a marqué le début d\'une révolution numérique, transformant le web en un espace où chacun peut s\'exprimer.'
    }
  },
  {
    id: 'original-iphone',
    year: 2007,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IPhone_logo.svg/1024px-IPhone_logo.svg.png',
    videoEmbedUrl: 'https://www.youtube.com/embed/MnrJzXM7a6o',
    type: 'video',
    era: 'p2p',
    source: 'Apple',
    en: {
      title: 'The Original iPhone',
      description: "Steve Jobs' legendary 2007 keynote that reinvented the phone.",
      history: 'On January 9, 2007, Steve Jobs introduced the iPhone as three products in one: "a wide-screen iPod with touch controls, a revolutionary mobile phone, and a breakthrough internet device." It fundamentally shifted the internet from a desk-bound experience to one we carry in our pockets.'
    },
    fr: {
      title: 'L\'iPhone Original',
      description: 'La conférence légendaire de Steve Jobs en 2007 qui a réinventé le téléphone.',
      history: 'Le 9 janvier 2007, Steve Jobs présente l\'iPhone comme trois produits en un : "un iPod à écran large, un téléphone révolutionnaire et un appareil de communication internet sans précédent". Il a déplacé le web de nos bureaux vers nos poches.'
    }
  },
  {
    id: 'rickroll',
    year: 2007,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Never_Gonna_Give_You_Up_7-inch_single_cover.jpg',
    videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video',
    era: 'p2p',
    source: 'Rick Astley / RCA Records',
    en: {
      title: 'The Rickroll',
      description: 'The most enduring bait-and-switch prank in internet history.',
      history: 'Starting on 4chan in 2007 as a "Duckroll" successor, Rickrolling involves sending a link seemingly relevant to the topic at hand, only to redirect to Rick Astley\'s 1987 hit. It became a global phenomenon, even appearing in the Macy\'s Thanksgiving Day Parade.'
    },
    fr: {
      title: 'Le Rickroll',
      description: 'Le canular le plus durable de l\'histoire d\'Internet.',
      history: 'Apparu en 2007, le Rickroll consiste à envoyer un lien censé être pertinent pour le sujet en cours, pour finalement rediriger vers le succès de 1987 de Rick Astley. C\'est devenu un phénomène mondial, apparaissant même dans les défilés officiels.'
    }
  },
  {
    id: 'hamburger-song',
    year: 2008,
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop',
    videoEmbedUrl: 'https://www.youtube.com/embed/mYBRTi8MM3c',
    type: 'video',
    era: 'p2p',
    source: 'Parry Gripp',
    en: {
      title: 'The Hamburger Song',
      description: 'Early YouTube absurdity at its finest.',
      history: 'Created by Parry Gripp, this catchy and bizarre song about hamburgers became a viral sensation in the late 2000s. It represents the "Random" era of YouTube where simple, animated content could capture the attention of millions across the globe.'
    },
    fr: {
      title: 'The Hamburger Song',
      description: 'L\'absurdité des débuts de YouTube à son apogée.',
      history: 'Créée par Parry Gripp, cette chanson entraînante et bizarre sur les hamburgers est devenue une sensation virale à la fin des années 2000. Elle représente l\'ère "Aléatoire" de YouTube où des contenus simples pouvaient captiver des millions de personnes.'
    }
  },
  {
    id: 'side-eye-chloe',
    year: 2013,
    imageUrl: 'https://compote.slate.com/images/1586a066-cd9d-4340-a359-838031d27976.jpeg?crop=1180%2C842%2Cx10%2Cy0',
    videoEmbedUrl: 'https://www.youtube.com/embed/jThX7ldOTO0',
    type: 'video',
    era: 'modern',
    source: 'Chloe Clem',
    en: {
      title: 'Side Eye Chloe',
      description: 'The definitive reaction face for "Wait, what?" moments.',
      history: 'Captured in 2013, Chloe Clem\'s skeptical expression while her sister cried about going to Disneyland became an instant viral sensation. Her face perfectly encapsulated the internet\'s collective feeling of confusion or disbelief, becoming a foundational "reaction meme" that is still used today.'
    },
    fr: {
      title: 'Side Eye Chloe',
      description: 'Le visage de réaction par excellence pour les moments de stupeur.',
      history: 'Capturée en 2013, l\'expression sceptique de Chloe Clem alors que sa sœur pleurait de joie à l\'idée d\'aller à Disneyland est devenue une sensation virale instantanée. Son visage a parfaitement résumé le sentiment collectif de confusion ou d\'incrédulité d\'Internet.'
    }
  },
  {
    id: 'latrell-white-chicks',
    year: 2004,
    imageUrl: 'https://images.unsplash.com/photo-1514525253344-f814d0c9e48a?q=80&w=2070&auto=format&fit=crop',
    videoEmbedUrl: 'https://www.youtube.com/embed/-RNG_tTXXcg',
    type: 'video',
    era: 'p2p',
    source: 'Revolution Studios / Columbia Pictures',
    en: {
      title: 'Latrell Spencer: "A Thousand Miles"',
      description: 'The scene that transformed a pop song into a viral comedy masterpiece.',
      history: 'In the 2004 comedy "White Chicks," Terry Crews\' character Latrell Spencer unexpectedly sings along passionately to Vanessa Carlton\'s "A Thousand Miles." The juxtaposition of his muscular physique and the soft pop song became an enduring piece of internet culture, cementing the scene as one of the most shared comedy clips of the mid-2000s.'
    },
    fr: {
      title: 'Latrell Spencer : "A Thousand Miles"',
      description: 'La scène qui a transformé une chanson pop en un chef-d\'œuvre comique viral.',
      history: 'Dans la comédie "White Chicks" de 2004, le personnage de Terry Crews, Latrell Spencer, chante avec passion sur "A Thousand Miles" de Vanessa Carlton. La juxtaposition de son physique imposant et de la douceur de la chanson est devenue une pièce durable de la culture internet.'
    }
  }
];
