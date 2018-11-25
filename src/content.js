function devTool() {
    var butDev = '<div class="togglegird"> <button class="btn btn-primary" id="button" type="submit">On/Off</button> </div>'

    var butDev2 = '<div class="togglegird2"> <button class="btn btn-primary" width="65" id="button" type="submit">Fluid</button> </div>'

    var girdDev = '<div class="gridtamnguyen active"> <div class="wrapper"> <div class="row"> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> </div> </div> </div>'


    var cssDev = '.togglegird { position: fixed; right: 1rem; bottom: 1rem; z-index: 9000; } .gridtamnguyen { position: fixed; top: 0; left: 0; height: 100vh; z-index: 8000; display: none; width: 100%; } .gridtamnguyen.active { display: flex; pointer-events: none; } .gridtamnguyen .item { flex-basis: 0; flex-grow: 1; max-width: 100%; height: 100vh; padding-top: 0; padding-right: 15px; padding-bottom: 0; padding-left: 15px; } .gridtamnguyen .item .bg { background: cornflowerblue; height: 100vh;  } .togglegird .btn {width: 5rem ; border-radius: 0.5rem; border-color: #007bff  ; font-size: 1rem; background: #007bff; color: white; padding: 0.375rem 0.75rem; font-family : Roboto} .gridtamnguyen .col-1 {background: antiquewhite; opacity:  0.5}  .gridtamnguyen .wrapper .row {display: flex; max-width: initial; } .gridtamnguyen .wrapper-fluid {margin: 0}'

    var cssDev2 = '.togglegird2 { position: fixed; right: 1rem; bottom: 4.5rem; z-index: 9001; } .togglegird2 .btn {width: 5rem; border-radius: 0.5rem; border-color: #007bff  ; font-size: 1rem; background: #007bff; color: white; padding: 0.375rem 0.75rem; font-family : Roboto}'

    $('head').append('<style type="text/css">' + cssDev + '</style>')

    $('head').append('<style type="text/css">' + cssDev2 + '</style>')

    $('body').append(butDev).append(girdDev).append(butDev2)

    $('.togglegird button').on('click', function () {
        $('.gridtamnguyen').toggleClass('active')
        init_depend_size();
    })
    
    function init() {
        $('.wrapper').css('padding-right', '15px')
        $('.wrapper').css('padding-left', '15px')
        $('.wrapper').css('margin', '0 auto')
        $('.wrapper').css('height', '100%')
        $('.wrapper .row').css('display', 'flex')
        $('.wrapper .row').css('margin-left', '-15px')
        $('.wrapper .row').css('margin-right', '-15px')
        $('.wrapper .row').css('flex-direction', 'row')
        $('.wrapper .row').css('height', '100%')
        $('.wrapper .row').css('margin-left', '-15px')
        $('.wrapper .row').css('margin-right', '-15px')
    }
    
    function init_fluid() {
        $('.wrapper-fluid').css('padding-right', '15px')
        $('.wrapper-fluid').css('max-width', 'initial')
        $('.wrapper-fluid').css('width', '100%')
        $('.wrapper-fluid').css('padding-left', '15px')
        $('.wrapper-fluid').css('margin', '0')
        $('.wrapper-fluid .row').css('display', 'flex')
        $('.wrapper-fluid .row').css('flex-direction', 'row')
        $('.wrapper-fluid .row').css('height', '100%')
        $('.wrapper-fluid .row').css('margin-left', '-15px')
        $('.wrapper-fluid .row').css('margin-right', '-15px')
        $('.wrapper-fluid').css('height', '100%')
    }
    init();
    $('.togglegird2 button').on('click', function () {
        var fs = $('.gridtamnguyen .wrapper').hasClass('wrapper')
        if (fs) {
            $('.gridtamnguyen .wrapper').removeAttr("style").removeClass('wrapper').addClass('wrapper-fluid');
            init_fluid();
        } else {
            $('.gridtamnguyen .wrapper-fluid').removeAttr("style").removeClass('wrapper-fluid').addClass('wrapper');
            init();
            init_depend_size()
        }
    })
    
    init_depend_size()
    function init_depend_size() {
        if ($(window).width() > 1200) {
            $('.wrapper').css('max-width', '1140px')
            $('.wrapper').css('width', '100%')
        } else if ($(window).width() > 992) {
            $('.wrapper').css('max-width', '960px')
            $('.wrapper').css('width', '100%')
        } else if ($(window).width() > 768) {
            $('.wrapper').css('max-width', '720px')
            $('.wrapper').css('width', '100%')
        } else if ($(window).width() > 576) {
            $('.wrapper').css('max-width', '540px')
            $('.wrapper').css('width', '100%')
        } else {
            $('.wrapper').css('max-width', 'initial')
            $('.wrapper').css('width', '100%')

        }
    }
}



if ($('body').find('.gridtamnguyen').length === 0) {
    // showGrid();
    // $(document).resize(function(){
    //     devTool()

    // })
    // $(document).ready(function () {
    devTool()
    // })
} else {
    $('.gridtamnguyen').remove();
    $('.togglegird').remove();
    $('.togglegird2').remove();
}