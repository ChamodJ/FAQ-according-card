let answer = document.getElementsByClassName("question")
let i

for (i = 0; i < answer.length; i++){
    answer[i].addEventListener("click" ,function(showAnswer){
        this.classList.toggle("active");

    let content = this.nextElementSibling

    if(content.style.display === "block") {
        content.style.display = "none"
        event.target.style.color="hsl(240, 6%, 50%)"
    }
    else {
        content.style.display = "block"
        event.target.style.color="hsl(238, 29%, 16%)"
    }

    })
}