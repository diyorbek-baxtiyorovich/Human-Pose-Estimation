const buttom = document.querySelector(".buttom_click");
const  modal = document.querySelector(".modal");
const close = document.querySelector(".xmark")

buttom.addEventListener("click", ()=>{
    modal.style.display = 'flex';
})

close.addEventListener("click", () =>{
    modal.style.display = 'none';
})
