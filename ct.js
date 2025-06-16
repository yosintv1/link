const channels = {

    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test2: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    test1: " https://href.li/https://yosintv.github.io/yosintv/jwplayers.html?src=https://kleanembed.online/embed/j5ru6icHofROsespidec64w0s7lgo8ot  ",  
    

    
    
    nepal1: " https://yosintv.github.io/player/dmca.html?url=https://fv1163.huibo.tv/GM/H208/chunks.m3u8?wsSecret=906f0f25bf9aab6dab29fadfdfbe0963&wsTime=1750086191  ",  
    nepal2: " /cricket?id=nepal1  ", 
    

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
