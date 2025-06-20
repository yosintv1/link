(function() {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        document.body.classList.add('theme-dark');
    } else {
        document.body.classList.add('theme-light');
    }
})();

let shortenedUrl = '';

function loadShareLink() {
    const originalUrl = window.location.href;
    const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(originalUrl);

    fetch(apiUrl)
        .then(response => response.text())
        .then(shortUrl => {
            shortenedUrl = shortUrl;
            document.getElementById("shareLinkBox").textContent = shortUrl;
        })
        .catch(error => {
            shortenedUrl = originalUrl;
            document.getElementById("shareLinkBox").textContent = "Error generating link.";
            console.error("Shortening failed:", error);
        });
}

function copyToClipboard() {
    const text = document.getElementById("shareLinkBox").textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Link copied to clipboard!");
    });
}

function shareTo(platform) {
    const text = encodeURIComponent("Check out this live stream on YoSinTV!");
    const url = encodeURIComponent(shortenedUrl || window.location.href);
    let shareUrl;

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
            break;
        case 'instagram':
            copyToClipboard();
            alert("Instagram sharing not supported directly. Link copied to clipboard! Paste it in Instagram.");
            return;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            break;
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
            break;
        case 'messenger':
            shareUrl = `https://www.facebook.com/dialog/send?link=${url}&app_id=123456789&redirect_uri=${url}`;
            break;
        default:
            return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
}

function rdmode() {
    const newMode = localStorage.getItem("mode") === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light");
}

(function initializePlayer() {
    const urlParams = new URLSearchParams(window.location.search);
    const srcParam = urlParams.get('src');
    const videoUrl = urlParams.get('hls');

    if (srcParam) {
        document.getElementById('iframe').src = srcParam;
        document.getElementById('jwPlayer').style.display = 'none';
    } else if (videoUrl) {
        jwplayer("jwPlayer").setup({
            file: videoUrl,
            width: "100%",
            aspectratio: "16:9"
        });
        document.getElementById('iframe').style.display = 'none';
    }
})();

loadShareLink();
