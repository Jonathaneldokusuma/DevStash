const navigation = [
  { label: "Dashboard", icon: "dashboard", active: true },
  { label: "Assets", icon: "assets" },
  { label: "Scripts", icon: "scripts" },
  { label: "Audio", icon: "audio" },
  { label: "Uploads", icon: "uploads" },
  { label: "Settings", icon: "settings" },
];

const quickActions = [
  { label: "Unggah Aset", icon: "upload" },
  { label: "Skrip Baru", icon: "script" },
  { label: "Kategori Baru", icon: "folder" },
];

const recentAssets = [
  {
    title: "Auth_Middleware_V2.ts",
    description: "Protokol keamanan untuk sistem autentikasi dan route guard tim.",
    meta: "2 jam yang lalu",
    badge: "TypeScript",
    tone: "primary",
    art: "code",
  },
  {
    title: "Hero_Concept_Final.png",
    description: "Aset visual untuk landing page dan presentasi identitas project.",
    meta: "5 jam yang lalu",
    badge: "PNG • 4K",
    tone: "secondary",
    art: "waves",
  },
  {
    title: "Ambient_Engine_01.wav",
    description: "Efek suara latar untuk transisi UI dan preview dashboard.",
    meta: "Kemarin",
    badge: "WAV • HQ",
    tone: "tertiary",
    art: "bars",
  },
  {
    title: "App_Config_Production.json",
    description: "Pengaturan variabel lingkungan dan policy deployment produksi.",
    meta: "2 hari yang lalu",
    badge: "JSON",
    tone: "warm",
    art: "database",
  },
];

const heatmap = [
  [2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, 2, 2, 0, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0],
  [2, 0, 1, 0, 0, 1, 0, 0, 2, 1, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 2, 1, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 2, 1],
  [0, 2, 2, 1, 2, 0, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 1, 2, 0, 2, 0, 0, 1, 1, 0, 2, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 2, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0],
  [0, 1, 1, 2, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 2, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 0, 1, 1, 0],
  [2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1, 1, 0, 0, 2, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 2, 0, 1, 2, 0, 2, 0, 1, 0, 0, 0, 2, 0, 0, 1],
];

