// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// set optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold:1,
    rootMargin:"0px 0px 50px 0px"
}
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () =>{ image.removeAttribute("data-src");};
};

// first check to see if Intersection Observer is supported
if('IntersectionalObserver' in window)  {
    const imgObserver = new IntersectionObserver((items,observer)=> {
        items.forEach((item)=> {
            if (item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    // loop through each img and check status and load if necessary
    imagesToLoad.forEach((img)=>{
        imgObserver.observe(img);
    });
}   
else{
    imagesToLoad.forEach((img)=>{
        loadImages(img);
    });
}