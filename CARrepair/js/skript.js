var imgHead = [
            'images/slide-1.jpg',
            'images/slide-2.jpg',
            'images/slide-3.jpg',
            
        ], i=1;

        // вот сама функция

    function csaHead(){
       
        if(i > (imgHead.length-1)){
            $('.csa-head').animate({'opacity':'0'},200,function(){
                i=1;
                $('.csa-head').css({'background-image':'url('+imgHead[0]+')'});
            });
            $('.csa-head').animate({'opacity':'1'},200);
        }else{
            $('.csa-head').animate({'opacity':'0'},200,function(){
                $('.csa-head').css({'background-image':'url('+imgHead[i]+')'});
                i++;
            });
            $('.csa-head').animate({'opacity':'1'},200);
        }
    }
    var intervalCsaHead = setInterval(csaHead,5000);

    var timeoutCsaHead = setTimeout(csaHead,0);

в
// Нужно вызвать функцию, после того как ты ее создал, иначе хер

