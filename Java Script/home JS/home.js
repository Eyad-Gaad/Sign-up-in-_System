let item = document.querySelector(".item");
let log_out = document.getElementById("log-out");
let storage = JSON.parse(localStorage.getItem("users"));
for(let i =0;i<storage.length;i++){
    if(storage[i].userCheck==true){
        item.innerHTML = `<h1 class="Titillium fw-semibold sec-color">Welcome <i class="text-white fa-solid fa-quote-left me-3"></i>${storage[i].username}<i class="text-white fa-solid fa-quote-right ms-3"></i></h1>`
        break;
    }
}
log_out.addEventListener("click",function(e){
    window.location.href = "index.html";
    for(let i =0;i<storage.length;i++){
        if(storage[i].userCheck==true){
            storage[i].userCheck=false;
            localStorage.setItem("users",JSON.stringify(storage))
            break;
        }
    }
})
window.addEventListener("beforeunload",function(e){
    for(let i =0;i<storage.length;i++){
        if(storage[i].userCheck==true){
            storage[i].userCheck=false;
            localStorage.setItem("users",JSON.stringify(storage))
            break;
        }
    }
})