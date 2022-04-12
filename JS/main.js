let question = document.getElementById("FAQ-main");
FAQ();
function FAQ(e){
    fetch("../JSON/FAQ.json")
    .then((res) => res.json())
    .then((data) => {
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = data[i].question + ' '+ `<br>`+ data[i].Answer;
            question.appendChild(div);
          }
    }).catch((err) => console.log(err));
}
