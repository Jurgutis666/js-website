const games = [
  { title: "Dopples World", role: "Music & Sound Design", downloads: "10M+" },
  { title: "Fluvsies", role: "Music & Sound Design", downloads: "100M+" },
  { title: "Smolsies 2", role: "Music & Sound Design", downloads: "10M+" },
  { title: "Kpopsies", role: "Music & Sound Design", downloads: "50M+" },
  { title: "Fruitsies", role: "Music & Sound Design", downloads: "10M+" },
  { title: "Power Girls", role: "Music & Sound Design", downloads: "10M+" },
];

export default function Work() {
  return (
    <>
      <section
        style={{ background: "var(--color-dark)", padding: "80px 40px" }}
      >
        <span
          style={{
            fontSize: "9px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-green-muted)",
          }}
        >
          Game Audio
        </span>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "40px",
            fontWeight: 300,
            color: "#F2EFE8",
            marginTop: "12px",
            marginBottom: "48px",
          }}
        >
          Selected works
        </h2>
        <div
          className="grid grid-cols-2 gap-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          {games.map((game) => (
            <div
              key={game.title}
              style={{ background: "var(--color-dark)", padding: "32px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#F2EFE8",
                }}
              >
                {game.title}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-green-muted)",
                  marginTop: "8px",
                }}
              >
                {game.role}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--color-text-muted)",
                  marginTop: "6px",
                }}
              >
                {game.downloads} downloads
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "32px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <a
            href="https://www.behance.net/jsfx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-green-muted)",
            }}
          >
            Full portfolio → Behance
          </a>
        </div>
      </section>
    </>
  );
}
