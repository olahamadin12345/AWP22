//alert('submit');
function sec1submit(){
//alert('sec1submit')
  $("#collapse").collapse("hide");  
  $("#collapse1").collapse("show");
  //$("#heading").addClass("diableacc");
  //$("#heading").addClass("headermenu");  
  //$("#heading1").addClass("headermenu");
  $("#heading1a").removeClass("accodheader");
  $("#heading1").removeClass("accodheader");
  //$("#heading1").removeClass("diableacc");
  $("#progressimg").removeClass("displayblock");
  $("#progressimg").addClass("displaynone");
  $("#productprogress1").addClass("displayblock");
  $("#productprogress1").removeClass("displaynone");
}

function sec2submit() {  
  $("#collapse1").collapse("hide");  
  $("#collapse2").collapse("show");   
  $("#heading1a").removeClass("accodheader");
  $("#heading1").removeClass("accodheader");  
  $("#heading2").removeClass("accodheader");
  $("#heading2a").removeClass("accodheader"); 
  //$("#heading2").removeClass("diableacc");  
  $("#productprogress2").addClass("displayblock");
  $("#productprogress2").removeClass("displaynone");
  $("#productprogress1").removeClass("displayblock");
  $("#productprogress1").addClass("displaynone");  
}
function sec3submit() {  
  $("#collapse1").collapse("hide");  
  $("#collapse2").collapse("hide");  
  $("#collapse3").collapse("show");   
  $("#heading2a").removeClass("accodheader");
  $("#heading2").removeClass("accodheader");  
  $("#heading3").removeClass("accodheader");
  $("#heading3a").removeClass("accodheader"); 
  //$("#heading3").removeClass("diableacc");  
  $("#productprogress3").addClass("displayblock");
  $("#productprogress3").removeClass("displaynone");
  $("#productprogress2").removeClass("displayblock");
  $("#productprogress2").addClass("displaynone");  
  //$("#divTooltip").show();
}

function sec4submit(){
  //alert('sec4submit')
  $("#collapse4").collapse("hide");  
  $("#collapse5").collapse("show");
  $("#headxing4").removeClass("accodheader");
  $("#heading4a").removeClass("accodheader");
  $("#heading5").removeClass("accodheader");
  //$("#heading5").removeClass("diableacc");
  $("#heading5a").removeClass("accodheader");
  if($("#hdnpolicycheck").val() == ""){
    $("#edsprogress1").addClass("displayblock");
    $("#edsprogress1").removeClass("displaynone");
    $("#edsprogress2").removeClass("displayblock");
    $("#edsprogress2").addClass("displaynone");  
  }
}

function sec5submit() {  
  //alert('sec5submit')
  $("#collapse5").collapse("hide");  
  $("#collapse6").collapse("show");
  $("#heading5").removeClass("accodheader");
  $("#heading5a").removeClass("accodheader");  
  $("#heading6").removeClass("accodheader");
  //$("#heading6").removeClass("diableacc");
  $("#heading6a").removeClass("accodheader");   
  if($("#hdnpolicycheck").val() == ""){
    $("#edsprogress2").addClass("displayblock");
    $("#edsprogress2").removeClass("displaynone");
    $("#edsprogress1").removeClass("displayblock");
    $("#edsprogress1").addClass("displaynone");
  }
}
function sec6submit() {  
  //alert('sec6submit')
  $("#heading6").removeClass("accodheader");
  $("#heading6a").removeClass("accodheader");  
  $("#heading7").removeClass("accodheader");
  //$("#heading7").removeClass("diableacc");
  $("#heading7a").removeClass("accodheader"); 
  $("#collapse6").collapse("hide");
  $("#collapse7").collapse("show");  
  document.getElementById("page4").style.display="block";
  document.getElementById("page3").style.display="none";
}

function sec7submit() {
    $("#heading7").removeClass("accodheader");
    $("#heading7a").removeClass("accodheader");  
    $("#heading8").removeClass("accodheader");
    $("#heading8a").removeClass("accodheader"); 
    $("#collapse7").collapse("hide");
       $("#collapse8").collapse("show");
}

function sec8submit() {
  $("#headingTwo").removeClass("currentbg");
  if($("#hdnpolicycheck").val() == "")
  {
    $("#edscompleted").addClass("displayblock");
    $("#edscompleted").removeClass("displaynone");
    $("#edsprogress2").removeClass("displayblock");
    $("#edsprogress2").addClass("displaynone");
    $("#edsprogress1").removeClass("displayblock");
    $("#edsprogress1").addClass("displaynone");
    $("#hdnpolicycheck").val("completed");
  }
}

function addsecopen() {
  //alert('addsecopen')
  $("#headingThree").removeClass("accodheader");
  $("#headingThree").addClass("currentbg");
  //$("#headingThreea").removeClass("diableacc");
  $("#headingThreea").removeClass("accodheader");
  $("#headingThreea").addClass("accordianheader");
}

function sec9submit(){
  //alert('sec9submit')
  $("#collapse9").collapse("hide");  
  $("#collapse10").collapse("show");
  $("#heading10").removeClass("accodheader");
  $("#heading10a").removeClass("accodheader");
  //$("#heading10").removeClass("diableacc");
  if($("#hdnadditionalinfo").val() == ""){
  $("#addprogress1").addClass("displayblock");
  $("#addprogress1").removeClass("displaynone");
  $("#addprogress2").removeClass("displayblock");
  $("#addprogress2").addClass("displaynone");  
  }
}

