import { Tema } from '../model/tema.js';
import { TopicoController } from './topicoController.js';

const header = document.querySelector('header');
const tema = header.querySelector('h1');

export class TemaController {

    async getTemas() {

        const data = await Tema.getTemas();

        metodo.printTemas(data.tema);

    };

    printTemas(temas) {

        metodo.removeTemas();

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

                const header = document.querySelector('h1');
                header.textContent = `LearnDev - ${ulTema.childNodes[0].textContent}`;
                header.setAttribute('class', element._id);

                if (ulTema.childNodes.length == 1) {
                    TopicoController.getTopicos(element._id);
                }else{
                    header.textContent = 'LearnDev';
                    header.classList.remove(...header.classList)
                    TopicoController.removeTopicos();
                };

            });

        });

    };

    startAddTema() {
        const btnAdd = document.querySelector('.altera-menu-mais');
        btnAdd.addEventListener('click', () => {
            if (tema.classList.length == 0) {
                metodo.addTema(tema);
            }
        });

    }

    startDeleteTema() {
        
        const btnDelete = document.querySelector('.altera-menu-menos')

        btnDelete.addEventListener('click', (target) => {

            if(tema.classList.length !== 0) {
                metodo.deleteTema(tema.classList[0]);
            };

        });
        
    }

    async addTema(tema) {
        const data = {
            nome: prompt('Informe o tema a ser criado')
        }

        const temas = await Tema.addTema(data)

        metodo.printTemas(temas)
    
    };

    async deleteTema(idTema) {

        const btnTema = document.getElementById(idTema)
        
        if(prompt('Confirme o nome do tema a ser excluido') == btnTema.innerHTML) {
            
            const data = {
                _id: idTema
            };

            tema.innerHTML = 'LearnDev';
            tema.classList.remove(...tema.classList);
            console.log(tema)

            const temas = await Tema.deteleTema(data);
            
            metodo.printTemas(temas);

        }else {
            alert('Nome divergente')
        };

    };

    removeTemas() {

        const temas = document.querySelectorAll('.ul-tema');

        if(temas.length > 0) {

            for(let i = temas.length -1; i>= 0; i--) {
                temas[i].remove();
            };

        };

    };

};

const metodo = new TemaController();
metodo.getTemas();
metodo.startAddTema();
metodo.startDeleteTema();