import { Megaphone } from 'lucide-react';

const updates = [
  {
    title: 'Pengumuman Hasil Seleksi Beasiswa Daerah 2025',
    date: '4 Nov 2025',
    summary: 'Daftar penerima beasiswa tahap I telah dipublikasikan. Silakan cek portal pendidikan untuk informasi lengkap.',
    link: '#',
  },
  {
    title: 'Pemeliharaan Jalan Utama Pekan Ini',
    date: '2 Nov 2025',
    summary: 'Akan dilakukan penutupan sementara pada beberapa ruas. Mohon gunakan jalur alternatif dan perhatikan rambu petunjuk.',
    link: '#',
  },
  {
    title: 'Vaksinasi Massal Gratis di 10 Puskesmas',
    date: '30 Okt 2025',
    summary: 'Program vaksinasi influenza dimulai pekan ini. Bawa identitas diri dan datang sesuai jadwal wilayah masing-masing.',
    link: '#',
  },
];

export default function NewsUpdates() {
  return (
    <section id="informasi" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Megaphone className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Pengumuman & Berita</h2>
              <p className="text-slate-600">Informasi resmi terbaru dari pemerintah kota.</p>
            </div>
          </div>
          <a href="#" className="hidden sm:inline-flex text-blue-700 hover:underline">Arsip</a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {updates.map((u) => (
            <article key={u.title} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
              <p className="text-xs text-slate-500">{u.date}</p>
              <h3 className="mt-2 font-semibold text-slate-900">{u.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{u.summary}</p>
              <a href={u.link} className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline">
                Baca selengkapnya
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
