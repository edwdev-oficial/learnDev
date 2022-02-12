import { Tema } from '../model/tema.js';
import { TopicoController } from './topicoController.js';

export class TemaController {

    async getTemas() {

        const data = await Tema.getTemas();

        metodo.printTemas(data.tema)

    }

    printTemas(temas) {

        let index = 0;
        let cor;

        temas.map((element) => {

            if(index % 2 == 0) {
                cor = 'claro'
            }else{
                cor = 'escuro'
            };

            const sideBar = document.querySelector('.sidebar');
            const ulTema = document.createElement('ul');
            ulTema.classList.add('ul-tema');

            const liTema = document.createElement('li');
            liTema.classList.add('li-tema', cor);
            liTema.setAttribute('id', element._id);
            liTema.textContent = element.nome;

            ulTema.appendChild(liTema);
            sideBar.appendChild(ulTema);

            index ++;

            liTema.addEventListener('click', () => {

                // const liTopicos = document.querySelectorAll('.li-topico');

                if (ulTema.childNodes.length == 1) {
                    TopicoController.getTopicos(element._id);
                }else{
                    TopicoController.removeTopicos();
                }

            });

        });

    };

};

const metodo = new TemaController();
metodo.getTemas();