function sec10submit() {
//alert('sec10submit')  
  $("#collapse10").collapse("hide");  
  $("#collapse11").collapse("show");
  $("#heading10").removeClass("accodheader");
  $("#heading10a").removeClass("accodheader");
  //$("#heading10").removeClass("diableacc");  
  $("#heading11").removeClass("accodheader");
  $("#heading11a").removeClass("accodheader");   
  //$("#heading11").removeClass("diableacc");
  if($("#hdnadditionalinfo").val() == ""){
  $("#addprogress2").addClass("displayblock");
  $("#addprogress2").removeClass("displaynone");
  $("#addprogress1").removeClass("displayblock");
  $("#addprogress1").addClass("displaynone");  
  }
}

function sec11submit() {
// alert('sec11submit')  
  //$("#collapse10").collapse("hide");  
  $('#proof_accor').show();
  $("#collapse11").collapse("show");  
  $("#collapse12").collapse("hide");
  $("#heading10").removeClass("accodheader");
  $("#heading10a").removeClass("accodheader");
  //$("#heading10").removeClass("diableacc");
  $("#heading11").removeClass("accodheader");
  $("#heading11a").removeClass("accodheader");   
  //$("#heading11").removeClass("diableacc");  
  $("#heading12").removeClass("accodheader");
  $("#heading12a").removeClass("accodheader");   
  $("#heading12").removeClass("diableacc");
}

function sec12submit() {
  $("#collapse12").collapse("hide");  
  $("#collapse13").collapse("show");
  $("#heading12").removeClass("accodheader");
  $("#heading12a").removeClass("accodheader");
  //$("#heading12").removeClass("diableacc");  
  $("#heading13").removeClass("accodheader");
  $("#heading13a").removeClass("accodheader");   
  $("#heading13").removeClass("diableacc");
  /*if($("#hdnadditionalinfo").val() == ""){
  $("#addprogress2").addClass("displayblock");
  $("#addprogress2").removeClass("displaynone");
  $("#addprogress1").removeClass("displayblock");
  $("#addprogress1").addClass("displaynone");  
  }*/
}

function sec13submit()
{
  $("#collapse").collapse("hide");  
  $("#collapsenew").collapse("show");
  $("#heading1").removeClass("accodheader");
  $("#heading1a").removeClass("accodheader");
  //$("#heading1").removeClass("diableacc");

  if($("#hdncorressinfo").val() == "")
    {
      $("#addresscompleted1").addClass("displayblock");
      $("#addresscompleted1").removeClass("displaynone");
    }  
  $("#incorp_nxt").css("display","none");
  $("#incorp_upd").css("display","block");
  $("#bttradeaddMore_first").css("display","none");
  $("#trademore_accor").css("display","block");
  
}
function sec14submit()
{
  $("#collapse14").collapse("hide");  
  $("#collapse15").collapse("show");
  $("#heading15").removeClass("accodheader");
  $("#heading15a").removeClass("accodheader");
  //$("#heading15").removeClass("diableacc");
  if($("#hdncorressinfo").val() == "")
    {
      $("#addresscompleted1").removeClass("displayblock");
      $("#addresscompleted1").addClass("displaynone");
      $("#addresscompleted2").addClass("displayblock");
      $("#addresscompleted2").removeClass("displaynone");
    }  
}
function sec15submit()
{
  $("#collapse2").collapse("hide");  
  $("#collapse3").collapse("show");
  $("#heading3").removeClass("accodheader");
  $("#heading3a").removeClass("accodheader");
  //$("#heading3").removeClass("diableacc");

  if($("#hdncorressinfo").val() == "")
    {
      $("#addresscompleted2").addClass("displayblock");
      $("#addresscompleted2").removeClass("displaynone");
    }  
}
function sec16submit()
{
  // alert('sec16submit')
  $("#collapse16").collapse("hide");  
  $("#collapse17").collapse("show");
  $("#heading17").removeClass("accodheader");
  $("#heading17a").removeClass("accodheader");
  //$("#heading17").removeClass("diableacc");
  if($("#hdnproductinfo").val() == "")
  {
    $("#prodprogress2").addClass("displayblock");
    $("#prodprogress2").removeClass("displaynone");
    $("#prodprogress3").removeClass("displayblock");
    $("#prodprogress3").addClass("displaynone");
  }
}
function sec17submit()
{
  // alert('sec16submit')
  $("#collapse17").collapse("hide");
  $("#collapse18").collapse("show");
  $("#heading18").removeClass("accodheader");
  $("#heading18a").removeClass("accodheader");
  //$("#heading18").removeClass("diableacc");
  if($("#hdnproductinfo").val() == "")
  {
    $("#addnonindivprogress2").addClass("displayblock");
    $("#addnonindivprogress2").removeClass("displaynone");
    // $("#prodprogress3").removeClass("displayblock");
    // $("#prodprogress3").addClass("displaynone");
  }
}
function sec18submit()
{
  // alert('sec16submit')
  $("#collapse17").collapse("hide");
    $("#collapse18").collapse("show");
  $("#heading18").removeClass("accodheader");
  $("#heading18a").removeClass("accodheader");
  //$("#heading18").removeClass("diableacc");
  if($("#hdnproductinfo").val() == "")
  {
    // $("#prodprogress2").addClass("displayblock");
    // $("#prodprogress2").removeClass("displaynone");
    // $("#prodprogress3").removeClass("displayblock");
    // $("#prodprogress3").addClass("displaynone");
  }
}

function sec23submit()
{
  // alert('sec16submit')
}
function sec24submit()
{
  $("#collapse24").collapse("hide");
    $("#collapse25").collapse("show");
  $("#heading25").removeClass("accodheader");
  $("#heading25a").removeClass("accodheader");
  //$("#heading25").removeClass("diableacc");

}

