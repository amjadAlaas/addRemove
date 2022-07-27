let links = document.querySelectorAll("ul li a");
let home = document.getElementById("home");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let sections = document.querySelectorAll("section");



links.forEach(function(element) { 

    element.addEventListener("click", function (e) {

        //remove class
        links.forEach(function (el) {
            el.classList.remove("active");
        });

        //add class
        this.classList.add("active");
        
        //declare href attr in array
        let target = this.getAttribute("href");
        
        //loopping on target
        sections.forEach(function (el) {
            
            el.style.display = "none";
            if(target === "#" + el.getAttribute("id")) {

                el.style.display = "block";

            }
            
        });
        
        e.preventDefault();
   });

});