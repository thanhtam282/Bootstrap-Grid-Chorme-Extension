function devTool(){
        var butDev = '<div class="togglegird"> <button class="btn btn-primary" id="button" type="submit">On/Off</button> </div>'
    
        var butDev2 = '<div class="togglegird2"> <button class="btn btn-primary" width="65" id="button" type="submit">Fluid</button> </div>'
    
        var girdDev = '<div class="grid active"> <div class="container"> <div class="row"> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> <div class="col-1 item"> <div class="bg"></div> </div> </div> </div> </div>'
    
    
        var cssDev = '.togglegird { position: fixed; right: 1rem; bottom: 1rem; z-index: 9000; } .grid { position: fixed; top: 0; left: 0; height: 100vh; z-index: 8000; display: none; width: 100%; } .grid.active { display: flex; pointer-events: none; } .grid .item { flex-basis: 0; flex-grow: 1; max-width: 100%; height: 100vh; padding-top: 0; padding-right: 15px; padding-bottom: 0; padding-left: 15px; } .grid .item .bg { background: cornflowerblue; height: 100vh;  } .togglegird .btn {width: 65px} .grid .col-1 {background: antiquewhite; opacity:  0.5}'
    
        var cssDev2 = '.togglegird2 { position: fixed; right: 1rem; bottom: 4.5rem; z-index: 9001; } .togglegird2 .btn {width: 65px}'
        
        $('head').append('<style type="text/css">'+cssDev+'</style>')
    
        $('head').append('<style type="text/css">'+cssDev2+'</style>')
    
        $('body').append(butDev).append(girdDev).append(butDev2)
    
        $('.togglegird button').on('click', function(){
            $('.grid').toggleClass('active')
        })
    
        $('.togglegird2 button').on('click', function(){
            var fs = $('.grid .container').hasClass('container')
            if (fs){
                $('.grid .container').removeClass('container').addClass('container-fluid')
            }  else{
                $('.grid .container-fluid').removeClass('container-fluid').addClass('container')
            }
        })
    }
    
    if ($('body').find('.grid').length === 0) {
        // showGrid();
        devTool()
    } else {
        $('.grid').remove();
        $('.togglegird').remove();
        $('.togglegird2').remove();
    }