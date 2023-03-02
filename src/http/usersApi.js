import {$host} from "./index";

export const fetchUsers = async () => {
    const {data} = await $host.get('users')
    return data;
}
