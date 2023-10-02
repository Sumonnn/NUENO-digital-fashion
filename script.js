function page1() {
    gsap.to('.page1', {
        scrollTrigger: {
            trigger: ".page1-img",
            // markers:true,
            start: 'top 20%',
            end: 'bottom top',
            pin: true,
            scrub: 0.5,
        }
    })
}
page1();

function page2() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.page2',
            // markers:true,
            start: 'top 40%',
            end: '0% 20%',
            scrub: 1,
        }
    })

    tl.from('.page2>h3', {
        y: 100,
        opacity: 0,
    })
        .from('.page2>p', {
            opacity: 0,
            y: 100,
        })

}
page2();

function page3() {
    gsap.from('.page3', {
        x: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: '.page3',
            // markers: true,
            scrub: 2,
            start: 'top 80%',
            end: 'top 74%',
        }
    })


    const main = document.querySelector('.page3-img');
    const circle = document.querySelector('.circle1');

    main.addEventListener('mousemove', (dets) => {
        circle.style.left = dets.clientX - main.getBoundingClientRect().left  + "px";
        circle.style.top = dets.clientY - main.getBoundingClientRect().top 
        + "px";
    })

    main.addEventListener('mouseleave', (dets) => {
        circle.style.left = `0%`
        circle.style.top = `40%`
    })
}
page3();