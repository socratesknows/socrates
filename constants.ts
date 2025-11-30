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
    title: 'the concept of overthinking',
    date: '2025-11-29',
    description: 'the hard to control recursive evaluation of false justification',
    content: `the whole concept of overthinking is based on the foundation of false justification. you're in this constant iterated loop of trying to escape the task at hand by making
    unreasonable statements in your mind.
    

the simplest solution is by simply starting, i think the "fuck it" method works best here. whenever you feel yourself overthinking and finding reasons to skip the task at hand, simply say
"fuck it" and start doing it. gradually, the task will become easier, and you will find yourself making progress

a common trigger for overthinking is overcomplicating. it's a pretty simple fix that takes some time to perfect.

"simplify"

through the process of breaking down complex tasks into simpler, more achievable bits, you're creating a system for success.`
  },
];
