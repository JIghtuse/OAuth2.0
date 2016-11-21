function signInCallback(authResult, state) {
    // Hide the sign-in button now that is authorized
    $('#signinButton').attr('style', 'display: none');
    // Send the one-time-use code to the server, if the server
    // responds, write a 'login successful' message to the web page
    // and then redirect back to the main restaurants page
    $.ajax({
        type: 'POST',
        url: '/gconnect?state=' + state,
        processData: false,
        contentType: 'application/octet-stream; charset=utf-8',
        data: authResult['code'],
        success: function(result) {
            if (result) {
                $('#result').html('Login Successful!<br>' + result + '<br>Redirecting...');
                setTimeout(function() {
                    window.location.href = "/restaurant";
                });
            } else if (authResult['error']) {
                console.log('There was an error: ' + authResult['error']);
            } else {
                $('#result').html('Failed to make a server-side call. Check your configuration and console.');
            }
        }
    });
}