function corrsecopen() {
  //alert('corrsecopen')
  if($("#hdnadditionalinfo").val() == ""){
  $("#headingThree").removeClass("currentbg");
  $("#addcompleted").addClass("displayblock");
  $("#addcompleted").removeClass("displaynone");
  $("#addprogress2").removeClass("displayblock");
  $("#addprogress2").addClass("displaynone");  
  $("#headingFour").removeClass("accodheader");
  $("#headingFour").addClass("currentbg");
  //$("#headingFoura").removeClass("diableacc");
  $("#headingFoura").removeClass("accodheader");
  $("#headingFoura").addClass("accordianheader");
  $("#hdnadditionalinfo").val("completed");
  }
}


/*function sec14submit() {
//alert('sec14submit')  
  $("#collapse14").collapse("hide");  
  $("#collapse15").collapse("show");
  $("#heading14").removeClass("accodheader");
  $("#heading14a").removeClass("accodheader");
  $("#heading14").removeClass("diableacc");  
  $("#heading15").removeClass("accodheader");
  $("#heading15a").removeClass("accodheader");   
  $("#heading15").removeClass("diableacc");
  if($("#hdncorressinfo").val() == ""){
  $("#corrprogress2").addClass("displayblock");
  $("#corrprogress2").removeClass("displaynone");
  $("#corrprogress1").removeClass("displayblock");
  $("#corrprogress1").addClass("displaynone");
  }  
}*/

function prodsecopen() {
  ////alert('prodsecopen')
  if($("#hdncorressinfo").val() == ""){
  $("#headingFour").removeClass("currentbg");
  $("#corrcompleted").addClass("displayblock");
  $("#corrcompleted").removeClass("displaynone");
  $("#corrprogress2").removeClass("displayblock");
  $("#corrprogress2").addClass("displaynone");  
  $("#headingFive").removeClass("accodheader");
  $("#headingFive").addClass("currentbg");
  //$("#headingFivea").removeClass("diableacc");
  $("#headingFivea").removeClass("accodheader");
  $("#headingFivea").addClass("accordianheader");
  $("#hdncorressinfo").val("completed");
  }
}

/*function sec16submit(){
  ////alert('sec16submit')
  $("#collapse16").collapse("hide");  
  $("#collapse17").collapse("show");
  $("#heading17").removeClass("accodheader");
  $("#heading17a").removeClass("accodheader");
  $("#heading17").removeClass("diableacc");
  if($("#hdnproductinfo").val() == ""){
  $("#prodprogress2").addClass("displayblock");
  $("#prodprogress2").removeClass("displaynone");
  $("#prodprogress3").removeClass("displayblock");
  $("#prodprogress3").addClass("displaynone");
  }
}*/

/*function sec17submit() {  
  ////alert('sec17submit')
  $("#collapse16").removeClass("in");
  $("#collapse17").removeClass("in");
  $("#collapse18").addClass("in"); 
  $("#heading17").removeClass("accodheader");
  $("#heading17a").removeClass("accodheader");
  $("#heading17").removeClass("diableacc");  
  $("#heading18").removeClass("accodheader");
  $("#heading18a").removeClass("accodheader");   
  $("#heading18").removeClass("diableacc");
  if($("#hdnproductinfo").val() == ""){
  $("#prodprogress3").addClass("displayblock");
  $("#prodprogress3").removeClass("displaynone");
  $("#prodprogress2").removeClass("displayblock");
  $("#prodprogress2").addClass("displaynone");
  }
}*/


/*Accordion Cr Card Personal Details 



/* End Accordion Cr Card Details*/

function docsecopen() {
  ////alert('docsecopen')
  if($("#hdnproductinfo").val() == ""){
  $("#headingFive").removeClass("currentbg");
  $("#prodcompleted").addClass("displayblock");
  $("#prodcompleted").removeClass("displaynone");
  $("#prodprogress2").removeClass("displayblock");
  $("#prodprogress2").addClass("displaynone");  
  $("#headingSix").removeClass("accodheader");
  $("#headingSix").addClass("currentbg");
  //$("#headingSixa").removeClass("diableacc");
  $("#headingSixa").removeClass("accodheader");
  $("#headingSixa").addClass("accordianheader");
  $("#hdnproductinfo").val("completed");
  }
}

/*function sec18submit() {
  ////alert('sec18submit')
  if($("#hdndocupload").val() == ""){
    $("#hdndocupload").removeClass("currentbg");
    $("#hdndocupload").val("completed");
    $("#doccompleted").addClass("displayblock");
    $("#doccompleted").removeClass("displaynone");
  }
  location.href = 'Application-Preview.cfm';
}*/

function cancelapp() {
  ////alert('cancelapp')
    $('#exampleModalLong').modal('show');
}

function update_CDDInd(){
  var dataString = $("#section1,#section2,#section3,#section25").serialize();
  //var data = $('#myForm').serializeArray();
    //data.push({name: 'tienn2t', value: 'love'});
  console.log(dataString );
    $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=update_cddInd",
         type: "POST",
        data: dataString,
             //processData: false,
            //contentType: false,
        success: function(response)
        {
          //Here parsejson    
          var parsedjson = $.parseJSON(response);
          
          var retFlag=false;
              //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
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
                //sec9submit();
              window.location = "/eng/kyc/cdd/cdd-emiratesid/";
              }
        }
    });
  
  }

function update_CDDNonInd(){
  var dataString = $("#section4,#section5,#section6,#section7,#section8").serialize();
  //var data = $('#myForm').serializeArray();
    //data.push({name: 'tienn2t', value: 'love'});
  console.log(dataString );
    $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=update_cddInd",
         type: "POST",
        data: dataString,
             //processData: false,
            //contentType: false,
        success: function(response)
        {
          //Here parsejson    
          var parsedjson = $.parseJSON(response);
          
          var retFlag=false;
              //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
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
                //sec9submit();
              window.location = "/eng/kyc/cdd/cdd-emiratesid/";
              }
        }
    });
  
  }



