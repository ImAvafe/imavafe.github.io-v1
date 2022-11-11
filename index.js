const AVATAR_THUMB_ENDPOINT = "https://thumbnails.roproxy.com/v1/users/avatar?userIds=144146784&size=352x352&format=Png&isCircular=false";
const AVATAR = document.getElementById("avatar");
const FAVICON = document.querySelector("link[rel~='icon']");
const EMBED_IMAGE = document.querySelectorAll('[property="og:image"]').item(0)

function setRobloxAvatarThumb() {
    fetch(AVATAR_THUMB_ENDPOINT).then(function(response) {
        response.json().then(function(data) {
            const thumbUrl = data.data[0].imageUrl
            AVATAR.style.backgroundImage = "url("+thumbUrl+")";
            EMBED_IMAGE.setAttribute("content", thumbUrl)
        })
    });
}

setRobloxAvatarThumb()