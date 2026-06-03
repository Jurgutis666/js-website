import Image from "next/image";

const albums = [
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
    url: "https://www.discogs.com/release/29904949",
  },
];

const videos = [
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

export default function Music() {
  return (
    <>
      <section
        style={{ background: "var(--color-sand)", padding: "80px 40px" }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#5a6e52",
          }}
        >
          Music
        </span>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "40px",
            fontWeight: 300,
            color: "var(--color-text-dark)",
            marginTop: "12px",
            marginBottom: "48px",
          }}
        >
          Live & Discography
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5a6e52",
                marginBottom: "16px",
              }}
            >
              Live performances
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {videos.map((video) => (
                <figure key={video.title}>
                  {video.type === "lrt" ? (
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={video.thumbnail!}
                        alt={video.title}
                        width={640}
                        height={360}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: 0,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        src={video.embedUrl}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        allowFullScreen
                      />
                    </div>
                  )}
                </figure>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5a6e52",
                marginBottom: "16px",
              }}
            >
              Discography
            </div>
            {albums.map((album) => (
              <a
                key={album.title}
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  textDecoration: "none",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "var(--color-text-dark)",
                    }}
                  >
                    {album.title}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 300,
                      color: "var(--color-text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    {album.artist}
                  </div>
                </div>
                <span
                  style={{ fontSize: "11px", color: "var(--color-text-muted)" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
