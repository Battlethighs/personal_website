var timeoutID;
var timeoutID2;

function unhide(content,link) {

	var selected = $('.selected')
	selected.removeClass('selected')
	selected.addClass('hidden')
	var el = $('.'+ content)

	el.removeClass('hidden')
	el.addClass('selected')

	var underlined = $('.underline')
	underlined.removeClass('underline')
	$(link).addClass('underline')

}

function switchy(content,link) {

	if ($(link).hasClass('underline')) {
		return}
	else {
		switch1();
		timeoutID = setTimeout(function() {
			switch2(content,link);
		},500);
		timeoutID2 = setTimeout(function() {
			switch3(content);
		},1050);
	}
}

function switch1() {
	var selected = $('.selected')
	selected.animate({opacity: '0'})
}

function switch2(content,link) {
	var selected = $('.selected')
	selected.addClass('hidden')
	selected.removeClass('selected')
	var underlined = $('.underline')
	underlined.removeClass('underline')
	$(link).addClass('underline')
	var el = $('.'+ content)
	el.removeClass('hidden')
	el.addClass('selected')
	/*el.animate({opacity:'1'})*/
}

function switch3(content){
	var el = $('.'+ content)
	el.animate({opacity:'1'})
}