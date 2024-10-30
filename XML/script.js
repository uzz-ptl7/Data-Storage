function loadXML(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        const xmlDoc = xhttp.responseXML;
        const books = xmlDoc.getElementsByTagName("book");
        let output = "<h2> Books in Catalog </h2>";
        for (let i = 0; i < books.length; i++){
            output += "<p> <strong> Title: </strong>" +books[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</p>";
        }
        document.getElementById("output").innerHTML = output;
    };
    xhttp.open("GET", "books.xml", true);
    xhttp.send();
} 