$(function(){
	/*tab*/
	$(".cd").find("li").click(function(){
		$(this).addClass("active");
		$(this).siblings("li").removeClass("active");
		$(".lv_rightContent").children("div").eq($(this).index()).show();
		$(".lv_rightContent").children("div").eq($(this).index()).siblings("div").hide();
	})

	// 点击弹出二维码
	$(".lv_rightContent").find("img").click(function(){
		$(".mask").show();
		$(".mask").find("img").attr("src",$(this).attr("src"));
		$("body").addClass("active");
	})
	$(".mask").click(function(){
		$(".mask").hide();
		$("body").removeClass("active");
	});

	// 返回顶部
	// $(".go-top").find("a").click(function(){
	// 	$("html,body").animate({scrollTop:0}, 500);
	// });
})

// $(window).scroll(function () {
// 	if ($(window).scrollTop() > $(window).height()) {
// 		$(".go-top").show();
// 	}else{
// 		$(".go-top").hide();
// 	}
// });