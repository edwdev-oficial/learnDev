import { Subtopico } from "../model/subtopico.js";
import { PostController } from "./postController.js";
import { ModalController } from "./modalController.js";

export class SubtopicoController {

    static async getSubTopicos(topico) {
        
        const _data = {
            topico: topico
        };

        const data = await Subtopico.getTopicos(_data)
        
        metodo.printSubTopico(data.subtopico);

    };

    printSubTopico(subtopico) {
        
        const subtopicos = document.querySelector('.subtopicos');

        metodo.removeSubtopicos();

        subtopico.map((element) => {
            // console.log(element)
            const subtopico = document.createElement('div');
            subtopico.classList.add('subtopico');
            subtopico.setAttribute('id', element._id);
            // console.log(subtopico)
            const itemSe = document.createElement('div');
            itemSe.classList.add('item', 's-e');
            const itemSd = document.createElement('div');
            itemSd.classList.add('item', 's-d');
            const itemBt = document.createElement('div');
            itemBt.classList.add('item', 'b-t');
            const subTopicoNome = document.createElement('h2');
            subTopicoNome.textContent = `${element.order}. ${element.nome}`;
            const comment = document.createElement('p');
            comment.textContent = element.comment;

            itemSe.appendChild(subTopicoNome);
            itemSe.appendChild(comment);
            subtopico.appendChild(itemSe);
            subtopico.appendChild(itemSd);
            subtopico.appendChild(itemBt);
            // console.log(subtopico)
            subtopicos.appendChild(subtopico);

            subTopicoNome.addEventListener('click', (target) => {
                metodo.abrirModal()
            });

            PostController.getPosts(element._id, element.codepen);

            
        });

        
        ModalController.printSubTopicos(subtopico);
        
    };
    
    abrirModal() {
        
        let modal = document.querySelector('.container-modal')
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