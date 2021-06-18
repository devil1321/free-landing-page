
/*-----------------------------HERO-ANIMATIONS------------------------------ */
const tl_one = gsap.timeline()
const tl_two = gsap.timeline()
const tl_three = gsap.timeline()
tl_one.to('.hero__card-1',{duration:0.7,opacity:1})
      .to('#Mask-one',{duration:0.7,opacity:1})
      .to('#Rectangle_503',{duration:0.7,width:124.349})
      .to('#Rectangle_507',{duration:0.7,width:82.017})
      .to('#Rectangle_504',{duration:0.7,width:387.597})
      .to('#Rectangle_505',{duration:0.7,width:300.289})
      .to('#Rectangle_506',{duration:0.7,width:230.177})

tl_two.to('.hero__card-3',{duration:0.5,opacity:1,delay:0.5})
      .to('#Rectangle_494',{duration:0.5,width:127.305})
      .to('#Rectangle_496',{duration:0.5,width:127.305})
      .to('#Rectangle_497',{duration:0.5,width:68.343})
      .to('#Rectangle_498',{duration:0.5,width:68.343})

tl_three.to('.hero__card-2',{duration:0.5,opacity:1,delay:1})
      .to('#profilePicMask',{duration:0.5,opacity:1})
      .to('#Rectangle_528',{duration:0.5,width:90.443})
      .to('#Rectangle_527',{duration:0.5,width:148.883})   
      .to('#profilePicMask-3',{duration:0.5,opacity:1})
      .to('#Rectangle_530',{duration:0.5,width:148.883})
      .to('#Rectangle_529',{duration:0.5,width:90.443})    
      .to('#profilePicMask-5',{duration:0.5,opacity:1})
      .to('#Rectangle_532',{duration:0.5,width:148.883})
      .to('#Rectangle_531',{duration:0.5,width:90.443})   
      .to('#profilePicMask-7',{duration:0.5,opacity:1})
      .to('#Rectangle_534',{duration:0.5,width:148.883})
      .to('#Rectangle_533',{duration:0.5,width:90.443})

/*--------------------------CARDS-ONE-ANIMATIONS------------------------------ */

gsap.registerPlugin(ScrollTrigger);
const tl_card_one = new gsap.timeline()
const tl_card_two = new gsap.timeline()
const tl_card_three = new gsap.timeline()
tl_card_one
.to('.cards-one__icon-1',{
      scrollTrigger:{
      trigger:'.cards-one__icon-1',
      toggleActions:"none none none none",

      start:"-=200px",
      end:"-=200px",
      scrub:1,
      markers:true,
      onLeaveBack: self => self.disable()
      },
      transform: 'translateY(0px)',
      opacity:1,
      duration:0.5,
})
.to('#Rectangle_537',{
      scrollTrigger:{
      trigger:'#Rectangle_537',
      toggleActions:"none none none none",
      start:"-=250px",
      end:"-=200px",
      scrub:1,
      markers:true,
      onLeaveBack: self => self.disable()
      },
      duration:0.5,
      width:44.333
})
.to('#Rectangle_541',{
      scrollTrigger:{
      trigger:'#Rectangle_541',
      toggleActions:"none none none none",
      start:"-=250px",
      end:"-=200px",
      scrub:1,
      markers:true,
      onLeaveBack: self => self.disable()
      },
      duration:0.5,
      width:13.333
})
.to('#Rectangle_542',{
      scrollTrigger:{
      trigger:'#Rectangle_542',
      toggleActions:"none none none none",
      start:"-=250px",
      end:"-=200px",
      scrub:1,
      markers:true,
      onLeaveBack: self => self.disable()
      },
      duration:0.5,
      width:24.333
})
.to('#Rectangle_537',{
      scrollTrigger:{
      trigger:'#Rectangle_537',
      toggleActions:"none none none none",
      start:"-=250px",
      end:"-=200px",
      scrub:1,
      onLeaveBack: self => self.disable()
      },
      duration:0.5,
      width:44.333
})
.to('#Rectangle_543',{
      scrollTrigger:{
      trigger:'#Rectangle_543',
      toggleActions:"none none none none",
      start:"-=250px",
      end:"-=200px",
      scrub:1,
      onLeaveBack: self => self.disable()
      },
      duration:0.5,
      width:74.333
})
.to('#Rectangle_544',{
      scrollTrigger:{
      trigger:'#Rectangle_544',
      toggleActions:"none none none none",
      start:"-=250px",
      end:"-=200px",
      scrub:1,
      onLeaveBack: self => self.disable()
      },
      duration:0.5,
      width:74.333
})
