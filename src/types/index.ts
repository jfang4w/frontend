export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  following: number;
  followers: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  coverImage: string;
  author: User;
  publishedAt: string;
  readTime: number;
  likes: number;
  isSeries: boolean;
  seriesName?: string;
}

export interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: string;
}

export interface Chat {
  id: string;
  participants: User[];
  messages: Message[];
  isGroup: boolean;
  name?: string;
}