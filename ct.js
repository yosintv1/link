const channels = {

    

nepal1: " https://yosintv.github.io/player/dmca.html?url=https://fv1163.huibo.tv/GPA/H914/chunks.m3u8?wsSecret=ea888d32266b00247ec62b85f3664583&wsTime=1750170905",  
nepal2: " hhttps://nirutv.online/link.html?id=nepal  ", 
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
