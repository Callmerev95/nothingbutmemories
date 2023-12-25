onload = () =>{
        document.body.classList.remove("container");
};

let myAudio = new Audio();
myAudio.src = 'titik.mp3';

function playMusic() {
myAudio.play();
}

document.addEventListener('click', playMusic);
