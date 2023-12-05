$('#txtExplain').html("Try and resize the window to see how the cards adapt.<br>Use the buttons in each card to show (or hide) the images");

$('#btnProd1').click(function() {
  $('#txt1').toggle("slow");
  $('#img1').toggle("slow");

  if ($('#btnProd1').text() == "Click for photo") {
    $('#btnProd1').text("Click for description");
  } else {
    $('#btnProd1').text("Click for photo");
  }
});

$('#btnProd2').click(function() {
  $('#txt2').toggle("slow");
  $('#img2').toggle("slow");
  if ($('#btnProd2').text() == "Click for photo") {
    $('#btnProd2').text("Click for description");
  } else {
    $('#btnProd2').text("Click for photo");
  }
});

$('#btnProd3').click(function() {
  $('#txt3').toggle("slow");
  $('#img3').toggle("slow");
  if ($('#btnProd3').text() == "Click for photo") {
    $('#btnProd3').text("Click for description");
  } else {
    $('#btnProd3').text("Click for photo");
  }
});