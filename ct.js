const channels = {

    

nepal1: " https://yosintv.github.io/player/dmca.html?url=https://fv1163.huibo.tv/GPA/H914/chunks.m3u8?wsSecret=7ecaa7711b2bc5d91d46ccc428dbd11a&wsTime=1750174553  ",  
nepal2: " https://nirutv.online/link.html?id=nepal  ", 
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
