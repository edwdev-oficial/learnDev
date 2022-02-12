import { TemaController } from './controller/temaController.js';
import { TopicoController } from './controller/topicoController.js';

// const nav = document.querySelector('.sidebar');
// const itemMenu = document.querySelector('.item-tema');
// const itemTopico = document.querySelectorAll('.item-topico');
// const listTopico = document.createElement('li');
// let itemMenuClone = ''

// for (let i = 1; i <= 10; i++) {
//     itemMenuClone = itemMenu.cloneNode(true);
//     itemMenuClone.innerHTML = `Sidebar${i}`
//     nav.appendChild(itemMenuClone);
// };

// itemMenu.addEventListener('click', () => {

//     mostraTopico()

// });

// function mostraTopico() {
//     console.log(itemTopico)
//     itemTopico.setAttribute('style', 'style="color: blue"')

// }

// for (let i = 1; i>10; i++) {
//     let pclone = document.querySelector('.lorem').cloneNode(true);
    
// }

// const sideBar = document.querySelector('.sidebar');
// const ul = document.createElement('ul');
// const li = document.createElement('li');
// let ulTopico;
// let liTema;
// let liTopico;
// let cor;

// ulTopico = ul.cloneNode(true)
// ulTopico.classList.add('ul-tema')

// for (let indexTema = 1; indexTema <= 15; indexTema++) {
    
//     if (indexTema % 2 == 0) {
//         cor = 'escuro'
//     }else{
//         cor = 'claro'
//     }

//     liTema = li.cloneNode(true)
//     liTema.classList.add(`li-tema`, `tema${indexTema}`, cor)
//     liTema.innerHTML = `Tema ${indexTema}`
    
    
//     ulTopico.appendChild(liTema)
    
//     // liTopico = li.cloneNode(true)
//     // liTopico.classList.add('li-topico')
//     // liTopico.innerHTML = `Topico 1`
//     // ulTopico.appendChild(liTopico)

//     // for (indexLi = 1; indexLi <= 2; indexLi++) {
//     //     liTema = li.cloneNode(true)
//     //     liTema.classList.add('li-tema')
//     //     liTema.innerHTML = `Topico${indexTema}`
//     //     ulTopico.appendChild(liTema)
    
//     // }
    
//     sideBar.appendChild(ulTopico)

//     liTema.addEventListener('click', (target) => {
//         mostrarSubTopicos(target.target.classList[1].toString())
//     })
    
    
// }

// function mostrarSubTopicos(classe) {
//     let tema = document.querySelector(`.${classe}`)

//     liTopico = li.cloneNode(true)
//     liTopico.classList.add('li-topico')
//     liTopico.innerHTML = `Topico 1`
//     // firstChield = tema.firstChild
//     // console.log(firstChield)
//     tema.append(firstChield)


//     console.log(tema)

// }

