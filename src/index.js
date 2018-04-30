var helpBox = document.getElementById("help-box");
document.bgColor = "000000";
var showHelpBox = function(show) {
    if (show) {
        helpBox.hidden = false;
    }
    else {
        helpBox.hidden = true;
    }
};

//show help box for first time

helpBox.hidden = false;