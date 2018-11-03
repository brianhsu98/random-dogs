function getDogPicture() {
    $.get("https://random.dog/woof.json", function (response) {
        let url = response.url;
        if (url.endsWith("mp4")) {
            $("#dog-picture").html("<video height='500' src='" + url + "'/>")
        } else {
            $("#dog-picture").html("<img height='500' src='" + url + "'/>")
        }
    });
}

$(document).ready(function() {
    getDogPicture();

    $("#next-dog").click(function() {
        getDogPicture();
    });
});