const monthLabels = ["Januari", "Maret", "Juni", "September", "Desember"];

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const baseProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "shield":
      return (
        <svg {...baseProps}>
          <path d="M12 3l7 3v6c0 4.7-3 7.8-7 9-4-1.2-7-4.3-7-9V6l7-3z" />
          <path d="M12 8v8" />
          <path d="M8.5 12H15.5" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...baseProps}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "assets":
      return (
        <svg {...baseProps}>
          <path d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 16.5v-9z" />
          <path d="M8 5V3.8A1.8 1.8 0 019.8 2h4.4A1.8 1.8 0 0116 3.8V5" />
          <path d="M4 10.5h16" />
        </svg>
      );
    case "scripts":
      return (
        <svg {...baseProps}>
          <path d="M7 8L3.5 12 7 16" />
          <path d="M17 8l3.5 4-3.5 4" />
          <path d="M10 19l4-14" />
        </svg>
      );
    case "audio":
      return (
        <svg {...baseProps}>
          <path d="M5 10v4" />
          <path d="M9 7v10" />
          <path d="M13 4v16" />
          <path d="M17 8v8" />
          <path d="M21 11v2" />
        </svg>
      );
    case "uploads":
      return (
        <svg {...baseProps}>
          <path d="M8 17a4 4 0 01.8-7.9A5.5 5.5 0 0119.2 11" />
          <path d="M12 9v8" />
          <path d="M8.8 12.2L12 9l3.2 3.2" />
        </svg>
      );
    case "settings":
      return (
        <svg {...baseProps}>
          <path d="M12 8.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5z" />
          <path d="M19.4 15a1 1 0 00.2 1.1l.1.1a2 2 0 010 2.8 2 2 0 01-2.8 0l-.1-.1a1 1 0 00-1.1-.2 1 1 0 00-.6.9V20a2 2 0 01-4 0v-.1a1 1 0 00-.6-.9 1 1 0 00-1.1.2l-.1.1a2 2 0 01-2.8 0 2 2 0 010-2.8l.1-.1a1 1 0 00.2-1.1 1 1 0 00-.9-.6H4a2 2 0 010-4h.1a1 1 0 00.9-.6 1 1 0 00-.2-1.1l-.1-.1a2 2 0 010-2.8 2 2 0 012.8 0l.1.1a1 1 0 001.1.2 1 1 0 00.6-.9V4a2 2 0 014 0v.1a1 1 0 00.6.9 1 1 0 001.1-.2l.1-.1a2 2 0 012.8 0 2 2 0 010 2.8l-.1.1a1 1 0 00-.2 1.1 1 1 0 00.9.6h.1a2 2 0 010 4h-.1a1 1 0 00-.9.6z" />
        </svg>
      );
    case "help":
      return (
        <svg {...baseProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.1 9.2a3 3 0 015.1 1.9c0 2-2.2 2.4-2.2 4" />
          <path d="M12 17.3h.01" />
        </svg>
      );
    case "docs":
      return (
        <svg {...baseProps}>
          <path d="M7 3.5h7l4 4V20a1 1 0 01-1 1H7a2 2 0 01-2-2V5.5a2 2 0 012-2z" />
          <path d="M14 3.5V8h4" />
          <path d="M9 12h6" />
          <path d="M9 16h6" />
        </svg>
      );
    case "search":
      return (
        <svg {...baseProps}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l4 4" />
        </svg>
      );
    case "bell":
      return (
        <svg {...baseProps}>
          <path d="M15 17H9a2 2 0 01-2-2v-3a5 5 0 0110 0v3a2 2 0 01-2 2z" />
          <path d="M10 20a2 2 0 004 0" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...baseProps}>
          <path d="M7 18a4 4 0 01.7-7.9A5.5 5.5 0 0118.8 12 3.2 3.2 0 0118 18H7z" />
          <path d="M12 9v5" />
          <path d="M9.8 11.2L12 9l2.2 2.2" />
        </svg>
      );
    case "upload":
      return (
        <svg {...baseProps}>
          <path d="M12 16V8" />
          <path d="M8.5 11.5L12 8l3.5 3.5" />
          <path d="M6 18.5h12" />
          <path d="M6 6.5h3" />
        </svg>
      );
    case "script":
      return (
        <svg {...baseProps}>
          <path d="M8 7h8" />
          <path d="M8 12h5" />
          <path d="M8 17h8" />
          <path d="M5 7h.01" />
          <path d="M5 12h.01" />
          <path d="M5 17h.01" />
        </svg>
      );
    case "folder":
      return (
        <svg {...baseProps}>
          <path d="M3 8.5A2.5 2.5 0 015.5 6H10l2 2h6.5A2.5 2.5 0 0121 10.5v6A2.5 2.5 0 0118.5 19h-13A2.5 2.5 0 013 16.5v-8z" />
          <path d="M12 11v5" />
          <path d="M9.5 13.5H14.5" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...baseProps}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