function submitIndCDD(getid){
	var dataString = $("#section1,#section2,#section3,#section19,#section25").serialize();
	
		$('#previewnext_ind').html('');
		//$('#previewnext_ind').show();
		$('#previewnext_ind').prop("disabled", true);
		$('#previewnext_ind').addClass('section-loader');
		
	
	//var data = $('#myForm').serializeArray();
    //data.push({name: 'tienn2t', value: 'love'});
  console.log(dataString );
    $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=bpmPush_cddInd",
         type: "POST",
        data: dataString,
             //processData: false,
            //contentType: false,
        success: function(response)
        {
          //Here parsejson    
          var parsedjson = $.parseJSON(response);
          
          //alert(parsedjson.PID);
          //alert(parsedjson.connection);
          var retFlag=false;
              //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
              //$.each(parsedjson, function(i, item) {
//                  if($( ".error_"+i).html() != item){
//                   $( ".error_"+i).html("");
//                   $( ".error_"+i).append(item);
//                }
//                  $( ".error_"+i).removeClass("errorlabel");
//                  $( ".error_"+i).addClass("error");
//                  $( ".error_"+i).show();
//                  if(i == "errors" && item == true)
//                {
//                  retFlag=true;
//                }
//              });
//              if(retFlag == true)
//              {
//                return;
//              }

            if(parsedjson["errors"]==true)
            {
              $('#sec3next').html('Next');
              $('#sec3next').prop("disabled", false);
              $('#sec3next').removeClass('section-loader');
                      
              $.each(parsedjson, function(i, item) {
                $( ".error_"+i).html('');
                $( ".error_"+i).append(item);
                $( ".error_"+i).removeClass("errorlabel");
                $( ".error_"+i).addClass("error");
                $( ".error_"+i).show();
              });
              $(".presubmit").show();
            }
            else if(parsedjson["norecords"]==true)
            {
                alert(parsedjson.norecordsMessage);
                $('#previewnext_ind').html('Submit');
                $('#previewnext_ind').show();
                $('#previewnext_ind').prop("disabled", false);
                $('#previewnext_ind').removeClass('section-loader');
                return false;
            }
            else
            {  
              
                //sec9submit();
            alert('Thank you for the submission. Please note your reference id: '+parsedjson.PID);
                	window.location = "/eng/kyc/update-eid/";
              }
        }
    });
}

function submitNonIndCDD(getid){
	var dataString = $("#section4,#section5,#section6,#section7,#section8").serialize();
	//var data = $('#myForm').serializeArray();
    //data.push({name: 'tienn2t', value: 'love'});
	
								$('#previewnext_nonind').html('');
								$('#previewnext_nonind').prop("disabled", true);
								$('#previewnext_nonind').addClass('section-loader');
	
	console.log(dataString );
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=bpmPush_cddNonInd",
   			type: "POST",
				data: dataString,
		       	//processData: false,
		        //contentType: false,
				success: function(response)
				{
					
								$('#previewnext_nonind').html('Submit');
								$('#previewnext_nonind').show();
								$('#previewnext_nonind').prop("disabled", false);
								$('#previewnext_nonind').removeClass('section-loader');
					//Here parsejson    
					var parsedjson = $.parseJSON(response);
//					var retFlag=false;
//			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
//			        $.each(parsedjson, function(i, item) {
//			            if($( ".error_"+i).html() != item){
//			        		 $( ".error_"+i).html("");
//			        		 $( ".error_"+i).append(item);
//			        	}
//			            $( ".error_"+i).removeClass("errorlabel");
//			            $( ".error_"+i).addClass("error");
//			            $( ".error_"+i).show();
//			            if(i == "errors" && item == true)
//			        	{
//			        		retFlag=true;
//			        	}
//			        });
//		        	if(retFlag == true)
//		        	{
//		        		return;
//		        	}
//		        	else
//		        	{
//		        		//sec9submit();
//		        	window.location = "/eng/kyc/cdd/cdd-emiratesid/";
//		        	}
//				}
//		});
//}
            if(parsedjson["errors"]==true)
            {
              alert("Sorry having some problem to submittion your data. Please re-submit.");
              $('#sec3next').html('Next');
              $('#sec3next').prop("disabled", false);
              $('#sec3next').removeClass('section-loader');
                      
              $.each(parsedjson, function(i, item) {
                $( ".error_"+i).html('');
                $( ".error_"+i).append(item);
                $( ".error_"+i).removeClass("errorlabel");
                $( ".error_"+i).addClass("error");
                $( ".error_"+i).show();
              });
              $(".presubmitNon").show();
            }
            else if(parsedjson["norecords"]==true)
            {
                alert(parsedjson.norecordsMessage);
                $('#previewnext_nonind').html('Submit');
                $('#previewnext_nonind').show();
                $('#previewnext_nonind').prop("disabled", false);
                $('#previewnext_nonind').removeClass('section-loader');
                return false;
            }
            else
            {  
              
                //sec9submit();
            alert('Thank you for the submission. Please note your reference id: '+parsedjson.PID);
                window.location = "/eng/kyc/update-eid/";
              }
        }
    });
}

/* Emirates ID submition */
function submit_eida(){}

/* Visa submition */
function submit_visa(){} 

/* Visa submition */
function submit_passport(){} 

/* Address submition */
function submit_addind(){} 

/* Fatca and CRS submition */
function submit_fatcaindv(){} 

