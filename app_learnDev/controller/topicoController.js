import { Topico } from "../model/topico.js";
// import { Subtopico } from "../model/subtopico.js";
import { SubtopicoController } from "./subtopicoController.js";

export class TopicoController {

    static async getTopicos(idTema) {

        const _data = {
            tema: idTema
        };

        const data = await Topico.getTopicos(_data);

        metodo.printTopicos(idTema, data.topico);        

    };

    printTopicos(idTema, subtopicos) {

        TopicoController.removeTopicos();
        
        const liTema = document.getElementById(`${idTema}`);
        const ulTema = liTema.parentNode;

        let cor;
        let indice;

        if (liTema.classList.contains('claro') == true) {
            indice = 1;
        }else{
            indice = 0;
        }

        subtopicos.map((element) => {
            
            if (indice % 2 == 0) {
                cor = 'claro';
            }else {
                cor = 'escuro';
            }

            const liTopico = document.createElement('li');
            liTopico.classList.add('li-topico', cor);
            liTopico.setAttribute('id', element._id);
            liTopico.textContent = element.nome;

            ulTema.appendChild(liTopico);

            indice ++;

            liTopico.addEventListener('click', () => {
                const header = document.querySelector('h1')
                header.textContent = 'LearnDev' + ' - ' + liTema.textContent + ' - ' + liTopico.textContent
                SubtopicoController.getSubTopicos(element._id);
            
            });

        });

    };

    static removeTopicos() {

        const liTopicos = document.querySelectorAll('.li-topico') 

        for (let i = liTopicos.length - 1; i>=0; i--) {
            liTopicos[i].remove();
        };

    };

};

const metodo = new TopicoController();
