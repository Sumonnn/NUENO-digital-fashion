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

function page2(){
   let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.page2',
        // markers:true,
        start:'top 40%',
        end:'0% 20%',
        scrub:1,
    }
   })

   tl.from('.page2>h3',{
    y:100,
    opacity:0,
   })
   .from('.page2>p',{
    opacity:0,
    y:100,
   })

}
page2();