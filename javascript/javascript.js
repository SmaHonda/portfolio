$('#nav_about').click( function(){
    $('#target_about').css('display','flex')
    $('#target_skill').css('display','none')
    $('#target_myWeb').css('display','none')
})
$('#nav_skill').click( function(){
    $('#target_about').css('display','none')
    $('#target_skill').css('display','flex')
    $('#target_myWeb').css('display','none')
})
$('#nav_myWeb').click( function(){
    $('#target_about').css('display','none')
    $('#target_skill').css('display','none')
    $('#target_myWeb').css('display','flex')
})

$('#list_img_fansdessert').click(function(){
    $('#fansdessert').css('display','flex')
    $('#selectNav').css('display','none')
})
$('#list_fansdessert').click(function(){
    $('#fansdessert').css('display','flex')
    $('#selectNav').css('display','none')
})
$('#list_img_mycalc').click(function(){
    $('#mycalc').css('display','flex')
    $('#selectNav').css('display','none')
})
$('#list_mycalc').click(function(){
    $('#mycalc').css('display','flex')
    $('#selectNav').css('display','none')
})
$('#list_img_fuji').click(function(){
    $('#fuji').css('display','flex')
    $('#selectNav').css('display','none')
})
$('#list_fuji').click(function(){
    $('#fuji').css('display','flex')
    $('#selectNav').css('display','none')
})

$('.BackBtn').click(function(){
    $('#selectNav').css('display','flex')
    $('#fansdessert').css('display','none')
    $('#mycalc').css('display','none')
    $('#fuji').css('display','none')

})