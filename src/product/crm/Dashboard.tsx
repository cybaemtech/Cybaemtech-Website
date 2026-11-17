import { useEffect, useState } from "react";
import { getEmails, NotifyEmail } from "./database";
import logo from "@/assets/cybaem-logo.png"; // Import logo

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [emails, setEmails] = useState<NotifyEmail[]>([]);

  useEffect(() => {
    getEmails().then(data => setEmails(data));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-slate-200">
          <img src={logo} alt="CybaemTech Logo" className="h-8 object-contain" />
        </div>
        
        {/* Nav Links */}
        <div className="flex-1 py-6 px-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">Menu</div>
          <nav className="flex flex-col gap-2">
            <a href="#" className="flex items-center px-3 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold">
              <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Emails Section
            </a>
            {/* Can add more links here later */}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-slate-200">
          <button
            onClick={onLogout}
            className="flex items-center w-full px-4 py-3 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 relative">
        <div className="max-w-5xl mx-auto relative z-10 pt-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Notification Emails
            </h1>
            <p className="text-slate-500 mt-2">Manage your "Coming Soon" notification subscribers.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-white">
              <h2 className="text-lg font-semibold text-slate-800">Total Subscribers: {emails.length}</h2>
              <button 
                className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-sm font-medium transition-colors flex items-center shadow-sm"
                onClick={() => {
                  const csvContent = "data:text/csv;charset=utf-8," + 
                    "ID,Email,Timestamp\n" + 
                    emails.map(e => `${e.id},${e.email},${e.timestamp}`).join("\n");
                  const encodedUri = encodeURI(csvContent);
                  const link = document.createElement("a");
                  link.setAttribute("href", encodedUri);
                  link.setAttribute("download", "subscribers.csv");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export CSV
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 border-b border-slate-200 font-semibold text-slate-500 text-sm">ID</th>
                    <th className="p-4 border-b border-slate-200 font-semibold text-slate-500 text-sm">Email Address</th>
                    <th className="p-4 border-b border-slate-200 font-semibold text-slate-500 text-sm">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.length > 0 ? (
                    emails.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                        <td className="p-4 text-sm text-slate-500 font-mono">#{item.id.split('-')[0]}</td>
                        <td className="p-4 font-medium text-slate-900">{item.email}</td>
                        <td className="p-4 text-sm text-slate-500">
                          {new Date(item.timestamp).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-16 text-center text-slate-500 border-0">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-200">
                            <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-lg font-medium text-slate-700 mb-1">No emails collected yet.</p>
                          <p className="text-sm">When users submit their email, they will appear here.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
