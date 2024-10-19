document.getElementById("button1").addEventListener("click", function() {
    var img1 = document.getElementById("cat")
    var img2 = document.getElementById("dog")
    img1.style.visibility = "visible";
    img2.style.visibility = "hidden";
    var id1 = document.getElementById("1")
    var id2 = document.getElementById("2")
    id1.style.width = "95%";
    id2.style.width = "5%";
});
document.getElementById("button2").addEventListener("click", function() {
    var img1 = document.getElementById("cat")
    var img2 = document.getElementById("dog")
    img1.style.visibility = "visible";
    img2.style.visibility = "visible";

    var id1 = document.getElementById("1")
    var id2 = document.getElementById("2")
    id1.style.width = "50%";
    id2.style.width = "50%";
});
document.getElementById("button3").addEventListener("click", function() {
    var img1 = document.getElementById("cat")
    var img2 = document.getElementById("dog")
    img1.style.visibility = "hidden";
    img2.style.visibility = "visible";
    var id1 = document.getElementById("1")
    var id2 = document.getElementById("2")
    id1.style.width = "5%";
    id2.style.width = "95%";
});