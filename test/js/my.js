jQuery(function($){$(".tel").mask("+7(999) 999-9999");

var slider1 = $('.slideth1').lightSlider({gallery:true,item:1,loop:true,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>',centerSlide:true,thumbItem:4,responsive:[{breakpoint:800,settings:{thumbItem:3,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>'}},{breakpoint:480,settings:{thumbItem:2,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>'}}]});
var slider2 = $('.slideth2').lightSlider({gallery:true,item:1,loop:true,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>',centerSlide:true,thumbItem:4,responsive:[{breakpoint:800,settings:{thumbItem:3,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>'}},{breakpoint:480,settings:{thumbItem:2,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>'}}]});
var slider3 = $('.slideth3').lightSlider({gallery:true,item:1,loop:true,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>',centerSlide:true,thumbItem:4,responsive:[{breakpoint:800,settings:{thumbItem:3,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>'}},{breakpoint:480,settings:{thumbItem:2,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>'}}]});
var slider4 = $('.slideth4').lightSlider({gallery:true,item:1,loop:true,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>',centerSlide:true,thumbItem:4,responsive:[{breakpoint:800,settings:{thumbItem:3,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>'}},{breakpoint:480,settings:{thumbItem:2,controls:true,prevHtml:'<div class="owl-prev" style=""></div>',nextHtml:'<div class="owl-next" style=""></div>'}}]});
setTimeout(function() {
$('.x1,.demo._1 .lSSlideOuter>ul>li:eq(0)').click(function(){slider1.goToSlide(1); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x1').attr('colr'));});
$('.x2,.demo._1 .lSSlideOuter>ul>li:eq(1)').click(function(){slider1.goToSlide(2); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x2').attr('colr'));});
$('.x3,.demo._1 .lSSlideOuter>ul>li:eq(2)').click(function(){slider1.goToSlide(3); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x3').attr('colr'));});
$('.x4,.demo._1 .lSSlideOuter>ul>li:eq(3)').click(function(){slider1.goToSlide(4); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x4').attr('colr'));});
$('.x5,.demo._1 .lSSlideOuter>ul>li:eq(4)').click(function(){slider1.goToSlide(5); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x5').attr('colr'));});
$('.x6,.demo._1 .lSSlideOuter>ul>li:eq(5)').click(function(){slider1.goToSlide(6); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x6').attr('colr'));});
$('.x7,.demo._1 .lSSlideOuter>ul>li:eq(6)').click(function(){slider1.goToSlide(7); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x7').attr('colr'));});
$('.x8,.demo._1 .lSSlideOuter>ul>li:eq(7)').click(function(){slider1.goToSlide(8); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x8').attr('colr'));});
$('.x9,.demo._1 .lSSlideOuter>ul>li:eq(8)').click(function(){slider1.goToSlide(9); clear1();$(this).addClass('active'); $('.color_text._1 span').text($('.x9').attr('colr'));});
$('.x10,.demo._1 .lSSlideOuter>ul>li:eq(9)').click(function(){slider1.goToSlide(10); clear1();$(this).addClass('active'); $('.color_text._1 span').text($(this).attr('colr'));});
$('.x11,.demo._1 .lSSlideOuter>ul>li:eq(10)').click(function(){slider1.goToSlide(11); clear1();$(this).addClass('active'); $('.color_text._1 span').text($(this).attr('colr'));});
$('.x12,.demo._1 .lSSlideOuter>ul>li:eq(11)').click(function(){slider1.goToSlide(12); clear1();$(this).addClass('active'); $('.color_text._1 span').text($(this).attr('colr'));});
$('.x13,.demo._1 .lSSlideOuter>ul>li:eq(12)').click(function(){slider1.goToSlide(13); clear1();$(this).addClass('active'); $('.color_text._1 span').text($(this).attr('colr'));});
$('.x14,.demo._1 .lSSlideOuter>ul>li:eq(13)').click(function(){slider1.goToSlide(14); clear1();$(this).addClass('active'); $('.color_text._1 span').text($(this).attr('colr'));});
$('.x15,.demo._1 .lSSlideOuter>ul>li:eq(14)').click(function(){slider1.goToSlide(15); clear1();$(this).addClass('active'); $('.color_text._1 span').text($(this).attr('colr'));});
$('.x16,.demo._1 .lSSlideOuter>ul>li:eq(15)').click(function(){slider1.goToSlide(16); clear1();$(this).addClass('active'); $('.color_text._1 span').text($(this).attr('colr'));});


$('.g1,.demo._2 .lSSlideOuter>ul>li:eq(0)').click(function(){slider2.goToSlide(1); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g1').attr('colr'));});
$('.g2,.demo._2 .lSSlideOuter>ul>li:eq(1)').click(function(){slider2.goToSlide(2); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g2').attr('colr'));});
$('.g3,.demo._2 .lSSlideOuter>ul>li:eq(2)').click(function(){slider2.goToSlide(3); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g3').attr('colr'));});
$('.g4,.demo._2 .lSSlideOuter>ul>li:eq(3)').click(function(){slider2.goToSlide(4); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g4').attr('colr'));});
$('.g5,.demo._2 .lSSlideOuter>ul>li:eq(4)').click(function(){slider2.goToSlide(5); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g5').attr('colr'));});
$('.g6,.demo._2 .lSSlideOuter>ul>li:eq(5)').click(function(){slider2.goToSlide(6); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g6').attr('colr'));});
$('.g7,.demo._2 .lSSlideOuter>ul>li:eq(6)').click(function(){slider2.goToSlide(7); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g7').attr('colr'));});
$('.g8,.demo._2 .lSSlideOuter>ul>li:eq(7)').click(function(){slider2.goToSlide(8); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g8').attr('colr'));});
$('.g9,.demo._2 .lSSlideOuter>ul>li:eq(8)').click(function(){slider2.goToSlide(9); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g9').attr('colr'));});
$('.g10,.demo._2 .lSSlideOuter>ul>li:eq(9)').click(function(){slider2.goToSlide(10); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g10').attr('colr'));});
$('.g11,.demo._2 .lSSlideOuter>ul>li:eq(10)').click(function(){slider2.goToSlide(11); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g11').attr('colr'));});
$('.g12,.demo._2 .lSSlideOuter>ul>li:eq(11)').click(function(){slider2.goToSlide(12); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g12').attr('colr'));});
$('.g13,.demo._2 .lSSlideOuter>ul>li:eq(12)').click(function(){slider2.goToSlide(13); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g13').attr('colr'));});
$('.g14,.demo._2 .lSSlideOuter>ul>li:eq(13)').click(function(){slider2.goToSlide(14); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g14').attr('colr'));});
$('.g15,.demo._2 .lSSlideOuter>ul>li:eq(14)').click(function(){slider2.goToSlide(15); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g15').attr('colr'));});
$('.g16,.demo._2 .lSSlideOuter>ul>li:eq(15)').click(function(){slider2.goToSlide(16); clear2();$(this).addClass('active');$('.color_text._2 span').text($('.g16').attr('colr'));});


$('.j1,.demo._3 .lSSlideOuter>ul>li:eq(0)').click(function(){slider3.goToSlide(1); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j1').attr('colr'));});
$('.j2,.demo._3 .lSSlideOuter>ul>li:eq(1)').click(function(){slider3.goToSlide(2); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j2').attr('colr'));});
$('.j3,.demo._3 .lSSlideOuter>ul>li:eq(2)').click(function(){slider3.goToSlide(3);  clear3();$(this).addClass('active');$('.color_text._3 span').text($('.j3').attr('colr'));});
$('.j4,.demo._3 .lSSlideOuter>ul>li:eq(3)').click(function(){slider3.goToSlide(4); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j4').attr('colr'));});
$('.j5,.demo._3 .lSSlideOuter>ul>li:eq(4)').click(function(){slider3.goToSlide(5); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j5').attr('colr'));});
$('.j6,.demo._3 .lSSlideOuter>ul>li:eq(5)').click(function(){slider3.goToSlide(6); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j6').attr('colr'));});
$('.j7,.demo._3 .lSSlideOuter>ul>li:eq(6)').click(function(){slider3.goToSlide(7); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j7').attr('colr'));});
$('.j8,.demo._3 .lSSlideOuter>ul>li:eq(7)').click(function(){slider3.goToSlide(8); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j8').attr('colr'));});
$('.j9,.demo._3 .lSSlideOuter>ul>li:eq(8)').click(function(){slider3.goToSlide(9); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j9').attr('colr'));});

$('.j10,.demo._3 .lSSlideOuter>ul>li:eq(9)').click(function(){slider3.goToSlide(10); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j10').attr('colr'));});
$('.j11,.demo._3 .lSSlideOuter>ul>li:eq(10)').click(function(){slider3.goToSlide(11); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j11').attr('colr'));});
$('.j12,.demo._3 .lSSlideOuter>ul>li:eq(11)').click(function(){slider3.goToSlide(12); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j12').attr('colr'));});
$('.j13,.demo._3 .lSSlideOuter>ul>li:eq(12)').click(function(){slider3.goToSlide(13); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j13').attr('colr'));});
$('.j14,.demo._3 .lSSlideOuter>ul>li:eq(13)').click(function(){slider3.goToSlide(14); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j14').attr('colr'));});
$('.j15,.demo._3 .lSSlideOuter>ul>li:eq(14)').click(function(){slider3.goToSlide(15); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j15').attr('colr'));});
$('.j16,.demo._3 .lSSlideOuter>ul>li:eq(15)').click(function(){slider3.goToSlide(16); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j16').attr('colr'));});
$('.j17,.demo._3 .lSSlideOuter>ul>li:eq(16)').click(function(){slider3.goToSlide(17); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j17').attr('colr'));});
$('.j18,.demo._3 .lSSlideOuter>ul>li:eq(17)').click(function(){slider3.goToSlide(18); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j18').attr('colr'));});
$('.j19,.demo._3 .lSSlideOuter>ul>li:eq(18)').click(function(){slider3.goToSlide(19);  clear3();$(this).addClass('active');$('.color_text._3 span').text($('.j19').attr('colr'));});
$('.j20,.demo._3 .lSSlideOuter>ul>li:eq(19)').click(function(){slider3.goToSlide(20); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j20').attr('colr'));});
$('.j21,.demo._3 .lSSlideOuter>ul>li:eq(20)').click(function(){slider3.goToSlide(21); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j21').attr('colr'));});
$('.j22,.demo._3 .lSSlideOuter>ul>li:eq(21)').click(function(){slider3.goToSlide(22); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j22').attr('colr'));});
$('.j23,.demo._3 .lSSlideOuter>ul>li:eq(22)').click(function(){slider3.goToSlide(23); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j23').attr('colr'));});
$('.j24,.demo._3 .lSSlideOuter>ul>li:eq(23)').click(function(){slider3.goToSlide(24); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j24').attr('colr'));});
$('.j25,.demo._3 .lSSlideOuter>ul>li:eq(24)').click(function(){slider3.goToSlide(25); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j25').attr('colr'));});
$('.j26,.demo._3 .lSSlideOuter>ul>li:eq(25)').click(function(){slider3.goToSlide(26); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j26').attr('colr'));});
$('.j27,.demo._3 .lSSlideOuter>ul>li:eq(26)').click(function(){slider3.goToSlide(27); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j27').attr('colr'));});
$('.j28,.demo._3 .lSSlideOuter>ul>li:eq(27)').click(function(){slider3.goToSlide(28); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j28').attr('colr'));});
$('.j29,.demo._3 .lSSlideOuter>ul>li:eq(28)').click(function(){slider3.goToSlide(29); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j29').attr('colr'));});
$('.j30,.demo._3 .lSSlideOuter>ul>li:eq(29)').click(function(){slider3.goToSlide(30); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j30').attr('colr'));});
$('.j31,.demo._3 .lSSlideOuter>ul>li:eq(30)').click(function(){slider3.goToSlide(31); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j31').attr('colr'));});
$('.j32,.demo._3 .lSSlideOuter>ul>li:eq(31)').click(function(){slider3.goToSlide(32); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j32').attr('colr'));});
$('.j33,.demo._3 .lSSlideOuter>ul>li:eq(32)').click(function(){slider3.goToSlide(33); clear3();$(this).addClass('active'); $('.color_text._3 span').text($('.j33').attr('colr'));});

$('.z1,.demo._4 .lSSlideOuter>ul>li:eq(0)').click(function(){slider4.goToSlide(1); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z1').attr('colr'));});
$('.z2,.demo._4 .lSSlideOuter>ul>li:eq(1)').click(function(){slider4.goToSlide(2); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z2').attr('colr'));});
$('.z3,.demo._4 .lSSlideOuter>ul>li:eq(2)').click(function(){slider4.goToSlide(3); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z3').attr('colr'));});
$('.z4,.demo._4 .lSSlideOuter>ul>li:eq(3)').click(function(){slider4.goToSlide(4); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z4').attr('colr'));});
$('.z5,.demo._4 .lSSlideOuter>ul>li:eq(4)').click(function(){slider4.goToSlide(5); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z5').attr('colr'));});
$('.z6,.demo._4 .lSSlideOuter>ul>li:eq(5)').click(function(){slider4.goToSlide(6); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z6').attr('colr'));});
$('.z7,.demo._4 .lSSlideOuter>ul>li:eq(6)').click(function(){slider4.goToSlide(7); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z7').attr('colr'));});
$('.z8,.demo._4 .lSSlideOuter>ul>li:eq(7)').click(function(){slider4.goToSlide(8); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z8').attr('colr'));});
$('.z9,.demo._4 .lSSlideOuter>ul>li:eq(8)').click(function(){slider4.goToSlide(9); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z9').attr('colr'));});

$('.z10,.demo._4 .lSSlideOuter>ul>li:eq(9)').click(function(){slider4.goToSlide(10); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z10').attr('colr'));});
$('.z11,.demo._4 .lSSlideOuter>ul>li:eq(10)').click(function(){slider4.goToSlide(11); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z11').attr('colr'));});
$('.z12,.demo._4 .lSSlideOuter>ul>li:eq(11)').click(function(){slider4.goToSlide(12); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z12').attr('colr'));});
$('.z13,.demo._4 .lSSlideOuter>ul>li:eq(12)').click(function(){slider4.goToSlide(13); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z13').attr('colr'));});
$('.z14,.demo._4 .lSSlideOuter>ul>li:eq(13)').click(function(){slider4.goToSlide(14); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z14').attr('colr'));});
$('.z15,.demo._4 .lSSlideOuter>ul>li:eq(14)').click(function(){slider4.goToSlide(15); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z15').attr('colr'));});
$('.z16,.demo._4 .lSSlideOuter>ul>li:eq(15)').click(function(){slider4.goToSlide(16); clear4();$(this).addClass('active');  $('.color_text._4 span').text($('.z16').attr('colr'));});
$('.z17,.demo._4 .lSSlideOuter>ul>li:eq(16)').click(function(){slider4.goToSlide(17); clear4();$(this).addClass('active'); $('.color_text._4 span').text($('.z17').attr('colr'));});
$('.z18,.demo._4 .lSSlideOuter>ul>li:eq(17)').click(function(){slider4.goToSlide(18); clear4();$(this).addClass('active'); $('.color_text._4 span').text($('.z18').attr('colr'));});
$('.z19,.demo._4 .lSSlideOuter>ul>li:eq(18)').click(function(){slider4.goToSlide(19); clear4();$(this).addClass('active');$('.color_text._4 span').text($('.z19').attr('colr'));});
$('.z20,.demo._4 .lSSlideOuter>ul>li:eq(19)').click(function(){slider4.goToSlide(20); clear4();$(this).addClass('active'); $('.color_text._4 span').text($('.z20').attr('colr'));});
$('.z21,.demo._4 .lSSlideOuter>ul>li:eq(20)').click(function(){slider4.goToSlide(21); clear4();$(this).addClass('active'); $('.color_text._4 span').text($('.z21').attr('colr'));});
}, 1000);
function clear3()
{
	$('.colors._3 li').each(function(o){
		//alert(o);
			$(this).removeClass('active');
	});
}
function clear2()
{
	$('.colors._2 li').each(function(o){
		//alert(o);
			$(this).removeClass('active');
	});
}
function clear1()
{
	$('.colors._1 li').each(function(o){
		//alert(o);
			$(this).removeClass('active');
	});
}
function clear4()
{
	$('.colors._4 li').each(function(o){
		//alert(o);
			$(this).removeClass('active');
	});
}
});

$('.owl1').owlCarousel({loop:true,margin:20,nav:true,navText:['',''],responsive:{0:{items:1},600:{items:1},1000:{items:1}}});$('.owl11').owlCarousel({loop:true,margin:20,autoHeight:false,nav:true,navText:['',''],responsive:{0:{items:1},600:{items:1},1000:{items:1}}});$('.owl2').owlCarousel({loop:true,margin:20,autoHeight:true,nav:true,autoplay:true,autoplayTimeout:3000,autoplayHoverPause:true,navText:['',''],responsive:{0:{items:1},600:{items:1},1000:{items:1}}});$("#modform").validate({rules:{name:{required:true},mail:{required:true,email:true}},submitHandler:function(form){$.ajax({type:"POST",url:"zakaz.php",data:$('#modform').serialize(),success:function(html){$('#m1').modal('hide');$('#ok').modal('show');}});return false;}});$("#modform2").validate({rules:{name:{required:true},mail:{required:true,email:true}},submitHandler:function(form){$.ajax({type:"POST",url:"zakaz.php",data:$('#modform2').serialize(),success:function(html){$('#m2').modal('hide');$('#ok').modal('show');}});return false;}});$(".frm1").validate({rules:{tel:{required:true},name:{required:true,}},submitHandler:function(form){$.ajax({type:"POST",url:"zakaz.php",data:$(".frm1").serialize(),success:function(html){$('#ok').modal('show');}});return false;}});$(".frm2").validate({rules:{tel:{required:true},name:{required:true,}},submitHandler:function(form){$.ajax({type:"POST",url:"zakaz.php",data:$(".frm2").serialize(),success:function(html){$('#ok').modal('show');}});return false;}});$(".frm3").validate({rules:{tel:{required:true},name:{required:true,}},submitHandler:function(form){$.ajax({type:"POST",url:"zakaz.php",data:$(".frm3").serialize(),success:function(html){$('#ok').modal('show');}});return false;}});$(document).ready(function(){$('.scrollme').click(function(){var el=$(this).attr('href');$('body').animate({scrollTop:$(el).offset().top},1000);return false;});});$(document).ready(function(){$('.knowmore').click(function(){var whatf=$(this).attr('whatf');$('#whatf').val(whatf);});});$(".sbi-waves").click(function(){$('.icnfrma').toggleClass('tam');$('.one .frm1 .tel').focus();});$(".but1").click(function(){$('.parallaxed .wtatform').val('Скидка 20% на модель SBW CLASSIC');});$(".but2").click(function(){$('.parallaxed .wtatform').val('Скидка 20% на модель SMART BALANCE GENESIS');});$(".but3").click(function(){$('.parallaxed .wtatform').val('Скидка 20% на модель SBW SUV');});$(".but4").click(function(){$('.parallaxed .wtatform').val('Скидка 20% на модель SBW TRANSFORMER');});$(".but11").click(function(){$('.modform .wtatform').val('Гарантийное обслуживание');});$(".but22").click(function(){$('.modform .wtatform').val('Запчасти');});$(".but33").click(function(){$('.modform .wtatform').val('Негарантийный Ремонт');});