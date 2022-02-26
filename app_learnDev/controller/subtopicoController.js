import { Subtopico } from "../model/subtopico.js";
import { PostController } from "./postController.js";
import { ModalController } from "./modalController.js";

export class SubtopicoController {

    static async getSubTopicos(topico) {
        
        const _data = {
            topico: topico
        };

        const data = await Subtopico.getTopicos(_data)
        
        metodo.printSubTopico(data.subtopico, topico);

    };

    printSubTopico(subtopico, topico) {
        
        const subtopicos = document.querySelector('.subtopicos');

        metodo.removeSubtopicos();

        subtopico.map((element) => {

            const subtopico = document.createElement('div');
            subtopico.classList.add('subtopico');
            subtopico.setAttribute('id', element._id);
            const itemSe = document.createElement('div');
            itemSe.classList.add('item', 's-e');
            const itemSd = document.createElement('div');
            itemSd.classList.add('item', 's-d');
            const itemBt = document.createElement('div');
            itemBt.classList.add('item', 'b-t');
            const subTopicoNome = document.createElement('h2');
            subTopicoNome.classList.add(`topico-${topico}`);
            subTopicoNome.textContent = `${element.order}. ${element.nome}`;
            const comment = document.createElement('p');
            comment.textContent = element.comment;

            itemSe.appendChild(subTopicoNome);
            itemSe.appendChild(comment);
            subtopico.appendChild(itemSe);
            subtopico.appendChild(itemSd);
            subtopico.appendChild(itemBt);
            subtopicos.appendChild(subtopico);

            subTopicoNome.addEventListener('click', (event) => {
                metodo.abrirModal(event.target, element)
            });
            if (element.codepen)
                PostController.getPosts(element._id, element.codepen);

            
        });

        
        ModalController.printSubTopicos(subtopico);
        
    };
    
    abrirModal(target) {
        let idTopico = target.classList[0].replace('topico-', '');
        let modal = document.querySelector('.container-modal');
        // modal.setAttribute('id', idTopico);
        modal.style.zIndex = '2'

    }

    removeSubtopicos() {

        const subtopicos = document.querySelectorAll('.subtopico');

        for(let i = subtopicos.length - 1; i>=0; i--) {

            subtopicos[i].remove();

        };

    };

};

const metodo = new SubtopicoController();