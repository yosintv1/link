const channels = {

    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test2: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    

    
    
    nepal1: " https://yosintv.github.io/player/player3.html?url=https://1a-1791.com/live/y16rq9u0/slot-99/dh3u-ad4g_1080p/chunklist.m3u8  ",  
    nepal2: " https://linnk.pages.dev/soon?time=1750082437  ", 
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
