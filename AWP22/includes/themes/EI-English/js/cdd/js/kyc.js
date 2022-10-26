

$("#emininenext").click(function() 
{
	//if($("#emininenext").text(=="Visa > >"){
	if($("#emininenext").text().length==54){
		window.location="/eng/kyc/cdd/cdd-visa/";
	}
	else
	{
	$("input.datepicker3").datepicker( "option", "dateFormat", "yy-mm-dd" );
	if($("#EIDFront").hasClass("uploaderror"))
	{
		$("#EIDFront").removeClass("uploaderror");
	}
	if($("#EIDBack").hasClass("uploaderror"))
	{
		$("#EIDBack").removeClass("uploaderror");
	}
	if($("#Section9").valid())
	{  
		if($("#txtuploadfile_fr").val() !="")
		{
			$("#hdntxtuploadfile_fr").val($("#txtuploadfile_fr").val());
		}
	  	else
	  	{
	  		$("#hdntxtuploadfile_fr").val("");
	  	}
	  	if($("#txtuploadfile_bk").val() !="")
		{
			$("#hdntxtuploadfile_bk").val($("#txtuploadfile_bk").val());
		}
	  	else
	  	{
	  		$("#hdntxtuploadfile_bk").val("");
	  	}
				
		
	  	var sendvar="eidnext"
	  	
	  	IsValid_Ajax_EmirateID_Sec09(sendvar) ;
	  	$( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	else {
		$( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
		if($("#txtuploadfile_fr").hasClass("error"))
		{
			$("#EIDFront").addClass("uploaderror");
		}
		if($("#txtuploadfile_bk").hasClass("error"))
		{
			$("#EIDBack").addClass("uploaderror");
		}
	}
	}
});

$("#visatennext").click(function() {

	$("input.datepicker1").datepicker( "option", "dateFormat", "yy-mm-dd" );
	if($("#UAEVisa").hasClass("uploaderror"))
	{
		$("#UAEVisa").removeClass("uploaderror");
	}
	if($("#section10").valid())
	{  
		$("#hdnuaeresvisa").val("uploaded");
		
		
	  	var sendvar="visanext"
	  	IsValid_Ajax_Visa_Sec10(sendvar);
	  	$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	else 
	{
		if($("#txtuaeresvisafile").hasClass("error"))
		{
			$("#UAEVisa").addClass("uploaderror");
		}
		$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
});

$("#addressnext").click(function() {
	if($("#addproof").hasClass("uploaderror"))
	{
		$("#addproof").removeClass("uploaderror");
	}
	$("input.datepickerbefore").datepicker( "option", "dateFormat", "yy-mm-dd" );
	if($("#section11").valid()){  
		$("#hdnprfresadd").val("uploaded");
		IsValid_Ajax_Address_Sec11();
		$( "input.datepickerbefore" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	else {
		if($("#txtprfresadd").hasClass("error"))
		{
			$("#addproof").addClass("uploaderror");
		}
		$( "input.datepickerbefore" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
});

/*$("#nbdttwonext").click(function()
{
    if($('#section14').valid()) 
	{
    	IsValid_Ajax_PhysicalAddressNonInd_CompanyTL_Sec14();//sec14submit();
	}

});*/

$("#nbdtthreenext").click(function(){
	
    if($('#section15').valid()) 
	{
    	IsValid_Ajax_PhysicalAddressNonInd_OPAddress_Sec15();//sec15submit();
	} 
	
});

$("#nbdtfournext").click(function()
{
	if($("#Proofupload2").hasClass("uploaderror"))
		{
			$("#hdntxtuploadfile2").val("uploaded");
			$("#Proofupload2").removeClass("uploaderror");
		}
	if($('#section16').valid()) 
	{
		if($("#txtuploadfile2").val() !="")
			{
				$("#hdntxtuploadfile2").val("uploaded");
			}
		  	else
		  	{
		  		$("#hdntxtuploadfile2").val("");
		  	} 
			
		var sendvar="nonaddnext"
		IsValid_Ajax_PhysicalAddressNonInd_AddressProof_Sec16(sendvar);//sec16submit();
    	/*sec16submit();
		$("#collapse16").collapse("hide");
    	$("#collapse17").collapse("show");*/
		
	}
	else {
		if($("#txtuploadfile2").hasClass("error"))
		{
			$("#Proofupload2").addClass("uploaderror");
		}
	}
});
$("#phyindiaddnext").click(function()
{
	if($('#section17').valid()) 
	{
    	IsValid_Ajax_PhysicalAddressInd_Sec17();//sec17submit();
	}
	
});

$("#passportelenext").click(function() {
	
	if($("#passportelenext").text()=="ADDRESS >>")
	{
		
		if(product == "Individual")
		{
			window.location= "/eng/kyc/cdd/cdd-address-individual/";
		}
		else 
		{
			window.location = "/eng/kyc/cdd/cdd-add-non-individual/";
		}
	}
	else if($("#passportelenext").text()=="TRADE LICENSE > >")
	{
		//alert(dsfsf);
		window.location= "/eng/kyc/cdd/cdd-non-trade-license/";
	}
	else
	{
		//alert(1)
			if($("#passportfront").hasClass("uploaderror"))
			{
				$("#passportfront").removeClass("uploaderror");
			}
			if($("#passportback").hasClass("uploaderror"))
			{
				$("#passportback").removeClass("uploaderror");
			}
			$("input.datepicker1").datepicker( "option", "dateFormat", "yy-mm-dd" );
			if($("#section12").valid()){  
			if($("#txtpassaddrpage").val() !="")
			{
				$("#hdntxtpassaddrpage").val("uploaded");
			}
		  	else
		  	{
		  		$("#hdntxtpassaddrpage").val("");
		  	} 
		  	if($("#txtpassphotopage").val() !="")
			{
				$("#hdntxtpassphotopage").val("uploaded");
			}
		  	else
		  	{
		  		$("#hdntxtpassphotopage").val("");
		  	}
			//$("#hdntxtpassphotopage").val("uploaded");
			//$("#hdntxtpassaddrpage").val("uploaded");
			var sendvar="passportnext"
			IsValid_Ajax_Passport_Sec12(sendvar);	
			$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );	  	
		}
		else {
		if($("#txtpassphotopage").hasClass("error"))
		{
			$("#passportfront").addClass("uploaderror");
		}
		if($("#txtpassaddrpage").hasClass("error"))
		{
			$("#passportback").addClass("uploaderror");
		}
		$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	}
});
$("#proofaddressnext").click(function()
{
	if($("#Proofupload").hasClass("uploaderror"))
	{
		$("#Proofupload").removeClass("uploaderror");
	}
	if($('#section18').valid()) 
	{
		if($("#txtuploadfile").val() !="")
			{
				$("#hdntxtuploadfile").val("uploaded");
			}
		  	else
		  	{
		  		$("#hdntxtuploadfile").val("");
		  	} 
			
			var sendvar="proofaddressnext"
		IsValid_Ajax_PhysicalAddressIndProof_Sec18(sendvar);//sec18submit();
	}
	else 
	{
		if($("#txtuploadfile").hasClass("error"))
		{
			$("#Proofupload").addClass("uploaderror");
		}
	}
});

$("#ninteennext").click(function(){
	if($("#photopage1").hasClass("uploaderror"))
	{
		$("#photopage1").removeClass("uploaderror");
	}
	if($("#photopage2").hasClass("uploaderror"))
	{
		$("#photopage2").removeClass("uploaderror");
	}
	if($("#section19").valid()){ 
		if($("#txtfatcaphotopage1").val() !="")
			{
				$("#hdntxtfatcaphotopage1").val("uploaded");
			}
		  	else
		  	{
		  		$("#hdntxtfatcaphotopage1").val("");
		  	} 
		  	if($("#txtcrsphotopage2").val() !="")
			{
				$("#hdntxtcrsphotopage2").val("uploaded");
			}
		  	else
		  	{
		  		$("#hdntxtcrsphotopage2").val("");
		  	} 
	/*	$("#hdntxtpassphotopage1").val("uploaded");
	  	$("#hdntxtpassphotopage2").val("uploaded");*/
	  		var sendvar="fatcanext"
		  	IsValid_Ajax_CRSFATCAInd_Sec19(sendvar);//sec19submit();
		}
		else {
		if($("#txtfatcaphotopage1").hasClass("error"))
		{
			$("#photopage1").addClass("uploaderror");
		}
		if($("#txtcrsphotopage2").hasClass("error"))
		{
			$("#photopage2").addClass("uploaderror");
		}
	}
});
$("#twentynxt").click(function(){
	if($("#section20").valid()){ 
		  	IsValid_Ajax_CRSFATCANonInd_Sec20();//sec20submit();
		}
});

$("#twntyonenxt").click(function(){

	if($("#section21").valid())
	{ 
  if($('#terms').is(":checked")== true)
  {
  				$("#hdnterms").val("checked");
  } 
  else
  {
      $("#hdnterms").val("");
  }
		$('#twntyonenxt').html('');
		$('#twntyonenxt').prop("disabled", true); 
		$('#twntyonenxt').addClass('section-loader');
			IsValid_Ajax_Authentication_Sec21();
			$("#divOtp").css("display","block");
	}
});

$("#ResendOTP").click(function(){
	$.ajax({
  			type: "POST",
  			url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=reSendOTP",
  			data: false,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
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
																																						 				}
		        	else
						timercall();
						$("#ResendOTP").addClass("displaynone");
						$("#timer").removeClass("displaynone");
							$("#collapse21").collapse("hide");	
							$("#collapse22").collapse("show"); 	
							$("#heading21").removeClass("subheadermenu");
							$("#heading21").addClass("headermenu");	
							$("#heading22").addClass("headermenu");
							$("#heading22a").removeClass("accodheader");
							$("#heading22").removeClass("accodheader");
							$("#heading22").removeClass("diableacc");	
				}
		 });
});

$("#corpResendOTP").click(function(){
	$.ajax({
  			type: "POST",
  			url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=CorpreSendOTP",
  			data: false,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
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
																																						 				}
		        	else
						timer1call();
						$("#corpResendOTP").addClass("displaynone");
						$("#timer1").removeClass("displaynone");
							$("#collapse21").collapse("hide");	
							$("#collapse23").collapse("show"); 	
							$("#heading21").removeClass("subheadermenu");
							$("#heading21").addClass("headermenu");	
							$("#heading23").addClass("headermenu");
							$("#heading23a").removeClass("accodheader");
							$("#heading23").removeClass("accodheader");
							$("#heading23").removeClass("diableacc");	
				}
		 });
});


$("#twentytwonxt").click(function(){
	if($("#section22").valid()){ 
		  	IsValid_Ajax_AuthenticationOTP_Sec22();//sec19submit();
		}
});

$("#corpnxt").click(function(){
	if($("#section22").valid()){ 
		$('#corpnxt').html('');
		$('#corpnxt').prop("disabled", true); 
		$('#corpnxt').addClass('section-loader');
		  	IsValid_Ajax_AuthenticationOTP_Sec22();//sec19submit();
		}
});

$("#nonindeightnext").click(function() {
	window.location = "/eng/kyc/cdd/cdd-emiratesid/";
});
/*** AJAX Validation ***/
//*******************************************************************************************************

function IsValid_Ajax_EmirateID_Sec09(sendvar)
{
	
	var fd = new FormData();
	//var struploadfile_fr = $("#txtuploadfile_fr").get(0).files[0];
	//fd.append('struploadfile_fr1',struploadfile_fr);

	var uploadslenth =$('.uploadfile').length;
	var dataDEF = $("#Section9").serializeArray();
	//console.log(dataDEF );
	//var strhdntxtuploadfile_fr = $("#hdntxtuploadfile_fr").val();
	
	
	//
	/*$.each(dataDEF,function(key,input){
		fd.append(input.name,input.value);
	});*/

	//alert(struploadfile_fr);
	for (var j=0;j<dataDEF.length;j++)
	{
		fd.append(dataDEF[j].name,dataDEF[j].value);
	}
	
	for (var ii=0;ii<$('.uploadfile').length;ii++)
	{
		var obj = $(".uploadfile")[ii];
		
		//alert(obj.id);
		//alert($(".uploadfile")[ii].files[0]);
		fd.append(obj.id,$(".uploadfile")[ii].files[0]);
	}
	fd.append('cat_type','eida');

	//alert(strhdntxtuploadfile_fr);
	/*var strhdntxtuploadfile_bk = $("#hdntxtuploadfile_bk").val();
	var struploadfile_bk = $("#txtuploadfile_bk")[0].files[0];
	var strtxtemidno = $("#txtemidno").val();
	var strtxtpassexpdate = $("#txtpassexpdate").val();
	var strtxtcommentany = $("#txtcommentany").val();
	//var file = $("#txtuploadfile_fr").file;
	
	var fd = new FormData();
	fd.append('hdntxtuploadfile_fr',strhdntxtuploadfile_fr);
	fd.append('hdntxtuploadfile_bk',strhdntxtuploadfile_bk);
	fd.append('txtemidno',strtxtemidno);
	fd.append('txtpassexpdate',strtxtpassexpdate);
	fd.append('txtcommentany',strtxtcommentany);
	fd.append('txtuploadfile_fr',struploadfile_fr);
	fd.append('txtuploadfile_bk',struploadfile_bk);*/
	//fd.file = ('file',file);
	
	return $.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_EmirateId_Sec09",
   			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
						if(sendvar=='eidnext')
						{
		        			window.location = "/eng/kyc/cdd/cdd-visa/";
						}
						else
						{
							return parsedjson;
						}
		        	}
				}
		});
	}
	
	
	
function IsValid_Ajax_Tradelicense_Sec() 
{
	var strhdntxtuploadfile_fr = $("#hdntxtuploadfile_trd").val();
	var strtxtemidno = $("#txttrdlicno").val();
	var strtxtpassexpdate = $("#txttrdexpdate").val();
	var strtxtcommentany = $("#txtcommentany_trd").val();
	
	var fd = new FormData();
	fd.append('hdntxtuploadfile_trd',strhdntxtuploadfile_fr);
	fd.append('txttrdlicno',strtxtemidno);
	fd.append('txttrdexpdate',strtxtpassexpdate);
	fd.append('txtcommentany_trd',strtxtcommentany);
	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_Tradelicense_Sec",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is �error message�
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
		        		window.location = "/eng/kyc/cdd/cdd-non-memorandum/";
		        	}
				}
		});
	}
	
function IsValid_Ajax_incorporation_Sec() 
{
	var strhdntxtuploadfile_fr = $("#hdntxtuploadfile_incorp").val();
	var strtxtcommentany = $("#txtcommentany_incorp").val();
	
	var fd = new FormData();
	fd.append('hdntxtuploadfile_incorp',strhdntxtuploadfile_fr);
	fd.append('txtcommentany_incorp',strtxtcommentany);
	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_incorporation_Sec",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is �error message�
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
		        		sec24submit();
						$('#update_go_address').html('Update &amp; Proceed');
						$("#divbtnmemoaddmore").css("display","block");
						$("#memeback").removeClass("displaynone");

		        	}
				}
		});
	}
	
function IsValid_Ajax_association_Sec(sendvar) 
{
/*	var strhdntxtuploadfile_fr = $("#hdntxtuploadfile_memorand").val();
	var strtxtcommentany = $("#txtcommentany_memorand").val();
	
	var fd = new FormData();
	fd.append('hdntxtuploadfile_memorand',strhdntxtuploadfile_fr);
	fd.append('txtcommentany_memorand',strtxtcommentany);*/
	
	var fd = new FormData();
	//fd.append('struploadfile_fr1',struploadfile_fr);

	var uploadslenth =$('.uploadfile').length;
	var dataDEF = $("#section24").serializeArray();
	var dataDEF1 = $("#section25").serializeArray();
	//console.log(dataDEF );
	//var strhdntxtuploadfile_fr = $("#hdntxtuploadfile_fr").val();
	
	
	//
	/*$.each(dataDEF,function(key,input){
		fd.append(input.name,input.value);
	});*/

	//alert(struploadfile_fr);
	for (var j=0;j<dataDEF.length;j++)
	{
		fd.append(dataDEF[j].name,dataDEF[j].value);
	}
	
	for (var k=0;k<dataDEF1.length;k++)
	{
		fd.append(dataDEF1[k].name,dataDEF1[k].value);
	}
	for (var ii=0;ii<$('.uploadfile').length;ii++)
	{
		var obj = $(".uploadfile")[ii];
		
		//alert(obj.id);
		//alert($(".uploadfile")[ii].files[0]);
		fd.append(obj.id,$(".uploadfile")[ii].files[0]);
	}
	fd.append('cat_type','MemorandumOfAssociation');
	
		return $.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_association_Sec",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is �error message�
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
						
						if(product == "Individual")
						{
							window.location= "/eng/kyc/cdd/cdd-address-individual/";
						}
						else 
						{
							window.location = "/eng/kyc/cdd/cdd-add-non-individual/";
						}				
		        	}
				}
		});
	}
function IsValid_Ajax_Visa_Sec10(sendvar) 
{
	/*var strhdnuaeresvisa = $("#hdnuaeresvisa").val();
	var strtxtuaeresvisano = $("#txtuaeresvisano").val();
	var strtxtuaeresvisaexpdate = $("#txtuaeresvisaexpdate").val();
	var strtxtcomments = $("#txtcomments").val();
	
	var fd = new FormData();
	fd.append('hdnuaeresvisa',strhdnuaeresvisa);
	fd.append('txtuaeresvisano',strtxtuaeresvisano);
	fd.append('txtuaeresvisaexpdate',strtxtuaeresvisaexpdate);
	fd.append('txtcomments',strtxtcomments);*/
	
	
	var fd = new FormData();
	//fd.append('struploadfile_fr1',struploadfile_fr);

	var uploadslenth =$('.uploadfile').length;
	var dataDEF = $("#section10").serializeArray();
	//console.log(dataDEF );
	//var strhdntxtuploadfile_fr = $("#hdntxtuploadfile_fr").val();
	
	
	//
	/*$.each(dataDEF,function(key,input){
		fd.append(input.name,input.value);
	});*/

	//alert(dataDEF.length);
	for (var j=0;j<dataDEF.length;j++)
	{
		fd.append(dataDEF[j].name,dataDEF[j].value);
	}
	
	for (var ii=0;ii<$('.uploadfile').length;ii++)
	{
		var obj = $(".uploadfile")[ii];
		
		//alert(obj.id);
		//alert($(".uploadfile")[ii].files[0]);
		fd.append(obj.id,$(".uploadfile")[ii].files[0]);
	}
	fd.append('cat_type','visa');
	
		return $.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_Visa_Sec10",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is �error message�
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
		        		/*sec1submit();
		        		$("#addressnext").removeClass("displaynone");*/
					
					   if(sendvar=='visanext')
						{
		        			window.location =  "/eng/kyc/cdd/cdd-passport/";
						}
						else
						{
							return parsedjson;
						}
					
					
		        	}
				}
		});
	}
