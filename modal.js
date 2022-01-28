// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var h1 = document.getElementsByTagName("h1")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var q = document.getElementsByClassName("q")[0];

// When the user clicks the button, open the modal 

h1.onclick = function () {
    if (window.matchMedia('(min-width: 950px)').matches) {
        showPop();
    }
};


q.onclick = showPop;

function showPop() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

