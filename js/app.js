

/*-----------------------------HERO-ANIMATIONS------------------------------ */
const tl_one = gsap.timeline()
const tl_two = gsap.timeline()
const tl_three = gsap.timeline()



tl_one.to('.hero__card-1',{force3D:true,duration:0.7,opacity:1})
      .to('#Mask-one',{force3D:true,duration:0.7,opacity:1})
      .to('#Rectangle_503',{force3D:true,duration:0.7,width:124.349})
      .to('#Rectangle_507',{force3D:true,duration:0.7,width:82.017})
      .to('#Rectangle_504',{force3D:true,duration:0.7,width:387.597})
      .to('#Rectangle_505',{force3D:true,duration:0.7,width:300.289})
      .to('#Rectangle_506',{force3D:true,duration:0.7,width:230.177})

tl_two.to('.hero__card-3',{force3D:true,duration:0.5,opacity:1,delay:0.5})
      .to('#Rectangle_494',{force3D:true,duration:0.5,width:127.305})
      .to('#Rectangle_496',{force3D:true,duration:0.5,width:127.305})
      .to('#Rectangle_497',{force3D:true,duration:0.5,width:68.343})
      .to('#Rectangle_498',{force3D:true,duration:0.5,width:68.343})

tl_three.to('.hero__card-2',{force3D:true,duration:0.5,opacity:1,delay:1})
      .to('#profilePicMask',{force3D:true,duration:0.5,opacity:1})
      .to('#Rectangle_528',{force3D:true,duration:0.5,width:90.443})
      .to('#Rectangle_527',{force3D:true,duration:0.5,width:148.883})   
      .to('#profilePicMask-3',{force3D:true,duration:0.5,opacity:1})
      .to('#Rectangle_530',{force3D:true,duration:0.5,width:148.883})
      .to('#Rectangle_529',{force3D:true,duration:0.5,width:90.443})    
      .to('#profilePicMask-5',{force3D:true,duration:0.5,opacity:1})
      .to('#Rectangle_532',{force3D:true,duration:0.5,width:148.883})
      .to('#Rectangle_531',{force3D:true,duration:0.5,width:90.443})   
      .to('#profilePicMask-7',{force3D:true,duration:0.5,opacity:1})
      .to('#Rectangle_534',{force3D:true,duration:0.5,width:148.883})
      .to('#Rectangle_533',{force3D:true,duration:0.5,width:90.443})

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
            start:"-=400px",
            end:"-=400px",
            scrub:5,
            onLeaveBack: self => self.disable()
            },
            transform: 'translateY(0px)',
            opacity:1,
            duration:2,
            force3D:true
      })
      .to('#Rectangle_537',{
            scrollTrigger:{
            trigger:'#Rectangle_537',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:44.333,
            force3D:true
      })
      .to('#Rectangle_541',{
            scrollTrigger:{
            trigger:'#Rectangle_541',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:13.333
      })
      .to('#Rectangle_542',{
            scrollTrigger:{
            trigger:'#Rectangle_542',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:24.333,
            force3D:true
      })
      .to('#Rectangle_537',{
            scrollTrigger:{
            trigger:'#Rectangle_537',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:44.333,
            force3D:true
      })
      .to('#Rectangle_543',{
            scrollTrigger:{
            trigger:'#Rectangle_543',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:74.333,
            force3D:true
      })
      .to('#Rectangle_544',{
            scrollTrigger:{
            trigger:'#Rectangle_544',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:74.333,
            force3D:true
      })

tl_card_two
      .to('.cards-one__icon-2',{
            scrollTrigger:{
            trigger:'.cards-one__icon-2',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:5,
            onLeaveBack: self => self.disable()
            },
            transform: 'translateY(0px)',
            opacity:1,
            duration:2,
            delay:1,
            force3D:true
      })
      .to('#Rectangle_537',{
            scrollTrigger:{
            trigger:'#Rectangle_537',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:44,
            force3D:true
      })
      .to('#Rectangle_546',{
            scrollTrigger:{
            trigger:'#Rectangle_546',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891,
            force3D:true
      })
      .to('#Rectangle_547',{
            scrollTrigger:{
            trigger:'#Rectangle_547',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891,
            force3D:true
      })
      .to('#Rectangle_548',{
            scrollTrigger:{
            trigger:'#Rectangle_548',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891,
            force3D:true
      })
      .to('#Rectangle_545',{
            scrollTrigger:{
            trigger:'#Rectangle_545',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891,
            force3D:true
      })
      .to('#Rectangle_551',{
            scrollTrigger:{
            trigger:'#Rectangle_551',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891,
            force3D:true
      })
      .to('#Rectangle_550',{
            scrollTrigger:{
            trigger:'#Rectangle_550',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891,
            force3D:true
      })
      .to('#Rectangle_549',{
            scrollTrigger:{
            trigger:'#Rectangle_549',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891,
            force3D:true
      })

tl_card_three
      .to('.cards-one__icon-3',{
            scrollTrigger:{
            trigger:'.cards-one__icon-3',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:5,
            onLeaveBack: self => self.disable()
            },
            transform: 'translateY(0px)',
            opacity:1,
            duration:2,
            delay:1,
            force3D:true
      })
      .to('#Ellipse_19-2',{
            scrollTrigger:{
            trigger:'#Ellipse_19-2',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            opacity:1,
            force3D:true
      })
      .to('#Ellipse_20-2',{
            scrollTrigger:{
            trigger:'#Ellipse_20-2',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            opacity:1,
            force3D:true
      })
      .to('#Ellipse_19',{
            scrollTrigger:{
            trigger:'#Ellipse_19',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            opacity:1,
            force3D:true
      })
      .to('#Ellipse_20',{
            scrollTrigger:{
            trigger:'#Ellipse_20',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            opacity:1,
            force3D:true
      })
      .to('#Rectangle_538',{
            scrollTrigger:{
            trigger:'#Rectangle_538',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:44,
            force3D:true
      })
      .to('#Rectangle_539',{
            scrollTrigger:{
            trigger:'#Rectangle_539',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:54.333,
            force3D:true
      })
     
const article__cards = new gsap.timeline()
const article__text = new gsap.timeline()

article__cards
.to('.article__svg-wrapper.one',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      left:'-150px',
      opacity:1,
      force3D:true
})
.to('.article__svg-wrapper.two',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      top:'250px',
      opacity:1,
      force3D:true
})

article__text
.to('.article h2',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      left:'0px',
      opacity:1,
      force3D:true
})
.to('.article p',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:6,
      onLeaveBack: self => self.disable()
      },
      left:'0px',
      opacity:1,
      force3D:true
})
.to('.article button',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:7,
      onLeaveBack: self => self.disable()
      },
      left:'-5px',
      opacity:1,
      force3D:true
})



const feature__cards = new gsap.timeline()
const feature__text = new gsap.timeline()
var left_one = 100
var left_two = 0
if(window.innerWidth === 1024  && window.innerHeight === 1366){
      var left_one = 0
      var left_two = -100
}else if(window.innerWidth === 768  && window.innerHeight === 1024){
      var left_one = -120
      var left_two = -120
}else if(window.innerWidth === 1024  && window.innerHeight === 768){
      var left_one = -50
      var left_two = -100
}else if(window.innerWidth <= 540  && window.innerHeight < 840){
      var left_one = -130
      var left_two = -130
}
feature__cards
.to('.feature__svg-wrapper.one',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      left:left_one + 'px',
      top:'-300px',
      opacity:1,
      force3D:true
})
.to('.feature__svg-wrapper.two',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      top:'0px',
      left:left_two + 'px',
      opacity:1,
      force3D:true
})

feature__text
.to('.feature h2',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      left:'0px',
      opacity:1,
      force3D:true
})
.to('.feature p',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:6,
      onLeaveBack: self => self.disable()
      },
      left:'0px',
      opacity:1,
      force3D:true
})
.to('.feature button',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:7,
      onLeaveBack: self => self.disable()
      },
      left:'-5px',
      opacity:1,
      force3D:true
})

const testimonials = new gsap.timeline()

testimonials
.to('.testimonials__card',{
      scrollTrigger:{
      trigger:'.testimonials',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=50px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      top:'0px',
      opacity:1,
      force3D:true
})