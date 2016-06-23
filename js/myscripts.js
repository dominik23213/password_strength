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

        if( strength == 1 ) {
            $(".s1").show();
        }
        if( strength == 2 ) {
            $(".s1").show();
            $(".s2").show();
        }
        if( strength == 3 ) {
            $(".s1").show();
            $(".s2").show();
            $(".s3").show();
        }
        if( strength == 4 ) {
            $(".s1").show();
            $(".s2").show();
            $(".s3").show();
            $(".s4").show();
        }
        if( strength == 5 ) {
            $(".s1").show();
            $(".s2").show();
            $(".s3").show();
            $(".s4").show();
            $(".s5").show();
        }
        if( strength == 6 ) {
            $(".s1").show();
            $(".s2").show();
            $(".s3").show();
            $(".s4").show();
            $(".s5").show();
            $(".s6").show();
        }
        if( strength == 7 ) {
            $(".s1").show();
            $(".s2").show();
            $(".s3").show();
            $(".s4").show();
            $(".s5").show();
            $(".s6").show();
            $(".s7").show();
        }
        if( strength == 8 ) {
            $(".s1").show();
            $(".s2").show();
            $(".s3").show();
            $(".s4").show();
            $(".s5").show();
            $(".s6").show();
            $(".s7").show();
            $(".s8").show();
        }
        if( strength == 9 ) {
            $(".s1").show();
            $(".s2").show();
            $(".s3").show();
            $(".s4").show();
            $(".s5").show();
            $(".s6").show();
            $(".s7").show();
            $(".s8").show();
            $(".s9").show();
        }
        if( strength == 10 ) {
            $(".s1").show();
            $(".s2").show();
            $(".s3").show();
            $(".s4").show();
            $(".s5").show();
            $(".s6").show();
            $(".s7").show();
            $(".s8").show();
            $(".s9").show();
            $(".s10").show();
        }
    });
});
