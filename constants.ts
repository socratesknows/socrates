import { BlogPost } from './types';

export const BLOG_TITLE = "Socrates";
export const TWITTER_HANDLE = "@socrateslater";
export const TWITTER_URL = "https://twitter.com/socrateslater";

export const ABOUT_TEXT = `this is my public notebook — a way to refine how i see the world and test whether my frameworks actually hold up.

`;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'the-examined-life',
    title: 'the concept of systems ',
    date: '2025-11-29',
    description: 'building iterated machines that guide you in achieving things',
    content: ` to acheive your goals, it's important you build systems.
    
having goals gives you direction, while systems give you a path to get to those goals. systems work like machines. you trigger them, they crank out a whole bunch of processes, all
with the purpose of doing one thing, producing results in the form of a product.

how to build systems?

begin by defining your goal. what is it that you want? why do you want it?

after that, depending on the type of goal, you must build out processes. the key to building processes is by thinking about what it would take to achieve the goal. what resources do i require?
what steps must i take?

then split all the processes into smaller, less complex tasks. 

don't overcomplicate anything, create simple systems to achieve great goals. use your ambition as fuel to begin working. 

`

  },
];
