const channels = {

    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test2: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    

    
    
    nepal1: " soon?time=1750078803 ",  
    nepal2: " soon?time=1750078803  ", 
    nepal3: " soon?time=1750078803  ", 
    

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
