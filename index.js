javascript:(function(){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  var mirror = document.querySelector('#lol-mirror');

  if (!mirror) {
    navigator.getUserMedia({video: true}, function(media) {
      window.mirrorStream = media;

        var div = document.createElement('video')
        , body = document.querySelector('body')
        , bodySteez = window.getComputedStyle(body)
        , bodyWidth = Number(bodySteez.width.replace(/px$/, ''))
        , bodyHeight = Number(bodySteez.height.replace(/px$/, ''))
        , selfieWidth = bodyWidth / 5
        , selfieHeight = (selfieWidth * 3) / 4
        , selfieLeft = (bodyWidth /2) - (selfieWidth /2);

      div.id = "lol-mirror";
      div.style.width = selfieWidth + "px";
      div.style.height = selfieHeight + "px";
      div.style.position = "fixed";
      div.style.bottom = "10px";
      div.style.right = "10px";
      div.style.transform = "rotateY(180deg)";
      div.style['z-index'] = 9999999;

      document.querySelector('body').appendChild(div);
      div.src = window.URL.createObjectURL(media);
      div.play();
     
      document.addEventListener('scroll', function(){
        div.style.top = document.body.scrollTop + 'px';
      })
      
    }, function(err){console.log(err)})
  } else {
    mirror.parentElement.removeChild(mirror);
    window.mirrorStream.stop();
  }
  
})()
