$(document).ready(function() {
	$('body').css({'background-color': 'rgba(255,210,210,0.5)', 'opacity': '0'});

	$('#content').css('text-align', 'center');
	$('<img src="images/index.jpeg" alt="GreatMeat">').appendTo('#content').css({
		'display': 'block', 'margin': '20px auto', 'width': '400px'
	});
	$('<h1 id="header">Welcome to GreatMeat</h1>').insertAfter('img').css({
		'margin': '20px auto', 'width': '400px', 'color': '#900'
	});
	$('<p id="description">The greatest steakhouse on Black sea\'s coast... \n may be on the world too =)</p>').insertAfter('#header').css({
		'margin': '20px auto 50px auto', 'width': '400px', 'color': '#900', 'font-size': '1.55em'
	});
	$('body').fadeTo(1200,1);

	$('#content').append("<nav><ul><li id='m1'>Первые блюда</li><li id='m2'>Стейки</li><li id='m3'>Десерты</li></ul></nav>");
	$('li').css({
		'display': 'inline-block', 'width': '30%', 'background-color': '#fff', 'cursor': 'pointer'
	});
	$('ul').css({
		'background-color': '#fff', 'margin': '0'
	});
	$('li').mouseenter(function(){
		$(this).css('color', 'red');
	});
	$('li').mouseleave(function(){
		$(this).css('color', 'black');
	});

	$('<div class="menu" id="menu1" style="height: 300px; padding: 35px;">'+ menu1 + menu2 +'</div>').insertAfter('nav').hide();
	$('<div class="menu" id="menu2" style="height: 300px; padding: 35px;">'+ menu3 + menu4 +'</div>').insertAfter('nav').hide();
	$('<div class="menu" id="menu3" style="height: 300px; padding: 35px;">'+ menu5 + menu6 +'</div>').insertAfter('nav').hide();
	$('h3').css({
		'display': 'inline-block', 'width': '200px'
	});
	$('.menu').css('background-color', 'white');

	$('li#m1').click(function(){
		$('div#menu2').slideUp();
		$('div#menu3').slideUp();		
		$('div#menu1').slideToggle();
	});

	$('li#m2').click(function(){
		$('div#menu1').slideUp();
		$('div#menu3').slideUp();
		$('div#menu2').slideToggle();
	});	
	$('li#m3').click(function(){
		$('div#menu1').slideUp();
		$('div#menu2').slideUp();
		$('div#menu3').slideToggle();
	});
});

var menu1 = "<div style='margin: 0 auto 20px auto''><img src='images/bors.jpeg' width='200px' height='100px'><h3>Борщ</h3></div>"
var menu2 = "<div style='margin: 0 auto 20px auto'><img src='images/vegan.jpeg' width='200px' height='100px'><h3>Овощной суп</h3></div>"
var menu3 = "<div style='margin: 0 auto 20px auto'><img src='images/ribay.jpeg' width='200px' height='100px'><h3>Рибай</h3></div>"
var menu4 = "<div style='margin: 0 auto 20px auto'><img src='images/minion.jpeg' width='200px' height='100px'><h3>Миньон</h3></div>"
var menu5 = "<div style='margin: 0 auto 20px auto'><img src='images/tiramisu.jpeg' width='200px' height='100px'><h3>Тирамису</h3></div>"
var menu6 = "<div style='margin: 0 auto 20px auto'><img src='images/icecream.jpeg' width='200px' height='100px'><h3>Мороженое</h3></div>"