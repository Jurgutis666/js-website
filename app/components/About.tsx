export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ background: "var(--color-sand)" }}
    >
      <div className="px-10 py-16">
        <span
          style={{
            fontSize: "9px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#5a6e52",
          }}
        >
          About
        </span>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "40px",
            fontWeight: 300,
            color: "var(--color-text-dark)",
            marginTop: "12px",
            lineHeight: 1.1,
          }}
        >
          Sound designer &<br />
          performing musician
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 300,
            color: "var(--color-text-muted)",
            marginTop: "20px",
            lineHeight: 1.8,
            maxWidth: "400px",
          }}
        >
          I am a sound designer/musician with a master&apos;s degree in music
          composition and digital technologies, and five years of experience in
          the video game industry. My work focuses on music composition, sound
          effects design, and the use of AI-driven tools in audio production.
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 300,
            color: "var(--color-text-muted)",
            marginTop: "12px",
            lineHeight: 1.8,
            maxWidth: "400px",
          }}
        >
          Proficient in Reaper, Logic, Cubase, and Bitwig, with practical
          experience implementing audio in Unity, Wwise, and FMOD.
        </p>
      </div>
      <div className="px-10 py-16 flex flex-col justify-center gap-6">
        {[
          {
            label: "Education",
            value:
              "MA Music Composition & Digital Technologies\nLithuanian Academy of Music and Theatre. \n Bachelor’s Degree in Jazz Guitar \n Lithuanian Academy of Music and Theatre",
          },
          {
            label: "Experience",
            value:
              "Sound Designer — TutoToons (2021–2026)\nOrchestral Musician — Kaunas State Musical Theatre (2017–2022)\nFreelance Performer — Guitar (2015–present)",
          },
          {
            label: "Tools",
            value: "Reaper · Logic · Cubase · Bitwig\nUnity · Wwise · FMOD",
          },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              borderTop: "1px solid rgba(0,0,0,0.1)",
              paddingTop: "16px",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5a6e52",
                marginBottom: "6px",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                whiteSpace: "pre-line",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
