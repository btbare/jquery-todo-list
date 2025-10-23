$(".todoinput").keypress(function(event) {
	if(event.which === 13) {
		if($(this).val()==="") return;
		if($(this).val().length>50) return; //return if input exceeds 50chars
		$("ul").prepend("<li><span class='left'><i class='fa fa-minus'></i></span><span class='text'>"+$(this).val()+"</span><span class='right'><i class='fa fa-wrench'></i></li>"); 
		$(this).val("");
	}
});

$(".fa-plus").on("click", function() {
	$("input").slideToggle();
});

$("ul").on("click", "span.text", function(event) {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span.left", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on("click", "span.right", function(event) {
	var parent = $(this).parent();
	var oldVal = parent.text();
	parent.html("<input type='text' class='editinput'>");
	$(".editinput").keypress(function(e) {
		if(e.which === 13) {

			if($(this).val() === "" || $(this).val().length > 50) {
				parent.html("<span class='left'><i class='fa fa-minus'></i></span><span class='text'>  "+oldVal+"</span><span class='right'><i class='fa fa-pencil'>");	
			}
			else {
				var newVal = $(this).val();
				parent.html("<span class='left'><i class='fa fa-minus'></i></span><span class='text'>  "+newVal+"</span><span class='right'><i class='fa fa-pencil'>");
			}
		}
		e.stopPropagation();
	});
	event.stopPropagation();
});