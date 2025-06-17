const channels = {

    

nepal1: " https://nirutv.online/link.html?id=nepal ",  
nepal2: " https://yosintv.github.io/player/player3.html?url=https://1a-1791.com/live/t5qc33px/slot-35/gikc-hoy6_1080p/chunklist.m3u8 ", 
nepal3: " https://sportslivehub01.live/en-BD/stream/19001984 ", 

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
