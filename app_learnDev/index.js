import { TemaController } from './controller/temaController.js'; 
// import { TopicoController } from './controller/topicoController.js';
// import { SubtopicoController } from './controller/subtopicoController.js';
import { ModalController } from './controller/modalController.js';
import { ModalEditController } from './controller/modalEditController.js';

const tittle = document.querySelector('h1');
const modal = document.querySelector('.container-modal');

tittle.addEventListener('click', () => {

    if(modal.style.zIndex == '-1' || modal.style.zIndex == '') {
        modal.style.zIndex = '2'
    }else{
        modal.style.zIndex = '-1'
    }
    
    // console.log(modal.style.zIndex)
    // modal.style.zIndex = '2'
    // console.log('click no h1')
})