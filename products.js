var products = [
  {
    id: "the-great-gatsby",
    name: "The Great Gatsby	",
    category: "Books",
    description: "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 25,
    picture_url: "images/greatgatsby.jpg"
  },
  {
    id: "the-grapes-of-wrath",
    name: "The Grapes Of Wrath",
    category: "Books",
    description: "To the red country and part of the gray country of Oklahoma, the last rains came gently, and they did not cut the scarred earth Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 9.99,
    picture_url: "images/thegrapesofwrath.jpg"
  },
  {
    id: "1984",
    name: "1984",
    category: "Books",
    description: "It was a bright cold day in April, and the clocks were striking thirteen, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 8,
    picture_url: "images/1984.jpg"
  },
  {
    id: "ulysses",
    name: "Ulysses",
    category: "Books",
    description: "Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 8,
    picture_url: "images/ulysses.jpg"
  },
  {
    id: "lolita",
    name: "Lolita",
    category: "Books",
    description: "Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palette to tap, at three, on the teeth. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 8,
    picture_url: "images/lolita.jpg"
  },
  {
    id: "catch22",
    name: "Catch22",
    category: "Books",
    description: "It was love at first sight. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 8,
    picture_url: "images/catch22.jpg"
  },
  {
    id: "dark",
    name: "Dark Side of the Moon",
    category: "Music",
    description: "Collector's Edition, Trippy, Good for late night existential crises. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 100,
    picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
  },
  {
    id: "thriller",
    name: "Thriller",
    category: "Music",
    description: "Classic MJ The 80's greatest contribution to human progress, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 19,
    picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
  },
  {
    id: "ella",
    name: "Ella & Luis",
    category: "Music",
    description: "How could you not? Seriously, though...Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 110,
    picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
  },
  {
    id: "pacman",
    name: "Pac man",
    category: "Games",
    description: "Pac-Man is an arcade game developed by Namco and first released in Japan in May 1980. It was created by Japanese video game designer Toru Iwatani. It was licensed for distribution in the United States by Midway and released in October 1980.",
    price: 110,
    picture_url: "images/pacman.jpg"
  },
  {
    id: "digdug",
    name: "Dig Dug",
    category: "Games",
    description: "Dig Dug is an arcade game developed and published by Namco in Japan in 1982. It runs on Namco Galaga hardware, and was published outside Japan by Atari, Inc..Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 110,
    picture_url: "images/digdug.png"
  },
  {
    id: "bioshock",
    name: "BioShock",
    category: "Games",
    description: "BioShock is a first-person shooter video game developed by 2K Boston and 2K Australia, and published by 2K Games.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 110,
    picture_url: "images/bioshock.jpg"
  },
  {
    id: "frogger",
    name: "Frogger",
    category: "Games",
    description: "Frogger is a 1981 arcade game developed by Konami and licensed for North American distribution by Sega-Gremlin and worldwide by Sega itself.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 110,
    picture_url: "images/frogger.jpg"
  },
  {
    id: "forrest-gump",
    name: "Forrest Gump",
    category: "Movies",
    description: "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",
    price: 50,
    picture_url: "images/forrestgump.jpg"
  }
]
