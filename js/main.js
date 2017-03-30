

var destination;
var i = 0;
var off = true;



function box_counter_step() {
	destination = document.getElementById('destination').value;
	$('.box_counter').text(destination);
	console.log(destination);
}

function box_counter(){
	$('.box_counter').text(i++);
	destination.value = i++;
}
 
function on(){
	inrerval_counter =	setInterval(box_counter, 500);
}

function rover_on(){
	on();
	$('.button').addClass('button_off');
}

function rover_off(){
	clearInterval(inrerval_counter);
	$('.button').removeClass('button_off');
}


$('.button').on('click', function(){

	off = !off;
	if (off) {
		rover_off();
	} else {
   		rover_on();
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG52YXIgZGVzdGluYXRpb247XG52YXIgaSA9IDA7XG52YXIgb2ZmID0gdHJ1ZTtcblxuXG5cbmZ1bmN0aW9uIGJveF9jb3VudGVyX3N0ZXAoKSB7XG5cdGRlc3RpbmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3RpbmF0aW9uJykudmFsdWU7XG5cdCQoJy5ib3hfY291bnRlcicpLnRleHQoZGVzdGluYXRpb24pO1xuXHRjb25zb2xlLmxvZyhkZXN0aW5hdGlvbik7XG59XG5cbmZ1bmN0aW9uIGJveF9jb3VudGVyKCl7XG5cdCQoJy5ib3hfY291bnRlcicpLnRleHQoaSsrKTtcblx0ZGVzdGluYXRpb24udmFsdWUgPSBpKys7XG59XG4gXG5mdW5jdGlvbiBvbigpe1xuXHRpbnJlcnZhbF9jb3VudGVyID1cdHNldEludGVydmFsKGJveF9jb3VudGVyLCA1MDApO1xufVxuXG5mdW5jdGlvbiByb3Zlcl9vbigpe1xuXHRvbigpO1xuXHQkKCcuYnV0dG9uJykuYWRkQ2xhc3MoJ2J1dHRvbl9vZmYnKTtcbn1cblxuZnVuY3Rpb24gcm92ZXJfb2ZmKCl7XG5cdGNsZWFySW50ZXJ2YWwoaW5yZXJ2YWxfY291bnRlcik7XG5cdCQoJy5idXR0b24nKS5yZW1vdmVDbGFzcygnYnV0dG9uX29mZicpO1xufVxuXG5cbiQoJy5idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXG5cdG9mZiA9ICFvZmY7XG5cdGlmIChvZmYpIHtcblx0XHRyb3Zlcl9vZmYoKTtcblx0fSBlbHNlIHtcbiAgIFx0XHRyb3Zlcl9vbigpO1xuXHR9XG59KTsiXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
