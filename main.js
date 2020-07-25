function lightMode() {
    var light = document.body;
    light.classList.toggle("light");
    var modeName = document.getElementById("mode-text");
    if (modeName.innerHTML === "Dark Mode") {
        modeName.innerHTML = "Light Mode";
    } else {
        modeName.innerHTML = "Dark Mode"
    }
    var plug = document.getElementById("plug");
    if (plug.style.marginLeft === "0px") {
        plug.style.marginLeft = "20px";
    } else {
        plug.style.marginLeft = "0px";
    }

};