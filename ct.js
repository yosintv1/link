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



// Blocked Domains
var b = 'https://soft-crunch.github.io/';if (document.referrer.indexOf(b)!=-1){location.href='https://www.yosin-tv.net/';}
var b = 'https://www.wicketgoal.com/';if (document.referrer.indexOf(b)!=-1){location.href='https://www.yosin-tv.net/';}
var b = 'https://live.mrgamingstream.net/';if (document.referrer.indexOf(b)!=-1){location.href='https://www.yosin-tv.net/';}
