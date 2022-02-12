import { Config } from "../config/config.js";

const url = Config.Url();

export class Topico {

    static async getTopicos(data) {

        const promise = await fetch(`${url}/topico/find`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return promise.json();

    }

};