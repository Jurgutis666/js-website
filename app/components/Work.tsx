import Image from "next/image";
import { games } from "@/data/data";

export default function Work() {
  return (
    <>
      <section
        id="game-audio"
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
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          {games.map((game) => (
            <li
              key={game.title}
              style={{
                background: "var(--color-dark)",
                padding: "32px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
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

              <div>
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={game.img}
                    alt={game.title}
                    width={100}
                    height={100}
                    style={{
                      borderRadius: "20px",
                    }}
                  />
                </a>
              </div>
            </li>
          ))}
        </ul>
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
