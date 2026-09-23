export default function Privacy() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-blue-500">Privacy Policy</h1>

        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            This application is a personal-use OAuth client for accessing Google
            services (Gmail, Calendar, Contacts, Drive) via the gog CLI tool.
          </p>

          <div className="space-y-2">
            <h2 className="text-slate-300 font-semibold">Data Collection and Use</h2>
            <p>
              This application requests access to your Google account data solely
              for personal use (reading emails, managing calendar events, contacts,
              and files). No data is collected, stored, or shared with third parties.
              Authentication tokens are stored locally on your personal device only.
              No analytics, tracking, or advertising is performed.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-slate-300 font-semibold">Data Storage</h2>
            <p>
              OAuth refresh tokens are stored securely on your local machine. No
              data is transmitted to any server other than Google&apos;s own APIs.
            </p>
          </div>
        </div>

        <footer className="pt-12 text-slate-600 text-sm">© 2026</footer>
      </div>
    </main>
  );
}
