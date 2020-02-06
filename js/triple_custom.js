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
  });

  // $('#canvas1').append('<h2>hello</h2>')

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



function showAlert(){
  $('.sp-alert').addClass('show-alert');
}
function closeAlert() {
  $('.sp-alert').removeClass('show-alert');
}

function avoidClick() {
  $('.table-99').addClass('avoid-clicks');
  $('.random-outer').addClass('avoid-clicks');
  $('.table-of-100').addClass('avoid-clicks');
  $('.table-999 .table-row-99').addClass('avoid-clicks');
  $('.td-10-outer').addClass('avoid-clicks');
}
function enableClick() {
  $('.table-99').removeClass('avoid-clicks');
  $('.random-outer').removeClass('avoid-clicks');
  $('.table-of-100').removeClass('avoid-clicks');
  $('.table-999 .table-row-99').removeClass('avoid-clicks');
  $('.td-10-outer').removeClass('avoid-clicks');
}
