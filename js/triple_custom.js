$(document).ready(function(){

  $('.td-99').click(function(){
    $(this).addClass('sp-bet-placed');
    $(this).find('.bet-99').text('1000');
  })

  $('.r-999').click(function(){
    $('.r-999').removeClass('active-random');
    $(this).addClass('active-random');
  });

  $('.r-99').click(function(){
    $('.r-99').removeClass('active-random');
    $(this).addClass('active-random');
  });

  $('.sp-coin').click(function(){
    $('.sp-coin').removeClass('active-coin');
    $(this).addClass('active-coin');
  })

}); //Ready function end



function showTable(tableNum) {

  var _tableNum = '.table-'+tableNum;
  var _active100 = '.s-'+tableNum;

  // console.log(_active100);
  $('.table-of-100').removeClass('show-100');
  $(_tableNum).addClass('show-100');

  // Highlight selection 100 table
  $('.sel-100 .num-99').removeClass('active-100');
  $(_active100).addClass('active-100');
}
