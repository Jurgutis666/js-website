import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "420px" }}
      >
        <div className="flex flex-col justify-center gap-4 px-10 py-16">
          <span
            style={{
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5a6e52",
            }}
          >
            Vilnius · Lithuania
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--color-text-dark)",
            }}
          >
            Jurgis
            <br />
            Sakalauskas
          </h1>
          <div
            style={{
              width: "36px",
              height: "1px",
              background: "var(--color-text-dark)",
              opacity: 0.25,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "16px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--color-text-green)",
              lineHeight: 1.6,
            }}
          >
            Musician · Sound Designer
            <br />· Video Game Composer
          </p>
        </div>
        <div
          className="min-h-[400px] "
          style={{
            background: "var(--color-sand-dark)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/photo-1.jpg"
            alt="Jurgis Sakalauskas"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(100%) contrast(1.05) brightness(0.9)",
            }}
          />
        </div>
      </section>
      <div
        className="flex flex-wrap gap-10 px-10 py-5 justify-center"
        style={{ background: "var(--color-dark)" }}
      >
        {[
          { num: "10+", label: "games" },
          { num: "5+", label: "years game audio experience" },
          { num: "100M+", label: "downloads" },
          { num: "MA", label: "music composition" },
        ].map((stat, i) => (
          <>
            {i > 0 && (
              <div
                key={`d${i}`}
                style={{
                  width: "1px",
                  height: "40px",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
            )}
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#F2EFE8",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginTop: "2px",
                }}
              >
                {stat.label}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