/* Pernext server validation check*/

  function sec1Valid() {  
  
    var fd = new FormData();    
    var strNationality=$("#txtnationality").val();
    var strMultiNation = $("#hdnmultination").val();
    var strMultiBank= $("#hdntxtotherbankrep").val();
    var strBankName = $("#bankname").val();
    var strRelationship = $("#txtrelationshipvalue").val();
    var strBankingSince = $("#txtbankingsince").val();
    var strtxtcommentbox1 = $("#txtcommentbox1").val();  
    var strtxtcommentbox2 = $("#txtcommentbox2").val();    
      
    fd.append('txtnationality',strNationality); //this is form value of firstname
    fd.append('multination',strMultiNation); //this is form value of lastname
    fd.append('bankrelationship',strMultiBank); //this is form value of firstname
    fd.append('bankname',strBankName); //this is form value of lastname
    fd.append('relationshipvalue',strRelationship); //this is form value of firstname
    fd.append('bankingsince',strBankingSince); //this is form value of lastname
    fd.append('txtcommentbox1',strtxtcommentbox1); 
    fd.append('txtcommentbox2',strtxtcommentbox2); 
    
    var retFlag=false;
    return $.ajax({
    url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=checkNationalityindiCDD",
      type: "POST",
        data: fd,
             processData: false,
            contentType: false,
        success: function(response){
        //Here parsejson             
        var parsedjson = $.parseJSON(response);
        
    
            //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
            $.each(parsedjson, function(i, item) {
              if($( ".error_"+i).html() != item){
                $( ".error_"+i).html() == "";
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
                sec1submit();
                //return true;
              }
        }
    
    });

  }


/* End */

/* edunext server validation check*/

  function sec2Valid() {  
  ////alert('sec2')
    var fd = new FormData();    
    
    var strOccupation=$("#hdnoccupationtype").val();
    
    $.when(sec1Valid()).then(function(result) { 
        var checkform1_errors = $.parseJSON(result);
        ////alert(result)
        if(checkform1_errors["errors"]==true)
        {
          
          return false;
        }
    }); 
    
      
    var strOccupationName = "";
    var strMonthlyIncome ="";
    var strPropertyInvestment = "";
    var strOtherIncome = "";
    var strSalaryacENBD = "";
    var strNatureBusiness = "";
    var strOwnership = "";
    var strLengthservice ="";
    
    var strtxtcommentbox3= $("#txtcommentbox3").val();
    
    strLengthservice = $("#txtlengthservice").val();
    
    if (strOccupation == "S") {
       strOccupationName =$("#txtorganizationname").val();
       strMonthlyIncome = $("#hdnselectmonthlyincome").val();
       strPropertyInvestment= $("#hdnpropertyinverstment").val();
       strOtherIncome= $("#hdnselectotherincome").val();
       strSalaryacENBD = $("#txtsalrayaccenbd").val();
       strNatureBusiness= $("#hdnnaturebusiness").val();
       strOwnership= $("#txtownershippercent").val();
     }
     else {
       strOccupationName =$("#txtorganizationname").val();
       strMonthlyIncome = $("#hdnselectmonthlyincome").val();
       strPropertyInvestment= $("#hdnpropertyinverstment").val();
       strOtherIncome= $("#hdnselectotherincome").val();
       strSalaryacENBD = $("#txtsalrayaccenbd").val();
      }
     
   
    fd.append('occupation_type',strOccupation); //this is form value of firstname
    fd.append('organizationname',strOccupationName); //this is form value of lastname
    fd.append('monthlyincome_type',strMonthlyIncome); //this is form value of firstname
    fd.append('txtlengthservice',strLengthservice); //this is form value of firstname
    
    fd.append('propertyinverstment',strPropertyInvestment); //this is form value of lastname
    fd.append('otherincome',strOtherIncome); //this is form value of lastname
    fd.append('salrayaccenbd',strSalaryacENBD); //this is form value of firstname
    fd.append('txtcommentbox3',strtxtcommentbox3);
    
   
    
    if (strOccupation == "S") {
      fd.append('naturebusiness',strNatureBusiness); //this is form value of firstname
      fd.append('ownership',strOwnership); //this is form value of lastname
     }
    
    var retFlag=false;
    return $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=checkNationalityindiCDD1",
      type: "POST",
        data: fd,
             processData: false,
            contentType: false,
        success: function(response){
        //Here parsejson             
        var parsedjson = $.parseJSON(response);
        
    
            //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
            $.each(parsedjson, function(i, item) {
                 if($( ".error_"+i).html() != item){
                 $( ".error_"+i).append(item);
              }
                $( ".error_"+i).removeClass("errorlabel");
                $( ".error_"+i).addClass("error");
                $( ".error_"+i).show();
                ////alert(i)
                ////alert(item)
                if(i == "errors" && item == true)
              {
                retFlag=true;
              }
            });
              if(retFlag == true)
              {
                //return;
              }
              else
              {
                sec2submit();
                //timercall();
              }
        }
    
    });

  }

