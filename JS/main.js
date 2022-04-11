let question = document.getElementById("FAQ-main");

function FAQ(e){
    e.preventdefault();
    question.innerHTML= "";
    fetch("../JSON/FAQ.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(function(element){
            let FAQ = document.createElement("div");
            let question = document.createElement("h3");
            let answer = document.createElement("p");
            FAQ.className = "questions";
            question.appendChild(document.createTextNode(element.question));
            console.log(element.question);
            answer.appendChild(document.createTextNode(element.answer));
            FAQ.appendChild(question);
            FAQ.appendChild(answer);
        });
    }).catch((err) => console.log(err));
}
