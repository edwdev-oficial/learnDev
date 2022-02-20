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

    static async createSubtopico(_data) {
        const response = await fetch(`${url}/subtopico`, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return response.json();
    }

    static async editSubtopic (_data) {
        const response = await fetch(`${url}/subtopico`, {
            method: 'PUT',
            body: JSON.stringify(_data),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });

        return response.json()

    }

    static async excluiSubtopico (_data) {

        const response = await fetch (`${url}/subtopico`, {
            method: 'DELETE',
            body: JSON.stringify(_data),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        return response.json();

    }

};