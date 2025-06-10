const channels = {

    england2: " https://yosintv.github.io/player/dmca.html?url=https://funn-g1163.huibo.tv/DGI/H2231/chunks.m3u8?p=49&cf=1749389411&d=&ip=126.37.212.112&e=1799390011&h=c2f5c4bf70d8ae08d5483cfeabec1758 ",  
    england1: " https://yosintv.github.io/player/dmca.html?url=https://funn-g1163.huibo.tv/GE/H10/chunks.m3u8?p=46&cf=1749389469&d=&ip=126.37.212.112&e=1799390011&h=17d3d83a90238815b3297a9a6317fe6f ", 
    england3: " https://yosintv.github.io/player/dmca.html?url=https://1a-1791.com/live/r31jzt5k/slot-133/g6ml-kuxv_1080p/chunklist_DVR.m3u8 ", 
    

    
    
    nepal1: " https://yosintv.github.io/player/player3.html?url=https://1a-1791.com/live/kd32s8ur/slot-17/2ekg-9ru2_1080p/chunklist.m3u8 ",  
    nepal2: "  https://linnk.pages.dev/cricket?id=nepal1  ", 
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
