function load() {
    var coverText = "blank--space";
    var doStrong = false;

    $(".animation").html("");

    for (var i = 0; i < coverText.length; i++) {
        setTimeout(function() {
            if (coverText[0] == "\1") {
                doStrong = true;
            } else if (coverText[0] == "\2") {
                doStrong = false;
            } else {
                $(".animation").html($(".animation").html() + coverText[0]);
            }
            
            coverText = coverText.substring(1);
        }, 100 * (i + 1));
    }
}