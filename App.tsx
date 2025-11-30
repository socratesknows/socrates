import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Archive } from './pages/Archive';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Post } from './pages/Post';
import { SocratesChat } from './components/SocratesChat';
import { PageView, BlogPost } from './types';
import { BLOG_POSTS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<PageView>(PageView.ARCHIVE);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, activePost]);

  const handleNavigate = (newView: PageView) => {
    setView(newView);
    if (newView !== PageView.POST) {
      setActivePost(null);
    }
  };

  const handleReadPost = (post: BlogPost) => {
    setActivePost(post);
    setView(PageView.POST);
  };

  const renderContent = () => {
    switch (view) {
      case PageView.ABOUT:
        return <About />;
      case PageView.CONTACT:
        return <Contact />;
      case PageView.POST:
        return activePost ? (
          <Post post={activePost} onBack={() => handleNavigate(PageView.ARCHIVE)} />
        ) : (
          <Archive onReadPost={handleReadPost} />
        );
      case PageView.ARCHIVE:
      default:
        return <Archive onReadPost={handleReadPost} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 px-6 py-4 md:py-8 font-sans antialiased selection:bg-neutral-800 selection:text-white">
      <div className="max-w-2xl mx-auto pb-20">
        <Header currentView={view} onNavigate={handleNavigate} />
        <main>
          {renderContent()}
        </main>
        
        <footer className="mt-32 border-t border-neutral-900 pt-8 flex justify-between items-center text-xs text-neutral-600 font-mono">
           <span>© {new Date().getFullYear()} socrates</span>
           <span>est. 2025</span>
        </footer>
      </div>
      <SocratesChat />
    </div>
  );
};

export default App;
