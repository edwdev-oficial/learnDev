import { Post } from "../model/post.js";

const subtopicos = document.querySelectorAll('tr');
const tableSubtopicos = document.querySelector('.table-subtopicos');
const seModal = document.querySelector('.s-e-modal');
let tr,
    tbody, 
    tdSubtopico,
    td, 
    cor;

export class ModalController {

    alteraPosictionSubTopic() {

        subtopicos.forEach((subtopico) => {
            // console.log(subtopico)
        })
        // subtopico.addEventListener('click', () => {
        //     console.log('Clicou em uma linha')
        // })
    }

    static printSubTopicos(subtopicos) {

        subtopicos.forEach((subtopico) => {

            if(subtopico.order % 2 == 0) {
                cor = 'escuro'
            }else {
                cor = 'claro'
            };

            tbody = document.createElement('tbody');
            tr = document.createElement('tr');
            tr.setAttribute('draggable', true);
            tr.classList.add(cor)

            tdSubtopico = document.createElement('td');
            tdSubtopico.textContent = `${subtopico.order}. ${subtopico.nome}`;
            tdSubtopico.classList.add('td-subtopico');
            tdSubtopico.setAttribute('nome', subtopico._id);
            tr.appendChild(tdSubtopico);

            td = document.createElement('td');
            td.textContent = subtopico.comment;
            tr.appendChild(td);

            tbody.appendChild(tr);
            tableSubtopicos.appendChild(tbody);

            if(subtopico.order == 1){
                metodo.printTopicoModal(subtopico);
            };

            tdSubtopico.addEventListener('click', metodo.getPosts)

        })

    };

    async getPosts() {
        
        const _data = {
            subtopico: this.getAttribute('nome')
        }
        // console.log(_data)
        const posts = await Post.getPosts(_data);
        const subTopico = this
        metodo.printPosts(posts.post, subTopico);

    }

    printPosts(posts, subTopico){

        metodo.removePosts()

        let modalPosts = document.querySelector('.modal-posts')

        posts.forEach((post) => {
            // console.log(post)    
            let pTittle = document.createElement('p');
            let pComment = document.createElement('p');
            let linha = document.createElement('hr');
            let pulaLinha = document.createElement('br');

            pTittle.textContent = post.tittle;
            pComment.textContent = post.comment;
            pComment.classList.add('coments');

            modalPosts.appendChild(pTittle);
            modalPosts.appendChild(pComment);
            modalPosts.appendChild(linha);
            modalPosts.appendChild(pulaLinha);

        })

        // console.log(subTopico.nextElementSibling)
        let nomeSubtopico = subTopico.textContent;
        let comment = subTopico.nextElementSibling.textContent;
        document.querySelector('.s-e-modal').children[0].textContent = nomeSubtopico;
        document.querySelector('.s-e-modal').children[1].textContent = comment;

        console.log(seModal)
        console.log(nomeSubtopico)
        console.log(comment)

    }

    removePosts() {
        let posts = document.querySelectorAll('.modal-posts')
    
        for(let i = posts[0].childNodes.length - 1; i>=0; i-- ){

            posts[0].childNodes[i].remove();
        }
        
    }

    printTopicoModal(subtopico) {

        let tittleSubtopico = document.createElement('h2');
        tittleSubtopico.setAttribute('name', subtopico._id);
        tittleSubtopico.classList.add('h2-subtopico');
        let commentSubtopico = document.createElement('p');
    
        tittleSubtopico.textContent = `${subtopico.order}. ${subtopico.nome}`;
        commentSubtopico.textContent = subtopico.comment;

        seModal.appendChild(tittleSubtopico);
        seModal.appendChild(commentSubtopico);

    }

    static printPostsModal(subtopico, posts) {
        let h2Subtopico = document.querySelector('.h2-subtopico')
        // console.log(h2Subtopico)
        posts.map((post) => {
            // if(post.subtopico == subtopico)
            // console.log(post)
        })
        // console.log(subtopico);
        // console.log(posts);

    }

};

const metodo = new ModalController();
metodo.alteraPosictionSubTopic();