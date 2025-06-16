const channels = {

    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test2: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    

    
    
    nepal1: " https://yosintv.github.io/player/dmca.html?url=https://fv1163.huibo.tv/GM/H208/chunks.m3u8?wsSecret=ecaabea5b7410047cc591084943a9d12&wsTime=1750083897  ",  
    nepal2: " https://yosintv.github.io/player/dmca.html?url=https://fv1163.huibo.tv/GS/H3105/chunks.m3u8?wsSecret=8d00434947537924e69c615d1d557b96&wsTime=1750083925  ", 
    nepal3: " https://topembed.pw/channel/ex8051941  ", 
    

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