function IsValid_Ajax_Address_Sec11() 
{
	var strhdnprfresadd = $("#hdnprfresadd").val();
	var strhdndrpresaddrproof = $("#hdndrpresaddrproof").val();
	var strtxtdateresaddr = $("#txtdateresaddr").val();
	var strtxtcomments = $("#txtcomments").val();
	//alert(strtxtcomments);
	var fd = new FormData();
	fd.append('hdnprfresadd',strhdnprfresadd);
	fd.append('hdndrpresaddrproof',strhdndrpresaddrproof);
	fd.append('txtdateresaddr',strtxtdateresaddr);
	fd.append('txtcomments',strtxtcomments);
	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_Address_Sec11",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is �error message�
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
		        		//sec11submit();
		        		window.location = "/eng/kyc/cdd/cdd-passport/";
		        	}
				}
		});
	}
function IsValid_Ajax_Passport_Sec12(sendvar) 
{
	/*var strhdntxtpassphotopage = $("#hdntxtpassphotopage").val();
	var strhdntxtpassaddrpage = $("#hdntxtpassaddrpage").val();
	var strtxtpassnumr = $("#txtpassnumr").val();
	var strtxtpasselexpdate = $("#txtpasselexpdate").val();
	var strtxtcommentone = $("#txtcommentone").val();
	var strtxtcommenttwo = $("#txtcommenttwo").val();
	
	var fd = new FormData();
	fd.append('hdntxtpassphotopage',strhdntxtpassphotopage);
	fd.append('hdntxtpassaddrpage',strhdntxtpassaddrpage);
	fd.append('txtpassnumr',strtxtpassnumr);
	fd.append('txtpasselexpdate',strtxtpasselexpdate);
	fd.append('txtcommentone',strtxtcommentone);
	fd.append('txtcommenttwo',strtxtcommenttwo);*/
	
	
	var fd = new FormData();

	var uploadslenth =$('.uploadfile').length;
	var dataDEF = $("#section12").serializeArray();
	
	for (var j=0;j<dataDEF.length;j++)
	{
		fd.append(dataDEF[j].name,dataDEF[j].value);
	}
	
	for (var ii=0;ii<$('.uploadfile').length;ii++)
	{
		var obj = $(".uploadfile")[ii];
		fd.append(obj.id,$(".uploadfile")[ii].files[0]);
	}
	fd.append('cat_type','passport');
	
		return $.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_Passport_Sec12",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
		        		//sec12submit();
		        		
						if(product == "Individual")
						{
							//window.location = "/eng/kyc/cdd/cdd-address-individual/";
						   if(sendvar=='passportnext')
							{
								window.location =  "/eng/kyc/cdd/cdd-address-individual/";
							}
							else
							{
								return parsedjson;
							}
					
						}
						else 
						{
							
							if(sendvar=='passportnext')
							{
								window.location= "/eng/kyc/cdd/cdd-non-trade-license/";
							}
							else
							{
								return parsedjson;
							}
							
						}
					}
				}
		});
	}
function IsValid_Ajax_PhysicalAddressNonInd_Company_Sec13() 
{
	
	var strhdntxtcorporatename = $("#hdntxtcorporatename").val();
	var strincorporationdate = $("#incorporationdate").val();
	//var strtxttradelicenceno = $("#txttradelicenceno").val();
	var strtxtcountryofincorporation = $("#txtcountryofincorporation").val();
	var strtxtavgannualincome = $("#txtavgannualincome").val();
	var strtxtfundsource = $("#txtfundsource").val();
	
	var fd = new FormData();
	fd.append('hdntxtcorporatename',strhdntxtcorporatename);
	fd.append('incorporationdate',strincorporationdate);
	//fd.append('txttradelicenceno',strtxttradelicenceno);
	fd.append('txtcountryofincorporation',strtxtcountryofincorporation);
	fd.append('txtavgannualincome',strtxtavgannualincome);
	fd.append('txtfundsource',strtxtfundsource);
	//alert(strhdntxtcorporatename);
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_PhysicalAddressNonInd_Company_Sec13",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is �error message�
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
						uploadfile();
		        		sec13submit();
		        		$("#tradeback").removeClass("displaynone");
		        	}
				}
		});
	}
function IsValid_Ajax_PhysicalAddressNonInd_CompanyTL_Sec14(sendvar) 
{
	//alert('14')

	/*var strtxtdocumentcode = $("#txtdocumentcode").val();
	var strtxttradeliceno1 = $("#txttrdlicno").val();
	var strtxtplaceofissue = $("#txtplaceofissue").val();
	var strtxtcountryofissue = $("#txtcountryofissue").val();
	var strtxtissuedate = $("#txtissuedate").val();
	var strtxtexpirydate = $("#txttrdexpdate").val();
	
	
	var strhdntxtuploadfile_fr = $("#hdntxtuploadfile_trd").val();
	var strtxtcommentany = $("#txtcommentany_trd").val();
	


	
	var fd = new FormData();

	fd.append('txtdocumentcode',strtxtdocumentcode);
	fd.append('txttrdlicno',strtxttradeliceno1);
	fd.append('txtplaceofissue',strtxtplaceofissue);
	fd.append('txtcountryofissue',strtxtcountryofissue);
	fd.append('txtissuedate',strtxtissuedate);
	fd.append('txttrdexpdate',strtxtexpirydate);
	fd.append('hdntxtuploadfile_trd',strhdntxtuploadfile_fr);
	fd.append('txtcommentany_trd',strtxtcommentany);*/
	var fd = new FormData();

	var uploadslenth =$('.uploadfile').length;
	var dataDEF = $("#section13").serializeArray();
	//var dataDEF1 = $("#section14").serializeArray();
	var dataDEF2 = $("#section23").serializeArray();
	
	for (var j=0;j<dataDEF.length;j++)
	{
		fd.append(dataDEF[j].name,dataDEF[j].value);
	}
	
	//for (var k=0;k<dataDEF1.length;k++)
//	{
//		fd.append(dataDEF1[k].name,dataDEF1[k].value);
//	}
	
	for (var l=0;l<dataDEF2.length;l++)
	{
		fd.append(dataDEF2[l].name,dataDEF2[l].value);
	}
	
	for (var ii=0;ii<$('.uploadfile').length;ii++)
	{
		var obj = $(".uploadfile")[ii];
		fd.append(obj.id,$(".uploadfile")[ii].files[0]);
	}
	fd.append('cat_type','TradeLicence');
	
		return $.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_PhysicalAddressNonInd_CompanyTL_Sec14",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
					  if(sendvar=='tradelic')
					  {
						  window.location =  "/eng/kyc/cdd/cdd-non-memorandum/";
					  }
					  else
					  {
					  return parsedjson;
					  }		        		
					    //sec2submit()
		        		//sec14submit();
		        		//window.location = "/eng/kyc/cdd/cdd-non-memorandum/";
		        	}
				}
		});
	}
function IsValid_Ajax_PhysicalAddressNonInd_OPAddress_Sec15() 
{
	
	var strtxtaddresstype = $("#txtaddresstype").val();
	var strtxtaddressformat = $("#txtaddressformat").val();
	var strtxtbuildvillano = $("#txtbuildvillano").val();
	var strtxtstreetno = $("#txtstreetno").val();
	var strtxtstreetname = $("#txtstreetname").val();
	var strtxtlocalitycity = $("#txtlocalitycity").val();
	var strtxtsuburub = $("#txtsuburub").val();
	var strtxttown = $("#txttown").val();
	var strtxtemiratestate = $("#txtemiratestate").val();
	var strtxtcountry = $("#txtcountry").val();
	var strtxtaddrvalidfrom = $("#txtaddrvalidfrom").val();
	var strtxtpostalcode = $("#txtpostalcode").val();
	//alert(strtxtbuildvillano) ;
	//alert($("#txtaddressformat").val()) ;
	var fd = new FormData();
	fd.append('txtaddresstype',strtxtaddresstype);
	fd.append('txtaddressformat',strtxtaddressformat);
	fd.append('txtbuildvillano',strtxtbuildvillano);
	fd.append('txtstreetno',strtxtstreetno);
	fd.append('txtstreetname',strtxtstreetname);
	fd.append('txtlocalitycity',strtxtlocalitycity);
	fd.append('txtsuburub',strtxtsuburub);
	fd.append('txttown',strtxttown);
	fd.append('txtemiratestate',strtxtemiratestate);
	fd.append('txtcountry',strtxtcountry);
	fd.append('txtaddrvalidfrom',strtxtaddrvalidfrom);
	fd.append('txtpostalcode',strtxtpostalcode);
	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_PhysicalAddressNonInd_OPAddress_Sec15",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
						uploadfile();
		        		sec3submit();
		        		$("#nbdtfourback").removeClass("displaynone");
		        		$("#nbdtfournext").removeClass("displaynone");
		        		$("#crsfat_nxt").css("display","none");
		        		$("#crsfat_upd").css("display","block");
		        	}
				}
		});
	}

function IsValid_Ajax_PhysicalAddressNonInd_AddressProof_Sec16(sendvar) 
{
	
	/*var strhdnejari = $("#hdnejari").val();
	var strhdnnoutilitybill = $("#hdnnoutilitybill").val();
	var strhdnotherbankstatement = $("#hdnotherbankstatement").val();
	var strhdntxtuploadfile = $("#hdntxtuploadfile").val();*/
	//var strhdnejari = $("#drpaddressproof").val();
	var strhdntxtuploadfile = $("#hdntxtuploadfile2").val();
	var dataDEF = $("#section15,#section16").serializeArray();

	var fd = new FormData();
	
	//fd.append('drpaddressproof',strhdnejari);
/*	fd.append('hdnnoutilitybill',strhdnnoutilitybill);
	fd.append('hdnotherbankstatement',strhdnotherbankstatement);*/
	fd.append('hdntxtuploadfile2',strhdntxtuploadfile);
	
	
	for (var ii=0;ii<$('.uploadfile').length;ii++)
	{
		var obj = $(".uploadfile")[ii];
		fd.append(obj.id,$(".uploadfile")[ii].files[0]);
	}
	for (var j=0;j<dataDEF.length;j++)
	{
		fd.append(dataDEF[j].name,dataDEF[j].value);
	}
	fd.append('cat_type','ProofOfAddress');
	
		return $.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_PhysicalAddressNonInd_AddressProof_Sec16",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
		        		//sec16submit();
		        		//window.location = "/eng/kyc/cdd/cdd-fatca-individual/";
						if(sendvar=='nonaddnext')
						{
							window.location =  "/eng/kyc/cdd/cdd-fatca-individual/";
						}
						else
						{
						return parsedjson;
						}
		        	}
				}
		});
	}	
function IsValid_Ajax_PhysicalAddressInd_Sec17() 
{
	
	var strtxtbuildingname = $("#txtbuildingname").val();
	var strtxtflatunitnumber = $("#txtflatunitnumber").val();
	var strtxtareastreetname = $("#txtareastreetname").val();
	var strtxtmakaninumber = $("#txtmakaninumber").val();
	var strhdntxtnationality = $("#txtnationality").val();
	var strhdntxtemirates = $("#hdntxtemirates").val();
	var strtxtzipcode = $("#txtzipcode").val();
	var strhdnaddperformmailing = $("#hdnaddperformmailing").val();
	
	var fd = new FormData();
	fd.append('txtbuildingname',strtxtbuildingname);
	fd.append('txtflatunitnumber',strtxtflatunitnumber);
	fd.append('txtareastreetname',strtxtareastreetname);
	fd.append('txtmakaninumber',strtxtmakaninumber);
	fd.append('txtnationality',strhdntxtnationality);
	fd.append('hdntxtemirates',strhdntxtemirates);
	fd.append('txtzipcode',strtxtzipcode);
	fd.append('hdnaddperformmailing',strhdnaddperformmailing);
	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_PhysicalAddressInd_Sec17",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
		        		//sec1submit();
		        		$("#proofaddressback").removeClass("displaynone");
		        		$("#proofaddressnext").removeClass("displaynone");
		        		$("#crs_nxt").css("display","none");
		        		$("#crs_upd").css("display","block");
						sec17submit();
		        		
		        	}
				}
		});
	}
function IsValid_Ajax_PhysicalAddressIndProof_Sec18(sendvar) 
{

	//alert('16');
	/*var strhdnejari = $("#hdnejari").val();
	var strhdnnoutilitybill = $("#hdnnoutilitybill").val();
	var strhdnotherbankstatement = $("#hdnotherbankstatement").val();*/
	//var strhdnejari = $("#drpaddressproof").val();
	//var strhdntxtuploadfile = $("#hdntxtuploadfile").val();
	var dataDEF = $("#Section18,#Section17").serializeArray();


	var fd = new FormData();

	//fd.append('drpaddressproof',strhdnejari);
/*	fd.append('hdnnoutilitybill',strhdnnoutilitybill);
	fd.append('hdnotherbankstatement',strhdnotherbankstatement);*/
//	fd.append('hdntxtuploadfile',strhdntxtuploadfile);
	fd.append('txtuploadfile',$("#txtuploadfile")[0].files[0]);

	fd.append('cat_type','ProofOfAddress');
	
	
	$.each(dataDEF,function(key,input){
		fd.append(input.name,input.value);
	});
	
	
	
		return $.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_PhysicalAddressIndProof_Sec18",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
						//alert(sendvar);
		        		//window.location = "/eng/kyc/cdd/cdd-fatca-individual/";
		        		//sec18submit();
					  if(sendvar=='proofaddressnext')
					  {
						  window.location =  "/eng/kyc/cdd/cdd-fatca-individual/";
					  }
					  else
					  {
					  	return parsedjson;
					  }
		        	}
				}
		});
	}
function IsValid_Ajax_CRSFATCAInd_Sec19(sendvar) 
{
	
	//var strtaxresident = $("#taxresident").val();
//	var strhdncountryother = $("#hdncountryother").val();
//	var strtxtcrs1 = $("#txtnationality").val();
//	var strtxtprovidetin = $("#txtprovidetin").val();
//	var strhdntxtfatcaphotopage1 = $("#hdntxtfatcaphotopage1").val();
//	var strhdntxtcrsphotopage2 = $("#hdntxtcrsphotopage2").val();
//	var strtxtcommentbox2 = $("#txtcommentbox2").val();
//	var strtxtfatcaprovidetin = $("#txtfatcaprovidetin").val();
	//var strtxtfatcacomments = $("#txtfatcacomments").val();

	var fd = new FormData();
	//fd.append('taxresident',strtaxresident);
//	fd.append('hdncountryother',strhdncountryother);
//	if(strtaxresident == "Y")
//	{
//		fd.append('fatcatin',strtxtfatcaprovidetin);
//		//fd.append('fatcatreason',strtxtfatcacomments);
//		fd.append('cat_type','fatca');
//	}
//	
//	if(strhdncountryother == "Y") 
//	{
//		fd.append('txtnationality',strtxtcrs1);
//		fd.append('txtprovidetin',strtxtprovidetin);
//		fd.append('cat_type','crs');
//	}
//	fd.append('hdntxtfatcaphotopage1',strhdntxtfatcaphotopage1);
//	fd.append('hdntxtcrsphotopage2',strhdntxtcrsphotopage2);
//	fd.append('txtcommentbox2',strtxtcommentbox2);
	var dataDEF = $("#section19").serializeArray();

	for (var j=0;j<dataDEF.length;j++)
	{
		fd.append(dataDEF[j].name,dataDEF[j].value);
	}
	
	for (var ii=0;ii<$('.uploadfile').length;ii++)
	{
		var obj = $(".uploadfile")[ii];
		fd.append(obj.id,$(".uploadfile")[ii].files[0]);
	}
	
		return $.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_CRSFATCAInd_Sec19",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
						//alert(sendvar);
		        		//window.location = "#";
					  if(sendvar=='fatcanext')
					  {
						  window.location =  "/eng/kyc/cdd/kyc-review/";
					  }
					  else
					  {
					  	return parsedjson;
					  }
		        		//sec19submit();
		        	}
				}
		});
	}
function IsValid_Ajax_CRSFATCANonInd_Sec20() 
{
	
	var strtxtresident = $("#txtresident").val();
	var strhdnmultination = $("#hdnmultination").val();
	var strtxtprovidetin1 = $("#txtprovidetin1").val();
	var strhdntxtpassphotopage3 = $("#hdntxtpassphotopage3").val();
	var strhdntxtpassphotopage4 = $("#hdntxtpassphotopage4").val();
	var strtxtcrs2 = $("#txtcrs2").val();
	var strtxtcommentbox3 = $("#txtcommentbox3").val();

	var fd = new FormData();
	fd.append('txtresident',strtxtresident);
	fd.append('hdnmultination',strhdnmultination);
	fd.append('txtprovidetin1',strtxtprovidetin1);
	fd.append('hdntxtpassphotopage3',strhdntxtpassphotopage3);
	fd.append('hdntxtpassphotopage4',strhdntxtpassphotopage4);
	fd.append('txtcrs2',strtxtcrs2);
	fd.append('txtcommentbox3',strtxtcommentbox3);
	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_CRSFATCANonInd_Sec20",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
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
		        		sec20submit();
		        	}
				}
		});
	}

