let answer = document.getElementsByClassName("question")
let i

for (i = 0; i < answer.length; i++){
    answer[i].addEventListener("click" ,function(showAnswer){
        this.classList.toggle("active");

    let content = this.nextElementSibling

    if(content.style.display === "block") {
        content.style.display = "none"
    }
    else {
        content.style.display = "block"
    }

    })
}