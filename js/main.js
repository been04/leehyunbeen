$(function(){
    //sub_kidari
    $('.k_more').click(function(){
        $('#sub').css( 'display', 'block' );
        $('.sub_back').css( 'display', 'block' );
        $('#sub > .kidari').css( 'display', 'block' );
    });

    //sub_star_me
    $('.s_more').click(function(){
        $('#sub').css( 'display', 'block' );
        $('.sub_back').css( 'display', 'block' );
        $('#sub > .star_me').css( 'display', 'block' );
    });

    $('.f_more').click(function(){
        $('#sub').css( 'display', 'block' );
        $('.sub_back').css( 'display', 'block' );
        $('#sub > .fyn').css( 'display', 'block' );
    });

    $('.w_more').click(function(){
        $('#sub').css( 'display', 'block' );
        $('.sub_back').css( 'display', 'block' );
        $('#sub > .willog').css( 'display', 'block' );
    });

    //sub_beer
    $('.b_more').click(function(){
        $('#sub').css( 'display', 'block' );
        $('.sub_back').css( 'display', 'block' );
        $('#sub > .beer').css( 'display', 'block' );
    });

     //sub_life
     $('.l_more').click(function(){
        $('#sub').css( 'display', 'block' );
        $('.sub_back').css( 'display', 'block' );
        $('#sub > .life').css( 'display', 'block' );
    });

    //sub_love
    $('.lv_more').click(function(){
        $('#sub').css( 'display', 'block' );
        $('.sub_back').css( 'display', 'block' );
        $('#sub > .love').css( 'display', 'block' );
    });

    //sub_disney
    $('.d_more').click(function(){
        $('#sub').css( 'display', 'block' );
        $('.sub_back').css( 'display', 'block' );
        $('#sub > .disney').css( 'display', 'block' );
    });




    

    //x
    $('.x').click(function(){
        $('.sub_back').css( 'display', 'none' );

                
        $('#sub > .kidari').css( 'display', 'none' );
        $('#sub > .star_me').css( 'display', 'none' );
        $('#sub > .beer').css( 'display', 'none' );
        $('#sub > .life').css( 'display', 'none' );
        $('#sub > .love').css( 'display', 'none' );
        $('#sub > .disney').css( 'display', 'none' );
    });

})