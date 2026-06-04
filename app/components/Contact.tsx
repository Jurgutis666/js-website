import { contacts } from "@/data/data";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        style={{
          background: "var(--color-dark)",
          padding: "20px 40px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#F2EFE8",
            fontSize: "20px",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          contacts
        </div>
        <div>
          {contacts.map((contact) => (
            <div
              key={contact.label}
              style={{
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginTop: "2px",
              }}
            >
              <span>{contact.label}: </span>
              <a target="_blank" rel="noopener noreferrer" href={contact.value}>
                {contact.display}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
