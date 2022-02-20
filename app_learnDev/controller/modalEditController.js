import { Subtopico } from "../model/subtopico.js";
import { Post } from "../model/post.js";

const modal = document.querySelector('.container-modal');
const modalEdit = document.querySelector('.container-modal-editar');
const modalEditData = document.querySelector('.modal-edit-data');
const btnCreateSubtopic = document.querySelector('.btn-inclui-subtopico');
const btnSalvar = modalEdit.querySelector('.salvar');

export class ModalEditController {

    clickedModal() {

        modal.addEventListener('click', (event) => {

            if(event.target.classList.value == 'h2-subtopico') {
                console.log('Interpretou click no h2-subtopico?')
                metodo.editSobtopic(event);
            }
            if(event.target.classList.value == 'btn-exclui-subtopico')
                console.log('Clicked in to btn-exclui-subtopico')


        });

    }

    clickedModalEdit() {
      
        modalEdit.addEventListener('click', (event) => {

            if(event.target.classList.value == 'btn-modal-edit salvar create-subtopic') 
                metodo.saveCreateSubtopic(event);
            if(event.target.classList.value == 'btn-modal-edit salvar edit-subtopic') 
                metodo.saveEditSubtopic(event);
            if(event.target.classList.value == 'btn-modal-edit cancelar')
                metodo.cancel(event);
            if(event.target.classList.value == 'btn-modal-edit salvar edit-post')
                metodo.getPost(event);

        });

    };

    createSubTopic(){
        btnCreateSubtopic.addEventListener('click', () => {
            btnSalvar.classList.remove();
            btnSalvar.classList.add('btn-modal-edit', 'salvar', 'create-subtopic');          
            metodo.criarCampos(['topico', 'nome', 'comment', 'codepen'])
        });
    };

    editSobtopic(event) {
        btnSalvar.classList.remove();
        btnSalvar.classList.add('btn-modal-edit', 'salvar', 'edit-subtopic');
        metodo.criarCampos(['id', 'nome', 'topico', 'comment', 'codepen'], event.target);
    }
    
    excluiSubtopico() {
        
    }

    createPost() {
        
        document.addEventListener('keypress', (e) => {

            if(e.key === 'Enter') {
        
                metodo.criarCampos(['tittle', 'topico', 'Subtopico', 'comment']);
                
            };

        });

    };

    editPosts() {
        
        const modalPosts = document.querySelector('.modal-posts');

        modalPosts.addEventListener('click', (event) => {
            btnSalvar.classList.remove();
            btnSalvar.classList.add('btn-modal-edit', 'salvar', 'edit-post');
            if(event.target.classList[0] == 'pPost') {

                if(modalEditData.children.length > 0){
                    for(let i = modalEditData.children.length -1 ; i>=0; i--) {
                        modalEditData.children[i].remove()
                    };
                };
               
                const postSelected = event.target;

                const tittlePost = document.createElement('input');
                tittlePost.classList.add('post', postSelected.classList[1]);
                tittlePost.value = postSelected.textContent;
                
                const commentPost = document.createElement('input');
                commentPost.classList.add('comment');
                commentPost.value = postSelected.nextElementSibling.textContent.replace('// ', '');
                
                modalEditData.append(tittlePost);
                modalEditData.append(commentPost);
                modalEdit.style.zIndex = '10';
            };

        });

    };

    getPost(event) {

        const post = event
        .target
        .parentNode
        .parentNode
        .children[0]
        .children[0];
        metodo.saveEditPost(post);

    };

    async saveCreateSubtopic(event) {

        const data = {
            topico: document.querySelector('#topico').value,
            nome: document.querySelector('#nome').value,
            comment: document.querySelector('#comment').value,
            codepen: document.querySelector('#codepen').value,
        }

        const response = await Subtopico.createSubtopico(data);
        metodo.cancel();
        console.log(response)
    };
    
    async saveEditSubtopic(event) {
        
        const data = {
            _id: document.querySelector('#id').value,
            topico: document.querySelector('#topico').value,
            nome: document.querySelector('#nome').value,
            comment: document.querySelector('#comment').value,
            codepen: document.querySelector('#codepen').value,
        }

        const promise = await Subtopico.editSubtopic(data);

        console.log(promise);
        metodo.cancel();

    };

    async saveEditPost(post) {

        const idPost = post.classList[1];
        const tittlePost = post.value;
        let commentPost;
        if(post.nextElementSibling.value !== '') {
            commentPost = `// ${post.nextElementSibling.value}`;  
        }else{
            commentPost = '';
        };

        const data = {
            _id: idPost,
            tittle: tittlePost,
            comment: commentPost
        };
      
        const response = await Post.editPost(data);

        console.log(response);

    };    

    criarCampos(campos, target) {

        if(target)
        console.log(target.nextElementSibling)

        let topico = modal.getAttribute('id');
        
        campos.forEach((campo) => {
            const label = document.createElement('label');
            label.setAttribute('for', campo);
            label.textContent = campo;

            const input = document.createElement('input');
            input.setAttribute('name', campo);
            input.setAttribute('id', campo);
            if(campo == 'topico')
                input.value = topico;
            if(campo == 'id')
                input.value = target.getAttribute('id-subtopico');

            if(target) {
                
                if(campo == 'nome')
                    input.value = target.textContent;
                if(campo == 'comment')
                    input.value = target.nextElementSibling.textContent;
                if(campo == 'codepen') {
                    if(target.getAttribute('hash-codepen') !== 'null'){
                        input.value = target.getAttribute('hash-codepen');
                    };
                };
            
            }


            modalEditData.append(label);
            modalEditData.append(input);

            modalEdit.style.zIndex = '10';

        });

    };

    cancel(event) {

        modalEdit.style.zIndex = '-1'
        // const inputsModalEdit = event.target.parentNode.parentNode.children[0]
        const modalEditData = document.querySelector('.modal-edit-data');
  
        for(let i = modalEditData.childNodes.length - 1; i>=0; i--){
            modalEditData.childNodes[i].remove();
        };
    };

};

const metodo = new ModalEditController();
metodo.createSubTopic();
metodo.clickedModal();
metodo.clickedModalEdit();
metodo.editPosts();
metodo.createPost();