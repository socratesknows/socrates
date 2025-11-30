import { BlogPost } from './types';

export const BLOG_TITLE = "Socrates";
export const TWITTER_HANDLE = "@socrateslater";
export const TWITTER_URL = "https://twitter.com/socrateslater";

export const ABOUT_TEXT = `This is my public notebook — a way to refine how I see the world and test whether my frameworks actually hold up.

If what I write sharpens your thinking, that's great. If not, it's already done its job for me.`;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'the-examined-life',
    title: 'the concept of overthinking',
    date: '2025-11-29',
    description: 'the hard to control recursive evaluation of false justification',
    content: ``
  },
];
