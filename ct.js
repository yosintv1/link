const channels = {

fox: " https://yosintv.github.io/player/1m.html?url=https://uugg.hatsune86.space/lchd-foxsports501.m3u8 ", 
willow: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/f7dc5cb51217cf8eda81bc5a822a1548 ", 



    
nepal2: " https://yosintv.github.io/player/player3.html?url=https://back.liveboxpro.com/proxy_this/1251.m3u8 ", 
nepal1: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://nirutv.online/link.html?id=nepal ", 
nepal3: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://nirutv.online/link.html?id=nepal ", 

};
const urlParams = new URLSearchParams(window.location.search);
const channel = urlParams.get('id');

function setChannel(channel) {
    const iframe = document.getElementById('player');
    iframe.src = channels[channel] || channels.soon;
}
setChannel(channel);



// Blocked Domains
var b = 'https://nepsportshub.com/';if (document.referrer.indexOf(b)!=-1){location.href='https://www.yosin-tv.net/';}
var b = 'https://soft-crunch.github.io/';if (document.referrer.indexOf(b)!=-1){location.href='https://www.yosin-tv.net/';}
var b = 'https://www.wicketgoal.com/';if (document.referrer.indexOf(b)!=-1){location.href='https://www.yosin-tv.net/';}
var b = 'https://live.mrgamingstream.net/';if (document.referrer.indexOf(b)!=-1){location.href='https://www.yosin-tv.net/';}
