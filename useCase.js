var section1 = document.querySelector("#info1");
var section1FromTop = section1.offsetTop;
console.log(section1FromTop);

window.addEventListener('scroll', function(){
    this.console.log(this.window.pageYOffset);
    if(!section1.classList.contains("pHolder")){
        if(this.window.pageYOffset >= (section1FromTop - 600)){
            section1.className ="pHolder";
            this.console.log("pholder added to class");
        }
    }
});