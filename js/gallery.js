var colorNum = 0;
$("#topicback>.box>ul>li").each(function() {
	console.log('work');
	if (colorNum == 0) { alert('aaa');$(this).addClass("light"); colorNum = 1; }
	else { $(this).addClass("dark"); colorNum = 0; }
});
console.log('a');