function IsValid_Ajax_Authentication_Sec21() 
{
//	$("#hdnterms").val($("#terms").val());
//	alert($("#terms").val());
	var strtxtdebitnum = $("#txtdebitnum").val();
	var strtxtaccountno = $("#txtaccountno").val();
	var strtxtcifno = $("#txtcifno").val();
	var strtxtcreditcard = $("#txtcreaditcardno").val();
	var strhdnterms = $("#hdnterms").val();
	var strcaptcha = $("#captcha").val();
	
	var fd = new FormData();
	fd.append('txtdebitnum',strtxtdebitnum);
	fd.append('txtaccountno',strtxtaccountno);
	fd.append('txtcifno',strtxtcifno);
	fd.append('txtcreaditcardno',strtxtcreditcard);
	fd.append('hdnterms',strhdnterms);
	fd.append('captcha',strcaptcha);
	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_Authentication_Sec21",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					
					try{			
							//Here parsejson             
							var parsedjson = $.parseJSON(response);
							var retFlag=false;
							//loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
						   if(parsedjson["errors"]==true)
						   {
								$('#twntyonenxt').html('Next');
								$('#twntyonenxt').prop("disabled", false); 
								$('#twntyonenxt').removeClass('section-loader');
		
							   $.each(parsedjson, function(i, item)
							   {
								if($( ".error_"+i).html() != item)
								{
									$( ".error_"+i).html("");
									$( ".error_"+i).append(item);
								}
								$( ".error_"+i).removeClass("errorlabel");
								$( ".error_"+i).addClass("error");
								$( ".error_"+i).show();
								}
								);
								$('#idRefresh').click();
						   }
							else
							{
								if (parsedjson["cust_type"]=='C')
								{
									var cif_val = parsedjson["CIFID"];
									timer1call();
									$(".corp_div").show();
									$("#corpResendOTP").addClass("displaynone");
									$("#timer1").removeClass("displaynone");
									$("#heading22a").hide();
									$(".otp_div").hide();
									$("#heading23").show();
									$("#collapse23").collapse("show");
									$("#collapse23").addClass("collapse in");
									$("#heading23").addClass("headermenu");
									$("#heading23a").removeClass("accodheader");
									$("#heading23").removeClass("accodheader");
									$("#heading23").removeClass("diableacc");
									$("#cifno1").val(cif_val);
									$("#twntyonenxt").addClass("displaynone");
								}
								else
								{
									
									$(".corp_div").hide();
									timercall();
									$('.otp_div').show();
									$("#ResendOTP").addClass("displaynone");
									$("#timer").removeClass("displaynone");
									//$("#collapse21").collapse("hide");	
									$("#collapse22").collapse("show"); 	
									$("#heading21").removeClass("subheadermenu");
									$("#heading21").addClass("headermenu");	
									$("#heading22").addClass("headermenu");
									$("#heading22a").removeClass("accodheader");
									$("#heading22").removeClass("accodheader");
									$("#heading22").removeClass("diableacc");
									$("#twntyonenxt").addClass("displaynone");
								}
							}
						}
						catch(e){
							$('#twntyonenxt').html('Next');
							$('#twntyonenxt').prop("disabled", false); 
							$('#twntyonenxt').removeClass('section-loader');
							
							alert('We are facing some technical issues now, please try again after some time.');
							return false;
						}
				}
				
				
		});
	}
	
function IsValid_Ajax_AuthenticationOTP_Sec22(){
	//var strcifno1 = $("#cifno1").val();
	//var strtxtformationdate = $("#txtformationdate").val();
	var strtxtformationdate = $("#txtCorpOTP").val();
	var strtxtOTP = $("#txtOTP").val();
	var strhdnUserType = $("#hdnUserType").val();
	
	var fd = new FormData();

	//fd.append('cifno1',strcifno1);
	fd.append('txtformationdate',strtxtformationdate);
	fd.append('txtOTP',strtxtOTP);
	fd.append('hdnUserType',strhdnUserType);
	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=CF_KYC_AuthenticationOTP_Sec22",
			type: "POST",
				data: fd,
		       	processData: false,
		        contentType: false,
				success: function(response)
				{
					//Here parsejson             
					var parsedjson = $.parseJSON(response);
					var retFlag=false;
			        //loop all keys and display the error messages dynamically.. here i is firstname,lastname etc and item is “error message”
			       if(parsedjson["errors"]==true)
				   {
					  $.each(parsedjson, function(i, item)
					   {
			            if($( ".error_"+i).html() != item){
			        		 $( ".error_"+i).html("");
			        		 $( ".error_"+i).append(item);
			        	}
			            $( ".error_"+i).removeClass("errorlabel");
			            $( ".error_"+i).addClass("error");
			            $( ".error_"+i).show();
			        	}
						);
		        	}
		        	else
		        	{
						if (parsedjson["cust_type"]=="R")
						
						{
							window.location.replace("/eng/kyc/cdd/cdd-dashboard/");
						}
						else
						{
		        		//sec12submit();
					window.location.replace("/eng/kyc/cdd/cdd-non-dashboard/");
						}
		        	}
				}
		});
	}
	
	$(document).on('click','.btAddmoreBack', function(){
		var strId=this.id.substr(11,1);
		if(strId == "")
		{
			window.location.href="/eng/kyc/cdd/cdd-individual/";
		}
		else if(strId == "1")
		{
			$('#collapse').addClass('in');
			$('#collapse'+ strId).removeClass('in');
		}
		else
		{
			$('#collapse' + (parseInt(strId)-1)).addClass('in');
			$('#collapse' + strId).removeClass('in');
		}
		});
		
		/*$(document).on('click','.btAddmoreNext', function(){
	
		//alert(this.id)
		var strId=this.id.substr(11,1);
		if(strId == "")
		{
			alert(strId);
			alert("0");
			//$("#collapse1").collapse("hide");
    		//$("#collapse").collapse("show");  
		}
		else if((parseInt(strId)+1) == strId)
		{
			alert("1");
			$('#collapse' + (parseInt(strId)+1)).addClass('in');
			$('#collapse' + strId).removeClass('in');
		}
		else
		{
			alert(strId);
			alert((parseInt(strId)+1));
			alert("2");
			//$('#collapse' + (parseInt(strId)+1)).addClass('in');
			//$('#collapse' + strId).removeClass('in');
		}
	});*/
		
	$(document).on('click','.btpassaddback', function(){
		
		var strId=this.id.substr(15,1);
		if(strId == "")
		{
			window.location.href="/eng/kyc/cdd/cdd-visa/";
		}
		else if(strId == "1")
		{
			$('#collapse').addClass('in');
			$('#collapse'+ strId).removeClass('in');
		}
		else
		{
			$('#collapse' + (parseInt(strId)-1)).addClass('in');
			$('#collapse' + strId).removeClass('in');
		}
		});
		
	$(document).on('click','.btvisaback', function(){
		
		
		var strId=this.id.substr(11,1);
		if(strId == "")
		{
			window.location.href="/eng/kyc/cdd/cdd-emiratesid/";
		}
		else if(strId == "1")
		{
			$('#collapse').addClass('in');
			$('#collapse'+ strId).removeClass('in');
		}
		else
		{
			$('#collapse' + (parseInt(strId)-1)).addClass('in');
			$('#collapse' + strId).removeClass('in');
		}
		});	
		
	$(document).on('click','.btproofback', function(){
	
		//alert(this.id)
		var strId=this.id.substr(11,1);
		if(strId == "")
		{
			$("#collapse1").collapse("hide");
    		$("#collapse").collapse("show");  
		}
		else if(strId == "1")
		{
			$('#collapse').addClass('in');
			$('#collapse'+ strId).removeClass('in');
		}
		else
		{
			$('#collapse' + (parseInt(strId)-1)).addClass('in');
			$('#collapse' + strId).removeClass('in');
		}
	});

$(document).on('click','.btproofaddmore_first', function()
{
	$('#proof_accor').css("display","block");
	$('.btproofaddmore_first').css("display","none");
	//$("#pass_nxt").css("display","none");
	//$("#pass_upd").css("display","block");
});		



// $(document).on('click','.btproofaddmore',function()
// {
	
// 	var strValue="";
// 	var strCount = "";
// 	if(document.getElementById("hdnDivCount1").value =="")
// 	{
// 		document.getElementById("hdnDivCount1").value =1;
// 	}
// 	else
// 	{
// 		document.getElementById("hdnDivCount1").value =parseInt(document.getElementById("hdnDivCount1").value) +1;
// 	}
	
// 	if(document.getElementById("hdnDivCount1").value == "1")
// 	{
// 		$('#divAddmoreProof').addClass("displaynone");
// 	}
// 	else
// 	{
// 		$('#divAddmoreProof' + parseInt(document.getElementById("hdnDivCount1").value-1)).addClass("displaynone");
// 	}		

// strValue = strValue + "<div class='card col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
// //strValue = strValue + "<form id='section" + document.getElementById("hdnDivCount1").value + "' name='section" + document.getElementById("hdnDivCount1").value + "' method='post' >";
// strValue = strValue + "<div class='card-header copyright-footer headermenu ' role='tab' id='heading" + document.getElementById("hdnDivCount1").value + "'>";
// strValue = strValue + "<a data-toggle='collapse' data-parent='#accordion' href='#collapse" + document.getElementById("hdnDivCount1").value + "' id='heading" + document.getElementById("hdnDivCount1").value + "' aria-expanded='true' aria-controls='collapse" + document.getElementById("hdnDivCount1").value + "' class='accordianheader'>";
// strValue = strValue + "UAE Address Proof " +  document.getElementById("hdnDivCount1").value;
// strValue = strValue + "</a>";							
// strValue = strValue + "</div>";

// strValue = strValue + "<div id='collapse" + document.getElementById("hdnDivCount1").value + "' class='collapse in' role='tabpanel' aria-labelledby='heading" + document.getElementById("hdnDivCount1").value + "'>";
// strValue = strValue + "<div class='card-block'>";

// strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6'>";
// strValue = strValue + "<label class='control-label active' for='resaddrproof" + document.getElementById("hdnDivCount1").value + "'>Select Type of Proof of Residence Address</label>";
// strValue = strValue + "<select name='drpresaddrproof" + document.getElementById("hdnDivCount1").value + "' id='drpresaddrproof" + document.getElementById("hdnDivCount1").value + "' class='form-control' data-style='form-control' data-toggle='tooltip' title='What is your resident type?'>";
// strValue = strValue + "<option class='bs-title-option' value=''>What is your resident type?</option>";
// strValue = strValue + "<option value='Owned'>Owned</option>";
// strValue = strValue + "<option value='Company Accommadation'>Company Accommadation</option>";
// strValue = strValue + "<option value='Rented'>Rented</option>";
// strValue = strValue + "<option value='Staying with Family'>Staying with Family</option>";
// strValue = strValue + "<option value='Shared Accommdation'>Shared Accommdation</option>";
//  strValue = strValue + "</select>";
// strValue = strValue + "<input type='hidden' name='hdndrpresaddrproof" + document.getElementById("hdnDivCount1").value + "' id='hdndrpresaddrproof" + document.getElementById("hdnDivCount1").value + "'/>";
// strValue = strValue + "<label class='errorlabel error_hdndrpresaddrproof" + document.getElementById("hdnDivCount1").value + "'></label>";
// strValue = strValue + "</div>";

// strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6' id='divdateresaddr'>";
// strValue = strValue + "<label class='control-label' for='txtdateresaddr'>Date of Proof of Residence Address</label><i class='fa fa-calendar dob_icon' id='datebefore'></i>";
// strValue = strValue + "<input type='text' class='form-control date datepickerbefore hasDatepicker' name='txtdateresaddr" + document.getElementById("hdnDivCount1").value + "' id='txtdateresaddr" + document.getElementById("hdnDivCount1").value + "' data-toggle='tooltip' title='Select Date of Proof of Residence' />";
// strValue = strValue + "<label class='errorlabel error_txtdateresaddr" + document.getElementById("hdnDivCount1").value + "'></label>";
// strValue = strValue + "</div>";

// strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 ' id='divprfresadd'>";
// strValue = strValue + "<div class='file-upload' >";
// strValue = strValue + "<div class='file-select' id='addproof'>";
// strValue = strValue + "<div class='file-select-button' id='fileName'>Address Proof</div>";
// strValue = strValue + "<div class='file-select-name' id='noFile" + document.getElementById("hdnDivCount1").value + "'>No file chosen...</div>";
// strValue = strValue + "<input type='file' name='txtprfresadd" + document.getElementById("hdnDivCount1").value + "' id='txtprfresadd" + document.getElementById("hdnDivCount1").value + "' />";
// strValue = strValue + "</div>";
// strValue = strValue + "</div>";
// strValue = strValue + "<input type='hidden' name='hdnprfresadd" + document.getElementById("hdnDivCount1").value + "' id='hdnprfresadd" + document.getElementById("hdnDivCount1").value + "'/>";
// strValue = strValue + "<label class='errorlabel error_hdnprfresadd" + document.getElementById("hdnDivCount1").value + "'></label>";
// strValue = strValue + "</div>";

// strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>";
// strValue = strValue + "<label class='control-label' for='txtcomments5'>Comments if any</label>";;
// strValue = strValue + "<textarea class='form-control' rows='3' id='txtcomments5" + document.getElementById("hdnDivCount1").value + "' name='txtcomments" + document.getElementById("hdnDivCount1").value + "'></textarea>";
// strValue = strValue + "<label class='errorlabel error_txtcomments5" + document.getElementById("hdnDivCount1").value + "'></label>";
// strValue = strValue + "</div>";
// strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4'></div>";
// strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4' id='divAddmoreProof" + document.getElementById("hdnDivCount1").value + "'>";
// strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn btproofaddmore' name='Addaddress" + document.getElementById("hdnDivCount1").value + "' id='Addaddress" + document.getElementById("hdnDivCount1").value + "'>Add More Proof Details</button>";
// strValue = strValue + "</div>";
// strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4'></div>";

// /*strValue = strValue + "<div class='col-md-12' id='add_multiple_address' style='display:none'>";
// strValue = strValue + "<table class='table table-striped table-bordered table-hover table-checkable order-column' id='check_rows_of_address'>";
// strValue = strValue + "<th>Residence Proof</th>";
// strValue = strValue + "<th>Date of Res Proof</th>";
// strValue = strValue + "<th>Action</th>";
// strValue = strValue + "<tbody class='add_more_address'>";
// strValue = strValue + "</tbody>";
// strValue = strValue + "</table>";
// strValue = strValue + "</div>";*/
// strValue = strValue + "<div class='form-group accordanimation'></div>";
// /*strValue = strValue + "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 buttongroup'>";
// strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'></div>";
// strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'>";
// strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn btproofback' name='addressback" + document.getElementById("hdnDivCount1").value + "' id='addressback" + document.getElementById("hdnDivCount1").value + "'>Back</button>";
// strValue = strValue + "</div>";
// strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'>";
// strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn ' name='addressnext" + document.getElementById("hdnDivCount1").value + "' id='addressnext" + document.getElementById("hdnDivCount1").value + "'>Next</button>";
// strValue = strValue + "</div>";
// strValue = strValue + "</div>";*/
// strValue = strValue + "</div>";
// strValue = strValue + "</div>";
// //strValue = strValue + "</form>";
// strValue = strValue + "</div>";
// document.getElementById("accordionProof").innerHTML = document.getElementById("accordionProof").innerHTML + strValue;


// 		});


/*$(document).on('click','.btvisaaddmore',function(){

	var strValue="";
	var strCount = "";
	if(document.getElementById("hdnDivCount").value =="")
	{
		document.getElementById("hdnDivCount").value =1;
	}
	else
	{
		document.getElementById("hdnDivCount").value =parseInt(document.getElementById("hdnDivCount").value) +1;
	}
	if(document.getElementById("hdnDivCount").value == "1")
	{
		$('#divvisaaddmore').addClass("displaynone");
	}
	else
	{
		$('#divvisaaddmore' + parseInt(document.getElementById("hdnDivCount").value-1)).addClass("displaynone");
	}
	
	//$('#divbtnvisaNext').addClass("displaynone");
	$('#divbtnvisaNext').remove();
	
		strValue = strValue + "<div class='card col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
		strValue = strValue + "<form id='section" + document.getElementById("hdnDivCount").value + "' name='section" + document.getElementById("hdnDivCount").value + "' method='post' >";
		strValue = strValue + "<a data-toggle='collapse' data-parent='#accordion' href='#collapse" + document.getElementById("hdnDivCount").value + "' aria-expanded='true' aria-controls='collapse" + document.getElementById("hdnDivCount").value + "' class='accordianheader'>";
		strValue = strValue + "<div class='card-header copyright-footer headermenu ' role='tab' id='heading" + document.getElementById("hdnDivCount").value + "'>";
		strValue = strValue + "Visa Details " + document.getElementById("hdnDivCount").value ;
		strValue = strValue + "</div>";
		strValue = strValue + "</a>";
		strValue = strValue + "<div id='collapse" + document.getElementById("hdnDivCount").value + "' class='collapse in' role='tabpanel' aria-labelledby='heading" + document.getElementById("hdnDivCount").value + "'>";
		strValue = strValue + "<div class='card-block'>";
		
		
		strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6' id='divuaeresvisano'>  ";
		strValue = strValue + "<label class='control-label' for='uaeresvisano'>Enter UAE Residence Visa Number</label>";
		strValue = strValue + "<input type='tel' class='form-control' name='txtuaeresvisano" + document.getElementById("hdnDivCount").value + "' id='txtuaeresvisano" + document.getElementById("hdnDivCount").value + "' data-toggle='tooltip' title='Enter your Visa Number'>";
		strValue = strValue + "<input type='hidden' name='visanum_val" + document.getElementById("hdnDivCount").value + "' id='visanum_val" + document.getElementById("hdnDivCount").value + "'/>";
		strValue = strValue + "<label class='errorlabel error_txtuaeresvisano" + document.getElementById("hdnDivCount").value + "'></label>";
		strValue = strValue + "</div>";
		strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6' id='divuaeresvisaexpdate'> "; 
		strValue = strValue + "<label class='control-label' for='txtuaeresvisaexpdate" + document.getElementById("hdnDivCount").value + "'>Select UAE Residence Visa Expiry Date</label><i class='fa fa-calendar dob_icon' id='date1'></i>";
		strValue = strValue + "<input type='text' class='form-control date datepicker1' name='txtuaeresvisaexpdate" + document.getElementById("hdnDivCount").value + "' id='txtuaeresvisaexpdate" + document.getElementById("hdnDivCount").value + "'  data-toggle='tooltip' title='Select your UAE Residence Visa Expiry Date'>";
		strValue = strValue + "<label class='errorlabel error_txtuaeresvisaexpdate" + document.getElementById("hdnDivCount").value + "'></label>";
		strValue = strValue + "</div>	";
		
		strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6' id='divuaeresvisa'>";
		strValue = strValue + "<div class='file-upload' >";
		strValue = strValue + "<div class='file-select' id='UAEVisa'>";
		strValue = strValue + "<div class='file-select-button' id='fileName'>UAE Residence Visa</div>";
		strValue = strValue + "<div class='file-select-name' id='noFile2" + document.getElementById("hdnDivCount").value + "'>Select the file to upload</div> ";
		strValue = strValue + "<input type='file' name='txtuaeresvisa" + document.getElementById("hdnDivCount").value + "' id='txtuaeresvisa" + document.getElementById("hdnDivCount").value + "' />";
		strValue = strValue + "</div>";
		strValue = strValue + "</div>";
		strValue = strValue + "<input type='hidden' name='hdnuaeresvisa" + document.getElementById("hdnDivCount").value + "' id='hdnuaeresvisa" + document.getElementById("hdnDivCount").value + "'/>";
		strValue = strValue + "<label class='errorlabel error_hdnuaeresvisa" + document.getElementById("hdnDivCount").value + "'></label>";
		strValue = strValue + "</div>";
		
		strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>";
		strValue = strValue + "<label class='control-label' for='txtcomments" + document.getElementById("hdnDivCount").value + "'>Comments if any</label>"; <!--  fa fa-check-->
		strValue = strValue + "<textarea class='form-control' rows='3' id='txtcomments" + document.getElementById("hdnDivCount").value + "' name='txtcomments" + document.getElementById("hdnDivCount").value + "'></textarea>";
		strValue = strValue + "<label class='errorlabel error_txtcomments" + document.getElementById("hdnDivCount").value + "'></label>";
		strValue = strValue + "</div>";
		strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4'></div>";
		strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4' id='divvisaaddmore" + document.getElementById("hdnDivCount").value + "'>";
		strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn btvisaaddmore' name='addvisa" + document.getElementById("hdnDivCount").value + "' id='addvisa" + document.getElementById("hdnDivCount").value + "'>Add More Visa details</button>";
		strValue = strValue + "</div>";
		strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4'></div>";
		
		strValue = strValue + "<div class='col-md-12' id='add_multiple_visa' style='display:none'>";
		strValue = strValue + "<table class='table table-striped table-bordered table-hover table-checkable order-column' id='check_rows_of_visa'>";
		strValue = strValue + "<th>Residence Visa Number</th>";
		strValue = strValue + "<th>Residence Visa Exp</th>";
		strValue = strValue + "<th>Action</th>";
		strValue = strValue + "<tbody class='add_more_visa'>";
		strValue = strValue + "</tbody>";
		strValue = strValue + "</table> ";
		strValue = strValue + "</div>";
		
		strValue = strValue + "<div class='form-group accordanimation'></div>";
		strValue = strValue + "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 buttongroup' id=divbtnvisaNext'>";
		strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'></div>";
		strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'>";
		strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn btvisaback' name='visatenback" + document.getElementById("hdnDivCount").value + "' id='visatenback" + document.getElementById("hdnDivCount").value + "'>Back</button>";
		strValue = strValue + "</div>";
		
		strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'>";
		strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn' name='visatennext' id='visatennext'>Next</button>";
		strValue = strValue + "</div>";
		strValue = strValue + "</div>";
		strValue = strValue + "</div>";
		strValue = strValue + "</div>";
		strValue = strValue + "</cfform> ";
		strValue = strValue + "</div>";
		document.getElementById("accordionVisa").innerHTML = document.getElementById("accordionVisa").innerHTML + strValue;
});*/