/* otpnext server validation check*/

  function sec3Valid() {  
   ////alert('sec3valid')
    var fd = new FormData();    
    
    
    /*$.when(sec2Valid()).then(function(result) { 
        var checkform2_errors = $.parseJSON(result);
        ////alert(result)
        if(checkform2_errors["errors"]==true)
        {
          alert("2");
          return false;
        }
    }); */
    
    var strSalary=$("#hdsalary").val();
    var strBusiness=$("#hdbusiness").val();
    var strInvestment=$("#hdinvestment").val();
    var strSalesofasset=$("#hdsaleofasset").val();
    var strGift=$("#hdgift").val();
    var strOthers=$("#hdnoptionsothers").val();
    var strOthersSpecify="";
    
    var strtxtcommentbox4=$("#txtcommentbox4").val();
    var strtxtmnth1=$("#txtmnth1").val();
    var strtxtfrequen1=$("#txtfrequen1").val();
    var strtxtmnth2=$("#txtmnth2").val();
    var strtxtfrequen2=$("#txtfrequen2").val();
    var strtxtmnth3=$("#txtmnth3").val();
    var strtxtfrequen3=$("#txtfrequen3").val();
    var strtxtmnth4=$("#txtmnth4").val();
    var strtxtfrequen4=$("#txtfrequen4").val();
    var strtxtmnth5=$("#txtmnth5").val();
    var strtxtfrequen5=$("#txtfrequen5").val();
    var strtxtmnth6=$("#txtmnth6").val();
    var strtxtfrequen6=$("#txtfrequen6").val();
    var strtxtmnth7=$("#txtmnth7").val();
    var strtxtfrequen7=$("#txtfrequen7").val();
    var strtxtmnth8=$("#txtmnth8").val();
    var strtxtfrequen8=$("#txtfrequen8").val();
    var strtxtcommentbox5=$("#txtcommentbox5").val();
  
    if(strOthers == "true")
    {
      strOthersSpecify=$("#txtother_info").val();
    }
    
    fd.append('salary',strSalary); //this is form value of firstname
    fd.append('business',strBusiness); //this is form value of firstname
    fd.append('investment',strInvestment); //this is form value of firstname
    fd.append('saleofasset',strSalesofasset); //this is form value of firstname
    fd.append('gift',strGift); //this is form value of firstname
    fd.append('optionsother',strOthers); //this is form value of firstname
    
    fd.append('txtcommentbox4',strtxtcommentbox4)
    fd.append('txtmnth1',strtxtmnth1)
    fd.append('txtfrequen1',strtxtfrequen1)
    fd.append('txtmnth2',strtxtmnth2)
    fd.append('txtfrequen2',strtxtfrequen2)
    fd.append('txtmnth3',strtxtmnth3)
    fd.append('txtfrequen3',strtxtfrequen3)
    fd.append('txtmnth4',strtxtmnth4)
    fd.append('txtfrequen4',strtxtfrequen4)
    fd.append('txtmnth5',strtxtmnth5)
    fd.append('txtfrequen5',strtxtfrequen5)
    fd.append('txtmnth6',strtxtmnth6)
    fd.append('txtfrequen6',strtxtfrequen6)
    fd.append('txtmnth7',strtxtmnth7)
    fd.append('txtfrequen7',strtxtfrequen7)
    fd.append('txtmnth8',strtxtmnth8)
    fd.append('txtfrequen8',strtxtfrequen8)
    fd.append('txtcommentbox5',strtxtcommentbox5)
    
    if(strOthers == "true")
    {
      fd.append('other_info',strOthersSpecify); //this is form value of firstname
    }
    
     $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=checkNationalityindiCDD2",
      type: "POST",
        data: fd,
             processData: false,
            contentType: false,
        success: function(response){
        //Here parsejson             
        var parsedjson = $.parseJSON(response);
        var retFlag=false;
    
            //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
            $.each(parsedjson, function(i, item) {
              
                if($( ".error_"+i).html() != item){
                 $( ".error_"+i).append(item);
              }
                $( ".error_"+i).removeClass("errorlabel");
                $( ".error_"+i).addClass("error");
                $( ".error_"+i).show();
                //closeloader();
                if(i == "errors" && item == true)
              {
                retFlag=true;
              }
            });
              if(retFlag == true)
              {
                return false;
              }
              else
              {
                sec3submit();
                $("#antiindback").removeClass("displaynone");
                $("#antiindnext").removeClass("displaynone");
                //window.location.href = '/eng/kyc/cdd/cdd-emiratesid/';
              }
        }
    });
}
/* End */


/* Primary Info - continue server validation check*/

