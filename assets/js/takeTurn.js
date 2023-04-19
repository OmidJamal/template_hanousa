const visitModal = document.querySelector('.visitModal');
const takeBtn1 = document.querySelector('.takeBtn1');
const takeTurn = document.getElementById('takeTurn');
const closeBtn = document.getElementById('closeBtn');
console.log(closeBtn);
takeBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    visitModal.style.opacity = "1";
    visitModal.style.zIndex = '1';
    takeTurn.style.filter = "blur(4px)";
});

closeBtn.addEventListener('click' , ()=>{
    visitModal.style.opacity = "0";
    visitModal.style.zIndex = '-1';
    takeTurn.style.filter = "none";
});





