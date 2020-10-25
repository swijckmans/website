window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    console.log(loader);
    loader.className += " hidden";

});

function show_menu() {
    var x = document.getElementsByClassName("menuboxmobile")[0];
    if (x.style.right === "-1000px") {
        x.style.right = "0";
    } else {
        x.style.right = "-1000px";
    }
}