
var modal = document.getElementById("modalAgregar");

var btn = document.getElementById("botonmodal"); 

var span = document.getElementsByClassName("cerrar")[0]; 

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}


//

var arrRobots = [];

function addRobots(){
    var image = document.getElementById("imgRob").files[0].name;

    var objRobots = new Object();
    objRobots.image = "jpg/" + image;

    arrRobots.push(objRobots);

    setRobots();
}

function setRobots(){
    var divRobots = document.getElementById("div-contgal")

    for(var i =0; i < arrRobots.length; i ++){
        var imgR = document.createElement("img");
        var div = document.createElement("div");

        imgR.setAttribute("src", arrRobots[i].image);
        imgR.setAttribute("class", "imagenGaleria");

        div.setAttribute("class", "item");
        div.appendChild(imgR);

        divRobots.appendChild(div);

    }
}

