
/*-----------------------------MEDIA---------------------------------------- */
const userAgent = navigator.userAgent.toLowerCase();
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

const desktopHorizontal = window.matchMedia('(min-device-width: 1024px)').matches
const dekstopVertical = window.matchMedia('(min-device-height: 768px)').matches

const ipadHorizontaPRO = window.matchMedia('(max-device-width: 1024px)').matches
const ipadVerticalPRO = window.matchMedia('(max-device-height: 1366px)').matches

const ipad = window.matchMedia('(max-device-width: 1024px)').matches
const phone= window.matchMedia('(max-device-width: 767px)').matches

let startCards = 400
let endCards = 400
let start = 250
let end = 250
if(desktopHorizontal && dekstopVertical && !isTablet){
      
}
