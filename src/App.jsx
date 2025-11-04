import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import NewsUpdates from './components/NewsUpdates';

function Footer() {
  return (
    <footer id="kontak" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="font-semibold text-slate-900">Pemerintah Kota Nusantara</h4>
            <p className="mt-2 text-sm text-slate-600">
              Melayani masyarakat dengan integritas, akuntabilitas, dan inovasi.
            </p>
          </div>
          <div>
            <h5 className="font-medium text-slate-900">Alamat</h5>
            <p className="mt-2 text-sm text-slate-600">
              Jl. Merdeka No. 1, Nusantara 12345
              <br />
              Telepon: (021) 555-0112
            </p>
          </div>
          <div>
            <h5 className="font-medium text-slate-900">Jam Layanan</h5>
            <p className="mt-2 text-sm text-slate-600">Senin - Jumat: 08.00 - 16.00 WIB</p>
            <p className="text-sm text-slate-600">Sabtu, Minggu & Hari Libur: Tutup</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Pemerintah Kota Nusantara. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-700">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-700">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
}