$(document).on('click','.btpassaddMore1',function()
{
	
	var strValue="";
	var strCount = "";
	if(document.getElementById("hdnDivCount").value =="")
	{
		document.getElementById("hdnDivCount").value =1;
	}
	else
	{
		document.getElementById("hdnDivCount").value =parseInt(document.getElementById("hdnDivCount").value) +1;
	}
	
	if(document.getElementById("hdnDivCount").value == "1")
	{
		$('#divaddPassMore').addClass("displaynone");
	}
	else
	{
		$('#divaddPassMore' + parseInt(document.getElementById("hdnDivCount").value-1)).addClass("displaynone");
	}
strValue = strValue + "<div class='card col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
strValue = strValue + "<form id='section" + document.getElementById("hdnDivCount").value + "' name='section" + document.getElementById("hdnDivCount").value + "' method='post'>";

strValue = strValue + "<div class='card-header copyright-footer subheadermenu headermenu diableacc defaultfont' role='tab' id='heading" + document.getElementById("hdnDivCount").value + "'>";
strValue = strValue + "<a data-toggle='collapse' data-parent='#accordion' href='#collapse" + document.getElementById("hdnDivCount").value + "' aria-expanded='false' aria-controls='collapse" + document.getElementById("hdnDivCount").value + "' class='accordianheader'>";
strValue = strValue + "Passport Details " + document.getElementById("hdnDivCount").value;
strValue = strValue + "</a>	";
strValue = strValue + "</div>";
strValue = strValue + "<div id='collapse" + document.getElementById("hdnDivCount").value + "' class='collapse in' role='tabpanel' aria-labelledby='heading" + document.getElementById("hdnDivCount").value + "'>";
strValue = strValue + "<div class='card-block'>";

strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>  ";
strValue = strValue + "<label class='control-label' for='txtpassnumr'>Passport Number</label>";
strValue = strValue + "<input type='tel' class='form-control' name='txtpassnumr" + document.getElementById("hdnDivCount").value + "' id='txtpassnumr" + document.getElementById("hdnDivCount").value + "' data-toggle='tooltip' title='Enter your Passport Number'>";
strValue = strValue + "<input type='hidden' name='passnumr_val" + document.getElementById("hdnDivCount").value + "' id='passnumr_val" + document.getElementById("hdnDivCount").value + "'/>";
strValue = strValue + "<label class='errorlabel error_txtpassnumr" + document.getElementById("hdnDivCount").value + "'></label>";
strValue = strValue + "</div>";

strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>  ";
strValue = strValue + "<label class='control-label' for='txtpasselexpdate'>Passport Expiry Date</label><i class='fa fa-calendar dob_icon' id='datebefore'></i>";
strValue = strValue + "<input type='text' class='form-control date datepicker1' name='txtpasselexpdate" + document.getElementById("hdnDivCount").value + "' id='txtpasselexpdate" + document.getElementById("hdnDivCount").value + "'  data-toggle='tooltip' title='Select your Passport Expiry Date'>";
strValue = strValue + "<label class='errorlabel error_txtpasselexpdate" + document.getElementById("hdnDivCount").value + "'></label>";
strValue = strValue + "</div>";

strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 ' id='divpassphotopage'>";
strValue = strValue + "<div class='file-upload'>";
strValue = strValue + "<div class='file-select' id='passportfront'>";
strValue = strValue + "<div class='file-select-button' id='fileName" + document.getElementById("hdnDivCount").value + "'>Passport Front</div>";
strValue = strValue + "<div class='file-select-name' id='noFile4'>Select the file to upload</div> ";
strValue = strValue + "<input type='file' name='txtpassphotopage" + document.getElementById("hdnDivCount").value + "' id='txtpassphotopage" + document.getElementById("hdnDivCount").value + "'>";
strValue = strValue + "</div>";
strValue = strValue + "</div>";
strValue = strValue + "<input type='hidden' name='hdntxtpassphotopage" + document.getElementById("hdnDivCount").value + "' id='hdntxtpassphotopage" + document.getElementById("hdnDivCount").value + "'/>";
strValue = strValue + "<label class='errorlabel error_hdntxtpassphotopage" + document.getElementById("hdnDivCount").value + "'></label>";
strValue = strValue + "</div>";

strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 ' id='divpassaddrpage" + document.getElementById("hdnDivCount").value + "'>";
strValue = strValue + "<div class='file-upload'>";
strValue = strValue + "<div class='file-select' id='passportback'>";
strValue = strValue + "<div class='file-select-button' id='fileName" + document.getElementById("hdnDivCount").value + "'>Passport Back</div>";
strValue = strValue + "<div class='file-select-name' id='noFile5" + document.getElementById("hdnDivCount").value + "'>Select the file to upload</div> ";
strValue = strValue + "<input type='file' name='txtpassaddrpage" + document.getElementById("hdnDivCount").value + "' id='txtpassaddrpage" + document.getElementById("hdnDivCount").value + "'>";
strValue = strValue + "</div>";
strValue = strValue + "</div>";
strValue = strValue + "<input type='hidden' name='hdntxtpassaddrpage" + document.getElementById("hdnDivCount").value + "' id='hdntxtpassaddrpage" + document.getElementById("hdnDivCount").value + "'/>";
strValue = strValue + "<label class='errorlabel error_hdntxtpassaddrpage" + document.getElementById("hdnDivCount").value + "'></label>";
strValue = strValue + "</div>";




strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>";
strValue = strValue + "<label class='control-label' for='txtcommentone" + document.getElementById("hdnDivCount").value + "'>Comments if any</label>";
strValue = strValue + "<textarea class='form-control' rows='3' id='txtcommentone" + document.getElementById("hdnDivCount").value + "' name='txtcommentone" + document.getElementById("hdnDivCount").value + "'></textarea>";
strValue = strValue + "<label class='errorlabel error_txtcommentone" + document.getElementById("hdnDivCount").value + "'></label>";
strValue = strValue + "</div>";
strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>";
strValue = strValue + "<label class='control-label' for='txtcommenttwo" + document.getElementById("hdnDivCount").value + "'>Comments if any</label>"; 
strValue = strValue + "<textarea class='form-control' rows='3' id='txtcommenttwo" + document.getElementById("hdnDivCount").value + "' name='txtcommenttwo" + document.getElementById("hdnDivCount").value + "'></textarea>";
strValue = strValue + "<label class='errorlabel error_txtcommenttwo" + document.getElementById("hdnDivCount").value + "'></label>";
strValue = strValue + "</div>";

strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4'></div>";
strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4' id='divaddPassMore" + document.getElementById("hdnDivCount").value + "'>";
strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn btpassaddMore' name='passportaddmore" + document.getElementById("hdnDivCount").value + "' id='passportaddmore" + document.getElementById("hdnDivCount").value + "'>Add More Passport</button>";
strValue = strValue + "</div>";
strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4'></div>";

strValue = strValue + "<div class='col-md-12' id='add_multiple_passport' style='display:none'>";
strValue = strValue + "<table class='table table-striped table-bordered table-hover table-checkable order-column' id='check_rows_of_passport'>";
strValue = strValue + "<th>Passport Number</th>";
strValue = strValue + "<th>Passport Expiry</th>";
strValue = strValue + "<th>Action</th>";
strValue = strValue + "<tbody class='add_more_passport'>";
strValue = strValue + "</tbody>";
strValue = strValue + "</table> ";
strValue = strValue + "</div>";
strValue = strValue + " <div class='form-group accordanimation'></div>";
/*strValue = strValue + "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 buttongroup'>";
strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'></div>";
strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'>";
strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn btpassaddback' name='passporteleback" + document.getElementById("hdnDivCount").value + "' id='passporteleback" + document.getElementById("hdnDivCount").value + "'>Back</button>";
strValue = strValue + "</div>";

strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'>";
strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn ' name='passportelenext" + document.getElementById("hdnDivCount").value + "' id='passportelenext" + document.getElementById("hdnDivCount").value + "'>Next</button>";
strValue = strValue + "</div>";
strValue = strValue + "</div>";*/
strValue = strValue + "</div>";
strValue = strValue + "</div>";
strValue = strValue + "</form> ";
strValue = strValue + "</div>";
document.getElementById("accordionPassport").innerHTML = document.getElementById("accordionPassport").innerHTML + strValue;
});

/*$(document).on('click','.btEidaaddMore_first', function()
{
	$('#eida_accor').css("display","block");
	$('.btEidaaddMore_first').css("display","none");
	$("#visa_nxt").css("display","none");
	$("#visa_upd").css("display","block");
});*/

/*$(document).on('click','.btaddMore', function()
{
	var strValue="";
	var strCount = "";
	if(document.getElementById("hdnDivCount").value =="")
	{
		document.getElementById("hdnDivCount").value =1;
	}
	else
	{
		document.getElementById("hdnDivCount").value =parseInt(document.getElementById("hdnDivCount").value) +1;
	}
	
	if(document.getElementById("hdnDivCount").value == "1")
	{
		$('#divbtnemiaddmore').addClass("displaynone");
	}
	else
	{
		$('#divbtnemiaddmore' + parseInt(document.getElementById("hdnDivCount").value-1)).addClass("displaynone");
	}
	
	//document.getElementById(this.id).style.display="none";
	
	strValue = strValue + "<div class='card col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
	//strValue = strValue + "<form id='section" + document.getElementById("hdnDivCount").value + "' name='section" + document.getElementById("hdnDivCount").value + "' method='post' >";
	strValue = strValue + "<a data-toggle='collapse' data-parent='#accordion' href='#collapse" + document.getElementById("hdnDivCount").value + "' aria-expanded='true' aria-controls='collapse" + document.getElementById("hdnDivCount").value + "' class='accordianheader'>";
	strValue = strValue + "<div class='card-header copyright-footer subheadermenu  headermenu diableacc header_border' href='#collapse" + document.getElementById("hdnDivCount").value + " ''role='tab' id='heading" + document.getElementById("hdnDivCount").value + "'>";
	strValue = strValue + "  Emirates ID Details " + document.getElementById("hdnDivCount").value;
	strValue = strValue + "<i class='pull-right fa fa-remove remove_emirates'> </i> </div>";
	strValue = strValue + "</a>";
	
	strValue = strValue + "<div id='collapse" + document.getElementById("hdnDivCount").value + "' class='collapse in' role='tabpanel' aria-labelledby='heading" + document.getElementById("hdnDivCount").value + "'>";
	strValue = strValue + "<div class='card-block'>";
	
	strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>  ";
	strValue = strValue + "<label class='control-label' for='txtemidno" + document.getElementById("hdnDivCount").value + "'>Emirates ID Number</label>";
	strValue = strValue + "<input type='text' class='form-control' name='txtemidno" + document.getElementById("hdnDivCount").value + "' id='txtemidno" + document.getElementById("hdnDivCount").value + "' data-toggle='tooltip' title='What is you Emirates ID Number?'>";
	strValue = strValue + "<input type='hidden' name='hdnemidno" + document.getElementById("hdnDivCount").value + "' id='hdnemidno" + document.getElementById("hdnDivCount").value + "'/>";
	strValue = strValue + "<label class='errorlabel error_txtemidno" + document.getElementById("hdnDivCount").value + "'></label>";
	strValue = strValue + "</div>";						
	strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6' id='divpassportvalue'>";
	strValue = strValue + "<label class='control-label' for='txtpassexpdate" + document.getElementById("hdnDivCount").value + "' >Emirates ID Expiry Date</label>";
	strValue = strValue + "<input type='text' class='form-control date datepicker4' name='txtpassexpdate" + document.getElementById("hdnDivCount").value + "' id='txtpassexpdate" + document.getElementById("hdnDivCount").value + "' data-toggle='tooltip' title='Select  Expiriy date' />";
	strValue = strValue + "<label class='errorlabel error_txtpassexpdate" + document.getElementById("hdnDivCount").value + "' ></label>";
	strValue = strValue + "</div>";
	
	strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6' id='divfrimgeid'>";
	strValue = strValue + "<div class='file-upload' >";
	strValue = strValue + "<div class='file-select' id='EIDFront" + document.getElementById("hdnDivCount").value + "'>";
	strValue = strValue + "<div class='file-select-button' id='fileName'>Emirates ID Front</div>";
	strValue = strValue + "<div class='file-select-name' id='noFiletxtuploadfile_fr" + document.getElementById("hdnDivCount").value + "'>Select the file to upload</div> ";
	strValue = strValue + "<input type='file' title='Select the file to upload' class='uploadfile' name='txtuploadfile_fr" + document.getElementById("hdnDivCount").value + "' id='txtuploadfile_fr" + document.getElementById("hdnDivCount").value + "' />";
	strValue = strValue + "</div>";
	strValue = strValue + "</div>";
	strValue = strValue + "<input type='hidden' name='hdntxtuploadfile_fr" + document.getElementById("hdnDivCount").value + "' id='hdntxtuploadfile_fr" + document.getElementById("hdnDivCount").value + "'/>";
	strValue = strValue + "<label class='errorlabel error_hdntxtuploadfile_fr" + document.getElementById("hdnDivCount").value + "'></label>";
	strValue = strValue + "</div>";
	strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6' id='divbkimgeid'>";
	strValue = strValue + "<div class='file-upload'>";
	strValue = strValue + "<div class='file-select' id='EIDBack" + document.getElementById("hdnDivCount").value + "'>";
	strValue = strValue + "<div class='file-select-button' id='fileName'>Emirates ID Back</div>";
	strValue = strValue + "<div class='file-select-name' id='noFiletxtuploadfile_bk" + document.getElementById("hdnDivCount").value + "'>Select the file to upload</div> ";
	strValue = strValue + "<input type='file' class='uploadfile' name='txtuploadfile_bk" + document.getElementById("hdnDivCount").value + "' id='txtuploadfile_bk" + document.getElementById("hdnDivCount").value + "'>";
	strValue = strValue + "</div>";
	strValue = strValue + "</div>";
	strValue = strValue + "<input type='hidden' name='hdntxtuploadfile_bk" + document.getElementById("hdnDivCount").value + "' id='hdntxtuploadfile_bk" + document.getElementById("hdnDivCount").value + "'/>";
	strValue = strValue + "<label class='errorlabel error_hdntxtuploadfile_bk'></label>";
	strValue = strValue + "</div>";
	
	strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>";
	strValue = strValue + "<label class='control-label' for='txtcommentany8" + document.getElementById("hdnDivCount").value + "'>Comments if any</label>"; 
	strValue = strValue + "<textarea class='form-control' rows='3' id='txtcommentany8" + document.getElementById("hdnDivCount").value + "'></textarea>";
	strValue = strValue + "<label class='errorlabel error_txtcommentany'></label>";
	strValue = strValue + "</div>";
	
	strValue = strValue + "<div class='form-group md-grp col-lg-6 col-md-6 col-sm-6 '>";
	strValue = strValue + "<label class='control-label' for='txtcommentany5" + document.getElementById("hdnDivCount").value + "'>Comments if any</label>"; 
	strValue = strValue + "<textarea class='form-control' rows='3' id='txtcommentany5" + document.getElementById("hdnDivCount").value + "'></textarea>";
	strValue = strValue + "<label class='errorlabel error_commentany'></label>";
	strValue = strValue + "</div>";
	

	
	strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4'>";
	strValue = strValue + "</div>";
									
	strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4' id='divbtnemiaddmore" + document.getElementById("hdnDivCount").value + "'>";
	strValue = strValue + "<button type='button' class='btaddMore btn btn-block btn-info btn-xs accordbtn' name='emiratesaddmore" + document.getElementById("hdnDivCount").value + "' id='emiratesaddmore" + document.getElementById("hdnDivCount").value + "'>Add More Emirates Id</button>";
	strValue = strValue + "</div>";
	
	strValue = strValue + "<div class='col-lg-4 col-md-4 col-sm-4'>";
	strValue = strValue + "</div>";
									
	strValue = strValue + "<div class='form-group accordanimation'></div>";
	//strValue = strValue + "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 buttongroup'>";
	//strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'></div>";
	//strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'>";
	//strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn btAddmoreBack' name='eminineback" + document.getElementById("hdnDivCount").value + "' id='eminineback" + document.getElementById("hdnDivCount").value + "'>Back</button>";
	//strValue = strValue + "</div>";
	
	//strValue = strValue + "<div class='col-lg-3 col-md-3 col-sm-3'>";
	//strValue = strValue + "<button type='button' class='btn btn-block btn-info btn-xs accordbtn btAddmoreNext' name='emininenext" + document.getElementById("hdnDivCount").value + "' id='emininenext" + document.getElementById("hdnDivCount").value + "'>Next</button>";
	//strValue = strValue + "</div>";
	//strValue = strValue + "</div>";
	strValue = strValue + "</div>";
	strValue = strValue + "</div>";
	//strValue = strValue + "</form> ";
	strValue = strValue + "</div>";
	document.getElementById("accordionEida").innerHTML = document.getElementById("accordionEida").innerHTML + strValue;
	
	});*/
	
	
