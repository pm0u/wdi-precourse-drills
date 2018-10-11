$(document).ready(function() {
	$("div.content h1").mouseover(function () {
		//console.log('moused over');
		$(this).animate({fontSize: '100px'}, "slow");

	})
	$("div.content p").mouseover(function () {
		//console.log('moused over');
		$(this).animate({fontSize: '40px'}, "slow");

	})
	$("div.content h1").mouseout(function () {
		//console.log('moused over');
		$(this).animate({fontSize: '36px'}, "slow");

	})
	$("div.content p").mouseout(function () {
		//console.log('moused over');
		$(this).animate({fontSize: '16px'}, "slow");

	})
	$(".banner li").mouseover(function () {
		//console.log('moused over');
		$(this).animate({fontSize: '70px'}, "slow");

	})
	$(".banner li").mouseout(function () {
		//console.log('moused over');
		$(this).animate({fontSize: '20px'}, "slow");

	})
	$(".content img").mouseout(function () {
		//console.log('moused over');
		$(this).animate({width: '500px'}, "slow");

	})
	$(".content img").mouseover(function () {
		//console.log('moused over');
		$(this).animate({width: '1500px'}, "slow");

	})



})

