let page = document.querySelector('html');
let button = document.getElementById('darkmode');


button.onclick = function(){
    if(page.classList.contains('dark')){
        page.classList.remove('dark');
        button.innerText = 'Mode sombre';
        button.style.backgroundColor = "black";
        document.querySelector('h1').innerText = 'Mode clair';
        
    }
    else{
        page.classList.add('dark');
        button.innerText = 'Mode clair';   
    }
}
