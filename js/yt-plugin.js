 function onYouTubeIframeAPIReady() {
  var player;
    console.log(document.getElementById("home").offsetWidth/document.getElementById("home").offsetHeight)
  player = new YT.Player('muteYouTubeVideoPlayer', {
    videoId: 'iSNpEi2vWXI', // YouTube Video ID
    frameborder: 0,
    width: document.getElementById("home").offsetWidth,               // Player width (in px)
    height: document.getElementById("home").offsetWidth/1.7775,              // Player height (in px)
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 0,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 1,              // Hide the full screen button
      cc_load_policy: 1, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0,        // Hide video controls when playing
      disablekb: 1,
        rel:0
    },
    events: {
      onReady: function(e) {
        player.setPlaybackQuality('hd720');
        e.target.mute();
      }
    }
  });
 }
