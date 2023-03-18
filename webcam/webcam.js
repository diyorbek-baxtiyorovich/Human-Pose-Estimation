const video = document.querySelector("#video");
const click_button = document.querySelector("#click-photo");
const canvas = document.querySelector("#canvas");
const user_img = document.querySelector(".user_img")
const left_webca = document.querySelector(".left_webca")

click_button.addEventListener('click', async function() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
    user_img.style.display = "none";
    left_webca.style.cssText = "background: #fff;"
}); 


click_button.addEventListener("click", ()=>{
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
})



// click_button.addEventListener("click", ()=>{
//     let stream = navigator.mediaDevices.getUserMedia({ video: true, audio: false });
// 	video.srcObject = stream;
//     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
// })

