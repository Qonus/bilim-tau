export interface Material {
    _id: string;
    author: string;
    title: string;
    description: string;
    likes: number;
    files: Blob[],
    tags: string[];
    created_at: Date;
  }
