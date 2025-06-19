const channels = {

    

nepal1: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://nirutv.online/link.html?id=nepal ", 
nepal2: " https://yosintv.github.io/yosintv/jwplayers.html?src=https://nirutv.online/link.html?id=nepal ", 
nepal3: " https://bintvfunplayernoads.netlify.app/player.html?src=https://polite-capybara-15e90e.netlify.app/player.html?id=willowextra ", 

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
