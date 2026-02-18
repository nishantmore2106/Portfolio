export default function Footer() {
  return (
    <footer
      className="relative z-10 py-12"
      style={{ borderTop: "1px solid hsl(var(--border))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div
            className="font-black text-xl text-foreground"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
          >
            Nishant More
          </div>

          {/* Email */}
          <a
            href="mailto:nishant@example.com"
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            nishantmore087@gmail.com
          </a>

          {/* Socials */}
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Fiverr"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8"
          style={{ borderTop: "1px solid hsl(var(--border))" }}
        >
          <p className="text-muted-foreground text-xs">
            © 2025 Nishant More. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            AI Landing Page Designer &amp; Builder
          </p>
        </div>
      </div>
    </footer>
  );
}
