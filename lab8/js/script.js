var button1 = document.querySelector("#addEp");
var button2 = document.querySelector("#addAll")


button1.addEventListener("click", function (e) {
    e.preventDefault();

    var row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("mt-3");

    var col1 = document.createElement("div");
    col1.classList.add("col-lg-6");

    var label1 = document.createElement("label");
    label1.innerText = "EXAM";

    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "exam");
    input1.classList.add("form-control");

    col1.appendChild(label1);
    col1.appendChild(input1);

    var col2 = document.createElement("div");
    col2.classList.add("col-lg-6");

    var label2 = document.createElement("label");
    label2.innerText = "POINT";

    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "point");
    input2.classList.add("form-control");

    col2.appendChild(label2);
    col2.appendChild(input2);

    row.appendChild(col1);
    row.appendChild(col2);

    document.querySelector(".container").appendChild(row);

})

button2.addEventListener("click", function (e) {
    e.preventDefault();
        var name= document.querySelector('input[name="name"]');
       var surname= document.querySelector('input[name="surname"]');
      var  exam= document.querySelectorAll('input[name="exam"]');
       var point= document.querySelectorAll('input[name="point"]');

       for( var i=0; i<exam.length; i++){
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${name.value}</td>`;
        tr.innerHTML += `<td>${surname.value}</td>`;
        tr.innerHTML += `<td>${exam[i].value}</td>`;
        tr.innerHTML += `<td>${point[i].value}</td>`;
        document.querySelector("tbody").appendChild(tr);
       }
  


    
    console.log(tr);
})