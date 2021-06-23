const submitBtn = document.getElementById('submit-btn');
const closedBtn = document.getElementById('closed-btn');
const background = document.querySelector('.form-center');
const alert = document.querySelector('.alert');
const name =document.getElementById('name');

function what(){
    const input =name.value;
    return document.getElementById("hei").innerHTML =input;
}

submitBtn.addEventListener('click',what);
submitBtn.addEventListener('click',function(e){
    e.preventDefault();
});
submitBtn.addEventListener('click',function(){
     alert.classList.remove("hidden-alert");
})

closedBtn.addEventListener('click',function(){ 
        alert.classList.add("hidden-alert");   
})