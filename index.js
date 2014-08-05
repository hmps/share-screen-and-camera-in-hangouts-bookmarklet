javascript:(function(){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia

  navigator.getUserMedia({video: true}, function(media) {
      var div = document.createElement('video')
      , body = document.querySelector('body')
      , bodySteez = window.getComputedStyle(body)
      , bodyWidth = Number(bodySteez.width.replace(/px$/, ''))
      , bodyHeight = Number(bodySteez.height.replace(/px$/, ''))
      , selfieWidth = bodyWidth / 3
      , selfieHeight = (selfieWidth * 3) / 4
      , selfieTop = document.body.scrollTop
      , selfieLeft = (bodyWidth /2) - (selfieWidth /2)

    div.style.width = selfieWidth + "px"
    div.style.height = selfieHeight + "px"
    div.style.position = "absolute"
    div.style.top = selfieTop + "px"
    div.style.left = selfieLeft + "px"
    div.style.transform = "rotateY(180deg)"
    div.style['-webkit-transform'] = "rotateY(180deg)" /* Safari and Chrome */
    div.style['-moz-transform'] = 'rotateY(180deg)' /* Firefox */
    div.style['z-index'] = 9999999
    //div.style.backgroundColor = "red"
    
   

    document.querySelector('body').appendChild(div)
    div.src = window.URL.createObjectURL(media)
    div.play()
   
    document.addEventListener('scroll', function(){
      div.style.top = document.body.scrollTop + 'px'
    })
    
  }, function(err){console.log(err)})
  
})()
