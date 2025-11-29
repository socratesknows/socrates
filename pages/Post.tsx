import React from 'react';
import { BlogPost } from '../types';

interface PostProps {
  post: BlogPost;
  onBack: () => void;
}

export const Post: React.FC<PostProps> = ({ post, onBack }) => {
  return (
    <article className="animate-in slide-in-from-bottom-4 duration-500 fade-in">
      <button 
        onClick={onBack}
        className="font-mono text-xs text-neutral-500 mb-8 hover:text-white transition-colors flex items-center gap-2"
      >
        ← Back
      </button>
      
      <header className="mb-10">
        <time className="font-mono text-xs text-neutral-500 block mb-3">
          {post.date}
        </time>
        <h1 className="text-3xl font-medium text-white tracking-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-neutral-400 font-light">
          {post.description}
        </p>
      </header>

      <div className="prose prose-invert prose-neutral max-w-none text-neutral-300 leading-8">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};
