// get all images with data-src attribute and save to a list
const imagesToLoad = document.querySelectorAll("img[data-src]");
// const srctoload=

// set optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold:0,
    rootMargin:"0px 0px 50px 0px"
}
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () =>{ image.removeAttribute('data-src');};
};

// first check to see if Intersection Observer is supported
if('IntersectionObserver' in window)  {
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