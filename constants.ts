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
    title: 'The Examined Life in the Digital Age',
    date: '2024-05-12',
    description: 'Why introspection is the only algorithm that matters.',
    content: `The unexamined life is not worth living. In an era where our attention is algorithmically harvested, this ancient maxim holds more weight than ever. We scroll, we consume, we react. But do we think?

To live an examined life today means to step back from the feed. It means curating your inputs as rigorously as a museum curator. It requires the silence necessary to hear your own thoughts above the noise of the crowd.

True wisdom comes not from the accumulation of data, but from the synthesis of experience into frameworks that withstand the test of reality.`
  },
  {
    id: '2',
    slug: 'minimalism-as-function',
    title: 'Minimalism as a Function of Clarity',
    date: '2024-04-28',
    description: 'Removing the noise to find the signal in design and thought.',
    content: `Minimalism is often mistaken for an aesthetic choice. It is not. It is a cognitive necessity. When we strip away the superfluous, we are left with the essential.

In code, in design, and in writing, every element must fight for its existence. If it does not serve the core purpose, it is a distraction. The beauty of a blank page is not its emptiness, but its potential for pure signal.`
  },
  {
    id: '3',
    slug: 'iterative-philosophy',
    title: 'Iterative Philosophy',
    date: '2024-03-15',
    description: 'Treating beliefs like software: deploy, test, refactor.',
    content: `We often view our beliefs as statues—stone monuments to be defended. I prefer to view them as software. They are versioned. They have bugs. They require patches.

When a belief encounters a contradiction in the real world, do not defend the bug. Refactor the code. This is the essence of the scientific method applied to the soul. 

v1.0 of your worldview was likely inherited. v2.0 is what you build when you start asking "Why?".`
  },
  {
    id: '4',
    slug: 'silence',
    title: 'The API of Silence',
    date: '2024-02-10',
    description: 'How to listen when the world won\'t stop talking.',
    content: `Silence is an interface. It is the only protocol that allows for full-duplex communication with oneself. Without it, we are merely repeaters of other people's signals.`
  }
];
