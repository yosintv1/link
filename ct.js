const channels = {

    test1: " https://live.mrgamingstream.net/mdp3?id=https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/uugw0qkwob/out/v1/acfdcf2dabd24075bb615c6c19ba9bd4/cenc.mpd&key=c84fcd82767a9cd9e2e0c0d1b47a72c5&keyid=ec2147a4b9b1b87ee3d8dc6915bc7928  ",  
    england1: " https://yosintv.github.io/player/dmca.html?url=https://funn-g1163.huibo.tv/GE/H10/chunks.m3u8?p=46&cf=1749389469&d=&ip=126.37.212.112&e=1799390011&h=17d3d83a90238815b3297a9a6317fe6f ", 
    england3: " https://yosintv.github.io/player/dmca.html?url=https://1a-1791.com/live/r31jzt5k/slot-133/g6ml-kuxv_1080p/chunklist_DVR.m3u8 ", 
    

    
    
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
