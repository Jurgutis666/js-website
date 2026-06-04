// types
type Album = {
  title: string;
  artist: string;
  url: string;
};

type LrtVideo = {
  type: "lrt";
  title: string;
  description: string;
  href: string;
  thumbnail: string;
};

type YoutubeVideo = {
  type: "youtube";
  title: string;
  description: string;
  embedUrl: string;
};

type Video = LrtVideo | YoutubeVideo;

type Contact = {
  label: string;
  value: string;
  display: string;
};

type Game = {
  title: string;
  role: string;
  downloads: string;
  link: string;
  img: string;
};

type ExperimentalMusic = {
  title: string;
  type: string;
  description: string;
  musicLink: string;
  behanceLink: string;
};

// data
export const albums: Album[] = [
  {
    title: "The Weight Of Sleep",
    artist: "Cunabula",
    url: "https://www.discogs.com/release/27942120",
  },
  {
    title: "SpeedNRoll",
    artist: "Pekla",
    url: "https://www.discogs.com/master/811703",
  },
  {
    title: "The Witch Bitch Of Hexenville",
    artist: "Pekla",
    url: "https://www.discogs.com/release/11643365",
  },
  {
    title: "Boogie with Satan",
    artist: "Pekla",
    url: "https://www.discogs.com/release/15480010",
  },
  {
    title: "Kas Esi Tu",
    artist: "Augustė Vedrickaitė",
    url: "https://www.discogs.com/release/29904949-August%C4%97-Vedrickait%C4%97-Kas-Esi-Tu?redirected=true",
  },
];

export const videos: Video[] = [
  {
    title: "Sakmė apie dovanotą širdį",
    description: "Musical drama — LRT",
    href: "https://www.lrt.lt/mediateka/irasas/2000249571/muzikine-drama-sakme-apie-dovanota-sirdi",
    thumbnail: "/sakme-image.jpg",
    type: "lrt",
  },
  {
    title: "Žalvarinis - Einam Tolyn",
    description: "Žalvarinis - Einam Tolyn Live at Vilnius Castle",
    embedUrl: "https://www.youtube.com/embed/yqxLvX3T2I8?si=cdbxIsQYMsj4RWWH",
    type: "youtube",
  },
  {
    title: "CUNABULA - live at Loftas",
    description: "CUNABULA - live at Loftas [2023 10 21]",
    embedUrl: "https://www.youtube.com/embed/-jR7-f49-s4?si=glcOH3pwhPJ4jq_l",
    type: "youtube",
  },
];

export const contacts: Contact[] = [
  {
    label: "email",
    value: "mailto:email@email.com",
    display: "email@email.com",
  },
  {
    label: "Behance",
    value: "https://www.behance.net/jsfx",
    display: "behance.net/jsfx",
  },
  { label: "Phone number", value: "tel:+3701234567", display: "+3701234567" },
];

export const games: Game[] = [
  {
    title: "Dopples World",
    role: "Music & Sound Design",
    downloads: "10M+",
    link: "https://play.google.com/store/apps/details?id=com.tutotoons.app.dopplesworld&pcampaignid=web_share",
    img: "/dopples-world.jpg",
  },
  {
    title: "Fluvsies",
    role: "Music & Sound Design",
    downloads: "100M+",
    link: "https://play.google.com/store/apps/details?id=com.tutotoons.app.fluvsies.free&pcampaignid=web_share",
    img: "/fluvsies.jpg",
  },
  {
    title: "Smolsies 2",
    role: "Music & Sound Design",
    downloads: "10M+",
    link: "https://play.google.com/store/apps/details?id=com.tutotoons.app.smolsies2&pcampaignid=web_share",
    img: "/smolsies2.jpg",
  },
  {
    title: "Kpopsies",
    role: "Music & Sound Design",
    downloads: "50M+",
    link: "https://play.google.com/store/apps/details?id=com.tutotoons.app.kpopsiescuteunicornpets&pcampaignid=web_share",
    img: "/kpopsies.jpg",
  },
  {
    title: "Rabbit Riot",
    role: "Music & Sound Design",
    downloads: "10K+",
    link: "https://play.google.com/store/apps/details?id=games.sugarfree.rabbitriot&pcampaignid=web_share",
    img: "/rabbit-riot.jpg",
  },
  {
    title: "Power Girls",
    role: "Music & Sound Design",
    downloads: "10M+",
    link: "https://play.google.com/store/apps/details?id=com.tutotoons.app.powergirlsfantasticheroes&pcampaignid=web_share",
    img: "/power-girls.jpg",
  },
];

export const experimentalMusic: ExperimentalMusic[] = [
  {
    title: "Binaural Cycle for Keyboard and Electronics",
    type: "playlist",
    description:
      "This four‑part, 35‑minute cycle explores the meeting point between rational structure and intuitive expression. Each piece begins from a state of harmonic balance, which is then shaped through a combinatorial process that defines the boundaries of form and material. From there, the music is refined intuitively — carved out like a sculptural object emerging from a single block.The work is designed for ambisonic performance in a spherical environment and for binaural listening through headphones, with the option to adapt it for live performance. The musical material is transformed using digital processing techniques such as glitch, stutter, delay, and reverb, highlighting the contrast between the music’s technocratic logic and its instinctive, expressive nature.",
    musicLink:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2247119267&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    behanceLink:
      "https://www.behance.net/gallery/244696051/Binaural-Cycle-for-Keyboard-and-Electronics",
  },
  {
    title: "Convergence (music from objects)",
    type: "track",
    description:
      "This work is built from recordings of a small metal ball being dropped into a metal pot and spun inside it. The resulting resonances, impacts, and rotational textures form the core material of the composition.",
    musicLink:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2332510796&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    behanceLink:
      "https://www.behance.net/gallery/244704117/Music-Created-from-Physical-Object",
  },
  {
    title: "Saw Blade music (music from objects)",
    type: "track",
    description:
      "This piece is created entirely from the sound of a diamond saw blade. The raw metallic resonance, friction tones, and percussive textures were recorded, processed, and transformed into a musical composition.",
    musicLink:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A959689612&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    behanceLink:
      "https://www.behance.net/gallery/244704117/Music-Created-from-Physical-Object",
  },
];
