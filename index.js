const AVATAR_THUMB_ENDPOINT = "https://thumbnails.roproxy.com/v1/users/avatar?userIds=144146784&size=352x352&format=Png&isCircular=false";
const BANNER = document.getElementById("banner");

function getRobloxAvatarThumb() {
    fetch(AVATAR_THUMB_ENDPOINT).then(function(response) {
        response.json().then(function(data) {
            const thumbUrl = data.data[0].imageUrl
            BANNER.style.backgroundImage = "url("+thumbUrl+")";
        })
        
    });
}

getRobloxAvatarThumb()