/* Add More Button without form*/
/* Begins*/
$(document).on('click','.bttradeaddMore_first', function(){

	$('#trede_accor').css("display","block");
	$('.bttradeaddMore_first').css("display","none");
	$('#trademore_accor').css("display","block");
	$("#incorp_nxt").css("display","none");
	$("#incorp_upd").css("display","block");
	uploadfile();
});



/****KEY PRESS****/

/*Authondication page numerics only */

//$('#txtdebitnum').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtaccountno').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtcreaditcardno').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//$('#txtcifno').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});

/*Nonidividual under Financial Background */

$('#txtrelationshipvalueconstit1').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});

$('#txttotalestimatedwealth').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});

$('#txtnoofofficewebsite').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});

$('#txtestimatenetprofit').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});
$('#txttotalestimatedwealth').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});


$('.ui-autocomplete').on('keypress',function(e){
	alert(e.which)
});
/*Visa under number validation applied*/

$('#txtuaeresvisano').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});

/*Passport under number validation applied*/
/*
$('#txtpassnumr').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});
*/

/*Address- individual part under number validation applied*/

$('#txtmakaninumber').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});
$('#txtzipcode').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});


/*Non individual Monthly Transaction Pattern (AED) Number validation*/


//$('#txtmnth1').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//
//$('#txtfrequen1').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//$('#txtmnth2').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//$('#txtfrequen2').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//$('#txtmnth3').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//$('#txtfrequen3').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//$('#txtmnth4').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//$('#txtfrequen4').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
//$('#txtmnth5').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtfrequen5').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtmnth8').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtfrequen8').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtmnth7').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtfrequen7').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
$(".allownumericwithoutdecimal").on("keypress keyup blur",function (key) {    
           $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((key.which < 48 || key.which > 57)) {
                key.preventDefault();
            }
        });

//$('.allowletteronly').keydown(function (key) {
//          if (key.shiftKey || key.ctrlKey || key.altKey) {
//              key.preventDefault();
//          } else {
//              var key = key.keyCode;
//              if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
//                  key.preventDefault();
//              }
//          }
//      });
	  
$(".allowletteronly").keypress(function(event){
        var inputValue = event.charCode;
        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)){
            event.preventDefault();
        }
    });	  


//$('#txtmnth6').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtfrequen6').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});

/* FATCA && CRS Details */
//$('#txtprovidetin').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//
///*Employment and Income Details Details */
//
//$('.numberOnly').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtsalrayaccenbd').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txtannualincome').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});

//$('#txtmonthlyincome').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});

//$('#txtpropertyinverstment').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});

//$('#txtotherincome').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});

//$('#txtlengthservice').keypress(function (key) {
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});

/*Please provide your company information */

//$('#txttradelicenceno').keypress(function (key) 
//{
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});

/*Non Individual address! Please provide following details*/

//$('#txtavgannualincome').keypress(function (key) 
//{
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
//$('#txttradeliceno1').keypress(function (key) 
//{
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});
$('#txtpostalcode').keypress(function (key) 
{
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});


$('#txtpostalcode').keypress(function (key) 
{
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});

$('.chSpaceonly').keypress(function (key) {
        var regex = /^[a-zA-Z ]*$/;
        var str = String.fromCharCode(!key.charCode ? key.which : key.charCode);
        if (regex.test(str)) {
            return true;
        }
        else
        {
        //key.preventDefault();
        //alert('Please Enter Alphabate');
        return false;
        }
    });

/*Trade License*/
//$('#txttrdlicno').keypress(function (key) 
//{
//    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
//    else return false;
//});


/* Custom JS/jQuery */

$(document).ready(function() {	

$(document).on('click','#divbtnemiaddmore_fr', function(e) {
	$('#emininenext').html('Update &amp; Proceed');
});

var emiId = 0;

$(".datepicker3").datepicker({
onSelect:function(){
$(this).change();
}
});

$(document).on('click','#emiratesaddmore_first', function(e)
{
	$(".datepicker3").datepicker('destroy');
	reload_remove_emi_section(emiId)
	var newEmiratesRow = "";
	var newRow = "";

	emiId = $('[id^=eida_accor]');
	emiId = emiId.length;
	if(emiId == "0")
	{
		emiId="";
	}

	newEmiratesRow += '<input type="hidden" name="hdnDivCount' + emiId + '" id="hdnDivCount' + emiId + '" value="" />';
	newEmiratesRow += '<div class="card col-lg-12 col-md-12 col-sm-12 col-xs-12" id="eida_accor' + emiId + '" style="display:block;">';
		newEmiratesRow += '<div class="card-header copyright-footer subheadermenu  headermenu disableacc defaultfont header_border" role="tab" id="heading' + emiId + '">';
	newEmiratesRow += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + emiId + '" aria-expanded="true" aria-controls="collapse" class="accordianheader">';

	newEmiratesRow += 'Emirates ID Details ' + emiId + ' <i class="pull-right fa fa-remove remove_emirates"> </i>';

	newEmiratesRow += '</a>';
		newEmiratesRow += '</div> ';
	newEmiratesRow += '<div id="collapse' + emiId + '" class="collapse in" role="tabpanel" aria-labelledby="heading' + emiId + '">';
	newEmiratesRow += '<div class="card-block">';
	newEmiratesRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 "> ';
	newEmiratesRow += '<label class="control-label" for="txtemidno'+ emiId + '">Emirates ID Number</label>';
	newEmiratesRow += '<input type="text" class="form-control emidmask" name="txtemidno'+ emiId + '" id="txtemidno'+ emiId + '" data-toggle="tooltip" title="What is you Emirates ID Number?">';
	newEmiratesRow += '<input type="hidden" name="hdnemidno'+ emiId + '" id="hdnemidno'+ emiId + '"/>';
	newEmiratesRow += '<label class="errorlabel error_txtemidno'+ emiId + '"></label>';
	newEmiratesRow += '</div> ';
	newEmiratesRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divpassportvalue'+ emiId + '">';
	newEmiratesRow += '<label class="control-label" for="txtpassexpdate'+ emiId + '">Emirates ID Expiry Date</label><i class="fa fa-calendar dob_icon" id="date' + emiId + '"></i>';
	newEmiratesRow += '<input type="text" class="form-control date datepicker_eida" name="txtpassexpdate'+ emiId + '" id="txtpassexpdate'+ emiId + '" data-toggle="tooltip" title="Select the expiry date" />';
	newEmiratesRow += '<label class="errorlabel error_txtpassexpdate' + emiId + '"></label>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divfrimgeid' + emiId + '">';
	newEmiratesRow += '<div class="file-upload" >';
	newEmiratesRow += '<div class="file-select" id="EIDFront">';
	newEmiratesRow += '<div class="file-select-button" id="fileNametxtuploadfile_fr' + emiId + '">Emirates ID Front</div>';
	newEmiratesRow += '<div class="file-select-name" id="noFiletxtuploadfile_fr' + emiId + '">Select the file to upload</div> ';
	newEmiratesRow += '<input type="file" title="Select the file to upload"  class="uploadfile" name="txtuploadfile_fr' + emiId + '" id="txtuploadfile_fr' + emiId + '" />';
	newEmiratesRow += '</div>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '<input type="hidden" name="hdntxtuploadfile_fr' + emiId + '" id="hdntxtuploadfile_fr' + emiId + '"/>';
	newEmiratesRow += '<label class="errorlabel error_hdntxtuploadfile_fr' + emiId + '"></label>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divbkimgeid' + emiId + '">';
	newEmiratesRow += '<div class="file-upload">';
	newEmiratesRow += '<div class="file-select" id="EIDBack">';
	newEmiratesRow += '<div class="file-select-button" id="fileNametxtuploadfile_bk' + emiId + '">Emirates ID Back</div>';
	newEmiratesRow += '<div class="file-select-name" id="noFiletxtuploadfile_bk' + emiId + '">Select the file to upload</div> ';
	newEmiratesRow += '<input type="file" class="uploadfile" accept=".jpg,.jpeg,.pdf" title="Select the file to upload" name="txtuploadfile_bk' + emiId + '" id="txtuploadfile_bk' + emiId + '">';
	newEmiratesRow += '</div>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '<input type="hidden" name="hdntxtuploadfile_bk' + emiId + '" id="hdntxtuploadfile_bk' + emiId + '"/>';
	newEmiratesRow += '<label class="errorlabel error_hdntxtuploadfile_bk' + emiId + '"></label>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
	newEmiratesRow += '<label class="control-label" for="txtcommentany">Comments if any</label>';
	newEmiratesRow += '<textarea class="form-control" rows="3" name="txtcommentany' + emiId + '" id="txtcommentany' + emiId + '"></textarea>';
	newEmiratesRow += '<label class="errorlabel error_txtcommentany' + emiId + '"></label>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
	newEmiratesRow += '<label class="control-label" for="txtcomment2any' + emiId + '">Comments if any</label>';
	newEmiratesRow += '<textarea class="form-control" rows="3" name="txtcomment2any' + emiId + '" id="txtcomment2any' + emiId + '"></textarea>';
	newEmiratesRow += '<label class="errorlabel error_commentany_' + emiId + '"></label>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '<div class="form-group accordanimation"></div>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '</div>';
	newEmiratesRow += '</div>';
	$("#TOTALFIELDS").val(emiId);
	$('#clearfix').before(newEmiratesRow);
	// newRow = $('#forclone').clone();
	
		// newRow.appendTo('#clearfix');
		uploadfile();
	
	$(".uploadfile").change( function() { 
		if($(this.id).val() !="")
		{
			//alert($("#"+ this.id).val());
			$("#hdn"+this.id).val($("#"+ this.id).val());
		}
	  	else
	  	{
	  		$("#hdn"+this.id).val("");
	  	}
	});
	
	$('body').on('focus',".datepicker3", function(){
      if( $(this).hasClass('hasDatepicker') == false )  {
        $(this).datepicker({ showButtonPanel: true, changeMonth: true, changeYear: true, showOn: 'focus' }).focus();
  	  }
  	});


		
	//reload_date(emiId);
	reload_emino(emiId);
	reload_remove_emirates(emiId);
	reload_fr_file(emiId);
	reload_bk_file(emiId);
	
   /*$('#txtpassexpdate').each(function(i) {
        var newID = 'txtpassexpdate_' + emiId;
        $(this).attr('id', newID);
    });

   $('#txtemidno').each(function(i) {
        var newID = 'txtemidno' + emiId;
        $(this).attr('id', newID);

    });*/
	$('.remove_emirates').click(function() 
	{
		$(this).parent().parent().remove();
	});

});
	
});

	$('.first_remove_emirates').click(function() 
	{
		//$(this).parent().parent().parent().remove();
		// Remove EVP
		var get_bid=$(this).attr("id");
					$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_EVP",
				type: "POST",
				data: 'id='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
					  var con = true; // confirm("Do you want to remove it ?");
					  if(con)
					  {
						  //$(this).parent().parent().remove();
					  }
					}
				}
	});
						$(this).parent().parent().parent().remove();

		//$('#emininenext').html('Visa &gt; &gt;');
	});





function reload_remove_emi_section(emiId) {
	$('.remove_emirates').click(function() {
		emiId = emiId - 1;
		$(this).parent().parent().remove();
	});
}

function reload_date(emiId) {
	$('[id=txtpassexpdate'+ emiId+']').mouseover(function(){
	// $('.datepicker3').click(function(){
		////$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtpassexpdate]').click(function(){
	// $('.datepicker3').click(function(){
		////$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
	
	$('[id=txtpassexpdate]').mouseover(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtpassexpdate'+ emiId+']').click(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtpassexpdate'+ emiId+']').focus(function(){
	// $('.datepicker3').focus(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
}



function reload_emino(emiId) {
	$('[id=txtemidno'+ emiId+']').mouseover(function() {
		$(this).mask("784-9999-9999999-9");
	});

	$('[id=txtemidno'+ emiId+']').click(function() {
		$(this).mask("784-9999-9999999-9");
	});
	
	$('[id=txtemidno'+ emiId+']').focus(function() {
		$(this).mask("784-9999-9999999-9");
	});
}

function reload_remove_emirates(emiId) {
	$('.remove_emirates').click(function() {
		var eida = $(this).closest('[id^=eida_accor]').remove();
		console.log(eida)
	});
}


function reload_fr_file(emiId) {
	$('[id^=txtuploadfile_fr]').change(function(e) {
		console.log(e)
		var input = $(this);
		$(this).prev().html(input[0].files[0].name);
	});
}


function reload_bk_file(emiId) {
	$('[id^=txtuploadfile_bk]').change(function(e) {
		console.log(e)
		var input = $(this);
		$(this).prev().html(input[0].files[0].name);
		// $('[id=noFiletxtuploadfile_bk'+ emiId+']').html(input[0].files[0].name);
	});
}

function reload_crs(crsnatId) {
	$('[id=txtprovidetin'+ crsnatId+']').mouseover(function() {
		$(this).mask("999-99-9999");
	});

	$('[id=txtprovidetin'+ crsnatId+']').click(function() {
		$(this).mask("999-99-9999");
	});
	
	$('[id=txtprovidetin'+ crsnatId+']').focus(function() {
		$(this).mask("999-99-9999");
	});
}

/* Visa Add more Functionality */

$(document).ready(function() {
	$('#addvisa').on('click', function()
	{
		//alert('adskjfqpoewir')
		$(this).css('display', 'none');
		$('#visa_accor').css('display', 'block');
		$("#pass_nxt").css("display","none");
		$("#pass_upd").css("display","block");
		$('#proof_accor').css('display', 'block');
		$('#divbtnvisaNext').css('display', 'block');
		$('#visatenback').css('display', 'block');
		$('#divvisaaddmore_first').show();
		uploadfile();
	});
});


/* #Visa Add more Functionality */

$(document).ready(function() {	

$(document).on('click','.btvisaaddmore_first', function()
{
	//$('#visa_accor').css("display","block");
	// $('.btvisaaddmore_first').css("display","none");
	//$("#pass_nxt").css("display","none");
	//$("#pass_upd").css("display","block");
	//$(".datepicker3").datepicker('destroy');
	var newvisaRow = "";
	visaId = $('[id^=visa_accor]');
	visaId = visaId.length;
	//alert(visaId)
	if(visaId == "0")
	{
		visaId ="";
	}
	newvisaRow += '<input type="hidden" name="hdnDivCount' + visaId + '" id="hdnDivCount' + visaId + '" value="" />';
	newvisaRow += '<div class="card col-lg-12 col-md-12 col-sm-12 col-xs-12" id="visa_accor' + visaId + '" style="display:block;">';
	newvisaRow += '<div class="card-header copyright-footer subheadermenu  headermenu disableacc defaultfont" role="tab" id="heading' + visaId + '">Visa Details ' + visaId + '<i class="pull-right fa fa-remove remove_visa"> </i>';
	newvisaRow += '<a data-toggle="collapse" data-parent="#accordion' + visaId + '" href="#collapse' + visaId + '" aria-expanded="true" aria-controls="collapse' + visaId + '" class="accordianheader">';
	newvisaRow += '</a>';
	newvisaRow += '</div>';
	newvisaRow += '<div id="collapse' + visaId + '" class="collapse in" role="tabpanel" aria-labelledby="heading' + visaId + '">';
	newvisaRow += '<div class="card-block">';
	newvisaRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divuaeresvisano'+ visaId + '">';
	newvisaRow += '<label class="control-label" for="txtuaeresvisano'+ visaId + '">Enter UAE Residence Visa Number</label>';
	newvisaRow += '<input type="tel" class="form-control visaValidate" name="txtuaeresvisano'+ visaId + '" id="txtuaeresvisano'+ visaId + '" data-toggle="tooltip" title="Enter your Visa Number">';
	newvisaRow += '<input type="hidden" name="visanum_val'+ visaId + '" id="visanum_val'+ visaId + '"/>';
	newvisaRow += '<label class="errorlabel error_txtuaeresvisano'+ visaId + '"></label>';
	newvisaRow += '</div>';
	newvisaRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divuaeresvisaexpdate'+ visaId + '">  ';
	newvisaRow += '<label class="control-label" for="txtuaeresvisaexpdate'+ visaId + '">UAE Residence Visa Expiry Date</label><i class="fa fa-calendar dob_icon" id="date'+ visaId + '"></i>';
	newvisaRow += '<input type="text" class="form-control date datepicker_visa" name="txtuaeresvisaexpdate'+ visaId + '" id="txtuaeresvisaexpdate'+ visaId + '"  data-toggle="tooltip" title="Select your UAE Residence Visa Expiry Date">';
	newvisaRow += '<label class="errorlabel error_txtuaeresvisaexpdate'+ visaId + '"></label>';
	newvisaRow += '</div>';
	newvisaRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divuaeresvisa'+ visaId + '">';
	newvisaRow += '<div class="file-upload" >';
	newvisaRow += '<div class="file-select" id="UAEVisa'+ visaId + '">';
	newvisaRow += '<div class="file-select-button" id="fileNametxtuaeresvisa'+ visaId + '">UAE Residence Visa</div>';
	newvisaRow += '<div class="file-select-name" id="noFiletxtuaeresvisa'+ visaId + '">Select the file to upload</div> ';
	newvisaRow += '<input type="file" title="Select file to upload" class="uploadfile" name="txtuaeresvisafile'+ visaId + '" id="txtuaeresvisafile'+ visaId + '" />';
	newvisaRow += '</div>';
	newvisaRow += '</div>';
	newvisaRow += '<input type="hidden" name="hdntxtuaeresvisafile'+ visaId + '" id="hdntxtuaeresvisafile'+ visaId + '"/>';
	newvisaRow += '<label class="errorlabel error_hdntxtuaeresvisafile'+ visaId + '"></label>';
	newvisaRow += '</div>';
	newvisaRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
	newvisaRow += '<label class="control-label" for="txtcomments'+ visaId + '">Comments if any</label> <!--  fa fa-check-->';
	newvisaRow += '<textarea class="form-control" rows="3" id="txtcomments'+ visaId + ''+ visaId + '" name="txtcomments'+ visaId + '"></textarea>';
	newvisaRow += '<label class="errorlabel error_txtcomments'+ visaId + '"></label>';
	newvisaRow += '</div></div></div></div>';
	
	$("#TOTALFIELDS").val(visaId);
	$('.clearfix_visa').before(newvisaRow);
	uploadfile();
		$(".uploadfile").change( function() { 
		if($(this.id).val() !="")
		{
			//alert($("#"+ this.id).val());
			$("#hdn"+this.id).val($("#"+ this.id).val());
		}
	  	else
	  	{
	  		$("#hdn"+this.id).val("");
	  	}
	});
	$('body').on('focus',".datepicker3", function(){
      if( $(this).hasClass('hasDatepicker') == false )  {
        $(this).datepicker({ showButtonPanel: true, changeMonth: true, changeYear: true, showOn: 'focus' }).focus();
  	  }
  	});

//reload_visa_date(visaId);
reload_remove_visa(visaId)
reload_resident_file(visaId)
reload_visa_no(visaId)


});

	$('.first_remove_visa').click(function() 
	{
		$(this).parent().parent().remove();
		$('#pass_nxt').css('display', 'block');
		$('#pass_upd').css('display', 'none');
	});

});
$('.first_remove_visa').click(function() 
	{
		
		var con = confirm("Do you want to remove it ?");
		//$(this).parent().parent().parent().remove();
				var get_bid=$(this).attr("id");
					$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_EVP",
				type: "POST",
				data: 'id='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
					  var con = true; // confirm("Do you want to remove it ?");
					  if(con)
					  {
						  //$(this).parent().parent().remove();
					  }
					}
				}
		});
						$(this).parent().parent().parent().remove();

	});

