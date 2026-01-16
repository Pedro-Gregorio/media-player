/* 
You can leverage spotify's API if you want to get the tracks from a playlist with the request
  - https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items(track(name, duration_ms, album(images()),artists(name))
Just a friendly reminder: the playlist itself must be public for you to get the tracks via API :)
This big array is just a playlist of mine, because I wanted to ensure the "Up next" section worked fine.
Spotify has a web-playback-sdk to play songs on the browser, maybe I'll try to do it sometime.
*/

export const songs = [
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e2e352d89826aef6dbd5ff8f",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e2e352d89826aef6dbd5ff8f",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Post Malone",
      },
      {
        name: "Swae Lee",
      },
    ],
    duration_ms: 158040,
    name: "Sunflower - Spider-Man: Into the Spider-Verse",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b89cf022db28fa31376e0ed8",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b89cf022db28fa31376e0ed8",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b89cf022db28fa31376e0ed8",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Bastille",
      },
    ],
    duration_ms: 214147,
    name: "Pompeii",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e21cc1db05580b6f2d2a3b6e",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e21cc1db05580b6f2d2a3b6e",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e21cc1db05580b6f2d2a3b6e",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Coldplay",
      },
    ],
    duration_ms: 242373,
    name: "Viva La Vida",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e16a6534cd5a968a5b725d03",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e16a6534cd5a968a5b725d03",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e16a6534cd5a968a5b725d03",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Toploader",
      },
    ],
    duration_ms: 232693,
    name: "Dancing in the Moonlight",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27318e89397db70b2f148e31bde",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0218e89397db70b2f148e31bde",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485118e89397db70b2f148e31bde",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Gotye",
      },
      {
        name: "Kimbra",
      },
    ],
    duration_ms: 245755,
    name: "Somebody That I Used to Know",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273cc761ba55b0e7abad4539abe",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02cc761ba55b0e7abad4539abe",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851cc761ba55b0e7abad4539abe",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "American Authors",
      },
    ],
    duration_ms: 194240,
    name: "Best Day Of My Life",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736ff8bc258e3ebc835ffe14ca",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026ff8bc258e3ebc835ffe14ca",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516ff8bc258e3ebc835ffe14ca",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Train",
      },
    ],
    duration_ms: 216773,
    name: "Hey, Soul Sister",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273cf5459850259268f98b07f7a",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02cf5459850259268f98b07f7a",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851cf5459850259268f98b07f7a",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Owl City",
      },
      {
        name: "Carly Rae Jepsen",
      },
    ],
    duration_ms: 205933,
    name: "Good Time",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273cb3f67e8026e2e493a1e8262",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02cb3f67e8026e2e493a1e8262",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851cb3f67e8026e2e493a1e8262",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Of Monsters and Men",
      },
    ],
    duration_ms: 266600,
    name: "Little Talks",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514718e2b124f79258be7bc452",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "The Weeknd",
      },
      {
        name: "Daft Punk",
      },
    ],
    duration_ms: 269186,
    name: "I Feel It Coming",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d84a9bbcba91cb6a4a212b1b",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d84a9bbcba91cb6a4a212b1b",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d84a9bbcba91cb6a4a212b1b",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "GROUPLOVE",
      },
    ],
    duration_ms: 218013,
    name: "Tongue Tied",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02442b53773d50e1b5369bb16c",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851442b53773d50e1b5369bb16c",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Maroon 5",
      },
    ],
    duration_ms: 235493,
    name: "Sugar",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27379e8bc472031b01f90891a1a",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0279e8bc472031b01f90891a1a",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485179e8bc472031b01f90891a1a",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Charli xcx",
      },
    ],
    duration_ms: 169866,
    name: "Boom Clap",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734ea6653890e297d53e93e3e0",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024ea6653890e297d53e93e3e0",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514ea6653890e297d53e93e3e0",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Miley Cyrus",
      },
    ],
    duration_ms: 202066,
    name: "Party In The U.S.A.",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734068e6db0ec52b1f677119c3",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024068e6db0ec52b1f677119c3",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514068e6db0ec52b1f677119c3",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Fitz and The Tantrums",
      },
    ],
    duration_ms: 209386,
    name: "Out of My League",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e6efeff81a318670a292090f",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e6efeff81a318670a292090f",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e6efeff81a318670a292090f",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Pitbull",
      },
      {
        name: "Ne-Yo",
      },
    ],
    duration_ms: 229358,
    name: "Time of Our Lives",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e14f11f796cef9f9a82691a7",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e14f11f796cef9f9a82691a7",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Avicii",
      },
    ],
    duration_ms: 247426,
    name: "Wake Me Up",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e027fcead687e99583072cc217b",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048517fcead687e99583072cc217b",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "The Weeknd",
      },
    ],
    duration_ms: 213520,
    name: "Can't Feel My Face",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739860171ddfee17f77a570cf6",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029860171ddfee17f77a570cf6",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519860171ddfee17f77a570cf6",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Mark Ronson",
      },
      {
        name: "Bruno Mars",
      },
    ],
    duration_ms: 269658,
    name: "Uptown Funk (feat. Bruno Mars)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2733f97d4244eff5852477d9ee0",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e023f97d4244eff5852477d9ee0",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048513f97d4244eff5852477d9ee0",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Katy Perry",
      },
    ],
    duration_ms: 179640,
    name: "I Kissed A Girl",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Ed Sheeran",
      },
    ],
    duration_ms: 261153,
    name: "Castle on the Hill",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029e2f95ae77cf436017ada9cb",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519e2f95ae77cf436017ada9cb",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "OneRepublic",
      },
    ],
    duration_ms: 257265,
    name: "Counting Stars",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2737a9bf5f82e32d33d4503fe7b",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e027a9bf5f82e32d33d4503fe7b",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048517a9bf5f82e32d33d4503fe7b",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Hozier",
      },
    ],
    duration_ms: 241688,
    name: "Take Me To Church",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f9f27162ab1ed45b8d7a7e98",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f9f27162ab1ed45b8d7a7e98",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f9f27162ab1ed45b8d7a7e98",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Rihanna",
      },
      {
        name: "JAY-Z",
      },
    ],
    duration_ms: 275986,
    name: "Umbrella",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27318b8088fe0c3dbf78398b55a",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0218b8088fe0c3dbf78398b55a",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485118b8088fe0c3dbf78398b55a",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Gym Class Heroes",
      },
      {
        name: "Adam Levine",
      },
    ],
    duration_ms: 210960,
    name: "Stereo Hearts (feat. Adam Levine)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2731c5eacf6965d328c2c795cef",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e021c5eacf6965d328c2c795cef",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048511c5eacf6965d328c2c795cef",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Rihanna",
      },
    ],
    duration_ms: 242680,
    name: "Where Have You Been",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a4c01842096428fb14859bdc",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a4c01842096428fb14859bdc",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a4c01842096428fb14859bdc",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Cobra Starship",
      },
      {
        name: "Sabi",
      },
    ],
    duration_ms: 215693,
    name: "You Make Me Feel... (feat. Sabi)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d8fac444b26ac8c2e9ff1a48",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d8fac444b26ac8c2e9ff1a48",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d8fac444b26ac8c2e9ff1a48",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "BANNERS",
      },
    ],
    duration_ms: 219800,
    name: "Someone To You",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739474419f15773875a495eed3",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029474419f15773875a495eed3",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519474419f15773875a495eed3",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "MKTO",
      },
    ],
    duration_ms: 175426,
    name: "Classic",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734a075ca70ae4143a37eb4fbe",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024a075ca70ae4143a37eb4fbe",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514a075ca70ae4143a37eb4fbe",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "One Direction",
      },
    ],
    duration_ms: 192112,
    name: "Drag Me Down",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ca0d2b86c690e1772c4af20e",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ca0d2b86c690e1772c4af20e",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ca0d2b86c690e1772c4af20e",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Calvin Harris",
      },
    ],
    duration_ms: 206813,
    name: "Feel So Close",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273af5550a87c1d28410d9a5f46",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02af5550a87c1d28410d9a5f46",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851af5550a87c1d28410d9a5f46",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Mike Posner",
      },
      {
        name: "Gigamesh",
      },
    ],
    duration_ms: 214760,
    name: "Cooler Than Me - Single Mix",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2738fba5806a323efd272677c4d",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e028fba5806a323efd272677c4d",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048518fba5806a323efd272677c4d",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Calvin Harris",
      },
      {
        name: "Ellie Goulding",
      },
    ],
    duration_ms: 227266,
    name: "Outside (feat. Ellie Goulding)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27304983fd825ffccc2828f5f5b",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0204983fd825ffccc2828f5f5b",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485104983fd825ffccc2828f5f5b",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Calvin Harris",
      },
      {
        name: "Disciples",
      },
    ],
    duration_ms: 212495,
    name: "How Deep Is Your Love",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8633e22a7dba6aab817bff",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8633e22a7dba6aab817bff",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8633e22a7dba6aab817bff",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Maroon 5",
      },
      {
        name: "Wiz Khalifa",
      },
    ],
    duration_ms: 231173,
    name: "Payphone",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b1c2609c8b258ad621d4057b",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b1c2609c8b258ad621d4057b",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b1c2609c8b258ad621d4057b",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "MAGIC!",
      },
    ],
    duration_ms: 224849,
    name: "Rude",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2738fba5806a323efd272677c4d",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e028fba5806a323efd272677c4d",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048518fba5806a323efd272677c4d",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Calvin Harris",
      },
    ],
    duration_ms: 222533,
    name: "Summer",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27366c3eb32692a0ae487079cf1",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0266c3eb32692a0ae487079cf1",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485166c3eb32692a0ae487079cf1",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Taio Cruz",
      },
    ],
    duration_ms: 202613,
    name: "Dynamite",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02442b53773d50e1b5369bb16c",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851442b53773d50e1b5369bb16c",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Maroon 5",
      },
    ],
    duration_ms: 231013,
    name: "Animals",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732df0d98a423025032d0db1f7",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022df0d98a423025032d0db1f7",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512df0d98a423025032d0db1f7",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Twenty One Pilots",
      },
    ],
    duration_ms: 202333,
    name: "Stressed Out",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273cf06b7a58c6bf3e90102bf05",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02cf06b7a58c6bf3e90102bf05",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851cf06b7a58c6bf3e90102bf05",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Empire Of The Sun",
      },
    ],
    duration_ms: 204546,
    name: "Alive",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2737842fd51802451ff61483dcf",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e027842fd51802451ff61483dcf",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048517842fd51802451ff61483dcf",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Gesaffelstein",
      },
      {
        name: "The Weeknd",
      },
    ],
    duration_ms: 202093,
    name: "Lost in the Fire (feat. The Weeknd)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f60070dce96a2c1b70cf6ff0",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f60070dce96a2c1b70cf6ff0",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Bruno Mars",
      },
    ],
    duration_ms: 217866,
    name: "Talking to the Moon",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27323444c767d67417474f103e3",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0223444c767d67417474f103e3",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485123444c767d67417474f103e3",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Milky Chance",
      },
    ],
    duration_ms: 313684,
    name: "Stolen Dance",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27315785fa4f22f8c50902b3a42",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0215785fa4f22f8c50902b3a42",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485115785fa4f22f8c50902b3a42",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Flo Rida",
      },
    ],
    duration_ms: 248133,
    name: "Good Feeling",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b0f6418a15ef8a73e18027e4",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b0f6418a15ef8a73e18027e4",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b0f6418a15ef8a73e18027e4",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Milky Chance",
      },
    ],
    duration_ms: 255160,
    name: "Cocoon",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d3ce97395ff522b0d70c1094",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d3ce97395ff522b0d70c1094",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d3ce97395ff522b0d70c1094",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Vance Joy",
      },
    ],
    duration_ms: 204280,
    name: "Riptide",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273197d278a26922f72a4d4b080",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02197d278a26922f72a4d4b080",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851197d278a26922f72a4d4b080",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Madcon",
      },
    ],
    duration_ms: 216146,
    name: "Beggin (original version)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f3aa0e6ca22a382007f61e4d",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f3aa0e6ca22a382007f61e4d",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Empire Of The Sun",
      },
    ],
    duration_ms: 198440,
    name: "Walking On A Dream",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732df0d98a423025032d0db1f7",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022df0d98a423025032d0db1f7",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512df0d98a423025032d0db1f7",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Twenty One Pilots",
      },
    ],
    duration_ms: 214506,
    name: "Ride",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a5a3e231b426f32464c007a5",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a5a3e231b426f32464c007a5",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a5a3e231b426f32464c007a5",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Pitbull",
      },
      {
        name: "AFROJACK",
      },
      {
        name: "Ne-Yo",
      },
      {
        name: "Nayer",
      },
    ],
    duration_ms: 252880,
    name: "Give Me Everything (feat. Nayer)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ed17a14e09145f2986a42726",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ed17a14e09145f2986a42726",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ed17a14e09145f2986a42726",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Major Lazer",
      },
      {
        name: "MØ",
      },
      {
        name: "DJ Snake",
      },
    ],
    duration_ms: 176561,
    name: "Lean On (feat. MØ & DJ Snake)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e14f11f796cef9f9a82691a7",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e14f11f796cef9f9a82691a7",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Avicii",
      },
    ],
    duration_ms: 148386,
    name: "Addicted To You",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b38d10a0f9eabec693d8f96e",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b38d10a0f9eabec693d8f96e",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b38d10a0f9eabec693d8f96e",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "John Newman",
      },
    ],
    duration_ms: 239894,
    name: "Love Me Again",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b38d10a0f9eabec693d8f96e",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b38d10a0f9eabec693d8f96e",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b38d10a0f9eabec693d8f96e",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "John Newman",
      },
    ],
    duration_ms: 222218,
    name: "Cheating",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fafb4022c8ca1c4498e10b19",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fafb4022c8ca1c4498e10b19",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fafb4022c8ca1c4498e10b19",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Naughty Boy",
      },
      {
        name: "Sam Smith",
      },
    ],
    duration_ms: 222200,
    name: "La La La",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f60070dce96a2c1b70cf6ff0",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f60070dce96a2c1b70cf6ff0",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Bruno Mars",
      },
    ],
    duration_ms: 189109,
    name: "The Lazy Song",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732ca3ba8f334ca5a5f0312efb",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022ca3ba8f334ca5a5f0312efb",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512ca3ba8f334ca5a5f0312efb",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Twenty One Pilots",
      },
    ],
    duration_ms: 195920,
    name: "Heathens",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273c27b53492a2ee7fcebd74d6e",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02c27b53492a2ee7fcebd74d6e",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851c27b53492a2ee7fcebd74d6e",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "JP Cooper",
      },
    ],
    duration_ms: 220290,
    name: "September Song",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2737247979b8bc6027bf97043ef",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e027247979b8bc6027bf97043ef",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048517247979b8bc6027bf97043ef",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Kygo",
      },
      {
        name: "Parson James",
      },
    ],
    duration_ms: 223182,
    name: "Stole the Show",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736a1cba0e39d52540add955c6",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026a1cba0e39d52540add955c6",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516a1cba0e39d52540add955c6",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Martin Garrix",
      },
      {
        name: "Dua Lipa",
      },
    ],
    duration_ms: 220883,
    name: "Scared to Be Lonely",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02de0cd11d7b31c3bd1fd5983d",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851de0cd11d7b31c3bd1fd5983d",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Coldplay",
      },
    ],
    duration_ms: 278719,
    name: "Paradise",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a6f439c8957170652f9410e2",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a6f439c8957170652f9410e2",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a6f439c8957170652f9410e2",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Nelly Furtado",
      },
    ],
    duration_ms: 223080,
    name: "Say It Right",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e13429d57208d9d69e91566e",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e13429d57208d9d69e91566e",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e13429d57208d9d69e91566e",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Bastille",
      },
    ],
    duration_ms: 206493,
    name: "Good Grief",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736e88eb6508fd94cd1b745ce2",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026e88eb6508fd94cd1b745ce2",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516e88eb6508fd94cd1b745ce2",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Outkast",
      },
    ],
    duration_ms: 235213,
    name: "Hey Ya!",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bde344cc54eedc35050f4c61",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bde344cc54eedc35050f4c61",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bde344cc54eedc35050f4c61",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Train",
      },
    ],
    duration_ms: 195973,
    name: "Drive By",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ef9ad61e2a4f15606fd4ab15",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ef9ad61e2a4f15606fd4ab15",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ef9ad61e2a4f15606fd4ab15",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Nicki Minaj",
      },
    ],
    duration_ms: 210626,
    name: "Starships",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dec1bd45f39d2e801e4ce217",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dec1bd45f39d2e801e4ce217",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dec1bd45f39d2e801e4ce217",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Lykke Li",
      },
    ],
    duration_ms: 228466,
    name: "I Follow Rivers",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aa82525b9cca69ba27d385b7",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aa82525b9cca69ba27d385b7",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aa82525b9cca69ba27d385b7",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Zara Larsson",
      },
    ],
    duration_ms: 200646,
    name: "Lush Life",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273106fa02aaa287ec63af85aae",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02106fa02aaa287ec63af85aae",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851106fa02aaa287ec63af85aae",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Echosmith",
      },
    ],
    duration_ms: 237626,
    name: "Cool Kids",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374b157379e7686df3d0850a4",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274b157379e7686df3d0850a4",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174b157379e7686df3d0850a4",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "R. City",
      },
      {
        name: "Adam Levine",
      },
    ],
    duration_ms: 227475,
    name: "Locked Away (feat. Adam Levine)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f46b9d202509a8f7384b90de",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f46b9d202509a8f7384b90de",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Justin Bieber",
      },
    ],
    duration_ms: 233720,
    name: "Love Yourself",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273752c8760ec556f2cce6f4612",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02752c8760ec556f2cce6f4612",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851752c8760ec556f2cce6f4612",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Marlon Roudette",
      },
    ],
    duration_ms: 204026,
    name: "When The Beat Drops Out",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b337e1ca6629a53c66a3b0d4",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b337e1ca6629a53c66a3b0d4",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b337e1ca6629a53c66a3b0d4",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Natasha Bedingfield",
      },
    ],
    duration_ms: 259333,
    name: "Unwritten",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048518ff7c3580d429c8212b9a3b6",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Coldplay",
      },
    ],
    duration_ms: 263786,
    name: "Adventure of a Lifetime",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e5a95573f1b91234630fd2cf",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e5a95573f1b91234630fd2cf",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e5a95573f1b91234630fd2cf",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Coldplay",
      },
    ],
    duration_ms: 267866,
    name: "A Sky Full of Stars",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc39eb9eb3f3824a58f338dc",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc39eb9eb3f3824a58f338dc",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc39eb9eb3f3824a58f338dc",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "WALK THE MOON",
      },
    ],
    duration_ms: 199080,
    name: "Shut Up and Dance",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02442b53773d50e1b5369bb16c",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851442b53773d50e1b5369bb16c",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Maroon 5",
      },
    ],
    duration_ms: 189960,
    name: "Maps",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d26246b23c8bfa8ce543b3bb",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d26246b23c8bfa8ce543b3bb",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d26246b23c8bfa8ce543b3bb",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Shawn Mendes",
      },
    ],
    duration_ms: 206880,
    name: "Stitches",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730bd44f5ff9ecc99f7770acc5",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020bd44f5ff9ecc99f7770acc5",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510bd44f5ff9ecc99f7770acc5",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Black Eyed Peas",
      },
    ],
    duration_ms: 289133,
    name: "I Gotta Feeling",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2735393c5d3cac806092a9bc468",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e025393c5d3cac806092a9bc468",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048515393c5d3cac806092a9bc468",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Avicii",
      },
    ],
    duration_ms: 230613,
    name: "Waiting For Love",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730c13d3d5a503c84fcc60ae94",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020c13d3d5a503c84fcc60ae94",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510c13d3d5a503c84fcc60ae94",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "The Chainsmokers",
      },
    ],
    duration_ms: 221506,
    name: "Paris",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020ae4f4d42e4a09f3a29f64ad",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510ae4f4d42e4a09f3a29f64ad",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Avicii",
      },
    ],
    duration_ms: 176658,
    name: "The Nights",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2738a99868b5a57469de83fb9ba",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e028a99868b5a57469de83fb9ba",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048518a99868b5a57469de83fb9ba",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Sheppard",
      },
    ],
    duration_ms: 218227,
    name: "Geronimo",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273c0db065619ed208515412917",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02c0db065619ed208515412917",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851c0db065619ed208515412917",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Linkin Park",
      },
    ],
    duration_ms: 190427,
    name: "The Emptiness Machine",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273066483b34a405583429b8049",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02066483b34a405583429b8049",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851066483b34a405583429b8049",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "James Bay",
      },
    ],
    duration_ms: 238746,
    name: "Hold Back The River",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2738d0a75346badc30c8b845be9",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e028d0a75346badc30c8b845be9",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048518d0a75346badc30c8b845be9",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "DNCE",
      },
    ],
    duration_ms: 219146,
    name: "Cake By The Ocean",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273407bd04707c463bbb3410737",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02407bd04707c463bbb3410737",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851407bd04707c463bbb3410737",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Imagine Dragons",
      },
    ],
    duration_ms: 192280,
    name: "On Top Of The World",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730c13d3d5a503c84fcc60ae94",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020c13d3d5a503c84fcc60ae94",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510c13d3d5a503c84fcc60ae94",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "The Chainsmokers",
      },
      {
        name: "Coldplay",
      },
    ],
    duration_ms: 247160,
    name: "Something Just Like This",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273407bd04707c463bbb3410737",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02407bd04707c463bbb3410737",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851407bd04707c463bbb3410737",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Imagine Dragons",
      },
    ],
    duration_ms: 177506,
    name: "Demons",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732ed326786e4c61c6b1dbf222",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022ed326786e4c61c6b1dbf222",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512ed326786e4c61c6b1dbf222",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Rihanna",
      },
    ],
    duration_ms: 235493,
    name: "Only Girl (In The World)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273e6082141bd7c86ae9f11ea26",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02e6082141bd7c86ae9f11ea26",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851e6082141bd7c86ae9f11ea26",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "will.i.am",
      },
      {
        name: "Britney Spears",
      },
    ],
    duration_ms: 283400,
    name: "Scream & Shout",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27370cd79659edf4d5fec0840b8",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0270cd79659edf4d5fec0840b8",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485170cd79659edf4d5fec0840b8",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Tove Lo",
      },
    ],
    duration_ms: 238426,
    name: "Talking Body",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732500bcdc1790d13e7ac1a0c0",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022500bcdc1790d13e7ac1a0c0",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512500bcdc1790d13e7ac1a0c0",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "Duke Dumont",
      },
    ],
    duration_ms: 206320,
    name: "Ocean Drive",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739a04d30ad44c59f318ca8429",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029a04d30ad44c59f318ca8429",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519a04d30ad44c59f318ca8429",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "KeeMo",
      },
      {
        name: "Tim Royko",
      },
      {
        name: "Cosmo Klein",
      },
    ],
    duration_ms: 229854,
    name: "Beautiful Lie",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02495ce6da9aeb159e94eaa453",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851495ce6da9aeb159e94eaa453",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "The Chainsmokers",
      },
      {
        name: "Halsey",
      },
    ],
    duration_ms: 244960,
    name: "Closer",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2733cf0191cca87a4bc7e34bc4a",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e023cf0191cca87a4bc7e34bc4a",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048513cf0191cca87a4bc7e34bc4a",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "One Direction",
      },
    ],
    duration_ms: 245490,
    name: "Story of My Life",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273caa23612279c2d059a0d3a82",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02caa23612279c2d059a0d3a82",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851caa23612279c2d059a0d3a82",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "B.o.B",
      },
      {
        name: "Hayley Williams",
      },
    ],
    duration_ms: 180480,
    name: "Airplanes (feat. Hayley Williams of Paramore)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a036e1724bc7f2bab15cfda8",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a036e1724bc7f2bab15cfda8",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a036e1724bc7f2bab15cfda8",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "fun.",
      },
      {
        name: "Janelle Monáe",
      },
    ],
    duration_ms: 250626,
    name: "We Are Young (feat. Janelle Monáe)",
  },
  {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ce5da542e3aec8325e844311",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ce5da542e3aec8325e844311",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ce5da542e3aec8325e844311",
          width: 64,
        },
      ],
    },
    artists: [
      {
        name: "The Weather Girls",
      },
    ],
    duration_ms: 325426,
    name: "It's Raining Men",
  },
];
