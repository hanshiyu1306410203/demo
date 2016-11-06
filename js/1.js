 closetime = 0; // Close window after __ number of seconds?
 // 0 = do not close, anything else = number of seconds
//  function Start(URL, WIDTH, HEIGHT) {  windowprops = "left=50,top=50,width=" + WIDTH + ",height=" + HEIGHT; preview = window.open(URL, "preview", windowprops);  if (closetime) setTimeout("preview.close();", closetime*1000); }
// function doPopup() {   url = "1.htm"; // change to your popup page URL   width = 267;  // width of window in pixels height = 103; // height of window in pixels  delay = 5;
// time in seconds before popup opens  timer = setTimeout("Start(url, width, height)", delay*1000); }  //  End --> </script>/**

