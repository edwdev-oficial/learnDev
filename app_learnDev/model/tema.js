import { Config } from "../config/config.js";

const url = Config.Url();

export class Tema {

    static async getTemas() {

        const promise = await fetch(`${url}/tema`);

        return promise.json();

    };

    static async addTema(_data) {

        const promise = await fetch(`${url}/tema`, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return promise.json();

    };

    static async deteleTema(_data) {

        const response = await fetch(`${url}/tema`, {
            method: 'DELETE',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return response.json();

    };

};