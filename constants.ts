import { BlogPost } from './types';

export const BLOG_TITLE = "Socrates";
export const TWITTER_HANDLE = "@socrateslater";
export const TWITTER_URL = "https://twitter.com/socrateslater";

export const ABOUT_TEXT = `this is my public notebook — a way to refine how i see the world and test whether my frameworks actually hold up.

`;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'the-conept-of-systems',
    title: 'iteration',
    date: '2025-11-29',
    description: 'the correct way of learning and how to practice it',
    content: ` learning through iterated moves is the only optimal form of learning. if you are learning for the sole purpose of memorisation, you might as well
    not learn.


iteration means making constannt improvements in your system of learning through understanding what works and what doesn't. if you were to face an obstacle, someone who
iterates would learn from the obstacle, make changes in their system to optimise it so that the next time they face a similar obstacle, they know their way around it


iteration also opens up doors for creativity. 
    


`

  },
];
