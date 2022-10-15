new Typed('#typed',{strings : ['Simone Olivia','a Freelancer.','a Photographer.','a Designer.'],  
   loop: true,  
      typeSpeed: 100,  
         backSpeed: 50,    
          backDelay: 1500,   });

          



  document.addEventListener("DOMContentLoaded", function() {
   var elements = document.querySelectorAll(".scroll-counter")
   elements.forEach(function(item) {
     item.counterAlreadyFired = false
     item.counterSpeed = item.getAttribute("data-counter-time") / 45
     item.counterTarget = +item.innerText
     item.counterCount = 0
     item.counterStep = item.counterTarget / item.counterSpeed
 
     item.updateCounter = function() {
       item.counterCount = item.counterCount + item.counterStep
       item.innerText = Math.ceil(item.counterCount)
 
       if (item.counterCount < item.counterTarget) {
         setTimeout(item.updateCounter, item.counterSpeed)
       } else {
         item.innerText = item.counterTarget
       }
     }
   })
   var isElementVisible = function isElementVisible(el) {
     var scroll = window.scrollY || window.pageYOffset
     var boundsTop = el.getBoundingClientRect().top + scroll
     var viewport = {
       top: scroll,
       bottom: scroll + window.innerHeight,
     }
     var bounds = {
       top: boundsTop,
       bottom: boundsTop + el.clientHeight,
     }
     return (
       (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
       (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
     )
   }
   var handleScroll = function handleScroll() {
     elements.forEach(function(item, id) {
       if (true === item.counterAlreadyFired) return
       if (!isElementVisible(item)) return
       item.updateCounter()
       item.counterAlreadyFired = true
     })
   }
   window.addEventListener("scroll", handleScroll)
 })

            





