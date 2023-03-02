import {$host} from "./index";

export const fetchPosts = async () => {
    const {data} = await $host.get('posts')
    return data;
}
