$(document).ready(function() {
	$("img.mustache").hide()
	$(".checkbox").change(function() {
		if(!this.checked) {
			$("img.mustache").hide()
		}
		if(this.checked) {
			$("img.mustache").show()
		}
	})
})

