import { Config } from "../config/config.js";

const url = Config.Url();

export class Post {

    static async getPosts(_data) {

        const promise = await fetch(`${url}/post/find`, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
        
        return promise.json();
        
    }

    static async editPost(_data) {
        
        const promise = await fetch(`${url}/post`,{
            method: 'PUT',
            body: JSON.stringify(_data),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });

        return promise.json();

    };

    static async createPost(_data) {

        const response = await fetch(`${url}/post`, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charse=UTF-8' }
        });

        return response.json();

    }

    static async excluiPost(_data) {

        const response = await fetch(`${url}/post`, {
            method: 'DELETE',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        }); 

        return response.json();

    }

};