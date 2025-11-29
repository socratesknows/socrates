import React from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

interface ArchiveProps {
  onReadPost: (post: BlogPost) => void;
}

export const Archive: React.FC<ArchiveProps> = ({ onReadPost }) => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 fade-in">
      <div className="space-y-12">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            className="group cursor-pointer"
            onClick={() => onReadPost(post)}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h2 className="text-xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                {post.title}
              </h2>
              <time className="font-mono text-xs text-neutral-600 mt-1 sm:mt-0 whitespace-nowrap">
                {post.date}
              </time>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
              {post.description}
            </p>
          </article>
        ))}
      </div>
      
      <div className="mt-24 pt-8 border-t border-neutral-900 text-center">
        <p className="font-mono text-xs text-neutral-700">End of Archive</p>
      </div>
    </div>
  );
};
