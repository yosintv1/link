const channels = {

    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test2: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/8f9b6c2d1e4a7890f3a5b1c8d7e6f4a3  ",  
    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    

    
    
    nepal1: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://live.mrgamingstream.net/link.html?id=nepal ",  
    nepal2: "  https://yosintv.github.io/player/player3.html?url=https://1a-1791.com/live/b9exd20e/slot-31/ad06-advv_1080p/chunklist.m3u8  ", 
    nepal3: "  https://linnk.pages.dev/cricket?id=nepal1  ", 
    

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
