function page1(){
   gsap.to('.page1',{
    scrollTrigger:{
        trigger:".page1-img",
        // markers:true,
        start:'top 20%',
        end:'bottom top',
        pin:true,
        scrub:0.5,
    }
   })
}
page1();