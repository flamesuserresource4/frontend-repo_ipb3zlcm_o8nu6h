import { useState } from 'react';
import { Home, Menu, X, Phone, Globe } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Informasi', href: '#informasi' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2 text-slate-900 font-semibold">
            <Home className="h-6 w-6 text-blue-600" />
            <span>Pemerintah Kota Nusantara</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition">
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition"
            >
              <Phone className="h-4 w-4" /> Layanan Darurat
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" /> Layanan Darurat
              </a>
              <a
                href="https://indonesia.go.id/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
              >
                <Globe className="h-4 w-4" /> indonesia.go.id
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
