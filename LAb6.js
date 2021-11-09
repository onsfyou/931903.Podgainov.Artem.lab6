buttons=document.getElementsByTagName("button");
//buttons[0].style.color = "black";
buttons[0].onclick = function(){
    document.getElementsByClassName("catBlock")[0].style.width = "95%";
    document.getElementsByClassName("catBlock")[0].getElementsByTagName("img")[0].style.width = "60%";
    document.getElementsByClassName("catBlock")[0].getElementsByTagName("img")[0].style.display = "block";
    document.getElementsByClassName("dogBlock")[0].style.width = "5%";
    document.getElementsByClassName("dogBlock")[0].getElementsByTagName("img")[0].style.display = "none";
}
buttons[1].onclick = function(){
    document.getElementsByClassName("dogBlock")[0].getElementsByTagName("img")[0].style.display = "block";
    document.getElementsByClassName("dogBlock")[0].getElementsByTagName("img")[0].style.width = "calc(100% - 40px)";
    document.getElementsByClassName("dogBlock")[0].style.width = "50%";
    document.getElementsByClassName("catBlock")[0].style.width = "50%";
    document.getElementsByClassName("catBlock")[0].getElementsByTagName("img")[0].style.display = "block";
    document.getElementsByClassName("catBlock")[0].getElementsByTagName("img")[0].style.width = "calc(100% - 40px)";
}
buttons[2].onclick = function(){
    document.getElementsByClassName("catBlock")[0].getElementsByTagName("img")[0].style.display = "none";
    document.getElementsByClassName("catBlock")[0].style.width = "5%";
    document.getElementsByClassName("dogBlock")[0].getElementsByTagName("img")[0].style.width = "60%"
    document.getElementsByClassName("dogBlock")[0].style.width = "95%";
    document.getElementsByClassName("dogBlock")[0].getElementsByTagName("img")[0].style.display = "block";
}