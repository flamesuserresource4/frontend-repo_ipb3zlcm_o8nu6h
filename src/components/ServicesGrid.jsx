import { Building2, FileText, ShieldCheck, Phone } from 'lucide-react';

const services = [
  {
    title: 'Administrasi Kependudukan',
    desc: 'Pengurusan KTP-el, Kartu Keluarga, akta kelahiran, dan dokumen kependudukan lainnya.',
    icon: ShieldCheck,
    link: '#',
  },
  {
    title: 'Perizinan & Investasi',
    desc: 'Layanan perizinan berusaha, NIB, UMKM, serta informasi peluang investasi.',
    icon: Building2,
    link: '#',
  },
  {
    title: 'Dokumen Publik',
    desc: 'Akses dokumen resmi: Peraturan Daerah, SK Wali Kota, dan laporan kinerja.',
    icon: FileText,
    link: '#',
  },
  {
    title: 'Nomor Darurat 112',
    desc: 'Tanggap darurat untuk kebakaran, bencana, dan kebutuhan mendesak lainnya.',
    icon: Phone,
    link: '#kontak',
  },
];

export default function ServicesGrid() {
  return (
    <section id="layanan" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Layanan Utama</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Akses cepat ke layanan prioritas yang paling sering digunakan oleh masyarakat.
            </p>
          </div>
          <a href="#informasi" className="hidden sm:inline-flex rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">
            Lihat Pengumuman
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon, link }) => (
            <a
              key={title}
              href={link}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-blue-700 group-hover:underline">
                Selengkapnya →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
