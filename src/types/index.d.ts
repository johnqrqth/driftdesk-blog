export interface UserType {
    id: number;
    name: string;
    username: string;
    profilePic?: string;

}
export interface PostType {
    id: number;
    title: string;
    body: string;
}
export interface CommentType {
    postId: number;
    id: number;
    email: string;
    body: string;
}