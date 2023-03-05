import {$host} from "./index";

export const fetchTheNew = async (id) => {
    const {data} = await $host.get('posts/' + id)
    return data;
}
