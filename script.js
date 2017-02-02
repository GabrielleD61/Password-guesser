$('button').click(function() {
	var guess = $('input').val();
	var pass = "chesse";
    if (guess === pass) {
        $("div").html("congrats...youre hungry...");
    }
});