function reload_visa_date(visaId) {
	$('[id=txtuaeresvisaexpdate'+ visaId+']').mouseover(function(){
	// $('.datepicker3').click(function(){
		////$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtuaeresvisaexpdate]').click(function(){
	// $('.datepicker3').click(function(){
		////$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
	
	$('[id=txtuaeresvisaexpdate]').mouseover(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtuaeresvisaexpdate'+ visaId+']').click(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtuaeresvisaexpdate'+ visaId+']').focus(function(){
	// $('.datepicker3').focus(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
}



function reload_resident_file(visaId) {
	$('[id^=txtuaeresvisafile]').change(function(e) {
		console.log(e)
		var input = $(this);
		$(this).prev().html(input[0].files[0].name);
		// $('[id=noFiletxtuploadfile_bk'+ emiId+']').html(input[0].files[0].name);
	});
}

function reload_remove_visa(visaId)
{
	$('.remove_visa').click(function() 
	{
		var visa = $(this).closest('[id^=visa_accor]').remove();
		console.log(visa)
	});
}


function reload_visa_no(visaId)
{
	$('#txtuaeresvisano'+ visaId).keypress(function (key) 
	{
	    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
	    else return false;
	});
}

/* Passport Add More Functionality*/

$(document).on('click','.btpassaddMore_first', function(){

	$('#passport_accor').css("display","block");
	$('.btpassaddMore_first').css("display","none");
	$('#passportaddmore').css("display","block");
	uploadfile();
	
	
	if(product == "Individual")
	{
		$('#passportelenext').html('Update &amp; Proceed');
	}
	else 
	{
		$('#passportelenext').html('Update &amp; Proceed');
	}
	//$("#pass_nxt").css("display","none");
	//$("#pass_upd").css("display","block");
});

$(document).ready(function() {	

var passId = 0;

$(".datepicker3").datepicker({
onSelect:function(){
$(this).change();
}
});

$(document).on('click','#passportaddmore', function(e)
{
	$(".datepicker3").datepicker('destroy');
	reload_remove_pass_section(passId)
	var newPassportRow = "";
	passId = $('[id^=passport_accor]'); 
	passId = passId.length;

	if(passId == "0")
	{
		passId ="";
	}
	  newPassportRow += '<input type="hidden" name="hdnDivCount' + passId + '" id="hdnDivCount' + passId + '" value="" />';
	  newPassportRow += '<div class="card col-lg-12 col-md-12 col-sm-12 col-xs-12" id="passport_accor' + passId + '" style="display:block;">';
	  	  newPassportRow += '<div class="card-header copyright-footer subheadermenu  headermenu disableacc defaultfont" role="tab" id="heading' + passId + '">Passport Details ' + passId + '<i class="pull-right fa fa-remove remove_passport"> </i>';
	  newPassportRow += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + passId + '" aria-expanded="false" aria-controls="collapse" class="accordianheader">';
	  newPassportRow += '</a> </div>';
	  newPassportRow += '<div id="collapse' + passId + '" class="collapse in" role="tabpanel" aria-labelledby="heading' + passId + '">';
	  newPassportRow += '<div class="card-block">';
	  newPassportRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
	  newPassportRow += '<label class="control-label" for="txtpassnumr' + passId + '">Passport Number</label>';
	  newPassportRow += '<input type="tel" class="form-control passValid" name="txtpassnumr' + passId + '" id="txtpassnumr' + passId + '" data-toggle="tooltip" title="Enter your Passport Number">';
	  newPassportRow += '<input type="hidden" name="passnumr_val' + passId + '" id="passnumr_val' + passId + '"/>';
	  newPassportRow += '<label class="errorlabel error_txtpassnumr' + passId + '"></label>';
	  newPassportRow += '</div>';
	  newPassportRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
	  newPassportRow += '<label class="control-label" for="txtpasselexpdate' + passId + '">Passport Expiry Date</label><i class="fa fa-calendar dob_icon" id="date' + passId + '"></i>';
	  newPassportRow += '<input type="text" class="form-control date datepicker_passport" name="txtpasselexpdate' + passId + '" id="txtpasselexpdate' + passId + '"  data-toggle="tooltip" title="Select your Passport Expiry Date">';
	  newPassportRow += '<label class="errorlabel error_txtpasselexpdate' + passId + '"></label>';
	  newPassportRow += '</div>';
	  newPassportRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 " id="divpassphotopage' + passId + '">';
	  newPassportRow += '<div class="file-upload">';
	  newPassportRow += '<div class="file-select" id="passportfront' + passId + '">';
	  newPassportRow += '<div class="file-select-button" id="fileNametxtpassphotopage' + passId + '">Passport Front</div>';
	  newPassportRow += '<div class="file-select-name" id="noFiletxtpassphotopage' + passId + '">Select the file to upload</div>';
	  newPassportRow += '<input type="file" title="Select the file to upload" class="uploadfile" name="txtpassphotopage' + passId + '" id="txtpassphotopage' + passId + '">';
	  newPassportRow += '</div>';
	  newPassportRow += '</div>';
	  newPassportRow += '<input type="hidden" name="hdntxtpassphotopage' + passId + '" id="hdntxtpassphotopage' + passId + '"/>';
	  newPassportRow += '<label class="errorlabel error_hdntxtpassphotopage' + passId + '"></label>';
	  newPassportRow += '</div>';
	  newPassportRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 " id="divpassaddrpage' + passId + '">';
	  newPassportRow += '<div class="file-upload">';
	  newPassportRow += '<div class="file-select" id="passportback">';
	  newPassportRow += '<div class="file-select-button" id="fileNametxtpassaddrpage' + passId + '">Passport Back</div>';
	  newPassportRow += '<div class="file-select-name" id="noFiletxtpassaddrpage' + passId + '">Select the file to upload</div> ';
	  newPassportRow += '<input type="file" title="Select the file to upload" class="uploadfile" name="txtpassaddrpage' + passId + '" id="txtpassaddrpage' + passId + '">';
	  newPassportRow += '</div>';
	  newPassportRow += '</div>';
	  newPassportRow += '<input type="hidden" name="hdntxtpassaddrpage' + passId + '" id="hdntxtpassaddrpage' + passId + '"/>';
	  newPassportRow += '<label class="errorlabel error_hdntxtpassaddrpage' + passId + '"></label>';
	  newPassportRow += '</div>';
	  newPassportRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
	  newPassportRow += '<label class="control-label" for="txtcommentone' + passId + '">Comments if any</label>';	  
	  newPassportRow += '<textarea class="form-control" rows="3" id="txtcommentone' + passId + '" name="txtcommentone' + passId + '"></textarea>';
	  newPassportRow += '<label class="errorlabel error_txtcommentone' + passId + '"></label>';
	  newPassportRow += '</div>';
	  newPassportRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
	  newPassportRow += '<label class="control-label" for="txtcommenttwo' + passId + '">Comments if any</label> <!--  fa fa-check-->';
	  newPassportRow += '<textarea class="form-control" rows="3" id="txtcommenttwo' + passId + '" name="txtcommenttwo' + passId + '"></textarea>';
	  newPassportRow += '<label class="errorlabel error_txtcommenttwo' + passId + '"></label>';
	  newPassportRow += '</div>';
	  newPassportRow += '</div>';
	  newPassportRow += '</div>';
	  newPassportRow += '</div>';

	$("#TOTALFIELDS").val(passId);
	$('#clearfix_passport').before(newPassportRow);
	uploadfile();
		$(".uploadfile").change( function() { 
		if($(this.id).val() !="")
		{
			//alert($("#"+ this.id).val());
			$("#hdn"+this.id).val($("#"+ this.id).val());
		}
	  	else
	  	{
	  		$("#hdn"+this.id).val("");
	  	}
	});

	$('body').on('focus',".datepicker3", function(){
      if( $(this).hasClass('hasDatepicker') == false )  {
        $(this).datepicker({ showButtonPanel: true, changeMonth: true, changeYear: true, showOn: 'focus' }).focus();
  	  }
  	});
		
	//reload_date_passport(passId);
	reload_remove_passport(passId);
	reload_frpass_file(passId);
	reload_bkpass_file(passId);
	//reload_pass_number(passId);
 
	});


	$('.remove_passport').click(function() 
	{
		$(this).parent().parent().remove();
	});

});

$('.first_remove_passport').click(function() 
	{
		//$(this).parent().parent().parent().remove();
		var con = confirm("Do you want to remove it ?");
		//$(this).parent().parent().parent().remove();
				var get_bid=$(this).attr("id");
					$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_EVP",
				type: "POST",
				data: 'id='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
					  var con = true; // confirm("Do you want to remove it ?");
					  if(con)
					  {
						  //$(this).parent().parent().remove();
					  }
					}
				}
		});
						$(this).parent().parent().parent().remove();
		
		if(product == "Individual")
		{
			$('#passportelenext').html('ADDRESS &gt; &gt;');
		}
		else 
		{
			$('#passportelenext').html('TRADE LICENSE &gt; &gt;');
		}
	});


function reload_remove_pass_section(passId) {
	$('.remove_passport').click(function() {
		passId = passId - 1;
		$(this).parent().parent().remove();
	});
}

