const channels = {

    nepal1: " https://yosintv.github.io/player/dmca.html?url=https://funn-g1163.huibo.tv/GS/H3106/chunks.m3u8?p=48&cf=1749376911&d=&ip=126.37.212.112&e=1799377511&h=ab0bfc5e2cb04fe98ce3f3d66fa9194f ",  
    nepal2: " https://yosintv.github.io/player/dmca.html?url=https://funn-g1163.huibo.tv/GM/H207/chunks.m3u8?p=47&cf=1749376947&d=&ip=126.37.212.112&e=1799377547&h=9e1e3e2154ecbad1e1190d213db89216 ", 
    nepal3: " https://yosintv.github.io/player/dmca.html?url=https://1a-1791.com/live/r31jzt5k/slot-133/g6ml-kuxv_1080p/chunklist_DVR.m3u8 ", 
    

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
