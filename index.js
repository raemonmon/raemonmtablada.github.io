let typingText = document.querySelector(".change_txt");
let Designation = ["Front End Developer", "Raemon Miguel P. Tablada",];

let arrayIndex = 1;

function ChangingTxt(){
    if(arrayIndex < Designation.length){
    typingText.innerHTML = Designation[arrayIndex];
    arrayIndex = arrayIndex + 1;

}else{
    arrayIndex = 0;
    typingText.innerHTML = Designation[arrayIndex];
    arrayIndex = arrayIndex + 1;
}
    
}
ChangingTxt();
setInterval(ChangingTxt, 5000);

// const toggle = document.getElementById('toggleDark');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle('bi-brightness-high-fill')){
//         body.style.background = 'white';
//         body.style.color = 'black';
//         body.style.transition = '2s';
//         header.style.color = 'red';
//     }else{
//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.transition = '2s';
//     }
// });
