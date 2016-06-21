$(document).ready(function(){
    $('#password').on('input', function(){
        var length1 = $('#password').val().length;
        if( length1 < 5) {
            $(".dx-desc-graph").html("Password too short");
        }
        else {
            $(".dx-desc-graph").html("ok");
        };
    });
});
