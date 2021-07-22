export interface User {
  email: string;
  password: string;
}

export interface VideoPlaylist {
  name: string;
  user_id: number;
  is_public: boolean;
}

export interface Video {
  name: string;
  playlist_id: number;
  url: string;
}

export interface Category {
  name: string;
  user_id: number;
  is_public: boolean;
}

export interface Training {
  name: string;
  category_id: number;
  description: string;
}
