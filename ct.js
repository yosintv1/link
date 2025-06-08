const channels = {
    
nepal1:      " https://yosintv.github.io/player/dmca.html?url=https://hls.uouetrq19.com/live/sd-6MuSNPQ8o9cUpp7a1V.m3u8?txSecret=86bb554f4933eb6f58fb43a7ae911d2c&txTime=6842D844 ",    // IPLPPV
nepal2:      " https://www.youtube.com/embed/zrQyQjx3M_Y ",    // IPLPPV


    
willow2:      " https://yosintv.github.io/player/jwnoads.html?src=https://enz.gdplayertv.to/embed/willow-xtra/ ",    // IPLPPV

    
ipl:      " hhttps://yosintv.github.io/player/player3.html?url=https://hlsvidvib.cloudycx.net/live/mv12-720p.mpd?index20.m3u8	",    // IPLPPV
fox:      " https://yosintv.github.io/player/dmca.html?url=https://funn-g1163.huibo.tv/DGI/H2102/chunks.m3u8?p=49&cf=1748786398&d=&ip=126.37.212.112&e=1749986998&h=c75748b48e18dcf719cbd2ef19fe946e ",    // IPLPPV
tsports:  " https://yosintv1.github.io/link/cricket.html?id=fox	 ",    // IPLPPV

    
skycric: " https://yosintv2.github.io/bkp/plyrr.html?url=https://top1-cdnnew.newkso.ru/top1-cdn/BXtuTCs4gU/mono.m3u8",    // IPLPPV
ipl11: " https://fembedbuddy.top/hembedplayer/csstream2/1/960/540	 ",    // IPLPPV
ipl22: " https://fembedbuddy.top/hembedplayer/csstream1/1/960/540	 ",    // IPLPPV
    
    
willow: " https://yosintv.github.io/player/dmca.html?url=?url=https://funn-g1163.huibo.tv/GE/H15/chunks.m3u8?p=46&cf=1746716743&d=&ip=106.154.152.247&e=1746917343&h=8e876870ae6582fff8a13e64ea8838fc ",    // IPLPPV
t11: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://wikisport.best/strm/t11.php ",    // IPLPPV
sk1nz: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://wikisport.best/embed/sk1nz.php	 ",    // IPLPPV
t20cfd: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://userrr4591.ifrem.net/iframe/frame.php ",    // IPLPPV

    



    
//Nepal LIVE
  
psl: "https://live.mrgamingstream.net/Player/m3u?url=https://stream2.aryzap.com/v1/018a8885b8951eb401a603639363/018a88860ada09831f17035d95dd/main.m3u8 ",     // NEPAL
psl1: " https://live.mrgamingstream.net/Player/jwads.html?src=https://live.mrgamingstream.net/Player/m3u?url=https://stream2.aryzap.com/v1/018a8885b8951eb401a603639363/018a88860ada09831f17035d95dd/main.m3u8",     // NEPAL



soon: " https://yosintv2.github.io/tv/soon.html",    
};



    
const urlParams = new URLSearchParams(window.location.search);
const channel = urlParams.get('id');
function setChannel(channel) {
const iframe = document.getElementById('player');
iframe.src = channels[channel] || channels.soon;
}
setChannel(channel);
