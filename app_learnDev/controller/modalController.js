import { Post } from "../model/post.js";

const subtopicos = document.querySelectorAll('tr');
const tableSubtopicos = document.querySelector('.table-subtopicos');
const seModal = document.querySelector('.s-e-modal');
const modalEdit = document.querySelector('.container-modal-editar');
const modalEditData = document.querySelector('.modal-edit-data');
let tr,
    tbody, 
    tdSubtopico,
    td, 
    cor;

export class ModalController {

    alteraPosictionSubTopic() {

        subtopicos.forEach((subtopico) => {

        })

    };

    static printSubTopicos(subtopicos) {

        metodo.removeSubtopicos()

        tbody = document.createElement('tbody');
        tbody.classList.add('tbody-table-subtopicos')

        subtopicos.forEach((subtopico) => {

            if(subtopico.order % 2 == 0) {
                cor = 'escuro'
            }else {
                cor = 'claro'
            };

            tr = document.createElement('tr');
            tr.setAttribute('draggable', true);
            tr.classList.add(cor)

            tdSubtopico = document.createElement('td');
            tdSubtopico.textContent = `${subtopico.order}. ${subtopico.nome}`;
            tdSubtopico.classList.add('td-subtopico');
            if(subtopico.codepen)
                tdSubtopico.setAttribute('hash-codepen', subtopico.codepen);
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
        const posts = await Post.getPosts(_data);
        const subTopico = this
        metodo.printPosts(posts.post, subTopico);

    };

    printPosts(posts, subTopico){

        metodo.removePosts()

        let modalPosts = document.querySelector('.modal-posts')

        posts.forEach((post) => {

            let pTittle = document.createElement('p');
            let btnExcluiPost = document.createElement('button');
            btnExcluiPost.classList.add('btn-exclui-post');
            btnExcluiPost.textContent = 'Excluir';
            btnExcluiPost.setAttribute('id', post._id);
            let pComment = document.createElement('p');
            let linha = document.createElement('hr');
            let pulaLinha = document.createElement('br');

            pTittle.classList.add('pPost', post._id)
            pTittle.textContent = post.tittle;
            pComment.textContent = post.comment;
            pComment.classList.add('coments');

            modalPosts.appendChild(pTittle);
            modalPosts.appendChild(pComment);
            modalPosts.appendChild(btnExcluiPost);
            modalPosts.appendChild(linha);
            modalPosts.appendChild(pulaLinha);

        })

        let nomeSubtopico = subTopico.textContent;
        
        let comment = subTopico.nextElementSibling.textContent;
        let h2TittleSubtopico = document.querySelector('.s-e-modal').children[0];
        
        h2TittleSubtopico.textContent = nomeSubtopico;
        h2TittleSubtopico.setAttribute('id-subtopico', subTopico.getAttribute('nome'));
        h2TittleSubtopico.setAttribute('hash-codepen', subTopico.getAttribute('hash-codepen'));
        
        document.querySelector('.s-e-modal').children[1].textContent = comment;

    };

    removeSubtopicos() {
        let tbSubtopicos = document.querySelectorAll('.tbody-table-subtopicos')
        
        if(tbSubtopicos.length > 0) {

            for(let i = tbSubtopicos.length -1; i >= 0; i--){
                tbSubtopicos[i].remove()
            }
            
        }
    };

    removePosts() {
        let posts = document.querySelectorAll('.modal-posts')
    
        for(let i = posts[0].childNodes.length - 1; i>=0; i-- ){

            posts[0].childNodes[i].remove();
        }
        
    };

    printTopicoModal(subtopico) {

        let h2 = document.querySelector('.h2-subtopico');
        let pSubtopico = document.querySelector('.p-subtopico');

        if(h2 !== null) {
            h2.remove()
            pSubtopico.remove()
        }

        let tittleSubtopico = document.createElement('h2');
        tittleSubtopico.classList.add('h2-subtopico');
        tittleSubtopico.setAttribute('name', subtopico._id);
        tittleSubtopico.textContent = `${subtopico.order}. ${subtopico.nome}`;

        let commentSubtopico = document.createElement('p');
        commentSubtopico.classList.add('p-subtopico')
        commentSubtopico.textContent = subtopico.comment;

        seModal.appendChild(tittleSubtopico);
        seModal.appendChild(commentSubtopico);

    };

};

const metodo = new ModalController();
metodo.alteraPosictionSubTopic();