import PostsList from "./pages/PostsList";
import Post from "./pages/Post";

export const routes = [
    {
        path: '/posts',
        Component: PostsList
    },
    {
        path: '/post/:id',
        Component: Post
    }
]