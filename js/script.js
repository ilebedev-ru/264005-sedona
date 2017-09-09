var searchformbtn = document.querySelector(".search-hostels-btn");
var searchwrapper = document.querySelector(".search-form-wrapper");

var datein = searchwrapper.querySelector("[name=date-in]");
var dateout = searchwrapper.querySelector("[name=date-out]");

var form = searchwrapper.querySelector("form");

searchwrapper.classList.toggle("search-form-open");
searchwrapper.classList.toggle("search-form-close");

searchformbtn.addEventListener("click", function (evt) {
    evt.preventDefault();

     searchwrapper.classList.toggle("search-form-close");
     searchwrapper.classList.toggle("search-form-open");
     datein.focus();
});



form.addEventListener("submit", function (evt) {
    if (!datein.value || !dateout.value) {
        evt.preventDefault();
        console.log("пустое значение!");
    }
});