import { Topico } from "../model/topico.js";

export class TopicoController {

    static async getTopicos(idTema) {

        const _data = {
            tema: idTema
        };

        const data = await Topico.getTopicos(_data);

        metodo.printTopicos(idTema, data.topico);        

    }

    printTopicos(idTema, topicos) {

        TopicoController.removeTopicos();
        
        const liTema = document.getElementById(`${idTema}`);
        const ulTema = liTema.parentNode;
        
        topicos.map((element) => {
            
            const liTopico = document.createElement('li');
            liTopico.classList.add('li-topico', element._id);
            liTopico.textContent = element.nome;

            ulTema.appendChild(liTopico);

        });

    }

    static removeTopicos() {

        const liTopicos = document.querySelectorAll('.li-topico') 

        for (let i = liTopicos.length - 1; i>=0; i--) {
            liTopicos[i].remove();
        }

    }

};

const metodo = new TopicoController();
