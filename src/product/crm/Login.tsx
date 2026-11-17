import { useState } from "react";
import logo from "@/assets/cybaem-logo.png"; // Import logo

interface LoginProps {
  onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans p-4">
      {/* Brand Header */}
      <div className="mb-8 text-center">
        <img src={logo} alt="CybaemTech Logo" className="h-10 object-contain mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Admin Portal</h1>
        <p className="text-slate-500 text-sm mt-1">Sign in to manage your workspace</p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md p-8 bg-white border border-slate-200 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
            {error && <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 mt-2 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </div>
      
      <div className="mt-8 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} CybaemTech. All rights reserved.
      </div>
    </div>
  );
};
