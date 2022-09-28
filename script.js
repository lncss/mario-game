const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const pulo = ()=>{
  mario.classList.add('pulo');
  setTimeout(()=>{
    mario.classList.remove('pulo');
  },750);
}

const verificaCano = setInterval(()=>{
  const posicaoCano = cano.offsetLeft;
  const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','');
  
  if(posicaoCano<120&&posicaoCano>0&&posicaoMario<95){
    cano.style.animation = 'null';
    cano.style.left = `${posicaoCano}px`;
    mario.style.animation = 'null';
    mario.style.bottom = `${posicaoMario}px`;
    mario.src="img/fim-de-jogo.png";
    mario.style.width="75px";
    mario.style.marginLeft="50px";
  }
},10);

// quando uma tecla é pressionada o mario pulaa
document.addEventListener('keydown',pulo);