function secretvalid() {  
  ////alert('secretvalid')
   var fd = new FormData(); 
  var strConRef = $("#txtconref").val();
  var strConMail = $("#txtconemail").val();   
    fd.append('conref',strConRef); //this is form value of firstname
    fd.append('conemail',strConMail); //this is form value of lastname

  $.ajax({
    url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=existingRefCheck",
    type: "POST",
    data: fd,
         processData: false,
        contentType: false,
    success: function(response){
    //Here parsejson             
    var parsedjson = $.parseJSON(response);
    var retFlag=false;

        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
        $.each(parsedjson, function(i, item) {
          if($( ".error_"+i).html() != item){
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
            //sererrorinv();
        window.location.href = '/eng/kyc/cdd/cdd-dashboard/';
          }
    }
  });
}

/* End */


/* Product Selection - Continue server validation check*/

function secret1valid() {  
  ////alert('secret1valid')
  var fd = new FormData(); 
  var strConRef = $("#txtconref").val();
  var strConMail = $("#txtconemail").val();   
    fd.append('conref',strConRef); //this is form value of firstname
    fd.append('conemail',strConMail); //this is form value of lastname

  $.ajax({
    url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=existingRefCheck",
    type: "POST",
    data: fd,
         processData: false,
        contentType: false,
    success: function(response){
    //Here parsejson             
    var parsedjson = $.parseJSON(response);
    var retFlag=false;

        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
        $.each(parsedjson, function(i, item) {
            if($( ".error_"+i).html() != item){
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
            //sererrorinv();
        window.location.href = '/eng/kyc/cdd/cdd-dashboard/';
          }
    }
  });
}

/* End */

/* Product Selection - Continue server validation check*/

function secforvalid() {  
  ////alert('secforvalid')
  var fd = new FormData(); 
  var strRetMob = $("#txtretmob").val();
    fd.append('retmob',strRetMob); //this is form value of firstname

  $.ajax({
    url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=forgetRefNumberCheck",
    type: "POST",
    data: fd,
         processData: false,
        contentType: false,
    success: function(response){
    //Here parsejson             
    var parsedjson = $.parseJSON(response);
    var retFlag=false;

        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
        $.each(parsedjson, function(i, item) {
              if($( ".error_"+i).html() != item){
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
            sererrorinv();
          }
    }
  });
}

function secforvalid1() {  
  ////alert('secforvalid1')
  var fd = new FormData(); 
  var strRetref = $("#txtretref").val();
    fd.append('retref',strRetref); //this is form value of firstname

  $.ajax({
    url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=forgetMobileNumberCheck",
    type: "POST",
    data: fd,
         processData: false,
        contentType: false,
    success: function(response){
    //Here parsejson             
    var parsedjson = $.parseJSON(response);
    var retFlag=false;

        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
        $.each(parsedjson, function(i, item) {
              if($( ".error_"+i).html() != item){
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
            sererrorinv();
          }
    }
  });
}

/* End */

/* Pernext server validation check*/

  function sec4valid() 
  {  
    //alert('sec4valid')
    var fd = new FormData();
    
    var strnameofaccount=$("#txtnameofaccount").val();
    var stropernonoper = $("#hdntxtopernonoper").val();
    var strplaceofinformation= $("#txtplaceofinformation").val();
    var strspecialstatus = $("#hdntxtspeacialstatus").val();
    var strtxtcommentboxsec4 = $("#txtcommentboxsec4").val();
    var strtxtcommentbox2 = $("#txtcommentbox2").val();
    
    fd.append('txtnameofaccount',strnameofaccount); //this is form value of firstname
    fd.append('opernonoper',stropernonoper); //this is form value of lastname
    fd.append('placeofinformation',strplaceofinformation); //this is form value of firstname
    fd.append('speacialstatus',strspecialstatus); //this is form value of lastname
    fd.append('txtcommentboxsec4',strtxtcommentboxsec4); 
    fd.append('txtcommentbox2',strtxtcommentbox2);
    
    return $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=checknonindividualSection1",
      type: "POST",
        data: fd,
             processData: false,
            contentType: false,
        success: function(response){
        //Here parsejson             
        var parsedjson = $.parseJSON(response);
        var retFlag=false;
    
            //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
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
                sec4submit();
              }
        }
    });
  }
/* End */


/* otpnext server validation check*/

  function sec5valid() {  
  ////alert('sec5valid')

    var fd = new FormData();
    
    $.when(sec4valid()).then(function(result) { 
        var checkform4_errors = $.parseJSON(result);
        ////alert(result)
        if(checkform4_errors["errors"]==true)
        {
          return;
        }
    }); 
    
    var strtypeofconstitution =$("#hdntypeofconstitution").val();
    var strtxtothersspec = $("#txtothersspec").val();
    var strotherbankrelationship = $("#hdntxtotherbankrep").val();
    var strbankname_val = $("#bankname_val").val();
    var strrelationshipvalueconstit = $("#txtrelationshipvalueconstit").val();
    var strbankingsince = $("#txtbankingsinceconstit").val();
    var strtxtcommentbox7 = $("#txtcommentbox7").val();
    
    fd.append('typeofconstitution',strtypeofconstitution);
    fd.append('txtothersspec',strtxtothersspec);
    fd.append('bankrelationship',strotherbankrelationship);
    fd.append('bankname_val',strbankname_val);
    fd.append('relationshipvalueconstit',strrelationshipvalueconstit);
    fd.append('bankingsince',strbankingsince);
    fd.append('txtcommentbox7',strtxtcommentbox7);
    
    return $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=checknonindividualSection2",
      type: "POST",
        data: fd,
             processData: false,
            contentType: false,
        success: function(response){
        //Here parsejson             
        var parsedjson = $.parseJSON(response);
        var retFlag=false;
    
            //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
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
                return false;
              }
              else
              {
                sec5submit();
              }
        }
    });
  }
/* End */


/* Product Selection - Continue server validation check*/

function sec6valid() {
  ////alert('sec6valid')
  $("#txtnationality_val").val($("#txtnationality").val()) ;
  var strestimatedannualincome = $("#hdnestimatedannualincome").val();
  var strestimatenetprofit = $("#txtestimatenetprofit").val();
  var stryearsinbusiness = $("#hdnselectyearsinbusiness").val();
  var strtradelicense = $("#hdnselecttradelicense").val();
  var strbackgroundofcompany = $("#txtbackgroundofcompany").val();
  var strnationality = $("#txtnationality_val").val();
  var strnoofofficewebsite = $("#txtnoofofficewebsite").val();
  var strnatureofbusiness = $("#hdnselectnatureofbusiness").val();
  var straddinfo = $("#txtaddinfo").val();
  var strasscompanys = $("#txtasscompanys").val();
  var strestimatedwealth = $("#txttotalestimatedwealth").val();
  var strsourceofwealth = $("#txtsourceofwealth").val();
  var strtxtcommentbox8 = $("#txtcommentbox8").val();
  var strtxtcommentbox9 = $("#txtcommentbox9").val();
    
  var fd = new FormData();
  
  $.when(sec5valid()).then(function(result) { 
        var checkform5_errors = $.parseJSON(result);
        ////alert(result)
        if(checkform5_errors["errors"]==true)
        {
          
          return;
        }
  });
    
  fd.append('estimatedannualincome',strestimatedannualincome);
  fd.append('estimatenetprofit',strestimatenetprofit);
  fd.append('yearsinbusiness',stryearsinbusiness);
  fd.append('hdnselecttradelicense',strtradelicense);
  fd.append('backgroundofcompany',strbackgroundofcompany);
  fd.append('txtnationality',strnationality);
  fd.append('noofofficewebsite',strnoofofficewebsite);
  fd.append('natureofbusiness',strnatureofbusiness);
  fd.append('addinfo',straddinfo);
  fd.append('asscompanys',strasscompanys);
  fd.append('totalestimatedwealth',strestimatedwealth);
  fd.append('sourceofwealth',strsourceofwealth);
  fd.append('txtcommentbox8',strtxtcommentbox8);
  fd.append('txtcommentbox9',strtxtcommentbox9);

    $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=checknonindividualSection3",
      type: "POST",
        data: fd,
             processData: false,
            contentType: false,
        success: function(response){
        //Here parsejson             
        var parsedjson = $.parseJSON(response);
        var retFlag=false;
    
            //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
            $.each(parsedjson, function(i, item) {
                  if($( ".error_"+i).html() != item){
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
                //return;
              }
              else
              {
                sec6submit();
            document.getElementById("page3").style.display="none";
            document.getElementById("page4").style.display="block";
              }
        }
    });
  
  
  }
  
  function sec7valid() {
  ////alert('sec6valid')
  $("#txtnationality1_val").val($("#txtnationality1").val()) ;
  
  var strtxtmajorclients = $("#txtmajorclients").val();
  var strtxtnationality1_val = $("#txtnationality1_val").val();
  var strhdnexportcountries = $("#hdnexportcountries").val();
  var strhdnremittancesreceive = $("#hdnremittancesreceive").val();
  var strhdnresidentcountries = $("#hdnresidentcountries").val();
    
  var fd = new FormData();
  
  $.when(sec5valid()).then(function(result) { 
        var checkform6_errors = $.parseJSON(result);
        ////alert(result)
        if(checkform6_errors["errors"]==true)
        {
          
          return;
        }
  });
    
  fd.append('majorclients',strtxtmajorclients);
  fd.append('txtnationality1',strtxtnationality1_val);
  fd.append('hdnexportcountries',strhdnexportcountries);
  fd.append('hdnremittancesreceive',strhdnremittancesreceive);
  fd.append('hdnresidentcountries',strhdnresidentcountries);

    $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=checknonindividualSection4",
      type: "POST",
        data: fd,
             processData: false,
            contentType: false,
        success: function(response){
        //Here parsejson             
        var parsedjson = $.parseJSON(response);
        var retFlag=false;
    
            //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
            $.each(parsedjson, function(i, item) {
                  if($( ".error_"+i).html() != item){
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
                sec7submit();
                $("#nonindeightback").removeClass("displaynone");
                $("#nonindeightnext").removeClass("displaynone");
            $("#eida_upd").css("display","block");
            $("#eida_nxt").css("display","none");
          }
    
  
  
  }
  });
  }
  function NonIndMonTranPattern_Sec8Valid() 
  {  
     
    var fd = new FormData();    
    
    var strtxtmnth1=$("#txtmnth1").val();
    var strtxtfrequen1=$("#txtfrequen1").val();
    var strtxtmnth2=$("#txtmnth2").val();
    
    var strtxtfrequen2=$("#txtfrequen2").val();
    var strtxtmnth3=$("#txtmnth3").val();
    var strtxtfrequen3=$("#txtfrequen3").val();
    var strtxtmnth4=$("#txtmnth4").val();
    var strtxtfrequen4=$("#txtfrequen4").val();
    
    var strtxtmnth5=$("#txtmnth5").val();
    var strtxtfrequen5=$("#txtfrequen5").val();
    var strtxtmnth6=$("#txtmnth6").val();
    var strtxtfrequen6=$("#txtfrequen6").val();
    var strtxtcommentbox5=$("#txtcommentbox5").val();
  

  
    fd.append('txtmnth1',strtxtmnth1)
    fd.append('txtfrequen1',strtxtfrequen1)
    fd.append('txtmnth2',strtxtmnth2)
    fd.append('txtfrequen2',strtxtfrequen2)
    
    fd.append('txtmnth3',strtxtmnth3)
    fd.append('txtfrequen3',strtxtfrequen3)
    fd.append('txtmnth4',strtxtmnth4)
    fd.append('txtfrequen4',strtxtfrequen4)
    
    fd.append('txtmnth5',strtxtmnth5)
    fd.append('txtfrequen5',strtxtfrequen5)
    fd.append('txtmnth6',strtxtmnth6)
    fd.append('txtfrequen6',strtxtfrequen6)
    fd.append('txtcommentbox5',strtxtcommentbox5)
    
    
     $.ajax({
      url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=checkNMonthlyTransactionPatternSec8",
      type: "POST",
        data: fd,
             processData: false,
            contentType: false,
        success: function(response){
        //Here parsejson             
        var parsedjson = $.parseJSON(response);
        var retFlag=false;
        //alert(response);
            //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
            $.each(parsedjson, function(i, item) {
              
                if($( ".error_"+i).html() != item){
                 $( ".error_"+i).append(item);
              }
                $( ".error_"+i).removeClass("errorlabel");
                $( ".error_"+i).addClass("error");
                $( ".error_"+i).show();
                //closeloader();
                if(i == "errors" && item == true)
              {
                retFlag=true;
              }
            });
              if(retFlag == true)
              {
                //alert('fale');
                return false;
              }
              else
              {
                //alert('redit');
               

                //window.location.href = '/eng/kyc/cdd/cdd-emiratesid/';
              }
        }
    });
  }





