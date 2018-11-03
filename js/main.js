function getDogPicture() {
    $.get("https://random.dog/woof.json", function (response) {
        let url = response.url;
        if (url.endsWith("mp4")) {
            getDogPicture();
        }
        $("#dog-picture").html("<img height='500' src='" + url + "'/>")
    });
}

$(document).ready(function() {
    getDogPicture();

    $("#next-dog").click(function() {
        getDogPicture();
    });
});
