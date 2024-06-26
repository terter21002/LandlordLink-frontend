export interface Author {
  _id: string;
  username: string;
  avatar: string;
  job: string;
  summary: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface Comment {
  _id: string;
  content: string;
  commentAuthor: Author;
  createdAt: string;
}

export interface Blog {
  _id: string;
  image: string;
  title: string;
  category: Category;
  content: string;
  author: Author;
  postedAt: string;
  comments: Comment[];
  commentsCount: number;
}
