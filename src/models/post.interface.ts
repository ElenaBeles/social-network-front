export interface Post {
    id: number;
    text: string;
    created_at: Date;
    photo?: string;
    likes_count?: number;
}