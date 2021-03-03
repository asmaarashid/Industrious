let x = false;
let nav = document.getElementById('nav');
let asideMenuOpen = function(){
    let menu = document.getElementById('menu');
    if (x === false){
        menu.style.display = "block";
        x = true;
    }
}
let asideMenuClose = function(){
    let menu = document.getElementById('menu');
    if (x === true){
        menu.style.display =  "none";
        x = false;
    }

}