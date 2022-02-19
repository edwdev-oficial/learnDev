import { Subtopico } from "../model/subtopico.js";
import { Post } from "../model/post.js";

const modal = document.querySelector('.container-modal');
const modalEdit = document.querySelector('.container-modal-editar');
const modalEditData = document.querySelector('.modal-edit-data');
const btnCreateSubtopic = document.querySelector('.btn-inclui-subtopico');
const btnSalvar = modalEdit.querySelector('.salvar');

export class ModalEditController {

    clickedModalEdit() {
      
        modalEdit.addEventListener('click', (event) => {

            if(event.target.classList.value == 'salvar btn-modal-create') 
                metodo.saveCreateSubtopic(event);
            if(event.target.classList.value == 'btn-modal-edit cancelar')
                metodo.cancel(event);
            if(event.target.classList.value == 'btn-modal-edit salvar')
                metodo.getPost(event);

        });

    };

    createSubTopic(){
        btnCreateSubtopic.addEventListener('click', () => {
            let topico = modal.getAttribute('id');
            // console.log(topico)
            btnSalvar.classList.remove('btn-modal-edit');
            btnSalvar.classList.add('btn-modal-create');          
            metodo.criarCampos(['topico', 'nome', 'comment', 'codepen'], topico)
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

    editPosts() {
        
        const modalPosts = document.querySelector('.modal-posts');

        modalPosts.addEventListener('click', (event) => {
            btnSalvar.classList.remove('btn-modal-create');
            btnSalvar.classList.add('btn-modal-edit');
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

    criarCampos(campos, topico) {

        campos.forEach((campo) => {
            
            const label = document.createElement('label');
            label.setAttribute('for', campo);
            label.textContent = campo;

            const input = document.createElement('input');
            input.setAttribute('name', campo);
            input.setAttribute('id', campo);
            if(campo == 'topico')
                input.value = topico;

            modalEditData.append(label);
            modalEditData.append(input);

            modalEdit.style.zIndex = '10';

        });
    };

    async saveCreateSubtopic(event) {

        const data = {
            topico: document.querySelector('#topico').value,
            nome: document.querySelector('#nome').value,
            comment: document.querySelector('#comment').value,
            codepen: document.querySelector('#codepen').value,
        }

        const response = await Subtopico.createSubtopico(data)

        console.log(response)
    };

    cancel(event) {
        modalEdit.style.zIndex = '-1'
        const inputsModalEdit = event.target.parentNode.parentNode.children[0]
  
        for(let i = inputsModalEdit.childNodes.length - 1; i>=0; i--){
            inputsModalEdit.childNodes[i].remove();
        };
    };

};

const metodo = new ModalEditController();
metodo.createSubTopic();
metodo.clickedModalEdit();
metodo.editPosts();