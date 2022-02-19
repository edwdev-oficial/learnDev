import { Post } from "../model/post.js";
import { ModalController } from "./modalController.js";

export class PostController {

    static async getPosts(subtopico, slughash) {

        const _data = {
            subtopico: subtopico
        };

        const data = await Post.getPosts(_data);
        
        metodo.printPosts(data.post, subtopico, slughash)

    };

    async printPosts(posts, subtopico, slughash) {
        
        const sd = await document.getElementById(subtopico).childNodes[1];
        const bt = await document.getElementById(subtopico).childNodes[2];
        let subtopicos = [];

        await posts.map((element) => {

            const tittle = document.createElement('p');
            tittle.setAttribute('id', element._id);
            tittle.textContent = element.tittle;

            const comment = document.createElement('p');
            comment.classList.add('coments');
            comment.textContent = element.comment;

            const linha = document.createElement('hr');
            const pulaLinha = document.createElement('br');

            sd.appendChild(tittle)
            sd.appendChild(comment)
            sd.appendChild(linha)
            sd.appendChild(pulaLinha)
            
        });
        
        // console.log(subtopicos)
        if (slughash != undefined)
        metodo.printCodePen(bt, slughash);
        // console.log(subtopicos[0])
        // ModalController.printPostsModal(subtopico, posts);
        
    }

    async printCodePen(bt, slugHash) {
        
        const url = await `https://codepen.io/edjdevel/embed/${slugHash}?height=400&default-tab=css%2Cresult&slug-hash=${slugHash}&editable=true&user=edjdevel&name=cp_embed_2`

        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', url);
        bt.appendChild(iframe);

    };

};

const metodo = new PostController();