const gallery = document.querySelector(".gallery")

window.onmousemove = e => {
    const mouseX = e.clientX ;
    const mouseY = e.clientY ;


    const xDecimal = mouseX / window.innerWidth ;
    const yDecimal = mouseY / window.innerHeight;

    const max_X = gallery.offsetWidth - window.innerWidth
    const max_Y = gallery.offsetHeight - window.innerHeight

    const panX = max_X * xDecimal * -1 ;
    const panY = max_Y * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px , ${panY}px)`} , 
        { transition :4000 ,
          fill: "forwards" ,
          easing: "ease" })
}