function AssetPreview({ art }: { art: string }) {
  if (art === "waves") {
    return (
      <div className="h-40 rounded-lg bg-[linear-gradient(180deg,rgba(11,19,38,0.35),rgba(11,19,38,0.65)),radial-gradient(circle_at_10%_80%,rgba(78,222,163,0.4),transparent_30%),linear-gradient(120deg,#131b2e_20%,#1e2a4f_45%,#0b1326_100%)] p-4">
        <div className="h-full w-full rounded-lg bg-[repeating-linear-gradient(105deg,transparent_0,transparent_10px,rgba(255,255,255,0.06)_10px,rgba(255,255,255,0.06)_12px)] opacity-40" />
      </div>
    );
  }

  if (art === "bars") {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg bg-[linear-gradient(180deg,#1d2740,#131b2e)]">
        <div className="flex items-end gap-2 text-tertiary">
          {[40, 68, 92, 56, 78].map((height) => (
            <span key={height} className="w-3 rounded-sm bg-current/90" style={{ height }} />
          ))}
        </div>
      </div>
    );
  }

  if (art === "database") {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg bg-[linear-gradient(180deg,#1f2942,#151c30)] text-[#b48b94]">
        <svg className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <ellipse cx="12" cy="6" rx="5.5" ry="2.5" />
          <path d="M6.5 6v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V6" />
          <path d="M6.5 10v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-40 items-center justify-center rounded-lg bg-[linear-gradient(180deg,#1b2440,#151c30)] text-primary">
      <div className="flex items-center gap-4 opacity-80">
        <span className="h-8 w-8 rotate-45 border-l-4 border-t-4 border-current" />
        <span className="h-8 w-8 -rotate-[135deg] border-l-4 border-t-4 border-current" />
      </div>
    </div>
  );
}

function HeatmapCell({ value }: { value: number }) {
  const classes = ["bg-white/5", "bg-[#6f7298]", "bg-[#cbc4ff]"];
  return <span className={`h-4 w-4 rounded-[4px] ${classes[value]}`} />;
}

export function DashboardShell() {
  return (
    <div className="min-h-screen bg-background bg-vault text-text">
      <aside className="glass-panel relative z-20 flex min-h-screen flex-col border-r border-white/5 px-5 py-4 lg:fixed lg:inset-y-0 lg:left-0 lg:w-72">
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primaryStrong text-white shadow-[0_10px_24px_rgba(79,70,229,0.3)]">
            <Icon name="shield" className="h-6 w-6" />
          </div>
          <div>
            <p className="font-display text-[2rem] font-bold leading-none tracking-tight text-primary">DevStash</p>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-muted/70">Secure Vault</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.label}
              className={
                item.active
                  ? "flex items-center gap-3 border-r-4 border-primary bg-primaryStrong/20 px-4 py-4 font-mono text-[0.95rem] tracking-[0.08em] text-primary"
                  : "flex items-center gap-3 px-4 py-4 font-mono text-[0.95rem] tracking-[0.08em] text-muted transition hover:bg-white/5 hover:text-text"
              }
              href="#"
            >
              <Icon name={item.icon} className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-1 pt-8">
          <a className="flex items-center gap-3 rounded-lg px-4 py-3 font-mono text-sm tracking-[0.08em] text-muted transition hover:bg-white/5 hover:text-text" href="#">
            <Icon name="help" className="h-5 w-5" />
            <span>Help</span>
          </a>
          <a className="flex items-center gap-3 rounded-lg px-4 py-3 font-mono text-sm tracking-[0.08em] text-muted transition hover:bg-white/5 hover:text-text" href="#">
            <Icon name="docs" className="h-5 w-5" />
            <span>Documentation</span>
          </a>

          <div className="glass-panel mt-4 rounded-xl p-4">
            <button
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-primaryStrong px-4 py-4 font-mono text-sm uppercase tracking-[0.16em] text-white transition hover:bg-[#5d55eb]"
              type="button"
            >
              <span className="text-lg leading-none">+</span>
              <span>New Asset</span>
            </button>
          </div>
        </div>
      </aside>

      <main className="relative lg:pl-72">
        <header className="sticky top-0 z-10 border-b border-white/5 bg-surfacePanel/30 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 md:px-6">
            <div className="relative max-w-xl flex-1">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted/70">
                <Icon name="search" className="h-5 w-5" />
              </span>
              <input
                className="w-full rounded-lg border border-white/5 bg-surfacePanelHighest/20 py-2.5 pl-10 pr-4 font-mono text-sm text-text outline-none transition placeholder:text-muted/45 focus:border-primary/35 focus:bg-surfacePanelHighest/35"
                placeholder="Cari aset..."
                type="text"
              />
            </div>

            <div className="flex items-center gap-1 text-muted">
              <button className="rounded-full p-2.5 transition hover:bg-white/5 hover:text-text" type="button">
                <Icon name="bell" className="h-5 w-5" />
              </button>
              <button className="rounded-full p-2.5 transition hover:bg-white/5 hover:text-text" type="button">
                <Icon name="cloud" className="h-5 w-5" />
              </button>
              <div className="mx-2 hidden h-8 w-px bg-white/10 md:block" />
              <div className="hidden items-center gap-3 md:flex">
                <div className="text-right">
                  <p className="font-mono text-sm font-bold tracking-[0.08em] text-text">Admin_Dev</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">Premium Account</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,#334155,#0f172a)] text-sm font-semibold text-white">
                  JD
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-6">
          <section className="grid gap-5 xl:grid-cols-[2.15fr_1fr]">
            <div className="glass-panel rounded-xl p-7">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h1 className="font-display text-4xl font-bold tracking-tight text-text">Ikhtisar Penyimpanan</h1>
                  <p className="mt-2 text-base text-muted">4.2 GB dari 10 GB telah digunakan</p>
                </div>
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primaryStrong/15 px-4 py-2 font-mono text-sm tracking-[0.12em] text-primary">
                  42% Kapasitas
                </span>
              </div>

              <div className="space-y-8 font-mono text-sm">
                {[
                  { label: "Skrip & Dokumentasi", value: "1.2 GB", width: "w-[30%]", bar: "bg-primary" },
                  { label: "Aset Gambar & UI", value: "2.4 GB", width: "w-[55%]", bar: "bg-secondary" },
                  { label: "Library Audio", value: "0.6 GB", width: "w-[15%]", bar: "bg-tertiary" },
                ].map((item) => (
                  <div key={item.label} className="space-y-3">
                    <div className="flex items-center justify-between text-muted">
                      <span>{item.label}</span>
                      <span className="font-semibold text-text">{item.value}</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-surfacePanelHighest/35">
                      <div className={`h-full ${item.width} ${item.bar} shadow-[0_0_14px_rgba(195,192,255,0.28)]`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="glass-panel rounded-xl p-7">
              <h2 className="font-display text-4xl font-bold tracking-tight text-text">Aksi Cepat</h2>
              <div className="mt-8 space-y-4">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    className="flex w-full items-center gap-4 rounded-lg bg-white/[0.03] px-5 py-5 text-left transition hover:bg-white/[0.06]"
                    type="button"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-surfacePanelHighest/30 text-primary">
                      <Icon name={action.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-2xl font-medium text-text">{action.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3">
                {[
                  { initials: "JD", bg: "bg-[#5b4def]" },
                  { initials: "AS", bg: "bg-[#0ea778]" },
                  { initials: "ML", bg: "bg-[#0e74b5]" },
                ].map((user) => (
                  <span
                    key={user.initials}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-background font-mono text-sm font-bold text-white ${user.bg}`}
                  >
                    {user.initials}
                  </span>
                ))}
                <span className="text-xl text-muted">+3 Kolaborator Aktif</span>
              </div>
            </aside>
          </section>

          <section className="mt-8">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-text">Terakhir Disimpan</h2>
              <a className="flex items-center gap-2 font-mono text-sm tracking-[0.14em] text-primary transition hover:text-white" href="#">
                <span>Lihat Semua</span>
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {recentAssets.map((asset) => (
                <article key={asset.title} className="glass-panel overflow-hidden rounded-xl transition hover:-translate-y-1 hover:border-primary/25">
                  <AssetPreview art={asset.art} />
                  <div className="space-y-4 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={
                          asset.tone === "secondary"
                            ? "rounded-sm bg-secondary/15 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-secondary"
                            : asset.tone === "tertiary"
                              ? "rounded-sm bg-tertiary/15 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-tertiary"
                              : asset.tone === "warm"
                                ? "rounded-sm bg-[#b48b94]/15 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[#d3a9b2]"
                                : "rounded-sm bg-primary/15 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-primary"
                        }
                      >
                        {asset.badge}
                      </span>
                      <span className="font-mono text-sm text-muted">{asset.meta}</span>
                    </div>

                    <div>
                      <h3 className="truncate font-display text-[2rem] font-semibold tracking-tight text-text">{asset.title}</h3>
                      <p className="mt-2 line-clamp-2 text-lg leading-8 text-muted">{asset.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="glass-panel mt-8 rounded-xl p-7">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h2 className="font-display text-[2.4rem] font-bold tracking-tight text-text">Aktivitas Vault</h2>
              <div className="flex items-center gap-3 font-mono text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  Sedikit
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                  Banyak
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="grid min-w-[880px] gap-2">
                {heatmap.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-2">
                    {row.map((value, columnIndex) => (
                      <HeatmapCell key={`${rowIndex}-${columnIndex}`} value={value} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-5 font-mono text-sm text-muted">
              {monthLabels.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
