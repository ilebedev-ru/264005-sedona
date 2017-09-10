var searchformbtn = document.querySelector(".search-hostels-btn");
var searchwrapper = document.querySelector(".search-form-wrapper");

var datein = searchwrapper.querySelector("[name=date-in]");
var dateout = searchwrapper.querySelector("[name=date-out]");

var minusman = document.querySelector("#minusman");
var plusman = document.querySelector("#plusman");
var minuschild = document.querySelector("#minuschild");
var pluschild = document.querySelector("#pluschild");
var numMan = document.querySelector("#search-form-man").value;
var numChild = document.querySelector("#search-form-child").value;


searchwrapper.classList.toggle("search-form-open");
searchwrapper.classList.toggle("search-form-close");

searchformbtn.addEventListener("click", function (evt) {
    evt.preventDefault();

     searchwrapper.classList.toggle("search-form-close");
     searchwrapper.classList.toggle("search-form-open");
     datein.focus();
});

minusman.addEventListener("click", function(evt) {
    event.preventDefault();

    if (numMan > 0) {
        numMan--;
        document.querySelector("#search-form-man").value = numMan;
    }
});

plusman.addEventListener("click", function(evt) {
    event.preventDefault();
    numMan++;
    document.querySelector("#search-form-man").value = numMan;
});

minuschild.addEventListener("click", function(evt) {
    event.preventDefault();
    if (numChild > 0) {
        numChild--;
        document.querySelector("#search-form-child").value = numChild;
    }
});

pluschild.addEventListener("click", function(evt) {
    event.preventDefault();
    numChild++;
    document.querySelector("#search-form-child").value = numChild;
});