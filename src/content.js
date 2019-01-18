window.addEventListener('resize', function (e) {
    // here you send message to background.js
    var message = {info: 1}
    chrome.runtime.sendMessage("", message);
});

function devTool() {
    var butDev = '<div class="togglegird"> <button class="btn btn-primary" id="button" type="submit">On/Off</button> </div>'

    var butDev2 = '<div class="togglegird2"> <button class="btn btn-primary" width="65" id="button" type="submit">Fluid</button> </div>'

    var girdDev = '<div class="gridtamnguyen active"> <div class="wrapper-tamnguyen"> <div class="row"> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> </div> </div> </div>'


    var cssDev = '.togglegird { position: fixed; right: 1rem; bottom: 1rem; z-index: 9000; } .gridtamnguyen { position: fixed; top: 0; left: 0; height: 100vh; z-index: 8000; display: none; width: 100%; } .gridtamnguyen.active { display: flex; pointer-events: none; } .gridtamnguyen .item { flex-basis: 0; flex-grow: 1; max-width: 100%; height: 100vh; padding-top: 0; padding-right: 15px; padding-bottom: 0; padding-left: 15px; } .gridtamnguyen .item .bg { background: cornflowerblue; height: 100vh;  } .togglegird .btn {width: 5rem ; border-radius: 0.5rem; border-color: #007bff  ; font-size: 1rem; background: #007bff; color: white; padding: 0.375rem 0.75rem; font-family : Roboto} .gridtamnguyen .col-1 {background: antiquewhite; opacity:  0.5}  .gridtamnguyen .wrapper-tamnguyen .row {display: flex; max-width: initial; } .gridtamnguyen .wrapper-tamnguyen-fluid {margin: 0}'

    var cssDev2 = '.togglegird2 { position: fixed; right: 1rem; bottom: 4.5rem; z-index: 9001; } .togglegird2 .btn {width: 5rem; border-radius: 0.5rem; border-color: #007bff  ; font-size: 1rem; background: #007bff; color: white; padding: 0.375rem 0.75rem; font-family : Roboto}'

    $('head').append('<style type="text/css">' + cssDev + '</style>')

    $('head').append('<style type="text/css">' + cssDev2 + '</style>')

    $('body').append(butDev).append(girdDev).append(butDev2)

    $('.togglegird button').on('click', function () {
        $('.gridtamnguyen').toggleClass('active')
        init_depend_size();
    })
    
    function init() {
        $('.wrapper-tamnguyen').css('padding-right', '15px')
        $('.wrapper-tamnguyen').css('padding-left', '15px')
        $('.wrapper-tamnguyen').css('margin', '0 auto')
        $('.wrapper-tamnguyen').css('height', '100%')
        $('.wrapper-tamnguyen .row').css('display', 'flex')
        $('.wrapper-tamnguyen .row').css('margin-left', '-15px')
        $('.wrapper-tamnguyen .row').css('margin-right', '-15px')
        $('.wrapper-tamnguyen .row').css('flex-direction', 'row')
        $('.wrapper-tamnguyen .row').css('height', '100%')
        $('.wrapper-tamnguyen .row').css('margin-left', '-15px')
        $('.wrapper-tamnguyen .row').css('margin-right', '-15px')
    }
    
    function init_fluid() {
        $('.wrapper-tamnguyen-fluid').css('padding-right', '15px')
        $('.wrapper-tamnguyen-fluid').css('max-width', 'initial')
        $('.wrapper-tamnguyen-fluid').css('width', '100%')
        $('.wrapper-tamnguyen-fluid').css('padding-left', '15px')
        $('.wrapper-tamnguyen-fluid').css('margin', '0')
        $('.wrapper-tamnguyen-fluid .row').css('display', 'flex')
        $('.wrapper-tamnguyen-fluid .row').css('flex-direction', 'row')
        $('.wrapper-tamnguyen-fluid .row').css('height', '100%')
        $('.wrapper-tamnguyen-fluid .row').css('margin-left', '-15px')
        $('.wrapper-tamnguyen-fluid .row').css('margin-right', '-15px')
        $('.wrapper-tamnguyen-fluid').css('height', '100%')
    }
    init();
    $('.togglegird2 button').on('click', function () {
        var fs = $('.gridtamnguyen .wrapper-tamnguyen').hasClass('wrapper-tamnguyen')
        if (fs) {
            $('.gridtamnguyen .wrapper-tamnguyen').removeAttr("style").removeClass('wrapper-tamnguyen').addClass('wrapper-tamnguyen-fluid');
            init_fluid();
        } else {
            $('.gridtamnguyen .wrapper-tamnguyen-fluid').removeAttr("style").removeClass('wrapper-tamnguyen-fluid').addClass('wrapper-tamnguyen');
            init();
            init_depend_size()
        }
    })
    
    init_depend_size()
    function init_depend_size() {
        if ($(window).width() > 1200) {
            $('.wrapper-tamnguyen').css('max-width', '1140px')
            $('.wrapper-tamnguyen').css('width', '100%')
        } else if ($(window).width() > 992) {
            $('.wrapper-tamnguyen').css('max-width', '960px')
            $('.wrapper-tamnguyen').css('width', '100%')
        } else if ($(window).width() > 768) {
            $('.wrapper-tamnguyen').css('max-width', '720px')
            $('.wrapper-tamnguyen').css('width', '100%')
        } else if ($(window).width() > 576) {
            $('.wrapper-tamnguyen').css('max-width', '540px')
            $('.wrapper-tamnguyen').css('width', '100%')
        } else {
            $('.wrapper-tamnguyen').css('max-width', 'initial')
            $('.wrapper-tamnguyen').css('width', '100%')

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

