export default function Navbar() {
  return (
    <nav className="px-4 md:px-10 py-4 bg-[var(--color-dark)] flex items-center justify-between">
      <span className="font-[var(--font-cormorant)] text-[#F2EFE8] text-xl tracking-[0.05em]">
        JS
      </span>
      <div className="flex gap-3 md:gap-8 mx-auto">
        {[
          { label: "About", href: "#about" },
          { label: "Game Audio", href: "#game-audio" },
          { label: "Music", href: "#music" },
          { label: "Contact", href: "#contact" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--color-text-muted)] cursor-pointer "
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
