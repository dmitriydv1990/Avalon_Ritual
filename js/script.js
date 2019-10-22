$('form').submit(function(e) {
	e.preventDefaul();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");

		$('form').trigger('reset');
	
	});
	return false;
});
/* функция плавной прокрутки при нажатии на ссылки в меню и стрелки вверх */

	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
});


/* функция стрелки вверх */

$(window).scroll(function() {
	if ($(this).scrollTop() > 500) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}

});