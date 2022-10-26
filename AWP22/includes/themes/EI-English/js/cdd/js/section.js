function sectionvalidaions(){

jQuery.validator.addClassRules('uploadfile', {
        required: true ,
    });
jQuery.validator.addClassRules('datepicker3', {
        required: true ,
    });    
 jQuery.validator.addClassRules('emidmask', {
        required: true ,
    });     
  jQuery.validator.addClassRules('visaValidate', {
        required: true ,
    });   
    jQuery.validator.addClassRules('passValid', {
        required: true ,
    });
    jQuery.validator.addClassRules('tradeValid', {
        required: true ,
    });
    
$("#section1").validate({
	rules: {
		drptypemultination: {
			required: true,
		},
		txtbankname: {
			required: true,
		},
		txtrelationshipvalue1: {
			required: function(){ if($('#existingbankcnt').val() =="" ) return true; else return false;},
			number:true
		},
		txtbankingsince1: {
			required: function(){ if($('#existingbankcnt').val() =="" ) return true; else return false;},
		},
		txtnationality: {
			required: true,
		},
		bankname1: {
			required: function(){if($('#existingbankcnt').val() =="" ) return true; else return false;},
		},
		txtnationality1: {
			required: true,
		}
	},
	messages: {
		drptypemultination: {
			required: "Please Choose your Nationality"
		},
		txtbankname: {
			required: "Please Enter the Bank Name"
		},
		txtrelationshipvalue1: {
			required: "Please Enter Relationship Value"
		},
		txtbankingsince: {
			required: "Please Choose the Date"
		},
		txtnationality: {
			required: "Select Your Nationality from the List"
		},
		bankname1: {
			required: "Select your Bank from the List"
		},
		txtnationality1: {
			required: "Select Your Nationality from the List"
		}
	}
});
	
$("#section2").validate({
	rules: {
		drpoccupationtype: {
			required: true
		},
		txtorganizationname: {
			required: true
		},
		txtmonthlyincome: {
			required: true
		},
		txtlengthservice :{
			required: true
		},
		txtpropertyinverstment: {
			required: true
		},
		txtotherincome: {
			required: true
		},
		txtsalrayaccenbd: {
			required: true
		},
		drpnaturebusiness: {
			required: true
		},
		txtownershippercent: {
			required: true,
			number: true
		},
		txtannualincome: {
			required: true,
			number: true
		},
		drpprofession: {
			required: true
		}
	},
	messages: 
	{
		drpprofession: {
			required: "Please select your profession"
		},
		drpoccupationtype: {
			required: "Please select your occupation type"
		},
		txtorganizationname: {
			required: "Please enter your organization name"
		},
		txtmonthlyincome: {
			required: "Please enter your monthly income"
		},
		txtlengthservice :{
			required: "Please enter your length of service"
		},
		txtpropertyinverstment: {
			required: "Please enter your property investment"
		},
		txtotherincome: {
			required: "Please enter your other income"
		},
		txtsalrayaccenbd: {
			required: "Please enter your salary with ENBD"
		},
		drpnaturebusiness: {
			required: "Please enter your nature business"
		},
		txtownershippercent: {
			required: "Please enter your ownership"
		},
		txtannualincome: {
			required: "Please enter the Annual Income"
		}
	}
});

$("#section3").validate({
	rules: {
		txtsalary: {
			required: true
		},
		txtbusiness: {
			required: true
		},
		txtinvestment: {
			required: true
		},
		txtsaleofasset: {
			required: true
		},
		txtgift: {
			required: true
		},
		txtothers: {
			required: true
		},
		txtother_info: {
			required: true
		}
	},
	messages: {
		txtsalary: {
			required: "Please Choose any Option"
		},
		txtbusiness: {
			required: "Please Choose any Option"
		},
		txtinvestment: {
			required: "Please Choose any Option"
		},
		txtsaleofasset: {
			required: "Please Choose any Option"
		},
		txtgift: {
			required: "Please Choose any Option"
		},
		txtothers: {
			required: "Please Choose any Option"
		},
		txtother_info: {
			required: "Please write any Specify"
		}

	}
});

$("#section4").validate({
	rules: {
		txtnameofaccount:{
			required: true
		},
		txtopernonoper:{
			required: true
		},
		txtplaceofinformation:{
			required: true
		},
		txtspeacialstatus:{
			required: true
		}
	},
	messages: {
		txtnameofaccount: {
			required:"Please Enter Account Name"
		},
		txtopernonoper: {
			required:"Please Enter your Operating"
		},	
		txtplaceofinformation: {
			required:"Please Enter Place of Incorporation"
		},
		txtspeacialstatus: {
			required:"Please Enter Special Status"
		}
	}
});

$("#section5").validate({
	rules: {
		drptypeofconstitution:{
			required: true
		},
		txtothersspec:{
			required: true
		},
		txtrelationshipvalueconstit:{
			required: true,
			number: true
		},
		txtbankingsinceconstit1:{
			required: function(){ if($('#existingbankcnt').val() =="" ) return true; else return false;},
		},
		bankname:{
			required: true
		}
	},
	messages: {
		drptypeofconstitution: {
			required:"Please Enter Type of Constitution"
		},
		drptypeofconstitution: {
			required:"Please Specify if Icase"
		},
		txtbanknameconstit: {
			required:"Select Bank name from List"
		},
		txtrelationshipvalueconstit: {
			required:"Please Enter Estimated relationship value"
		},
		txtbankingsinceconstit1: {
			required:"Select Banking Scince Date"
		},
		bankname: {
			required: "Select your Bank from the List"
		}
	}
});

$("#section6").validate({
	rules: {
		estimatedannualincome:{
			required: true
		},
		txtestimatenetprofit:{
			required: true
		},
		yearsinbusiness:{
			required: true
		},
		tradelicense:{
			required: true
		},
		txtbankingsinceconstit:{
			required: true
		},
		txtbackgroundofcompany:{
			required: true
		},
		txtnationality:{
			required: true
		},
		txtnoofofficewebsite:{
			required: true
		},
		natureofbusiness:{
			required: true
		},
		txtaddinfo:{
			required: true
		},
		txtasscompanys:{
			required: true
		},
		txttotalestimatedwealth:{
			required: true
		},
		txtsourceofwealth:{
			required: true
		}
	},
	messages: {
		estimatedannualincome: {
			required:"Select Estimated annual turnover of company in AED"
		},
		txtestimatenetprofit: {
			required:"Please Enter Estimated net profit of company in AED"
		},
		yearsinbusiness: {
			required:"Select Years In Business"
		},
		tradelicense: {
			required:"Please Select any Option"
		},
		txtbankingsinceconstit: {
			required:"Select Banking Scince Date"
		},
		txtbackgroundofcompany: {
			required: "Please Enter the Background of Company"
		},
		txtnationality: {
			required: "Select the Company Operates"
		},
		txtnoofofficewebsite: {
			required: "Enter Number of staff an offices, website"
		},
		natureofbusiness: {
			required: "Select Nature of Business"
		},
		txtaddinfo: {
			required: "Enter Additional information"
		},
		txtasscompanys: {
			required: "Enter Associated companies"
		},
		txttotalestimatedwealth: {
			required: "Enter Total estimated wealth (in AED)"
		},
		txtsourceofwealth: {
			required: "Enter Source of wealth"
		}
	}
});

$("#section7").validate({
	rules: {
		txtmajorclients:{
			required: true
		},
		txtnationality1:{
			required: true
		},
		residentcountries:{
			required: true
		},
		remittancesreceive:{
			required: true
		},
		exportcountries:{
			required: true
		}
	},
	messages: {
		txtmajorclients: {
			required:"Please Enter the Name"
		},
		txtnationality1: {
			required:"Select Country"
		},
		residentcountries: {
			required:"Please select anyone option"
		},
		remittancesreceive: {
			required:"Please select anyone option"
		},
		exportcountries: {
			required:"Please select anyone option"
		}	
	}
});

$("#Section9").validate({
	rules: {
		txtuploadfile_fr: {
			required: true
		},
		txtuploadfile_bk: {
			required: true
		},
		txtemidno: {
			required: true
		},
		txtpassexpdate: {
			required: true
		}
	},
	messages: {
		txtuploadfile_fr: {
			required: "Please Choose Front Image"
		},
		txtuploadfile_bk: {
			required: "Please Choose Back Image"
		},
		txtemidno: {
			required: "Please Enter Emirates ID Number"
		},
		txtpassexpdate: {
			required: "Please Emirates ID Expiry Date"
		}
	}
});

$("#section10").validate({
	rules: {
		txtuaeresvisafile: {
			required: true
		},
		txtuaeresvisano: {
			required: true
		},
		txtuaeresvisaexpdate: {
			required: true
		}
	},
	messages: {
		txtuaeresvisafile: {
			required: "Please Choose Emirates Resident Visa"
		},
		txtuaeresvisano: {
			required: "Please Enter UAE Residence Visa Number"
		},
		txtuaeresvisaexpdate: {
			required: "Please Select UAE Residence Visa Expiry Date"
		}
	}
});



$("#section11").validate({
	errorClass: 'error',
	rules: {
		txtprfresadd: {
			required: true
		},
		drpresaddrproof: {
			required: true
		},
		txtdateresaddr: {
			required: true
		}
	},
	messages: {
		txtprfresadd: {
			required: "Please Choose Proof of Residence Address"
		},
		drpresaddrproof: {
			required: "Please Select Type of Residence Address"
		},
		txtdateresaddr: {
			required: "Please Choose Proof of Residence Address"
		}
	}
});



$("#section12").validate({
	errorClass: 'error',
	rules: {
		txtpassphotopage: {
			required: true
		},
		txtpassaddrpage: {
			required: false
		},
		txtpassnumr: {
			required: true
		},
		txtpasselexpdate: {
			required: true
		}
	},
	messages: {
		txtpassphotopage: {
			required: "Please Choose Passport Photo Page"
		},
		//txtpassaddrpage: {
			//required: "Please Choose Passport Address Page"
		//},
		txtpassnumr: {
			required: "Please Enter Passport Number"
		},
		txtpasselexpdate: {
			required: "Please Enter Passport Expiry Date"
		}
	}
});


$("#section13").validate({
	errorClass: 'error',
	rules: {
		txtcorporatename: {
			required: true
		},
		incorporationdate: {
			required: true
		},
		txttradelicenceno: {
			required: false
		},
		txtcountryofincorporation: {
			required: true
		},
		txtavgannualincome: {
			required: true
		},
		txtfundsource: {
			required: true
		}
	},
	messages: {
		txtcorporatename: {
			required: "Please Select Corporate Name"
		},
		incorporationdate: {
			required: "Please Select Incorporation Date"
		},
		txttradelicenceno : {
			required: "Please Enter Trade License no"
		},
		txtcountryofincorporation: {
			required: "Please Enter Country of Incorporation"
		},
		txtavgannualincome: {
			required: "Please Enter Average annual income"
		},
		txtfundsource: {
			required: "Please Enter Fund source"
		}
	}
});

$("#section14").validate({
	errorClass: 'error',
	rules: {
		txtdocumentcode: {
			required: true
		},
		txttrdlicno: {
			required: true
		},
		txtplaceofissue: {
			required: true
		},
		txtcountryofissue: {
			required: true
		},
		txtissuedate: {
			required: true
		},
		txttrdexpdate: {
			required: true
		}
	},
	messages: {
		
		txtdocumentcode : {
			required: "Please Enter Document code"
		},
		txttrdlicno: {
			required: "Please Enter Trade License no"
		},
		txtplaceofissue: {
			required: "Please Enter Place of Issue"
		},
		txtcountryofissue: {
			required: "Please Enter Country of Issue"
		},
		txtissuedate: {
			required: "Please Select Issue Date"
		},
		txttrdexpdate: {
			required: "Please Select Expiry Date"
		}
	}
});

$("#section15").validate({
	errorClass: 'error',
	rules: {
		txtaddresstype: {
			required: true
		},
		txtaddressformat: {
			required: true
		},
		txtbuildvillano: {
			required: true
		},
		txtstreetno: {
			required: true
		},
		txtstreetname: {
			required: true
		},
		txtlocalitycity: {
			required: true
		},
		txtsuburub: {
			required: true
		},
		txttown: {
			required: true
		},
		txtemiratestate: {
			required: true
		},
		txtcountry: {
			required: true
		},
		txtaddrvalidfrom: {
			required: true
		},
		txtpostalcode: {
			required: true
		}
	},
	messages: {
		txtaddresstype: {
			required: "Please Enter Address Type"
		},
		txtaddressformat: {
			required: "Please Enter Address Format"
		},
		txtbuildvillano: {
			required: "Please Enter Building/ Villa no"
		},
		txtstreetno: {
			required: "Please Enter Street No"
		},
		txtstreetname: {
			required: "Please Enter Street Name"
		},
		txtlocalitycity: {
			required: "Please Enter Locality/ City"
		},
		txtsuburub: {
			required: "Please Enter Suburub"
		},
		txttown: {
			required: "Please Enter Town"
		},
		txtemiratestate: {
			required: "Please Enter Emirate State"
		},
		txtcountry: {
			required: "Please Enter Country"
		},
		txtaddrvalidfrom: {
			required: "Select Address Valid Date"
		},
		txtpostalcode: {
			required: "Please Enter Postal Code"
		}
	}
});

$("#section16").validate({
	errorClass: 'error',
	rules: {
		drpaddressproof:{
			required : false
		},
		ejari: {
			required: false
		},
		noutilitybill: {
			required: true
		},
		otherbankstatement: {
			required: false
		},
		txtuploadfile2: {
			required: false
		}
	},
	messages: {
		drpaddressproof:{
			required : "Please select proof of address"
		},
		ejari: {
			required: "Please Select any Option"
		},
		noutilitybill: {
			required: "Please Select any Option"
		},
		otherbankstatement: {
			required: "Please Select any Option"
		},
		txtuploadfile2: {
			required: "Please Select any Files"
		}
	}
});

$("#section17").validate({
	errorClass: 'error',
	rules: {
		txtbuildingname: {
			required: true
		},
		txtnflatunitnumber: {
			required: true
		},
		txtareastreetname: {
			required: true
			// number:true
		},
		txtmakaninumber: {
			required: true
			// number:true
		},
		txtemirates: {
			required: true
			// number:true
		},
		txtnationality: {
			required: true
			// number:true
		},
		txtzipcode: {
			required: true
			// number:true
		},
		addperformmailing: {
			required: true
			// number:true
		}
		
		
	},
	messages: {
		txtbuildingname: {
			required: "Please Enter Building Name"
		},
		txtnflatunitnumber: {
			required: "Please Enter the Flat/Unit Number",
			// number: "Numerics Only"
		},
		txtmakaninumber: {
			required: "Please Enter Makani Number",
			// number: "Numerics Only"
		},
		txtmakaninumber: {
			required: "Please Enter Makani Number",
			// number: "Numerics Only"
		},
		txtemirates: {
			required: "Please Select Your Emirates",
			// number: "Numerics Only"
		},
		txtnationality: {
			required: "Please Select Your Country",
			// number: "Numerics Only"
		},
		txtzipcode: {
			required: "Please Enter Your P.O.Box",
			// number: "Numerics Only"
		},
		addperformmailing: {
			required: "Please Select any Option",
			// number: "Numerics Only"
		}
		
	}
});

$("#section18").validate({
	errorClass: 'error',
	rules: {
		drpaddressproof:{
			required : false
		},
		ejari: {
			required: false
		},
		noutilitybill: {
			required: false
		},
		otherbankstatement: {
			required: false
		},
		txtuploadfile: {
			required: true
		}
	},
	messages: {
		drpaddressproof:{
			required : "Please select proof of address"
		},
		ejari: {
			required: "Please Select any Option"
		},
		noutilitybill: {
			required: "Please Select any Option"
		},
		otherbankstatement: {
			required: "Please Select any Option"
		},
		txtuploadfile: {
			required: "Please Select any Files"
		}
	}
});


/* fatca validation*/
$("#section19").validate({
	errorClass: 'error',
	rules: {
		
		taxresident: {
			required: true,
		},
		txtfatcanationality: {
			required: true,
		},
		txtfatcaprovidetin: {
			required: function(){if($("#txtfatcaprovidetin").val() =="" && $("#txtfatcaein").val() =="") return true; else return false;},
			
			},
//		$(".error_txtfatcaprovidetin").text("Please Enter the TIN OR EIN"); 
//	} && $('#txtfatcagiin').val() =="" ) return true; else return false;},
		//txtfatcacomments: {
//			required: true,
//		},
		txtfatcagiin:{
			required: function(){if($("#txtfatcaprovidetin").val() =="" && $("#txtfatcaein").val() =="" && $("#txtfatcagiin").val() =="") return true; else return false;},
		},

		txtfatcaein:{
			required: function(){
				if($("#txtfatcaein").val() =="" && $("#txtfatcaprovidetin").val() =="") return true; else return false;},
		},
		
		countryother: {
			required: true
		},
		txtnationality : {
			required : true
		},
		txtmultination: {
			required: true
		},
		protaxres: {
			required: true
		},
		txtprovidetin: {
			required: function(){ if($('#txtcommentbox2').val() =="" ) return true; else return false;},
		},
		txtfatcaphotopage1: {
			required: true
		},
		txtcrsphotopage2: {
			required: true
		}
	},
	messages: {
		taxresident: {
			required: "Please Enter USA Tax Resident",
		},
		txtfatcagiin:{
			required: "Please Enter GIIN and EIN or TIN ",
		},
		txtfatcaein:{
			required: "Please Enter GIIN and EIN",
		},
		txtfatcanationality: {
			required: "Please select the nation of tax resident",
		},
		txtfatcaprovidetin: {
			required: "Please Enter any of One them"
		},
		//txtfatcacomments: {
//			required: "Please Enter the reason"
//		},
		countryother: {
			required: "Please Select any Option"
		},
		txtnationality : {
			required : "Please select the nation of tax resident"
		},
		txtmultination: {
			required: "Select Tax resident for a country other than USA or UAE"
		},
		protaxres: {
			required: "Please Enter the nation of your Tax Resident"
		},
		txtprovidetin: {
			required: "Please Enter TIN Number or select the Reason"
		},
		txtfatcaphotopage1: {
			required: "Please Upload FATCA"
		},
		txtcrsphotopage2: {
			required: "Please Upload CRS"
		}
	}
});

$("#section20").validate({
	errorClass: 'error',
	rules: {
		txtresident: {
			required: true,
		},
		txtmultination1: {
			required: true
		},
		protaxres1: {
			required: true
		},
		txtprovidetin1: {
			required: true
		},
		txtpassphotopage3: {
			required: true
		},
		txtpassphotopage4: {
			required: true
		}
	},
	messages: {
		txtresident: {
			required: "Please Enter USA Tax Resident",
		},
		txtmultination1: {
			required: "Select Tax resident for a country other than USA or UAE"
		},
		protaxres1: {
			required: "Please Enter the nation of your Tax Resident"
		},
		txtprovidetin1: {
			required: "retryn6ryn6truty45766478768765858788"
		},
		txtpassphotopage3: {
			required: "Please Upload FATCA"
		},
		txtpassphotopage4: {
			required: "Please Upload CRS"
		}
	}
});


$("#section21").validate({
	errorClass: 'error',
	rules: {
		txtdebitnum: {
			required: function(element) {
            return $("#txtaccountno").val()== ""  && $("#txtcifno").val()=='' && $("#txtcreaditcardno").val() == "";
                },
            minlength : 16,    
		},
		txtaccountno: {
			required:  function(element) {
            return $("#txtdebitnum").val() == "" && $("#txtcifno").val()=='' && $("#txtcreaditcardno").val()== "";
                },
		},
		txtcifno: {
			required:  function(element) {
            return $("#txtdebitnum").val() == "" && $("#txtaccountno").val()== ""  && $("#txtcreaditcardno").val()=='';
                },
		},
		txtcreaditcardno: {
			required:  function(element) {
            return $("#txtdebitnum").val() == "" && $("#txtaccountno").val()== "" && $("#txtcifno").val()== "";
                },
                minlength : 16,  
		},
		captcha: {	
			required: true	
		},
				terms: {
			required: true
		}
	},
	messages: {
		txtdebitnum: {
			required: "Please Enter anyone of the field",
			minlength:"Please enter valid card number",
		},
		txtaccountno: {
			required: ""
		},
		txtcifno: {
			required: ""
		},
		txtcreaditcardno: {
			required: "",
			minlength:"Please enter valid card number",
		},
		terms: {
			required: "Please check the terms and conditions"
		},	
		captcha: {	
			required: "Please enter the captcha"	
		}
	}
});

$("#section22").validate({
	errorClass: 'error',
	rules: {
		txtformationdate: {
			required: false
		},
		txtOTP: {
			required: true
		}
	},
	messages: {
		txtOTP: {
			required: "Please Enter OTP"
		},
	}
});

$("#section23").validate({
	errorClass: 'error',
	rules: {
		txtuploadfile_trd: {
			required: true
		},
		txttrdlicno: {
			required: true,
			//number:true

		},
		txttrdexpdate: {
			required: true,
			//number:true

		}
	},
	messages: {
		txtuploadfile_trd: {
			required: "Please choose trade photo"
		},
		txttrdlicno: {
			required: "Please Enter the License Number",
			//number: "Numerics Only"
		},
		txttrdexpdate: {
			required: "Please Select Expiry Date",
			//number: "Numerics Only"
		}

	}
});

$("#section24").validate({
	errorClass: 'error',
	rules: 
	{
			txtuploadfile_incorp:
			{
				required: true
			}
	},
	messages: 
	{
		txtuploadfile_incorp: 
		{
			required: "Please choose incorporation photo"
		}

	}
});

$("#section25").validate({
	errorClass: 'error',
	rules: 
	{
		txtuploadfile_memorand:
		{
			required: true
		}
	},
	messages: 
	{
		txtuploadfile_memorand: 
		{
			required: "Please choose Memorandum photo"
		}
		

	}
});


}