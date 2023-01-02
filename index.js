const AVATAR_THUMB_ENDPOINT = "https://thumbnails.roproxy.com/v1/users/avatar-headshot?userIds=144146784&size=352x352&format=Png&isCircular=true";
const AVATAR_IMG = document.getElementById("avatar-img");
const FAVICON = document.querySelector("link[rel~='icon']");
// const EMBED_IMAGE = document.querySelectorAll('[property="og:image"]').item(0)

function setRobloxAvatarThumb() {
    fetch(AVATAR_THUMB_ENDPOINT).then(function(response) {
        response.json().then(function(data) {
            const thumbUrl = data.data[0].imageUrl
            AVATAR_IMG.setAttribute('src', thumbUrl);
            // EMBED_IMAGE.setAttribute("content", thumbUrl)
        })
    });
}

setRobloxAvatarThumb()