import { Config } from "../config/config.js";

const url = Config.Url();

export class Tema {

    static async getTemas() {

        const promise = await fetch(`${url}/tema`);

        return promise.json();

    }

}