$('#rating-star').on('click', 'a', function () {
    $('#goodLevel').val(this.innerHTML);
}).on('mouseenter', 'a', function () {
    setStar(this);
}).on('mouseleave', 'a', function () {
    var level = $('#goodLevel').val();
    var $stars = $('#rating-star > a');
    if (level == '') {
        $stars.css('background-position', '0 0px');
    } else {
        setStar($stars[level]);
    }
});

function setStar(star) {
    var $this = $(star);
    var level = $this.html();
    var n;
    if (level == '4') 
    {
        n = '0 0px';
    }
    else if (level == '3') 
    {
        n = '-15 0px';
    } 
    else if (level == '2')
    {
        n = '-30 0px';
    }
    else if (level == '1') 
    {
        n = '-45 0px';
    }
    else if (level == '0')
    {
        n = '-60 0px';
    }
    $('#rating-star').css('background-position', n);
    // $this.prevAll().andSelf().css('background-position', n);
    // $this.nextAll().css('background-position', '0 0px');
}