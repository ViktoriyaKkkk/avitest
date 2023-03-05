import {$host} from "./index";

export const fetchComments = async (id) => {
    const {data} = await $host.get('posts/' + id + '/comments')
    return data;
}