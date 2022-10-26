var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: false,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });




(function() {
'use strict';
window.addEventListener('load', function() {

function prevScreen(){
        var _swiperChildCount_prev = $(".swiper-pagination-bullets").children().length;
        var _currentPagination_prev = $(".swiper-pagination-bullet-active").attr("role");
        var _NextPagination_prev =  parseInt(_currentPagination_prev)-1;
		//alert(_NextPagination_prev);
        $('.swiper-pagination-bullet[role = "'+_NextPagination_prev+'"]').trigger('click');

        }


$('.prevForm').click(function(){
	event.preventDefault();
	event.stopPropagation();
	prevScreen();
});


	function nextScreen(){
        var _swiperChildCount = $(".swiper-pagination-bullets").children().length;
        var _currentPagination = $(".swiper-pagination-bullet-active").attr("role");
        var _NextPagination =  parseInt(_currentPagination)+1;
		//alert(_NextPagination);
        $('.swiper-pagination-bullet[role = "'+_NextPagination+'"]').trigger('click');
		$('.invalid-feedback').html('');

        }

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {

if (form.reportValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	
}else{
    if($(this).attr("id") == "_emiCalculatorForm" || $(this).attr("id") == "_emiCalculatorForm2" || $(this).attr("id") == "_emiCalculatorForm3" || $(this).attr("id")  == "_eligibilityForm2" || $(this).attr("id") == "_eligibilityForm" || 
	$(this).attr("id") == "_eligibilityForm3") {
        event.preventDefault();
        event.stopPropagation();
		var formid=$(this).attr("id");
		
		if(formid=='_eligibilityForm3')
		{
			
				var dataString = $("#_eligibilityForm,#_eligibilityForm2,#_eligibilityForm3").serializeArray();
				var fd = new FormData();
				   
				$.each(dataString,function(key,input){
						if(input.value !='')
						{
							fd.append(input.name,input.value);
						}
				});
				
				
				//var getrecapatchares=grecaptcha.getResponse();
				
				//fd.append('g-recaptcha-response',getrecapatchares);
				
				showmodal();  
				$('.btn_applynow').hide();
						
			
				$.ajax({
					url:"/eng/cfc/hfValidations.cfc?method=validations_otherForms",
					type: "POST",
						data: fd,
						processData: false,
						contentType: false,
						success: function(response)
						{
							//Here parsejson             
							var parsedjson = $.parseJSON(response);
							var retFlag=false;
							$('#myModal').modal('hide');
								if(parsedjson["errors"]==true)
								{
									
									$('.btn_applynow').show();

									$.each(parsedjson, function(i, item) {
										if($( ".error_"+i).html() != item){
											 $( ".error_"+i).html("");
											 $( ".error_"+i).append(item);
										}
										$( ".error_"+i).removeClass("errorlabel");
										$( ".error_"+i).addClass("error");
										$( ".error_"+i).show();
									});
									
									//$('.swiper-slide').removeClass("swiper-slide-active");
									//$('.swiper-slide').removeClass("swiper-slide-prev");
									//$('.swiper-slide').hide();
									//$('#'+parsedjson["errorform"]).show();
									//$('#'+parsedjson["errorform"]).addClass("swiper-slide-active");	
										$('.swiper-pagination-bullet[role = "'+parsedjson["errorform"]+'"]').trigger('click');
									return;
								}
								else
								{
										//$('#myModal').modal('hide');	
											alert('We appreciate you taking the time to fill out the form. Our representative will get in touch with you shortly to assist you with your inquiry.');
											window.location.href='/eng/personal-banking/finance/home-finance-calculator/';
								}
						}
						});
		}
		
		else if(formid=='_eligibilityForm2' || formid=='_eligibilityForm')
		{
					var dataString = $("#"+formid).serializeArray();
					var fd = new FormData();    
					$.each(dataString,function(key,input){
						if(input.value !='')
						{
							fd.append(input.name,input.value);
						}
					});
						
						
							$.ajax({
								url:"/eng/cfc/hfValidations.cfc?method=validations"+formid,
								type: "POST",
									data: fd,
									processData: false,
									contentType: false,
									success: function(response)
									{
										//Here parsejson             
										var parsedjson = $.parseJSON(response);
										var retFlag=false;
							
										$.each(parsedjson, function(i, item) {
											if($( ".error_"+i).html() != item){
												 $( ".error_"+i).html("");
												 $( ".error_"+i).append(item);
											}
											$( ".error_"+i).removeClass("errorlabel");
											$( ".error_"+i).addClass("error");
											$( ".error_"+i).show();
											if(i == "errors" && item == true)
											{
												retFlag=true;
											}
										});
										if(retFlag == true)
										{
											
											return;
										}
										else
										{ 
											 nextScreen();
										}
									}
							});
			}
		else
		{
			
				if(formid=='_emiCalculatorForm3')
				{ 
						showmodal();
						$('.btn_applynow').hide();
						
						var dataString = $("#_emiCalculatorForm,#_emiCalculatorForm2,#_emiCalculatorForm3").serializeArray();
						var fd = new FormData();
						//var getrecapatchares=grecaptcha.getResponse();
						   
						//fd.append('g-recaptcha-response',getrecapatchares);
						
						$.each(dataString,function(key,input){
								if(input.value !='')
								{
									fd.append(input.name,input.value);
								}
						});
						
						$.ajax({
							url:"/eng/cfc/hfValidations.cfc?method=validations_otherForms_EMI",
							type: "POST",
								data: fd,
								processData: false,
								contentType: false,
								success: function(response)
								{
									//Here parsejson             
									var parsedjson = $.parseJSON(response);
									var retFlag=false;
						
										if(parsedjson["errors"]==true)
										{
											$.each(parsedjson, function(i, item) {
												if($( ".error_"+i).html() != item){
													 $( ".error_"+i).html("");
													 $( ".error_"+i).append(item);
												}
												$( ".error_"+i).removeClass("errorlabel");
												$( ".error_"+i).addClass("error");
												$( ".error_"+i).show();
											});
											
											$('#myModal').modal('hide');
											$('.btn_applynow').show();
												$('.swiper-pagination-bullet[role = "'+parsedjson["errorform"]+'"]').trigger('click');
				
											
											return;
										}
										else if(parsedjson["leadstatus"]=='leadinserted')
										{
											$('#myModal').modal('hide');
											alert('We appreciate you taking the time to fill out the form. Our representative will get in touch with you shortly to assist you with your inquiry.');
											window.location.href='/eng/personal-banking/finance/home-finance-calculator/';
										}
								}
								});
								
				}
				
				else if(formid=='_emiCalculatorForm2' || formid=='_emiCalculatorForm')
				{
							var dataString = $("#"+formid).serializeArray();
							var fd = new FormData();    
							$.each(dataString,function(key,input){
								if(input.value !='')
								{
									fd.append(input.name,input.value);
								}
							});
								
								
									$.ajax({
										url:"/eng/cfc/hfValidations.cfc?method=validations"+formid,
										type: "POST",
											data: fd,
											processData: false,
											contentType: false,
											success: function(response)
											{
												//Here parsejson             
												var parsedjson = $.parseJSON(response);
												var retFlag=false;
									
												$.each(parsedjson, function(i, item) {
													if($( ".error_"+i).html() != item){
														 $( ".error_"+i).html("");
														 $( ".error_"+i).append(item);
													}
													$( ".error_"+i).removeClass("errorlabel");
													$( ".error_"+i).addClass("error");
													$( ".error_"+i).show();
													if(i == "errors" && item == true)
													{
														retFlag=true;
													}
												});
												if(retFlag == true)
												{
													
													return;
												}
												else
												{ 
													 nextScreen();
												}
											}
									});
					}			
			
			
		}
	}
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();
		
		
		
$(function(){
	$('#calculate_emi').click(function(){
		
		
		
				var dataString = $("#_eligibilityForm,#_eligibilityForm2,#_eligibilityForm3").serializeArray();
				var fd_eligibility = new FormData();
				   
				$.each(dataString,function(key,input){
						if(input.value !='')
						{
							fd_eligibility.append(input.name,input.value);
						}
				});
						
			
				$.ajax({
					url:"/eng/cfc/hfValidations.cfc?method=calculateEMI",
					type: "POST",
						data: fd_eligibility,
						processData: false,
						contentType: false,
						success: function(response)
						{
							
							var parsedjson = $.parseJSON(response);
							var retFlag=false;
				
								if(parsedjson["errors"]==true)
								{
									$.each(parsedjson, function(i, item) {
										if($( ".error_"+i).html() != item){
											 $( ".error_"+i).html("");
											 $( ".error_"+i).append(item);
										}
										$( ".error_"+i).removeClass("errorlabel");
										$( ".error_"+i).addClass("error");
										$( ".error_"+i).show();
									});
									
									$('.swiper-pagination-bullet[role = "'+parsedjson["errorform"]+'"]').trigger('click');
									return;
								}
								else
								{
									
									window.location.href='/eng/personal-banking/finance/home-finance-emi-calculator/?cont';
								}
							
							
							
							
						}
				});
		
		
		
		
	});
});

 function PMT(ir, np, pv, fv, type) {
            /*
             * ir   - interest rate per month
             * np   - number of periods (months)
             * pv   - present value
             * fv   - future value
             * type - when the payments are due:
             *        0: end of the period, e.g. end of month (default)
             *        1: beginning of period
             */
            var pmt, pvif;

            fv || (fv = 0);
            type || (type = 0);

            if (ir === 0)
                return -(pv + fv)/np;

            pvif = Math.pow(1 + ir, np);
            pmt = - ir * pv * (pvif + fv) / (pvif - 1);

            if (type === 1)
                pmt /= (1 + ir);

            return pmt;
        }



//function calculatePMT() {
//	var __profitrate = 4;
//	var __ir = ((__profitrate / 100)) / 12;
//	var __np = _tenorinmonth;
//	var  __pv = $("#_financeamount").val();
//	var _pmtresult = PMT(__ir, __np, -__pv, 0, 0);
//	_pmtresult = Math.round(_pmtresult)
//	$("span#_result").text("AED "+_pmtresult);
//}

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
	  });

    range.on('input', function(){
		  $(this).next(value).html(this.value);
	 //alert(this.value)
		  
    });
  });
};

rangeSlider();

$(function(){
	$('.range-slider__value').change(function () {
        alert(3)
    });
});

//if(document.documentMode) {
  //  $('.range-slider__range').change(function () {
    //    $(this).next().text($(this).val());
    //});
//}






