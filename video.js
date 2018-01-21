(function () {
    // hämtar video från index
    var video = document.getElementById('video'),
        vendorUrl = window.URL || window.webkitURL;

    // hämta media
    // standard, chrome, mozilla, MS
    navigator.getMedia =
        navigator.getUserMedia ||
        navigator.webkitUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    // hämta video strema till lägger i objekt, video o ljud 
    navigator.getMedia({
            video: true,
            audio: false;
        }, function (stream) {
            video.src = vendorUrl.createObjectURL(stream);
            video.play();
        },
        function (error) {
            // An error occured
            //error.code
        });
})();
