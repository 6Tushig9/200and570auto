var content=document.getElementById("content");
var content1=document.getElementById("content1");

content.onclick = function () {
    if(content.className=="open"){
        content.className="";
    } else{
        content.className="open";
    }
};
content1.onclick = function () {
    if(content1.className=="open"){
        content1.className="";
    } else{
        content1.className="open";
    }
};