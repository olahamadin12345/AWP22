$('input.datepicker').datepicker({
		
		dateFormat: 'yy-mm-dd',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		minDate: -25550,
		maxDate: -7665,
        defaultDate: +0,
		showAnim: "fold"
	}).change(function() {
	 $('input.datepicker').valid();
	 $( "input.datepicker" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
});

$('input.datepicker1').datepicker({

		dateFormat: 'yy-mm-dd',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		minDate: +16,
        defaultDate: +0,
		showAnim: "fold"
}).change(function() {	
	 $('input.datepicker1').valid();
	 $( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
});

$('input.datepicker2').datepicker({

		dateFormat: 'yy-mm-dd',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		minDate: -365,
        defaultDate: +0,
		showAnim: "fold"
}).change(function() {
	 $('input.datepicker2').valid();
	 $( "input.datepicker2" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
});

$('input.datepicker3').datepicker({

		dateFormat: 'yy-mm-dd',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		minDate: +16,
        defaultDate: +0,
		showAnim: "fold"
}).change(function() {	
	 $('input.datepicker3').valid();
	 $( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
});


$('input.datepickerbefore').datepicker({

		dateFormat: 'yy-mm-dd',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		maxDate: +0,
        defaultDate: +0,
		showAnim: "fold"
}).change(function() {
	 $('input.datepickerbefore').valid();
	 $( "input.datepickerbefore" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
});

$('#date').click(function() {
    $(".datepicker").datepicker().trigger('focus');
});

$('#date1').click(function() {
    $(".datepicker1").datepicker().trigger('focus');
});

$('#date2').click(function() {
    $(".datepicker2").datepicker().trigger('focus');
});

$('#date3').click(function() {
    $(".datepicker3").datepicker().trigger('focus');
});

$('#datebefore').click(function() {
    $(".datepickerbefore").datepicker().trigger('focus');
});

$('select').change(function () {
        var id = this.id;
        $("#"+id).valid();
});

$('.disable').focus(function () {
        $(this).blur();
       // $("#"+id).valid();
});

/**** Loader ****/
function showloader() {
	$('#preload').addClass('preloader');
	document.getElementById("load").style.display="block";
}
function closeloader() {
	$('#preload').removeClass('preloader');
	document.getElementById("load").style.display="none";
}
/**** Ends ****/


/**** Timer ****/

function timercall() {
document.getElementById('timer').innerHTML =
  02 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
  //alert('timer completed')
 // if($("#timerval").val() < 2) {
	 	$("#ResendOTP").removeClass("displaynone");
		$("#timer").addClass("displaynone");
		$('#timerval').val( function(i, oldval) {
	   		return ++oldval;
		});
	//}
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  if(document.getElementById('timer').innerHTML >= "0:00") {
  	setTimeout(startTimer, 1000);
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
}


$('#ResendOTP').click(function () {
	if($("#timerval").val() < 3) {
		timercall();
		$("#ResendOTP").addClass("displaynone");
		$("#timer").removeClass("displaynone");
	}
	else {
		alert("Sorry No Retry");
		$("#ResendOTP").addClass("displaynone");
		$("#timer").addClass("displaynone");

	}
});


/**** Ends ****/

/**** Timer1 ****/

function timer1call() {
document.getElementById('timer1').innerHTML =
  02 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer1').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
  //alert('timer completed')
 // if($("#timerval").val() < 2) {
	 	$("#corpResendOTP").removeClass("displaynone");
		$("#timer1").addClass("displaynone");
		$('#timerval1').val( function(i, oldval) {
	   		return ++oldval;
		});
	//}
  }
  
  document.getElementById('timer1').innerHTML =
    m + ":" + s;
  if(document.getElementById('timer1').innerHTML >= "0:00") {
  	setTimeout(startTimer, 1000);
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
}


$('#corpResendOTP').click(function () {
	if($("#timerval1").val() < 3) {
		timercall();
		$("#corpResendOTP").addClass("displaynone");
		$("#timer1").removeClass("displaynone");
	}
	else {
		alert("Sorry No Retry");
		$("#corpResendOTP").addClass("displaynone");
		$("#timer1").addClass("displaynone");

	}
});


/**** Ends ****/


//disable cut,copy,paste
 $("input.form-control").focusin(function(){
	var id = this.id;
	 $('#' + id).bind('copy paste cut',function(e) { 
 	e.preventDefault(); 
 });
});

/*choose Upload*/
	function uploadfile(){
			$('.uploadfile').bind('change', function () {
			  var id = this.id;
			  var filename = this.value;
			  var ext = filename.split('.').pop().toLowerCase();
			  var iSize = ($("#"+id)[0].files[0].size / 1024);
			  if (/^\s*$/.test(filename)) {
				$("#noFile" + id).text("Select the file to upload"); 
			  };
			  if($.inArray(ext, ['pdf','jpg','jpeg']) == -1) {
					alert('Only pdf,jpg and jpeg allow!');
					this.value = '';
					$("#noFile"+id).html('Select the file to upload');
					return false;
					};
				if(iSize > 5000){
					alert('File size should be less than 5 mb');
					this.value = '';
					$("#noFile"+id).html('Select the file to upload');
					return false;
				}
			  else {
				$("#noFile" + id).text(filename.replace("C:\\fakepath\\", "")); 
				$("#fileName" + id).addClass("menucompleted");
			  }
			});
	}

//var ext = $('.uploadfile').val().split('.').pop().toLowerCase();
	
