$("#button").click(function() {
    $.ajax({
        method: "GET",
        url: "http://aws.random.cat/meow"
    }).done(function(cat) {
        $.ajax({
            method: "GET",
            url: "https://api.chucknorris.io/jokes/random"
        }).done(function(norris) {
            $("#quoteText").text(norris.value);
            $("#image").attr("src", cat.file);
        }).fail(function() {
            console.log("Could not get norris quote");
        });
    }).fail(function() {
        console.log("Could not get cat image");
    })
});