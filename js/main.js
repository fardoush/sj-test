// *************

// $('.main-contents-innr').on('click', function ()
// {
//  var key = $(this).data('name');
//  $('.sub-content-inner').css('display', 'none');
//  $('.contents-1').css('display', 'block');
//   $('.sub-content-inner').css('opacity', 0);
//  $(`#${key}`).css('display', 'block');
//   $('.contents-1').css('display', 'none');
//  $(`#${key}`).css('opacity', 1);
//  })




$(document).on('click','.content_1',function(e){


    $('#communication').hide();
  $('#community').hide();
  $('#payment').hide();
  $('#maintence').hide();
  $('#report').hide();
  $('#portal').hide();
  $('#crm').show();
  })
  
  
  
  
  $(document).on('click','.content_3',function(e){
  
  $('#communication').hide();
  $('#community').hide();
  $('#payment').hide();
  $('#maintence').hide();
  $('#report').hide();
  $('#crm').attr("style", "display: none !important");
  $('#portal').show();
  
  })
  
  
  // 7,6,5,4,2
  
  $(document).on('click','.content_7',function(e){
  
  $('#communication').show();
  $('#community').hide();
  $('#payment').hide();
  $('#maintence').hide();
  $('#report').hide();
  $('#crm').attr("style", "display: none !important");
  $('#portal').hide();
  
  })
  
  
  $(document).on('click','.content_6',function(e){
  
  $('#communication').hide();
  $('#community').show();
  $('#payment').hide();
  $('#maintence').hide();
  $('#report').hide();
  $('#crm').attr("style", "display: none !important");
  $('#portal').hide();
  
  })
  
  $(document).on('click','.content_5',function(e){
  
  $('#communication').hide();
  $('#community').hide();
  $('#payment').show();
  $('#maintence').hide();
  $('#report').hide();
  $('#crm').attr("style", "display: none !important");
  $('#portal').hide();
  
  })
  
  
  
  $(document).on('click','.content_4',function(e){
  
  $('#communication').hide();
  $('#community').hide();
  $('#payment').hide();
  $('#maintence').show();
  $('#report').hide();
  $('#crm').attr("style", "display: none !important");
  $('#portal').hide();
  
  })
  
  
  
  $(document).on('click','.content_2',function(e){
  
  $('#communication').hide();
  $('#community').hide();
  $('#payment').hide();
  $('#maintence').hide();
  $('#report').show();
  $('#crm').attr("style", "display: none !important");
  $('#portal').hide();
  
  })
  

 

