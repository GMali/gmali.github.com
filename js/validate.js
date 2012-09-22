$(document).ready(function () {
    
    $('form').submit(function (e) {
		
		var emailValid, nameValid;
		e.preventDefault();
		
        var email = $("#email").val();
        var name = $("#name").val();
		var msg = $("#message").val();
			
		if (name) {
			$("#name-error").slideUp(500);
			nameValid = true;			
		} else {		
			nameValid = false;			
			$("#name-error").slideDown(500);
			$("#name").focus();
		}
		
		if ((email) && (isValidEmailAddress(email))) {
			$("#email-error").slideUp(500);
            emailValid = true;
        } else {
			emailValid = false;
            $("#email-error").slideDown(500);
			$("#email").focus();
        }
				
		if ((emailValid) && (nameValid)){
			
			var dataURL = "email=" + email + "&name=" + name + "&msg=" + msg;
			
			$.ajax({
				type: "POST",
				url: "ajax.php",
				data: dataURL,
				success: function () {					
					$("#contact_form").fadeOut(1000, function() {
						$("#message_sent").slideDown(500);
					});
				}
			});				
		}
        
    });

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }
	
	
});