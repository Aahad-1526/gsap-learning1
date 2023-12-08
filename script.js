var tl= gsap.timeline()


tl.from("#nav img",{

   y:50,
   
   opacity:0

})
tl.from(" #main #sidenav", {
    x:80,
    opacity:0

})
tl.from(" #main #centernav", {
    y:80,
    opacity:0

})

tl.from(" #main #first", {
    y:80,
    opacity:0

})
tl.from(" #main #second", {
    x:80,
    opacity:0

})
tl.from(" #main #third", {
    y:80,
    opacity:0

})


tl.from(" #main #topleft", {
    
    opacity:0,
    scale:0,
    stagger:0.1


})
tl.from(" #main #rightbottom", {
    
    opacity:0,
    scale:0,
    stagger:0.1


})
tl.from(" #main #topcenter", {
   
    opacity:0,
    scale:0,
    stagger:0.1


})

tl.from(" #main #bottomcenter", {
   
    
    opacity:0,
    scale:0,
    stagger:0.1



})