/*function reload_pass_number(passId)
{
	$('#txtpassnumr'+passId).keypress(function (key) 
	{
	    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
	    else return false;
	});
}
*/
function reload_date_passport(passId) {
	$('[id=txtpasselexpdate'+ passId+']').mouseover(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtpasselexpdate]').click(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
	
	$('[id=txtpasselexpdate]').mouseover(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtpasselexpdate'+ passId+']').click(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtpasselexpdate'+ passId+']').focus(function(){
	// $('.datepicker3').focus(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
}


function reload_remove_passport(passId) {
	$('.remove_passport').click(function() {
		var passport = $(this).closest('[id^=passport_accor]').remove();
		console.log(passport)
	});
}


function reload_frpass_file(passId) {
	$('[id^=txtpassphotopage]').change(function(e) {
		console.log(e)
		var input = $(this);
		$(this).prev().html(input[0].files[0].name);
	});
}

function reload_bkpass_file(passId) {
	$('[id^=txtpassaddrpage]').change(function(e) {
		console.log(e)
		var input = $(this);
		$(this).prev().html(input[0].files[0].name);
		// $('[id=noFiletxtuploadfile_bk'+ emiId+']').html(input[0].files[0].name);
	});
}





$(document).ready(function() {	

var tradeId = 0;

$(".datepicker3").datepicker({
onSelect:function(){
$(this).change();
}
});

$(document).on('click','#tradelicenceaddmore', function(e)
{
	//$(".datepicker3").datepicker('destroy');
	reload_remove_trade_section(tradeId)
	var newTradeRow = "";
	tradeId = $('[id^=trede_accor]'); 

	tradeId = tradeId.length;

	
	if(tradeId == "0")
	{
		tradeId ="";
	}
	//else
//	{
//		tradeId = tradeId +1;
//	}
	
		newTradeRow += '<input type="hidden" name="hdnDivCount' + tradeId + '" id="hdnDivCount' + tradeId + '" value="" />';
		newTradeRow += '<div class="card col-lg-12 col-md-12 col-sm-12 col-xs-12" id="trede_accor' + tradeId + '" style="display:block;">';
		newTradeRow += '<div class="card-header copyright-footer subheadermenu  headermenu disableacc defaultfont header_border" role="tab" id="heading' + tradeId + '">';
		newTradeRow += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + tradeId + '" aria-expanded="true" aria-controls="collapse" class="accordianheader">';
		newTradeRow += 'Trade License ' + tradeId + '<i class="pull-right fa fa-remove remove_trade_license"> </i>';
		newTradeRow += '</a></div>';
							
		newTradeRow += '<div id="collapse' + tradeId + '" class="collapse in" role="tabpanel" aria-labelledby="heading' + tradeId + '">';
		newTradeRow += '<div class="card-block">';
		
		
		//newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divdocumentcode' + tradeId + '">';
		//newTradeRow += '<label class="control-label" for="txtdocumentcode' + tradeId + '">Document code</label>'; 
		//newTradeRow += '<input type="text" class="form-control visaValidate" name="txtdocumentcode' + tradeId + '" id="txtdocumentcode' + tradeId + '" title="Document code">';
		//newTradeRow += '<label class="errorlabel error_txtdocumentcode' + tradeId + '"></label>';
		//newTradeRow += '</div>';
		
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6">';
		newTradeRow += '<label class="control-label" for="txttrdlicno' + tradeId + '">Trade License Number</label>';
		newTradeRow += '<input type="text" class="form-control tradeValid" name="txttrdlicno' + tradeId + '" id="txttrdlicno' + tradeId + '" data-toggle="tooltip" title="What is your Trade License Number?">';
		newTradeRow += '<input type="hidden" name="hdntrdlicno' + tradeId + '" id="hdntrdlicno' + tradeId + '"/>';
		newTradeRow += '<label class="errorlabel error_txttrdlicno' + tradeId + '"></label>';
		newTradeRow += '</div>';
		
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divplaceofissue' + tradeId + '">';
		newTradeRow += '<label class="control-label active" for="txtplaceofissue' + tradeId + '">Place of Issue</label>'; 
		newTradeRow += '<select class="form-control visaValidate" name="txtplaceofissue' + tradeId + '" id="txtplaceofissue' + tradeId + '" title="Place of Issue"></select>';
		newTradeRow += '<label class="errorlabel error_txtplaceofissue' + tradeId + ' active"></label>';
		newTradeRow += '</div>';
		
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divcountryofissue' + tradeId + '">';
		newTradeRow += '<label class="control-label active" for="txtcountryofissue' + tradeId + '">Country of Issue</label>'; 
		newTradeRow += '<select class="form-control visaValidate" name="txtcountryofissue' + tradeId + '" id="txtcountryofissue' + tradeId + '" title="Country of Issue"></select>';
		newTradeRow += '<label class="errorlabel error_txtcountryofissue' + tradeId + ' active"></label>';
		newTradeRow += '</div>';
		
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divissuedate' + tradeId + '">';
		newTradeRow += '<label class="control-label" for="txtissuedate' + tradeId + '">Issue date</label><i class="fa fa-calendar dob_icon" id="datebefore' + tradeId + '"></i>';
		newTradeRow += '<input type="text" class="form-control date datepicker_tradepast" name="txtissuedate' + tradeId + '" id="txtissuedate' + tradeId + '" title="Issue date">';
		newTradeRow += '<label class="errorlabel error_txtissuedate' + tradeId + '"></label>';
		newTradeRow += '</div>';
		
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divtradevalue' + tradeId + '">';
		newTradeRow += '<label class="control-label" for="txttrdexpdate' + tradeId + '">Trade License Expiry Date</label><i class="fa fa-calendar dob_icon" id="date3' + tradeId + '"></i>';
		newTradeRow += '<input type="text" class="form-control date datepicker_tradefuture" name="txttrdexpdate' + tradeId + '" id="txttrdexpdate' + tradeId + '" data-toggle="tooltip" title="Trading Expiry Date" />';
		newTradeRow += '<label class="errorlabel error_txttrdexpdate' + tradeId + '"></label>';
		newTradeRow += '</div>';
		
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divtrdimgeid' + tradeId + '">';
		newTradeRow += '<div class="file-upload" >';
		newTradeRow += '<div class="file-select" id="tradelic' + tradeId + '">';
		newTradeRow += '<div class="file-select-button" id="fileNametxtuploadfile_trd' + tradeId + '">Trade License</div>';
		newTradeRow += '<div class="file-select-name" id="noFiletxtuploadfile_trd' + tradeId + '">Select the file to upload</div> ';
		newTradeRow += '<input type="file" title="Select the file to upload" class="uploadfile" name="txtuploadfile_trd' + tradeId + '" id="txtuploadfile_trd' + tradeId + '" />';
		newTradeRow += '</div>';
		newTradeRow += '</div>';
		newTradeRow += '<input type="hidden" name="hdntxtuploadfile_trd' + tradeId + '" id="hdntxtuploadfile_trd' + tradeId + '"/>';
		newTradeRow += '<label class="errorlabel error_hdntxtuploadfile_trd' + tradeId + '"></label>';
		newTradeRow += '</div>';
		
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
		newTradeRow += '<label class="control-label" for="txtcommentany_trd' + tradeId + '">Comments if any</label>'; 
		newTradeRow += '<textarea class="form-control disableresize" rows="2" id="txtcommentany_trd' + tradeId + '" name="txtcommentany_trd' + tradeId + '"></textarea>';
		newTradeRow += '<label class="errorlabel error_txtcommentanytrd' + tradeId + '"></label>';
		newTradeRow += '</div>';
				
		
		/*newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divtrdimgeid' + tradeId + '">';
		newTradeRow += '<div class="file-upload" >';
 		newTradeRow += '<div class="file-select" id="tradelic' + tradeId + '">';
   		newTradeRow += '<div class="file-select-button" id="fileNametxtuploadfile_trd' + tradeId + '">Trade License</div>';
   		newTradeRow += '<div class="file-select-name" id="noFiletxtuploadfile_trd' + tradeId + '">Select the file to upload</div> ';
  		newTradeRow += '<input type="file" title="Selec the file to upload" class="uploadfile" name="txtuploadfile_trd' + tradeId + '" id="txtuploadfile_trd' + tradeId + '" />';
  		newTradeRow += '</div></div>';
		newTradeRow += '<input type="hidden" name="hdntxtuploadfile_trd' + tradeId + '" id="hdntxtuploadfile_trd' + tradeId + '"/>';
		newTradeRow += '<label class="errorlabel error_hdntxtuploadfile_trd' + tradeId + '"></label>';
		newTradeRow += '</div>';
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 "> ';
		newTradeRow += '<label class="control-label" for="txttrdlicno' + tradeId + '">Trade License Number</label>';
		newTradeRow += '<input type="text" class="form-control tradeValid" name="txttrdlicno' + tradeId + '" id="txttrdlicno' + tradeId + '" data-toggle="tooltip" title="What is your Trade License Number?">';
		newTradeRow += '<input type="hidden" name="hdntrdlicno' + tradeId + '" id="hdntrdlicno' + tradeId + '"/>';
		newTradeRow += '<label class="errorlabel error_txttrdlicno' + tradeId + '"></label>';
		newTradeRow += '</div>';
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
		newTradeRow += '<label class="control-label" for="txtcommentany_trd' + tradeId + '">Comments if any</label> <!--  fa fa-check-->';
		newTradeRow += '<textarea class="form-control disableresize" rows="2" id="txtcommentany_trd' + tradeId + '"></textarea>';
		newTradeRow += '<label class="errorlabel error_txtcommentanytrd' + tradeId + '"</label>';
		newTradeRow += '</div>';
		newTradeRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divtradevalue' + tradeId + '">';
		newTradeRow += '<label class="control-label" for="txttrdexpdate' + tradeId + '">Trade License Expiry Date</label><i class="fa fa-calendar dob_icon" id="date' + tradeId + '"></i>';
        newTradeRow += '<input type="text" class="form-control date datepicker3" name="txttrdexpdate' + tradeId + '" id="txttrdexpdate' + tradeId + '" data-toggle="tooltip" title="Trading Expiry Date" />';
        newTradeRow += '<label class="errorlabel error_txttrdexpdate"></label>';
		newTradeRow += '</div>';*/
		
		newTradeRow += '<div class="form-group accordanimation_trd"></div>';
		newTradeRow += '</div>';
		$("#TOTALFIELDS").val(tradeId);

	$('#clearfix_trade_license').before(newTradeRow);
	
	uploadfile();

		$(".uploadfile").change( function() { 
		if($(this.id).val() !="")
		{
			//alert($("#"+ this.id).val());
			$("#hdn"+this.id).val($("#"+ this.id).val());
		}
	  	else
	  	{
	  		$("#hdn"+this.id).val("");
	  	}
	});
				  $.ajax({
				url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=countries",
				dataType: 'json',
				success: function(response) {
					//alert(natId);
					//var id = data[0].ID;              //get id
        			//var vname = data[1].NAME;
				  var len = response.length;
					//alert(len);
                //$("#+ strCntrlname + natId +").empty();
        			//var vid = tradeId-1;
					
				$("#txtplaceofissue"+tradeId).append("<option value=''>Please Select</option>");
				$("#txtcountryofissue"+tradeId).append("<option value=''>Please Select</option>");

                for( var i = 0; i<len; i++){
                    var id = response[i].ID;
                    var vname = response[i].NAME;
                    
                    $("#txtplaceofissue"+tradeId).append("<option value='"+id+"'>"+vname+"</option>");
                    $("#txtcountryofissue"+tradeId).append("<option value='"+id+"'>"+vname+"</option>");

                }
				}
			  });        

	
	$('body').on('focus',".datepicker3", function(){
      if( $(this).hasClass('hasDatepicker') == false )  {
        $(this).datepicker({ showButtonPanel: true, changeMonth: true, changeYear: true, showOn: 'focus' }).focus();
  	  }
  	});
			
	//reload_date_trade(tradeId);
	reload_remove_passport(tradeId);
	reload_trade_file(tradeId);
	 reload_remove_trade(tradeId);
});
	//$(function(){
//	var availableAttributes = [
//	 "Afghanistan",
//"Albania",
//"Algeria",
//"American Samoa",
//"Andorra",
//"Angola",
//"Anguilla",
//"Antigua & Barbuda",
//"Argentina",
//"Armenia",
//"Aruba",
//"Australia",
//"Austria",
//"Azerbaijan",
//"Bahamas, The",
//"Bahrain",
//"Bangladesh",
//"Barbados",
//"Belarus",
//"Belgium",
//"Belize",
//"Benin",
//"Bermuda",
//"Bhutan",
//"Bolivia",
//"Bosnia & Herzegovina",
//"Botswana",
//"Brazil",
//"British Virgin Is.",
//"Brunei",
//"Bulgaria",
//"Burkina Faso",
//"Burma",
//"Burundi",
//"Cambodia",
//"Cameroon",
//"Canada",
//"Cape Verde",
//"Cayman Islands",
//"Central African Rep.",
//"Chad",
//"Chile",
//"China",
//"Colombia",
//"Comoros",
//"Congo, Dem. Rep.",
//"Congo, Repub. of the",
//"Cook Islands",
//"Costa Rica",
//"Cote d'Ivoire",
//"Croatia",
//"Cuba",
//"Cyprus",
//"Czech Republic",
//"Denmark",
//"Djibouti",
//"Dominica",
//"Dominican Republic",
//"East Timor",
//"Ecuador",
//"Egypt",
//"El Salvador",
//"Equatorial Guinea",
//"Eritrea",
//"Estonia",
//"Ethiopia",
//"Faroe Islands",
//"Fiji",
//"Finland",
//"France",
//"French Guiana",
//"French Polynesia",
//"Gabon",
//"Gambia, The",
//"Gaza Strip",
//"Georgia",
//"Germany",
//"Ghana",
//"Gibraltar",
//"Greece",
//"Greenland",
//"Grenada",
//"Guadeloupe",
//"Guam",
//"Guatemala",
//"Guernsey",
//"Guinea",
//"Guinea-Bissau",
//"Guyana",
//"Haiti",
//"Honduras",
//"Hong Kong",
//"Hungary",
//"Iceland",
//"India",
//"Indonesia",
//"Iran",
//"Iraq",
//"Ireland",
//"Isle of Man",
//"Israel",
//"Italy",
//"Jamaica",
//"Japan",
//"Jersey",
//"Jordan",
//"Kazakhstan",
//"Kenya",
//"Kiribati",
//"Korea, North",
//"Korea, South",
//"Kuwait",
//"Kyrgyzstan",
//"Laos",
//"Latvia",
//"Lebanon",
//"Lesotho",
//"Liberia",
//"Libya",
//"Liechtenstein",
//"Lithuania",
//"Luxembourg",
//"Macau",
//"Macedonia",
//"Madagascar",
//"Malawi",
//"Malaysia",
//"Maldives",
//"Mali",
//"Malta",
//"Marshall Islands",
//"Martinique",
//"Mauritania",
//"Mauritius",
//"Mayotte",
//"Mexico",
//"Micronesia, Fed. St.",
//"Moldova",
//"Monaco",
//"Mongolia",
//"Montserrat",
//"Morocco",
//"Mozambique",
//"Namibia",
//"Nauru",
//"Nepal",
//"Netherlands",
//"Netherlands Antilles",
//"New Caledonia",
//"New Zealand",
//"Nicaragua",
//"Niger",
//"Nigeria",
//"N. Mariana Islands",
//"Norway",
//"Oman",
//"Pakistan",
//"Palau",
//"Panama",
//"Papua New Guinea",
//"Paraguay",
//"Peru",
//"Philippines",
//"Poland",
//"Portugal",
//"Puerto Rico",
//"Qatar",
//"Reunion",
//"Romania",
//"Russia",
//"Rwanda",
//"Saint Helena",
//"Saint Kitts & Nevis",
//"Saint Lucia",
//"St Pierre & Miquelon",
//"Saint Vincent and the Grenadines",
//"Samoa",
//"San Marino",
//"Sao Tome & Principe",
//"Saudi Arabia",
//"Senegal",
//"Serbia",
//"Seychelles",
//"Sierra Leone",
//"Singapore",
//"Slovakia",
//"Slovenia",
//"Solomon Islands",
//"Somalia",
//"South Africa",
//"Spain",
//"Sri Lanka",
//"Sudan",
//"Suriname",
//"Swaziland",
//"Sweden",
//"Switzerland",
//"Syria",
//"Taiwan",
//"Tajikistan",
//"Tanzania",
//"Thailand",
//"Togo",
//"Tonga",
//"Trinidad & Tobago",
//"Tunisia",
//"Turkey",
//"Turkmenistan",
//"Turks & Caicos Is",
//"Tuvalu",
//"Uganda",
//"Ukraine",
//"United Arab Emirates",
//"United Kingdom",
//"United States",
//"Uruguay",
//"Uzbekistan",
//"Vanuatu",
//"Venezuela",
//"Vietnam",
//"Virgin Islands",
//"Wallis and Futuna",
//"West Bank",
//"Western Sahara",
//"Yemen",
//"Zambia",
//"Zimbabwe"
//];
//	//$("input[name^='txtplaceofissue']").autocomplete({
////		source: availableAttributes
////	});
////	});
// 
//
//});

	$('.remove_trade_license').click(function() 
	{
		//alert("1");
		$(this).parent().parent().remove();
	});

});


$('.first_remove_trade_license').click(function() 
	{
		//alert("2");
		//$(this).parent().parent().parent().remove();
				var con = confirm("Do you want to remove it ?");
		//$(this).parent().parent().parent().remove();
				var get_bid=$(this).attr("id");
					$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_TradeLic",
				type: "POST",
				data: 'id='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
					  var con = true; // confirm("Do you want to remove it ?");
					  if(con)
					  {
						  //$(this).parent().parent().remove();
						$(this).parent().parent().parent().remove();
					  }
					}
				}
		});

	});


function reload_remove_trade_section(tradeId) 
{
	$('.remove_trade_license').click(function() 
	{
		//alert("3");
		tradeId = tradeId - 1;
		$(this).parent().parent().remove();
	});
}


function reload_date_trade(tradeId)
{
	$('[id=txttrdexpdate'+ tradeId+']').mouseover(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txttrdexpdate]').click(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
	
	$('[id=txttrdexpdate]').mouseover(function(){
	// $('.datepicker3').click(function(){
		////$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txttrdexpdate'+ tradeId+']').click(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txttrdexpdate'+ tradeId+']').focus(function(){
	// $('.datepicker3').focus(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
	
	$('[id=txtissuedate'+ tradeId+']').mouseover(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtissuedate]').click(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
	
	$('[id=txtissuedate]').mouseover(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtissuedate'+ tradeId+']').click(function(){
	// $('.datepicker3').click(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});

	$('[id=txtissuedate'+ tradeId+']').focus(function(){
	// $('.datepicker3').focus(function(){
		//$(this).datepicker('destroy');
		myId = $(this).attr('id');
		console.log(myId)
		$('#'+myId).datepicker();
	});
}


function reload_remove_trade(tradeId) {
	$('.remove_trade_license').click(function() {
		//alert("3");
				//alert("4");
		//var tradeli = $(this).closest('[id^=trede_accor]').remove();
		tradeId = tradeId - 1;
		$(this).parent().parent().parent().remove();
		//console.log(tradeli)
	});
}


function reload_trade_file(passId) {
	$('[id^=txtuploadfile_trd]').change(function(e) {
		console.log(e)
		var input = $(this);
		$(this).prev().html(input[0].files[0].name);
		// $('[id=noFiletxtuploadfile_bk'+ emiId+']').html(input[0].files[0].name);
	});
}



/*Memoranda add more functionlaties done here!*/

$(document).ready(function() {	

var memoId = 0;

$(document).on('click','#memorandumaddmore', function(e)
{
	reload_remove_memo_section(memoId)
	var newMemoRow = "";
	memoId = $('[id^=memo_accor]'); 
	memoId = memoId.length;
	if(memoId == "0")
	{
		memoId ="";
	}
				newMemoRow += '<input type="hidden" name="hdnDivCount' + memoId + '" id="hdnDivCount' + memoId + '" value="" />';
				newMemoRow += '<div class="card col-lg-12 col-md-12 col-sm-12 col-xs-12" id="memo_accor' + memoId + '">';
				newMemoRow += '<div class="card-header copyright-footer subheadermenu  headermenu disableacc defaultfont" role="tab" id="heading' + memoId + '">';
				newMemoRow += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + memoId + '" id="heading' + memoId + 'a" aria-expanded="true" aria-controls="collapse' + memoId + '" class="accordianheader">';
				newMemoRow += 'Memorandum of Association and Articles of Association ' + memoId + ' <i class="pull-right fa fa-remove remove_memo"> </i>';
				newMemoRow += '</a></div>';
				newMemoRow += '<div id="collapse' + memoId + '" class="collapse in" role="tabpanel" aria-labelledby="heading' + memoId + '">';
				newMemoRow += '<div class="card-block">';
				newMemoRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6" id="divmemorand' + memoId + '">';
				newMemoRow += '<div class="file-upload" >';
 				newMemoRow += '<div class="file-select" id="memorand' + memoId + '">';
   				newMemoRow += '<div class="file-select-button" id="fileNametxtuploadfile_memorand' + memoId + '">Memorandum</div>';
   				newMemoRow += '<div class="file-select-name" id="noFiletxtuploadfile_memorand' + memoId + '">Select the file to upload</div> ';
  				newMemoRow += '<input type="file" class="uploadfile" name="txtuploadfile_memorand' + memoId + '" id="txtuploadfile_memorand' + memoId + '" data-toggle="tooltip" title="Please choose Memorandum photo"/>';
  				newMemoRow += '</div>';
				newMemoRow += '</div>';
				newMemoRow += '<input type="hidden" name="hdntxtuploadfile_memorand' + memoId + '" id="hdntxtuploadfile_memorand' + memoId + '"/>';
				newMemoRow += '<label class="errorlabel error_hdntxtuploadfile_memorand' + memoId + '"></label>';
				newMemoRow += '</div>';
				newMemoRow += '<div class="form-group md-grp col-lg-6 col-md-6 col-sm-6 ">';
				newMemoRow += '<label class="control-label" for="txtcommentany_memorand' + memoId + '">Comments if any</label> <!--  fa fa-check-->';
				newMemoRow += '<textarea class="form-control disableresize" rows="2" id="txtcommentany_memorand' + memoId + '" name="txtcommentany_memorand' + memoId + '"></textarea>';
				newMemoRow += '<label class="errorlabel error_txtcommentanymemorand' + memoId + '"></label>';
				newMemoRow += '</div>';
				newMemoRow += '<div class="col-lg-12 col-md-12 col-sm-12"></div>';
				newMemoRow += '<div class="col-lg-2 col-md-2 col-sm-2">';
				newMemoRow += '</div>';
				newMemoRow += '<div class="col-lg-2 col-md-2 col-sm-2">';
				newMemoRow += '</div>';
				newMemoRow += '<div class="form-group accordanimation_memo"></div>';
				newMemoRow += '</div>';
				newMemoRow += '</div>';
				newMemoRow += '</div>';
				$("#TOTALFIELDS").val(memoId);	

	$('#clearfix_memorandum').before(newMemoRow);
	uploadfile();
		$(".uploadfile").change( function() { 
		if($(this.id).val() !="")
		{
			//alert($("#"+ this.id).val());
			$("#hdn"+this.id).val($("#"+ this.id).val());
		}
	  	else
	  	{
	  		$("#hdn"+this.id).val("");
	  	}
	});

		
	reload_memo_file(memoId);
	reload_remove_memo(memoId);
 
});


	$('.remove_memo').click(function() 
	{
		//$(this).parent().parent().remove();
				var con = confirm("Do you want to remove it ?");
		//$(this).parent().parent().parent().remove();
				var get_bid=$(this).attr("id");
					$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_Memo",
				type: "POST",
				data: 'id='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
					  var con = true; // confirm("Do you want to remove it ?");
					  if(con)
					  {
						  //$(this).parent().parent().remove();
					  }
					}
				}
		});

						$(this).parent().parent().parent().remove();
	});

});

function reload_remove_memo(memoId) {
	$('.remove_memo').click(function() {
		var memo = $(this).closest('[id^=memo_accor]').remove();
		console.log(tradeli)
	});
}

function reload_remove_memo_section(memoId) 
{
	$('.remove_memo').click(function() 
	{
		memo = memo - 1;
		$(this).parent().parent().remove();
	});
}

function reload_memo_file(memoId) {
	$('[id^=txtuploadfile_memorand]').change(function(e) {
		console.log(e)
		var input = $(this);
		$(this).prev().html(input[0].files[0].name);
		// $('[id=noFiletxtuploadfile_bk'+ emiId+']').html(input[0].files[0].name);
	});
}

/*add more for nonindividual  Major clients*/

$('#btn_add_name_country').click(function()
	{
		$("#add_more_name_country").css("display","block");
		$("#add_name_country").css("display","none");
		$("#show_first_name_country").css("display","block");
	});



$(document).ready(function() 
{	
	var namecountryId = 1;
	$(document).on('click','.btn_add_name_country_more', function(e)
	{
		//$(this).hide();
		var new_name_country = "";
		// alert(namecountryId)
						new_name_country += '<tr>';
						new_name_country += '<td class="text-center allowletteronly" id="add_name_country_div'+namecountryId+'"><i class="fa fa-plus btn_add_name_country_more"></i></td>';
	                    new_name_country += '<td>';
						new_name_country += '<input type="text" class="form-control allowletteronly" name="txtmajorclients'+namecountryId+'"  id="txtmajorclients'+namecountryId+'" placeholder="Name" title="Name" data-toggle="tooltip">';
	                    new_name_country += '</td>';
	                    new_name_country += '<td>';
						new_name_country += '<input type="text" class="form-control search_nat allowletteronly" name="txtnationality1'+namecountryId+'" id="txtnationality1'+namecountryId+'" placeholder="Select Nationality" autocomplete="off" data-toggle="tooltip" title="Select nationality"/>';
						new_name_country += '<input type="hidden" name="txtnationality_val1'+namecountryId+'" id="txtnationality_val1'+namecountryId+'"/>';
	                    new_name_country += '</td>';
	                    new_name_country += '<td><button type="button" class="btn btn-block btn-info btn-xs remove_name_country" style="padding: 0px 0px; ">Remove</button></td>';
	                    new_name_country += '</tr>';
		reload_name_country_list(namecountryId);
		$('.add_more_row_name_country').append(new_name_country);
		namecountryId = namecountryId+1;
	});

	$('.add_more_row_name_country').delegate('.remove_name_country','click',function()
	{
		var con = confirm("Do you want to remove it ?");
		if(con)
		{
			$(this).parent().parent().remove();
			 var totalRowCount = $("#check_rows_of_name_country tr").length;
             var rowCount = $("#check_rows_of_name_country td").closest("tr").length;
             namecountryId = namecountryId-1;
            if (rowCount == 0) 
            {
            	document.getElementById("add_more_row_name_country").style.display="none";
            }
		}
	});
});


function reload_name_country_list(namecountryId)
{
	 var getData1 = function(request, response)
	    {
	    	alert('am in side of the ')
	        $.getJSON(
	            "http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
	            function (data)
	            {
	                response(data);
	                alert(data)
	            });
	    };

	    var selectItem1 = function(event, ui) 
	    {
	    	alert('selectItem1')
	        $("#txtnationality_val1"+namecountryId).val(ui.item.value);
	        $('#txtnationality1'+namecountryId).val(ui.item.label);
	    }

	    $(".search_nat").autocomplete({
	    	className: "dropdown-content",
	        source: getData1,
	        select: selectItem1,
	        minLength: 3
	    });
	   
}
/*Add More nationality for KYC_indiCDD*/


