const colors = ["blue", "red", "green"];
class Counter {
    constructor(color){
        let counter = 0;
        let div = document.createElement("div");
        div.innerHTML = counter;
        div.style.height ="100px";
        div.style.width = "200px";
        div.style.borderRadius = "10px";
        div.style.backgroundColor = color;
        div.style.fontSize= "18";
        div.style.textAlign= "center";



        div.onclick = function(){
            counter++;
            div.innerHTML = counter;
        }

        document.body.appendChild(div);
    }
}

colors.forEach(function(color) {
    countValue = new Counter(color);
});