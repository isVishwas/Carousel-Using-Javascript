let slides = document.querySelector(".slider-items").children;
let next_Slide = document.querySelector(".right-slide");
let prev_Slide = document.querySelector(".left-slide");
let total_slides = slides.length;
var index=0;

next_Slide.addEventListener("click",()=>{
    next("next");
});

prev_Slide.addEventListener("click",()=>{
    next("prev");
})

function next(direction)
{
    if(direction=="next")
    {
        index++;
        if(index==total_slides)
        {
            index=0;
        }
    }
    else
    {
        if(index==0)
        {
            index=total_slides-1;
        }
        else
        index--;
    }

    for(var i=0;i<slides.length;i++)
    {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}

