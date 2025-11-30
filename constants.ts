import { BlogPost } from './types';

export const BLOG_TITLE = "Socrates";
export const TWITTER_HANDLE = "@socrateslater";
export const TWITTER_URL = "https://twitter.com/socrateslater";

export const ABOUT_TEXT = `this is my public notebook — a way to refine how i see the world and test whether my frameworks actually hold up.

if what i write sharpens your thinking, that's great. if not, it's already done its job for me.`;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'the-examined-life',
    title: 'the concept of systems ',
    date: '2025-11-29',
    description: 'building iterated machines that guide you in achieving things',
    content: ` to acheive your goals, it's important you build systems.

  },
];
