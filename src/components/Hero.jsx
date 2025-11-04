import { ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              <ShieldCheck className="h-4 w-4" /> Pemerintahan Bersih & Melayani
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Portal Resmi Pemerintah Kota Nusantara
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Informasi layanan publik, pengumuman resmi, dan program prioritas untuk
              masyarakat. Transparan, cepat, dan mudah diakses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#layanan"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700"
              >
                Jelajahi Layanan
              </a>
              <a
                href="#informasi"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Lihat Pengumuman
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-[2px] shadow-lg">
              <div className="h-full w-full rounded-2xl bg-white p-6 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: 'Kependudukan', v: 'e-KTP, KK, Akta' },
                    { k: 'Perizinan', v: 'NIB, UMKM, Bangunan' },
                    { k: 'Kesehatan', v: 'Puskesmas, Rujukan' },
                    { k: 'Pendidikan', v: 'PPDB, Beasiswa' },
                    { k: 'Transportasi', v: 'Trayek, Parkir' },
                    { k: 'Keamanan', v: 'Darurat 112' },
                  ].map((item) => (
                    <div key={item.k} className="rounded-xl border border-slate-200 p-4">
                      <p className="text-xs text-slate-500">{item.k}</p>
                      <p className="font-semibold text-slate-800">{item.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-3xl" />
      </div>
    </section>
  );
}
