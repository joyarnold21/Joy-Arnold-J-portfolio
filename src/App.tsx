/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { developerProfile, projects } from './data/portfolioData';

// Component to handle hash navigation & page scroll on route change
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        <ScrollManager />
        
        {/* Navigation Bar */}
        <Navbar profile={developerProfile} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage profile={developerProfile} projects={projects} />}
            />
            <Route
              path="/project/:id"
              element={<ProjectDetailPage projects={projects} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Minimalist Footer */}
        <Footer profile={developerProfile} />
      </div>
    </BrowserRouter>
  );
}
