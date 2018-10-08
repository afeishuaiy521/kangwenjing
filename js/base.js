// JavaScript Document
$(function(){
	$(".meal_list li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
	})
	$(".week_list li").click(function(){
		var idx=$(this).index()
		$(this).addClass("current").siblings().removeClass("current");
		$(".menu_bg .menu_item").eq(idx).addClass("current").siblings().removeClass("current");
	})
	
	$(".login_line input").on('input propertychange',function(){
		var _val=$(this).val();
		if(_val!=''){
		   $(this).parents(".login_line").find(".clear").addClass("current");
		   if($(this).parents(".login_line").siblings().find("input").val()!=""){
			  $(".login_btn .blueBtn").removeClass("greyBg");  
		   }	
		}else{
		   $(this).parents(".login_line").find(".clear").removeClass("current");
		   $(".login_btn .blueBtn").addClass("greyBg");	
		}
	});
	$(".clear").click(function(){
		$(this).removeClass("current").parents(".login_line").find("input").val("");
		$(".login_btn .blueBtn").addClass("greyBg");	
	})
	$(".forget").click(function(){
		$(".popup_wrap").show()
	})
	$(".closeBtn").click(function(){
		$(".popup_wrap").hide()
	})
	
})






































