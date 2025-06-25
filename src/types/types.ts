// types.ts
export interface User {
    id: number;
    name: string;
    avatar: string;
    password: string;
  }
  
  export interface Comment {
    id: number;
    user: User;
    text: string;
    replies: Comment[];
  }
  
  export interface Post {
    id: number;
    user: User;
    content: string;
    image: string | null;
    comments: Comment[];
    likes: number[];
  }