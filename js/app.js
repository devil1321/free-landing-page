
const tl_one = gsap.timeline()
const tl_two = gsap.timeline()
const tl_three = gsap.timeline()
// svg one card hero
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


