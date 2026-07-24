/* FAQ */

const faq = document.querySelectorAll(".faq-question");

faq.forEach(btn=>{

btn.addEventListener("click",()=>{

const answer=btn.nextElementSibling;

document.querySelectorAll(".faq-answer").forEach(item=>{

if(item!==answer) item.style.display="none";

});

answer.style.display=
answer.style.display==="block" ? "none":"block";

});

});

/* Scroll Button */

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};/* Simple Gallery Filter */

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

filterButtons.forEach(btn => btn.classList.remove("active"));

button.classList.add("active");

/* Placeholder for future filtering logic */

});

});<script>
function reveal() {

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }

    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
</script>