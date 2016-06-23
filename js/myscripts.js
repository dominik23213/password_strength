$(document).ready(function(){
    $('#password').on('input', function(){
        var length1 = $('#password').val().length;
        var strength = 0;
        var pass = $('#password').val();


        if ( pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) ) { strength++; }
        if ( pass.match(/([a-zA-Z])/) ) { strength++; }
        if ( pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/) ) { strength++; }
        // If it has two special characters, increase strength value.
        if ( pass.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/) ) { strength += 2; }
        if ( pass.match(/([0-9])/) ) { strength++; }
        if( length1 > 7 ) { strength++; }
        if( length1 > 10 ) { strength ++; }
        if( length1 > 12 ) { strength ++; }

        if( length1 < 5) {
            $(".dx-desc-graph").html("Password too short");
            strength=0;
        }
        else {
            $(".dx-desc-graph").html("ok");
            strength++;
        };

        $(".dx-graph > span").hide();

        var j;
        if (strength ) {
            for (j = 1; j <= strength; j++) {
              $(".s"+j).show();
             }
          }
    });
});
