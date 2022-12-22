const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
var score = 0;
var velocidade = 1;
var aumentar = 100;
const animations = document.querySelector(".clouds");
const botao = document.getElementById("fundo")
const botaopressed = document.querySelector(".fourth")
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            
            pipe.style.animationPlayState = 'paused';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'paused';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            animations.style.animationPlayState = 'paused';
            botao.style.visibility='visible';
            
        } 
        else{
            score = score + 1;
            if (score / 10 > aumentar){
                velocidade = velocidade - 0.1;
                aumentar = aumentar + 100;
            }
            pipe.style.setProperty("animation-duration", velocidade + "s");

            document.getElementById("score").innerHTML = parseInt(score / 10);
        }
}, 10);

document.addEventListener('keydown', jump);