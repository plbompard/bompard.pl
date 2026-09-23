export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-blue-500">gogcli-plb</span>
        </h1>
        <p className="text-lg text-slate-400">
          A personal-use CLI tool for accessing Google services
          (Gmail, Calendar, Contacts, Drive) via the Google API.
        </p>
      </div>

      <footer className="absolute bottom-8 text-slate-600 text-sm">
        © 2026
      </footer>
    </main>
  );
}
