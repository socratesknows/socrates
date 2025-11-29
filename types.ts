export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string; // Markdown-like content
  slug: string;
}

export enum PageView {
  ARCHIVE = 'ARCHIVE',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  POST = 'POST',
}

export interface RouteState {
  view: PageView;
  postId?: string;
}
