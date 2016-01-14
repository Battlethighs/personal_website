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
		return;}
	else {
		switchy1(link)
		switchy2(content,link)
	}
}

function switchy1(link) {


	var selected = $('.selected')
	selected.animate({opacity: '0'})
	var underlined = $('.underline')
	underlined.removeClass('underline')
	$(link).addClass('underline')

}

function switchy2(content,link) {

	var selected = $('.selected')
	selected.addClass('hidden')
	selected.removeClass('selected')
	var el = $('.'+ content)

	el.removeClass('hidden')
	el.addClass('selected')

	el.animate({opacity:'1'})
}