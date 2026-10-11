import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-32 text-center">
      <div className="space-y-5 max-w-md">
        <span className="text-4xl font-mono font-bold text-emerald-400">404</span>
        <h1 className="text-2xl font-extrabold text-white">Page Not Found</h1>
        <p className="text-sm text-zinc-400">
          The page you are looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};
