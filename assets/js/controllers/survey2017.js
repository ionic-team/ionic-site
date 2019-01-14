IonicSiteModule
.controller('SurveyCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var currentSection = window.location.hash;

  function scrollCheck() {
    scrollPos = document.body.scrollTop || 
                document.documentElement.scrollTop || 0;
    if (scrollPos < 200 && currentSection) {
      currentSection = null;
      window.location.hash = '';
      history.replaceState({}, "", '');
    }
  };

  window.addEventListener('scroll',function(){$timeout(scrollCheck)});

  // Scrollspy
  $('body').scrollspy({
    offset: 150
  });

  // update the URL on scrollspy change
  $(window).on('activate.bs.scrollspy', function (e) {
    currentSection = $("a[href^='#']", e.target).attr("href");
    history.replaceState({}, "Ionic Framework - Survey-2017", currentSection);
  });

  // canvas animation at the top
  function init() {
    canvas = document.getElementById('statistical-suspension'); 
    banner = document.getElementById('survey-banner');
    context = canvas.getContext('2d');
    canvasSize = {}
    canvas.height = banner.offsetHeight * 2;
    canvas.width = window.innerWidth * 2;
    mouse = {x:0,y:0};
    banner.addEventListener('mousemove',MouseMove,false);
    banner.addEventListener('mousedown',MouseDown,false);
    banner.addEventListener('mouseup',MouseUp,false);
    banner.addEventListener('resize',canvasResize,false);
    maxDistance = Math.sqrt(Math.pow(canvas.height,2) + Math.pow(canvas.width,2))
    // console.log(maxDistance)
    dotsHolder = [];
    
    mouseMove = false;
    mouseDown = false;
    for(i = 0;i < 50;i++) {
      dotsHolder.push(new dots());
    }
  }

  function canvasResize(event) {
    canvas.height = 305;
    canvas.width = window.innerWidth;
    cancelAnimationFrame(animate);
  }

  function MouseUp(event) {
    if(mouseMove) {
      mouseMove = false;
    }  
    if(mouseDown) {
      mouseDown = false;
    }
  }

  function MouseDown(event) {
    mouseDown = true;
  }

  function MouseMove(event) {
    mouse.x = (event.pageX - canvas.offsetLeft) * 2;
    mouse.y = (event.pageY - canvas.offsetTop) * 2;
    if(mouseMove) {
      context.lineTo(mouseX,mouseY);
      context.stroke();
    }
  }

  function dots() {
    this.xPos = Math.random()*canvas.width;
    this.yPos = Math.random()*canvas.height;
    this.color = '#fff';
    this.radius = ((Math.random() * .5) + .5) * 100; 
    this.vx = Math.cos(this.radius) / 4;
    this.vy = Math.sin(this.radius) / 4;
    this.friction = 7;
    this.speedX = this.vx;
    this.speedY = this.vy;
  } 
  
  dots.draw = function() {
    context.clearRect(0,0,canvas.width,canvas.height);
    for(var c = 0; c < dotsHolder.length;c++) {
      dot = dotsHolder[c]; 
      context.beginPath();
      distanceX = dot.xPos - mouse.x;
      distanceY = dot.yPos - mouse.y;
      var particleDistance =  Math.sqrt(Math.pow(distanceX,2) + Math.pow(distanceY, 2));
      var particleMouse = Math.pow(Math.max(1.2 - particleDistance / maxDistance, 1), 4);
      context.fillStyle = dot.color;
      context.globalAlpha = (c / dotsHolder.length / 2) + .5;
      dot.xPos += dot.vx;
      dot.yPos += dot.vy;
      if(dot.xPos < -50) {dot.xPos = canvas.width+50;}
      if(dot.yPos < -50) {dot.yPos = canvas.height+50;}
      if(dot.xPos > canvas.width+50) {dot.xPos = -50;}
      if(dot.yPos > canvas.height+50) {dot.yPos = -50;}
      context.font = (dot.radius * particleMouse ) + "px Arial";
      context.fillText(c % 2 ? "°" : '+',dot.xPos,dot.yPos);
      context.fill();

    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    dots.draw();
  }

  init();
  animate();
  
}]);
