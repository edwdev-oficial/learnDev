import { Config } from "../config/config.js";

const url = Config.Url();

export class Subtopico {

    static async getTopicos(topico) {

        const response = await fetch(`${url}/subtopico/find`, {
            method: 'POST',
            body: JSON.stringify(topico),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return response.json();

    };

};