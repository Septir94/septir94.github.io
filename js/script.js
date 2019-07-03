// event pada saat link di klik
$('.scroll').on('click',function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50 },1250, 'swing');
        
        e.preventDefault();
    
});


// menyimpan parallax
// about
$(window).on('load',function(){
    $('.pkiri').addClass('pmuncul');

    $('.pkanan').addClass('pmuncul');

});

$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,'+wScroll/4+'%)'
    });
    
    $('.jumbotron h1').css({
        'transform': 'translate(0px,'+wScroll/2+'%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,'+wScroll/1.2+'%)'
    });


    // portfolio

    if(wScroll > $('.portofolio').offset().top-250) {
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function(){
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            },400 * (i+1) );
        });

        
    }
    if(wScroll > $('.contact').offset().top-250) {
        $('.sosmed .thumbnail').each(function(i) {
            setTimeout(function(){
                $('.sosmed .thumbnail').eq(i).addClass('muncul');
            },400 * (i+1) );
        });

        //
    }


});
