const channels = {

    nepal1: " https://yosintv.github.io/player/dmca.html?url=https://hls.uouetrq19.com/live/sd-6MuSNPQ8o9cUpp7a1V.m3u8?txSecret=86bb554f4933eb6f58fb43a7ae911d2c&txTime=6842D844 ", // IPLPPV
    nepal2: " https://www.youtube.com/embed/zrQyQjx3M_Y ", // IPLPPV


    willow: " https://yosintv.github.io/player/dmca.html?url=?url=https://funn-g1163.huibo.tv/GE/H15/chunks.m3u8?p=46&cf=1746716743&d=&ip=106.154.152.247&e=1746917343&h=8e876870ae6582fff8a13e64ea8838fc ", // IPLPPV
    t11: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://wikisport.best/strm/t11.php ", // IPLPPV
    sk1nz: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://wikisport.best/embed/sk1nz.php	 ", // IPLPPV
    t20cfd: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://userrr4591.ifrem.net/iframe/frame.php ", // IPLPPV

    
    soon: " https://yosintv2.github.io/tv/soon.html",
};




const urlParams = new URLSearchParams(window.location.search);
const channel = urlParams.get('id');

function setChannel(channel) {
    const iframe = document.getElementById('player');
    iframe.src = channels[channel] || channels.soon;
}
setChannel(channel);


(function() {
  // Define the allowed domain
  const allowedDomains = ['tv.yosintvlive.com', 'linnk.pages.dev'];

  // Get the current domain
  const currentDomain = window.location.hostname;

  // Check if the current domain matches the allowed domain
  if (currentDomain !== allowedDomain && !currentDomain.endsWith('.' + allowedDomain)) {
    // Option 1: Display an error message and prevent further execution
    document.body.innerHTML = '<h1>Access Denied</h1><p>This page is only accessible from ' + allowedDomain + '</p>';
    
    // Option 2: Redirect to the allowed domain (uncomment to use)
    // window.location.href = 'https://' + allowedDomain;
    
    // Stop further execution
    throw new Error('Access restricted to ' + allowedDomain);
  }
})();
