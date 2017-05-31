var scroll_w = $(window).width();
$('html').css('font-size',scroll_w/320*100+'px')

$(function(){
	//初始化nav_line位置
		function setNavLine(leftNum){
			$('#section4 .nav_line').css('left',leftNum)
		}
		var nav_item1_left = $('#section4 .nav_item1').offset().left
		setNavLine(nav_item1_left)

	// nav点击变化nav_line位置
		$('#section4 .nav_item').on('touchend',function(){
			var thisLeftNum = $(this).offset().left
			var thisIndex = $(this).index()
			setNavLine(thisLeftNum)
			setSec4ConWrapLeft(thisIndex)
		})

	//设置sec4_con_wrap left
		function setSec4ConWrapLeft(index){
			var leftNum = index * 25
			$('#section4 .sec4_con_wrap').css('transform','translateX(-'+leftNum+'%)')
		}
})