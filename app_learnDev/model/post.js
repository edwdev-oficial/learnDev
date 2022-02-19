import { Config } from "../config/config.js";

const Url = Config.Url();

export class Post {

    static async getPosts(_data) {

        const promise = await fetch(`${Url}/post/find`, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
        
        return promise.json();
        
        // headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }

    static async editPost(_data) {
        
        const promise = await fetch(`${Url}/post`,{
            method: 'PUT',
            body: JSON.stringify(_data),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });

        return promise.json();

    };

};