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
            let pComment = document.createElement('p');
            let linha = document.createElement('hr');
            let pulaLinha = document.createElement('br');

            pTittle.classList.add('pPost', post._id)
            pTittle.textContent = post.tittle;
            pComment.textContent = post.comment;
            pComment.classList.add('coments');

            modalPosts.appendChild(pTittle);
            modalPosts.appendChild(pComment);
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

    // editPosts() {
        
    //     const modalPosts = document.querySelector('.modal-posts');

    //     modalPosts.addEventListener('click', (event) => {
            
    //         if(event.target.classList[0] == 'pPost') {

    //             if(modalEditData.children.length > 0){
    //                 for(let i = modalEditData.children.length -1 ; i>=0; i--) {
    //                     modalEditData.children[i].remove()
    //                 };
    //             };
               
    //             const postSelected = event.target;
    //             console.log(postSelected.classList[1])

    //             const tittlePost = document.createElement('input');
    //             tittlePost.classList.add('post', postSelected.classList[1]);
    //             tittlePost.value = postSelected.textContent;
                
    //             const commentPost = document.createElement('input');
    //             commentPost.classList.add('comment');
    //             commentPost.value = postSelected.nextElementSibling.textContent.replace('// ', '');
                
    //             modalEditData.append(tittlePost);
    //             modalEditData.append(commentPost);
    //             modalEdit.style.zIndex = '10';
    //         };

    //     });

    // };

    // getPost() {
    //     const btnSalvarPost = modalEdit.querySelector('.btn-modal-edit.salvar')
    //     modalEdit.addEventListener('click', (event) => {
    //         // console.log(event.target.classList.value)
    //         // console.log( event.target.classList.indexOf('btn-modal-edit') )
    //         if(event.target.classList == 'btn-modal-edit salvar') {
    //             console.log('Editando')
    //             const post = event
    //             .target
    //             .parentNode
    //             .parentNode
    //             .children[0]
    //             .children[0];
    //             // metodo.savePost(post);
    //         }
    //     });
    // };

    // async savePost(post) {
    //     const idPost = post.classList[1];
    //     const tittlePost = post.value;
    //     let commentPost;
    //     if(post.nextElementSibling.value !== '') {
    //         commentPost = `// ${post.nextElementSibling.value}`;  
    //     }else{
    //         commentPost = '';
    //     };

    //     const data = {
    //         _id: idPost,
    //         tittle: tittlePost,
    //         comment: commentPost
    //     };

    //     console.log(data)
      
    //     const response = await Post.editPost(data);

    //     console.log(response);

    // };

};

const metodo = new ModalController();
metodo.alteraPosictionSubTopic();
// metodo.editPosts();
// metodo.getPost();