$(document).ready(function() 
{	

	var gettotalfieldcount=parseInt($('#TOTALFIELDS').val());
//	alert(gettotalfieldcount)
	var natId = 1;
	$(document).on('click','.btn_add_nationality_more', function(e)
	{
		reload_nation_list(natId)
		//$(this).hide();
		var new_nation = "";
		// alert(natId)
		//alert($(this).parent("tr:first").attr("Id"));
		var strMsg = $(this).html();
		var strPlacemsg ="";
		var strCntrlname ="";
		
		if($(this).html().trim() == 'click here for add name of account')
		{
			strPlacemsg = "Name of account";
			strCntrlname= "txtnameofaccount";
		}
		else if($(this).html().trim() == 'click here for add nationality')
		{
			strPlacemsg = "Select your nationality";
			strCntrlname="txtnationality";
		}
		else if($(this).html().trim() == 'click here for add nation of tax resident')
		{
			strPlacemsg = "Please provide the nation Your tax resident for";
			strCntrlname="txtnationality";
		}
		//alert(strPlacemsg)
		
		if(parseInt(natId) <= 0)
		{
			natId="";
		}

 		$(this).closest('tr').remove();
				new_nation += '<tr>';
                new_nation += '<td class="text-center"><i style="display:none;" class="fa fa-plus btn_add_nationality_more"></i></td>';
                new_nation += '<td>';
				new_nation += '<select type="text" class="form-control cddNation" placeholder=' + strPlacemsg + ' name= '+ strCntrlname +natId+' id=' + strCntrlname + natId +'  autocomplete="off" data-toggle="tooltip" title="' + strPlacemsg + '"/></select>';
				new_nation += '<input type="hidden" name="' + strCntrlname + natId+'_val" id="' + strCntrlname+natId+'_val"/>';
                new_nation += '</td>';
                new_nation += '<td><button type="button" class="btn btn-block btn-info btn-xs remove_nation" style="padding: 0px 0px; ">Remove</button></td>';
                new_nation += '</tr>';
                new_nation += '<tr>';
                new_nation += '<td colspan="3" class="text-left"><i class="fa fa-plus btn_add_nationality_more">'+ strMsg + '</i></td>';
                new_nation += '</tr>';
	
		//reload_name_bank_name_list(bankId);
		
		$('.add_mul_nation').append(new_nation);
			var getData = function (request, response) {
       			 $.getJSON(
            			"http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
            		function (data) {
                	response(data);
           		 });
 		  };

			//alert(natId);
			  $.ajax({
				url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=countries",
				dataType: 'json',
				success: function(response) {
					//alert(natId);
					//var id = data[0].ID;              //get id
        			//var vname = data[1].NAME;
				  var len = response.length;
					//alert(len);
                //$("#+ strCntrlname + natId +").empty();
        			var vid = natId-1;
                for( var i = 0; i<len; i++){
                    var id = response[i].ID;
                    var vname = response[i].NAME;
                    
                    $("#txtnationality"+vid).append("<option value='"+id+"'>"+vname+"</option>");

                }
				}
			  });        

 		var selectItem = function (event, ui) {
        		$("#txtnationality1_val").val(ui.item.value);
        		$("#txtnationality1").val(ui.item.label);
 		 }
 		 
		$('.add_mul_nation').find('input[type=text]:last').autocomplete({
        		source: getData,
			select: selectItem,
		        minLength: 3
           	 });	
$('.add_mul_nation').find('input[type=text]:last').keypress(function (key) {
	
    if ((!(key.charCode >= 65 && key.charCode <= 120) && (key.charCode != 32 && key.charCode !=0 )) || key.charCode ==94) return false;
    else return true;
});
		natId = natId+1;
	});

	$('.add_mul_nation').delegate('.remove_nation','click',function()
	{
			var get_bid=$(this).attr("id");	
			var getclosetr=$(this).closest("tr")
				
			$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_country",
				type: "POST",
				data: 'country='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
					  var con = true; // confirm("Do you want to remove it ?");
					  if(con)
					  {
						  //$(this).parent().parent().remove();
						  getclosetr.remove();
						   var totalRowCount = $("#check_row_of_nationalities tr").length;
						   var rowCount = $("#check_row_of_nationalities td").closest("tr").length;
						   natId = natId-1;
						  if (rowCount == 0) 
						  {
							  document.getElementById("add_mul_nation").style.display="none";
						  }
					  }
					}
				}
	});
	});

	var gettotalfieldcount=parseInt($('#TOTALFIELDS').val());
//	alert(gettotalfieldcount)
	var accountId = 1;
	$(document).on('click','.btn_add_account_more', function(e)
	{
		reload_nation_list(accountId)
		//$(this).hide();
		var new_account = "";
		// alert(natId)
		//alert($(this).parent("tr:first").attr("Id"));
		var strMsg = $(this).html();
		var strPlacemsg ="";
		var strCntrlname ="";
		
		if($(this).html().trim() == 'click here for add name of account')
		{
			strPlacemsg = "Name of account";
			strCntrlname= "txtnameofaccount";
		}
		//alert(strPlacemsg)
		
		if(parseInt(accountId) <= 0)
		{
			accountId="";
		}

			  //$.ajax({
//				url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=countries",
//				dataType: 'json',
//				success: function(response) {
//					//var id = data[0].ID;              //get id
//        			//var vname = data[1].NAME;
//				  var len = response.length;
//					//alert(len);
//                //$("#+ strCntrlname + natId +").empty();
//                for( var i = 0; i<len; i++){
//                    var id = response[i].ID;
//                    var vname = response[i].NAME;
//                    
//                    $(".cddNation").append("<option value='"+id+"'>"+vname+"</option>");
//
//                }
//				}
//			  });        

 		$(this).closest('tr').remove();
				new_account += '<tr>';
                new_account += '<td class="text-center"><i style="display:none;" class="fa fa-plus btn_add_account_more"></i></td>';
                new_account += '<td>';
				new_account += '<input type="text" class="form-control  cddaccount autocomplete" placeholder=' + strPlacemsg + ' name= '+ strCntrlname +accountId+' id=' + strCntrlname + accountId +'  autocomplete="off" data-toggle="tooltip" title="' + strPlacemsg + '"/>';
				new_account += '<input type="hidden" name="' + strCntrlname + accountId+'_val" id="' + strCntrlname+accountId+'_val"/>';
                new_account += '</td>';
                new_account += '<td><button type="button" class="btn btn-block btn-info btn-xs remove_account" style="padding: 0px 0px; ">Remove</button></td>';
                new_account += '</tr>';
                new_account += '<tr>';
                new_account += '<td colspan="3" class="text-left"><i class="fa fa-plus btn_add_account_more">'+ strMsg + '</i></td>';
                new_account += '</tr>';
	
		//reload_name_bank_name_list(bankId);
		
		$('.add_mul_account').append(new_account);
			var getData = function (request, response) {
       			 $.getJSON(
            			"http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
            		function (data) {
                	response(data);
           		 });
 		  };
 		var selectItem = function (event, ui) {
        		$("#txtnationality1_val").val(ui.item.value);
        		$("#txtnationality1").val(ui.item.label);
 		 }
 		 
		$('.add_mul_account').find('input[type=text]:last').autocomplete({
        		source: getData,
			select: selectItem,
		        minLength: 3
           	 });	
$('.add_mul_account').find('input[type=text]:last').keypress(function (key) {
	
    if ((!(key.charCode >= 65 && key.charCode <= 120) && (key.charCode != 32 && key.charCode !=0 )) || key.charCode ==94) return false;
    else return true;
});
		accountId = accountId+1;
	});

	$('.add_mul_account').delegate('.remove_account','click',function()
	{
			var get_bid=$(this).attr("id");	
			var getclosetr=$(this).closest("tr");
				
			$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_account",
				type: "POST",
				data: 'account='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
					  var con = true; // confirm("Do you want to remove it ?");
					  if(con)
					  {
						  //$(this).parent().parent().remove();
						  getclosetr.remove();
						   var totalRowCount = $("#check_row_of_account tr").length;
						   var rowCount = $("#check_row_of_account td").closest("tr").length;
						   accountId = accountId-1;
						  if (rowCount == 0) 
						  {
							  document.getElementById("add_mul_account").style.display="none";
						  }
					  }
					}
				}
	});
	});
	
		
	var crsnatId = parseInt(gettotalfieldcount)+1;

	$(document).on('click','.btn_add_crs_nationality_more', function(e)
	{


		//alert(crsnatId);
		reload_nation_list(crsnatId);
		
		//$(this).hide();
		var new_nation = "";
		// alert(natId)
		//alert($(this).parent("tr:first").attr("Id"));
		var strMsg = $(this).html();
		var strPlacemsg ="";
		
		if($(this).html().trim() == 'click here for add name of account')
		{
			strPlacemsg = "Name of account";
		}
		else if($(this).html().trim() == 'click here for add nationality')
		{
			strPlacemsg = "Select your nationality";
		}
		else if($(this).html().trim() == 'click here for add nation of tax resident')
		{
			strPlacemsg = "Please provide the nation Your tax resident for";
		}
		//alert(strPlacemsg)
		
				

 		$(this).closest('tr').remove();
		//$("#txtprovidetin").mask("999-99-9999");

				new_nation += '<tr>';
                new_nation += '<td class="text-center"><i style="display:none;" class="fa fa-plus btn_add_nationality_more"></i></td>';
                new_nation += '<td>';
				new_nation += '<select class="form-control" placeholder="' + strPlacemsg + '" name="txtnationality'+crsnatId+'" id="txtnationality'+crsnatId+'" autocomplete="off" data-toggle="tooltip" title="' + strPlacemsg + '"/></select>';
				//new_nation += '<input type="hidden" name="txtnationality'+crsnatId+'_val" id="txtnationality'+natId+'_val"/>';
                new_nation += '</td>';
                new_nation += '<td>';
				new_nation += '<input type="text" class="form-control" placeholder="TIN" name="txtprovidetin'+crsnatId+'" id="txtprovidetin'+crsnatId+'" title="Enter your provide Tin"/>';
				//new_nation += '<input type="hidden" name="txtprovidetin'+crsnatId+'_val" id="txtprovidetin'+crsnatId+'_val"/>';
                new_nation += '</td>';
                new_nation += '<td>';
				new_nation += '<select class="form-control reason" placeholder="Reason" name="txtcommentbox2'+crsnatId+'" id="txtcommentbox2'+crsnatId+'" autocomplete="off" data-toggle="tooltip" title="Reason"/></select>';
				//new_nation += '<input type="hidden" name="txtcommentbox2'+crsnatId+'_val" id="txtcommentbox2'+crsnatId+'_val"/>';
				new_nation += '<label class="errorlabel error_txtcommentbox2'+crsnatId+'"></label>';
                new_nation += '<table id="unableObtainReson'+crsnatId+'" style="display:none;">';
                new_nation += '<tr>';
                new_nation += '<td>';
                new_nation += '<input type="text" class="form-control" name="txtUnableobtainTin'+crsnatId+'" placeholder="Enter Reason" id="txtUnableobtainTin'+crsnatId+'" data-toggle="tooltip" title="Enter Reason">';
                new_nation += '<label class="errorlabel error_txtUnableobtainTin'+crsnatId+'"></label>';
                new_nation += '</td>';
                new_nation += '</tr>';
                new_nation += '</table>';
                new_nation += '</td>';
                new_nation += '<td><button type="button" class="btn btn-block btn-info btn-xs remove_nation" style="padding: 0px 0px; ">Remove</button></td>';
                new_nation += '</tr>';
                new_nation += '<tr>';
                new_nation += '<td colspan="5" class="text-left"><i class="fa fa-plus btn_add_crs_nationality_more">'+ strMsg + '</i></td>';
                new_nation += '</tr>';
		
				$("#TOTALFIELDS").val(crsnatId);
		
		//alert(crsnatId);

		//reload_name_bank_name_list(bankId);
		
		$('.add_mul_crs_nation').append(new_nation);
			var getData = function (request, response) {
       			 $.getJSON(
            			"http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
            		function (data) {
                	response(data);

           		 });
 		  };
		  //alert(crsnatId);
		  
	  $.ajax({
				url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=countries",
				dataType: 'json',
				success: function(response) {
					
					//alert(crsnatId);
					
					//var id = data[0].ID;              //get id
        			var vid = crsnatId-1;
					
				  var len = response.length;
					//alert(len);
                //$("#+ strCntrlname + natId +").empty();
                for( var i = 0; i<len; i++){
                    var id = response[i].ID;
                    var vname = response[i].NAME;
                    //var crsnatId = crsnatId - 1;
					//alert(vid);
                    $("#txtnationality"+vid).append("<option value='"+id+"'>"+vname+"</option>");

                }
                    $("#txtcommentbox2"+vid).append('<option value="">Please Select</option><option value="REASON A">Country does not issue TIN</option><option value="REASON B">Unable to obtain TIN</option><option value="REASON C">TIN not required</option>');
				}
			  });  

	var tarid = crsnatId-1;

$(".reason").change( function() { 
			var id = this.id;
			//var tarid = crsnatId-1;
			var tar = this.value;
			if(tarid == 0){
				tarid = 1;
			}
			//alert(id);
			alert(tarid);
			//alert(tar);
			if(tar =="REASON B")
			{
				$("#unableObtainReson"+tarid).css('display','block');
			}
			else
			{
			  $("#unableObtainReson"+tarid).css('display','none');
			}
		});

 		var selectItem = function (event, ui) {
        		$("#txtnationality1_val").val(ui.item.value);
        		$("#txtnationality1").val(ui.item.label);
 		 }
 		 reload_crs(crsnatId);
		$('.add_mul_crs_nation').find('input[type=text]:last').autocomplete({
        		source: getData,
			select: selectItem,
		        minLength: 3
           	 });	
		crsnatId = crsnatId+1;
	});

	$('.add_mul_crs_nation').delegate('.remove_nation','click',function()
	{
		
		var splitNationrow_id=$(this).attr("id");
		//alert(splitNationrow_id);
		if(splitNationrow_id != undefined){
		var split_Nationrow_id=splitNationrow_id.split("_");
		var getNationrow_id=split_Nationrow_id[1];
		}
		else
		{
			var getNationrow_id = "";
		}
		var this_line=$(this).parent().parent();
		//alert(getNationrow_id); return false;
		
		$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_crs_row",
				type: "POST",
				data: 'getNationrow_id='+getNationrow_id,
				success: function(response)
						{
							
							var con = true; // confirm("Do you want to remove it ?");
								if(con)
								{
									this_line.remove();
									var totalRowCount = $("#check_row_of_nationalities tr").length;
									var rowCount = $("#check_row_of_nationalities td").closest("tr").length;
									crsnatId = crsnatId-1;
									if (rowCount == 0) 
									{
										document.getElementById("add_mul_crs_nation").style.display="none";
									}
								}
							
						}
		});
		
		
	});
	
	
		var clientId = 1;
	$(document).on('click','.btn_add_clients_more', function(e)
	{
		var new_nation = "";
		var strMsg = $(this).html();
		var strPlacemsg ="";
		
		if(parseInt(clientId) <= 0)
		{
			clientId="";
		}
			
		$.ajax({
				url: "/eng/cfc/cdd/GeneralFunctions.cfc?method=countries",
				dataType: 'json',
				success: function(response) {
					//var id = data[0].ID;              //get id
        			//var vname = data[1].NAME;
				  var len = response.length;
					//alert(len);
                //$("#+ strCntrlname + natId +").empty();
                for( var i = 0; i<len; i++){
                    var id = response[i].ID;
                    var vname = response[i].NAME;
                    
                    $(".nonCDD").append("<option value='"+id+"'>"+vname+"</option>");

                }
				}
			  });        

		//alert(strPlacemsg)
 		$(this).closest('tr').remove();
				new_nation += '<tr>';
                new_nation += '<td class="text-center"><i style="display:none;" class="fa fa-plus btn_add_nationality_more"></i></td>';
                new_nation += '<td>';
		 		new_nation += '<input type="text" class="form-control" placeholder="Client Name" name="txtmajorclients'+ clientId +'" id="txtmajorclients'+ clientId + '" autocomplete="off" data-toggle="tooltip" title="Client name"/>';
		 		new_nation +=  '<label class="errorlabel error_txtmajorclients'+ clientId +'"></label>';
                new_nation += '</td>';
                new_nation += '<td>';
				new_nation += '<select class="form-control majorclient nonCDD" placeholder="Client country" name="txtnationality1'+clientId+'" id="txtnationality1'+clientId+'" data-toggle="tooltip" title="Client country"/></select>';
				new_nation += '<input type="hidden" name="txtnationality1'+clientId+'_val" id="txtnationality1'+clientId+'_val"/>';
                new_nation += '</td>';
                new_nation += '<td><button type="button" class="btn btn-block btn-info btn-xs remove_nation" style="padding: 0px 0px; ">Remove</button></td>';
                new_nation += '</tr>';
                new_nation += '<tr>';
                new_nation += '<td colspan="4" class="text-left"><i class="fa fa-plus btn_add_clients_more">'+ strMsg + '</i></td>';
                new_nation += '</tr>';
	
		//reload_name_bank_name_list(bankId);
		$('.add_mul_clients').append(new_nation);
		
		clientId = clientId+1;
	});
	$('.add_mul_clients').delegate('.remove_nation','click',function()
	{
			var get_bid=$(this).attr("id");	
			var getclosetr=$(this).closest("tr")
			
			$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=major_client",
				type: "POST",
				data: 'client_id='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{

					  var con = true; // confirm("Do you want to remove it ?");
					  if(con)
					  {
						  //$(this).parent().parent().remove();
						  getclosetr.remove();
						   var totalRowCount = $("#check_row_of_nationalities tr").length;
						   var rowCount = $("#check_row_of_nationalities td").closest("tr").length;
						   clientId = clientId-1;
						  if (rowCount == 0) 
						  {
							  document.getElementById("add_mul_clients").style.display="none";
						  }
					  }
					}
				}
			});
	});
		
});

function reload_nation_list(natId)
{
	var getData1 = function(request, response)
	    {
	    	//alert('am in side of the ')
	        $.getJSON(
	            "http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
	            function (data)
	            {
	                response(data);
	                //alert(data)
	            });
	    };

	    var selectItem1 = function(event, ui) 
	    {
	    	//alert('selectItem1')
	        $("#txtnationality_val1"+natId).val(ui.item.value);
	        $('#txtnationality1'+natId).val(ui.item.label);
	    }

	    $(".autocomplete-nation").autocomplete({
	    	className: "dropdown-content",
	        source: getData1,
	        select: selectItem1,
	        minLength: 3
	    });	
}