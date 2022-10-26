//alert('eib');
$().button('toggle');

$("input.form-control").each(function(index, element){
    var input = $(element);
    var label = $("label[for=" + input.attr("id") + "]");

	$(element).focusin(function(){
		var text = $(element).val();
		console.log("text = " + text);
		if(text == ""){
			if(!$(label).hasClass('active')) {
	         	$(label).addClass("active");
	         }
	         else {
	         	$(label).removeClass("active");
	         }
	    }
	    
	 });
	$(element).focusout(function(){
		var text = $(element).val();
		console.log("text = " + text);
		if(text == ""){
		       	$(label).removeClass("active");
	    }
	});
});
    
	$("textarea.form-control").each(function(index, element){
    var input = $(element);
    var label = $("label[for=" + input.attr("id") + "]");

	$(element).focusin(function(){
		var text = $(element).val();
		console.log("text = " + text);
		if(text == ""){
			if(!$(label).hasClass('active')) {
	         	$(label).addClass("active");
	         }
	         else {
	         	$(label).removeClass("active");
	         }
	    }
	    
	 });
	$(element).focusout(function(){
		var text = $(element).val();
		console.log("text = " + text);
		if(text == ""){
		       	$(label).removeClass("active");
	    }
	});
});
    
	
    
 //Autocomplete
/*$('#txtnationality').autocomplete({
    serviceUrl: '/autocomplete/countries',
    onSelect: function (suggestion) {
        //alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    }
});*/
$(function () {
    var getData = function (request, response) {
        $.getJSON(
            "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
            function (data) {
                response(data);
            });
    };

    var selectItem = function (event, ui) {
        $("#txtnationality_val").val(ui.item.value);
        $('#txtnationality').val(ui.item.label);
    }

    $(".search_nat").autocomplete({
    	className: "dropdown-content",
        source: getData,
        select: selectItem,
        minLength: 3
    });
});

$(function () {
    var getData = function (request, response) {
        $.getJSON(
            "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
            function (data) {
                response(data);
            });
    };

    var selectItem = function (event, ui) {
        $("#txtnationality1_val").val(ui.item.value);
        $('#txtnationality1').val(ui.item.label);
    }

    $("#txtnationality").autocomplete({
    	className: "dropdown-content",
        source: getData,
        select: selectItem,
        minLength: 3
    });
});

$(function(){
	 var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
 var availableAttributes = [
	 "Afghanistan",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Anguilla",
"Antigua & Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas, The",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia",
"Bosnia & Herzegovina",
"Botswana",
"Brazil",
"British Virgin Is.",
"Brunei",
"Bulgaria",
"Burkina Faso",
"Burma",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Cape Verde",
"Cayman Islands",
"Central African Rep.",
"Chad",
"Chile",
"China",
"Colombia",
"Comoros",
"Congo, Dem. Rep.",
"Congo, Repub. of the",
"Cook Islands",
"Costa Rica",
"Cote d'Ivoire",
"Croatia",
"Cuba",
"Cyprus",
"Czech Republic",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"East Timor",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Faroe Islands",
"Fiji",
"Finland",
"France",
"French Guiana",
"French Polynesia",
"Gabon",
"Gambia, The",
"Gaza Strip",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guadeloupe",
"Guam",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Honduras",
"Hong Kong",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea, North",
"Korea, South",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macau",
"Macedonia",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Martinique",
"Mauritania",
"Mauritius",
"Mayotte",
"Mexico",
"Micronesia, Fed. St.",
"Moldova",
"Monaco",
"Mongolia",
"Montserrat",
"Morocco",
"Mozambique",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"Netherlands Antilles",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"N. Mariana Islands",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Puerto Rico",
"Qatar",
"Reunion",
"Romania",
"Russia",
"Rwanda",
"Saint Helena",
"Saint Kitts & Nevis",
"Saint Lucia",
"St Pierre & Miquelon",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome & Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Swaziland",
"Sweden",
"Switzerland",
"Syria",
"Taiwan",
"Tajikistan",
"Tanzania",
"Thailand",
"Togo",
"Tonga",
"Trinidad & Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks & Caicos Is",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela",
"Vietnam",
"Virgin Islands",
"Wallis and Futuna",
"West Bank",
"Western Sahara",
"Yemen",
"Zambia",
"Zimbabwe"
];
   $("input[name^='txtnationality']").autocomplete({
		source: availableAttributes
	});
   $("input[name^='txtcountryofincorporation']").autocomplete({
		source: availableAttributes
	});
	$("input[name^='txtplaceofissue']").autocomplete({
		source: availableAttributes
	});	
	$("input[name^='txtcountryofissue']").autocomplete({
		source: availableAttributes
	});	
	$("input[name^='txtcountry']").autocomplete({
		source: availableAttributes
	});	
	$("input[name^='txtfatcanationality']").autocomplete({
		source: availableAttributes
	});	
	
	$(".majorclient").autocomplete({
		source: availableAttributes
	});	

	$("input[name^='txtplaceofinformation']").autocomplete({
		source: availableAttributes
	});
	
	
});

$( function() {
    var bank = [
	    "United Emirates Bank",
	    "Abu Dhabi Commercial Bank",
	    "Abu Dhabi Islamic Bank",
	    "Arab Bank plc",
	    "Bank of Baroda",
	    "Arab Emirates Investment Bank",
	    "Bank of Sharjah",
	    "Citibank UAE",
	    "Commercial Bank International",
	    "Commercial Bank of Dubai",
	    "Dubai Islamic Bank",
	    "Emirates Islamic Bank",
	    "First Gulf Bank",
	    "Habib Bank AG Zurich",
	    "HSBC Bank Middle East Limited",
	    "Invest Bank",
	    "Mashreqbank",
	    "National Bank of Abu Dhabi",
	    "National Bank of Fujairah",
	    "National Bank of Umm Al-Qaiwain",
	    "Noor Bank",
	    "RAKBANK",
	    "Sharjah Islamic Bank",
	    "Union National Bank",
	    "United Arab Bank"
    ];
    $( "input.autocomplete-bank" ).autocomplete({
	  dropdown: {
          className: 'dropdown-content'
      },
      source: bank,
      focus: function( event, ui ) {
        $( "#bankname1" ).val(ui.item.value );
        return false;
      },
      focus: function( event, ui ) {
        $( "#bankname2" ).val(ui.item.value );
		$( "#bankname1" ).val(ui.item.value );
        return false;
      },
      select: function( event, ui ) {
        $( "#bankname1" ).val(ui.item.value );
        $( "#bankname_val" ).val(ui.item.value );
 
        return false;
      },
      select: function( event, ui ) {
      	//alert($(this).id);
        $( "#bankname2" ).val(ui.item.value );
        $( "#bankname_val" ).val(ui.item.value );
 
        return false;
      } 
     });
  } );


$( function() {
    var company = [
	    "Technocit Software Solution",
	    "Emirates Islamic",
	    "Emirates NBD",
	    "Mashreq Bank",
	    "ADCB Bank",
	    "First Gulf Bank",
	    "Dubai Islamic Bank"
    ];
    $( "input.autocomplete-company" ).autocomplete({
	  dropdown: {
          className: 'dropdown-content'
      },
      source: company,
      focus: function( event, ui ) {
        $( "#companyname" ).val( ui.item.value );
        return false;
      },
      select: function( event, ui ) {
        $( "#companyname" ).val( ui.item.value );
        $( "#companyname_val" ).val( ui.item.value );
 
        return false;
      } 
     });
  } );
  
$( function() {
    var jobtitle = [
	    "Executive Office/Office Employee",
	    "Assistant Manager/Manager",
	    "Senior Management/Board Members",
	    "Owner/Proprietor/Investor/Partner",
	    "Teacher/Lecturer/Professor",
	    "Senior Professions",
	    "Junior Professions",
	    "Student",
	    "House Wife",
	    "No Data"
    ];
    $( "input.autocomplete-job" ).autocomplete({
	  dropdown: {
          className: 'dropdown-content'
      },
      source: jobtitle,
      focus: function( event, ui ) {
        $( "#txtdesignation" ).val( ui.item.value );
        return false;
      },
      select: function( event, ui ) {
        $( "#txtdesignation" ).val( ui.item.value );
        $( "#txtdesignation_val" ).val( ui.item.value );
 
        return false;
      } 
     });
  } );


$.validator.addMethod("regx", function (value, element, regexpr) {
    return regexpr.test(value);
}, "please enter valid Emirates ID");


$(function(){
    var $select = $(".yearsinuae");
    for (i=0;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

$(function(){
    var $select = $(".monthsinuae");
    for (i=0;i<=12;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});
	
/**** Loader For Next  ****/

/**** Ends ****/


		
$('.uploadfile').change(function() {
	
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
$('#txtmarital').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnmartial").val(value);
});

$('#txtemirates').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtemirates").val(value);
});

$('#txtcardkey').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtcardkey").val(value);
});

$('#txtpfrepayment').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtpfrepayment").val(value);
});

$('#txtpftype').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtpftype").val(value);
});

$('#txtpfsubtype').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtpfsubtype").val(value);
});

$('#txtpfnoofinstallment').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtpfnoofinstallment").val(value);
});

$('#txtpfgraceperiod').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtpfgraceperiod").val(value);
});

$('#drpemploymentstatus').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdndrpemploymentstatus").val(value);
});

$('#drpoccupationtype').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnoccupationtype").val(value);
});
$('#drpmonthlyincome').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnselectmonthlyincome").val(value);
});
$('#drppropertyinvertsment').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnpropertyinverstment").val(value);
});

$('#drpotherincome').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnselectotherincome").val(value);
});

$('#drpnaturebusiness').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnnaturebusiness").val(value);
});
$('#drptypeentity').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntypeentity").val(value);
});
$('#txtopernonoper').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtopernonoper").val(value);
});
$('#drptypeofconstitution').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntypeofconstitution").val(value);
});
$('#estimatedannualincome').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnestimatedannualincome").val(value);
});

$('#yearsinbusiness').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnselectyearsinbusiness").val(value);
});
$('#natureofbusiness').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnselectnatureofbusiness").val(value);
});

$('#tradelicense').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdnselecttradelicense").val(value);
});

$('#txtspeacialstatus').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtspeacialstatus").val(value);
});

$('#drpresaddrproof').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdndrptypeinuae").val(value);
});
$('#txtcorporatename').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdntxtcorporatename").val(value);
});
$('#drpresaddrproof').change(function() {
	var item=$(this);
    var value = item.val();
    $("#hdndrpresaddrproof").val(value);
});

$('#drptypeofconstitution').change(function() 
{
	var item=$(this);
    var value = item.val();
    $("#hdntypeofconstitution").val(value);
    if (value == 'Others') 
    {
      document.getElementById("divothersspec").style.display="block";
    }
    else
    {
      document.getElementById("divothersspec").style.display="none";
    }
});




$('input:radio[name=gender]').change(function() {
var value = $(this).val();
$("#hdngender").val(value);
});

$('input:radio[name=tradelicense]').change(function() {
var value = $(this).val();
$("#hdnselecttradelicense").val(value);
});

$('input:radio[name=options]').change(function() {
var value = $(this).val();
$("#hdnoptions").val(value);
});

$('input:radio[name=txtsalary]').change(function() {
var value = $(this).val();
$("#hdsalary").val(value);
});

$('input:radio[name=txtbusiness]').change(function() {
var value = $(this).val();
$("#hdbusiness").val(value);
});

$('input:radio[name=txtinvestment]').change(function() {
var value = $(this).val();
$("#hdinvestment").val(value);
});

$('input:radio[name=txtsaleofasset]').change(function() {
var value = $(this).val();
$("#hdnsaleofasset").val(value);
});

$('input:radio[name=txtgift]').change(function() {
var value = $(this).val();
$("#hdgift").val(value);
});

$('input:radio[name=txtgift]').change(function() {
var value = $(this).val();
$("#hdgift").val(value);
});

$('input:radio[name=txtspeacialstatus]').change(function() {
var value = $(this).val();
$("#hdntxtspeacialstatus").val(value);
});

$('input:radio[name=exportcountries]').change(function() {
var value = $(this).val();
$("#hdnexportcountries").val(value);
});

$('input:radio[name=remittancesreceive]').change(function() {
var value = $(this).val();
$("#hdnremittancesreceive").val(value);
});
$('input:radio[name=residentcountries]').change(function() {
var value = $(this).val();
$("#hdnresidentcountries").val(value);
});


$('input:radio[name=txtmultination]').change(function()
{
var value = $(this).val();
$("#hdnmultination").val(value);
if($("#hdnmultination").val() == "Y")
    {
        document.getElementById("divtxtmultination").style.display="block";
    }
    else {
        document.getElementById("divtxtmultination").style.display="none";
    }
});

$('input:radio[name=txtothers]').change(function()
	{
	var value = $(this).val();
	$("#hdnoptionsothers").val(value);
	if($("#hdnoptionsothers").val() == "Y")
	    {
	        document.getElementById("divother_info").style.display="block";
	    }
	    else
	    {
	    	document.getElementById("divother_info").style.display="none";
	    }
});


$('input:radio[name=txtcsaltrans]').change(function() {
var value = $(this).val();
$("#hdntxtcsaltrans").val(value);
});

$('input:radio[name=credit]').change(function() {
var value = $(this).val();
$("#hdncredit").val(value);
});

$('input:radio[name=ploan]').change(function() {
var value = $(this).val();
$("#hdnploan").val(value);
});

$('input:radio[name=hloan]').change(function() {
var value = $(this).val();
$("#hdnhloan").val(value);
});

$('input:radio[name=aloan]').change(function() {
var value = $(this).val();
$("#hdnaloan").val(value);
});

$('input:radio[name=coapplicant]').change(function() {
var value = $(this).val();
$("#hdncoapplicant").val(value);
});

$('input:radio[name=coapplicant1]').change(function() {
var value = $(this).val();
$("#hdncoapplicant1").val(value);
});

$('input:radio[name=prodradio]').change(function() {
var value = $(this).val();
$("#hdnprodradio").val(value);
});

$('input:radio[name=uscitizen]').change(function() {
var value = $(this).val();
$("#hdnuscitizen").val(value);
if($("#hdnuscitizen").val() == "yes")
	{
		document.getElementById("divtxtustaxpayeridentification").style.display="block";
	}
	else {
		document.getElementById("divtxtustaxpayeridentification").style.display="none";
	}
});

$('input:radio[name=commonrptstandards]').change(function() {
var value = $(this).val();
$("#hdncommonrptstandards").val(value);
if($("#hdncommonrptstandards").val() == "yes")
	{
		document.getElementById("divcommonrptstandards").style.display="block";
	}
	else {
		document.getElementById("divcommonrptstandards").style.display="none";
	}
});

$('input:radio[name=txtsaltrans]').change(function() {
var value = $(this).val();
$("#hdnoptions").val(value);
var hdnvalue = $("#hdnoptions").val(value);
	if($("#hdnoptions").val() == "no")
	{
		document.getElementById("divstl").style.display="block";
	}
	else {
		document.getElementById("divstl").style.display="none";
	}
});

$('input:radio[name=partnernum]').change(function() {
var value = $(this).val();
$("#hdnpartnernum").val(value);
var hdnvalue = $("#hdnpartnernum").val(value);
	if($("#hdnpartnernum").val() == "yes")
	{
		document.getElementById("divtxtpartnerno").style.display="block";
	}
	else {
		document.getElementById("divtxtpartnerno").style.display="none";
	}
});

$('input:radio[name=reqlimit]').change(function() {
var value = $(this).val();
$("#hdnreqlimit").val(value);
var hdnvalue = $("#hdnreqlimit").val(value);
	if($("#hdnreqlimit").val() == "yes")
	{
		document.getElementById("divtxtreqlimitamt").style.display="block";
	}
	else {
		document.getElementById("divtxtreqlimitamt").style.display="none";
	}
});

$('input:radio[name=nolcard]').change(function() {
var value = $(this).val();
$("#hdnnolcard").val(value);
var hdnvalue = $("#hdnnolcard").val(value);
	if($("#hdnnolcard").val() == "yes")
	{
		document.getElementById("divtxtshareholder").style.display="block";
	}
	else {
		document.getElementById("divtxtshareholder").style.display="none";
	}
});

$('input:radio[name=ucscard]').change(function() {
var value = $(this).val();
$("#hdnucscard").val(value);
var hdnvalue = $("#hdnucscard").val(value);
	if($("#hdnucscard").val() == "yes")
	{
		document.getElementById("divtxtprefnolplan").style.display="block";
	}
	else {
		document.getElementById("divtxtprefnolplan").style.display="none";
	}
});

$('input:radio[name=suppcard]').change(function() {
var value = $(this).val();
$("#hdnsuppcard").val(value);
var hdnvalue = $("#hdnsuppcard").val(value);
	if($("#hdnsuppcard").val() == "yes")
	{
		document.getElementById("divsupp").style.display="block";
	}
	else {
		document.getElementById("divsupp").style.display="none";
	}
});

$('input:radio[name=salikcard]').change(function() {
var value = $(this).val();
$("#hdnsalikcard").val(value);
var hdnvalue = $("#hdnsalikcard").val(value);
	if($("#hdnsalikcard").val() == "yes")
	{
		document.getElementById("divsalik").style.display="block";
	}
	else {
		document.getElementById("divsalik").style.display="none";
	}
});

$('input:radio[name=baltransfer]').change(function() {
var value = $(this).val();
$("#hdnbaltransfer").val(value);
var hdnvalue = $("#hdnbaltransfer").val(value);
	if($("#hdnbaltransfer").val() == "yes")
	{
		document.getElementById("divbal").style.display="block";
	}
	else {
		document.getElementById("divbal").style.display="none";
	}
});

$('#txtproductselection').change(function() {
	var item=$(this);
    var Productselection = item.val();
	document.getElementById("selectioncardsdiv").style.display="none";
	document.getElementById("cardnext").style.display="none";
	if(Productselection == "Credit Card")
	{
		document.getElementById("selectioncardsdiv").style.display="block";
		document.getElementById("productnextdiv").style.display="none";
	}
	else {
		document.getElementById("productnextdiv").style.display="block";
		document.getElementById("cardnext").style.display="none";
	}
});
$('#txtmobilenumber').blur(function() {
	var id = this.id;
    var value = $("#" + id).val();
    $("#otpmobnum").text(value);
});
$('#forgotref').click(function() {
	$("#forgotemaildiv").hide();
	document.getElementById("forgotrefdiv").style.display="block";
	$("#sermoderror1").removeClass("error")
	//document.getElementById("forgotemaildiv").style.display="none";
});

$('#forgotemail').click(function() {
	$("#forgotrefdiv").hide();
	document.getElementById("forgotemaildiv").style.display="block";
	//document.getElementById("forgotrefdiv").style.display="none";
	$("#sermoderror").removeClass("error")
});
 
$('#txtrelationpublicfigures').change(function() {
	
	document.getElementById("divpublicfig").style.display="none";
	document.getElementById("divpublicfig").style.display="none";

	var item=$(this);
    var RelationPF = item.val();
	
	if (RelationPF != "No") 
	{
		document.getElementById("divpublicfig").style.display="block";
	}
	else
	{
		document.getElementById("divpublicfig").style.display="none";
	}
	 
 });  

$('#txtempmonthlyincome').change(function() {

	var a, b, c, d;
	a = parseInt(document.getElementById("txtempmonthlyincome").value);
         
 if (isNaN(a) == true) {
         a = 0;
     }
     var b = parseInt(document.getElementById("txtempvariableincome").value);
     if (isNaN(b) == true) {
         b = 0;
     }
     var c = parseInt(document.getElementById("txtempallowanceincome").value);
     if (isNaN(c) == true) {
         c = 0;
     }
     var d = parseInt(document.getElementById("txtempadditionalincome").value);
     if (isNaN(d) == true) {
         d = 0;
     }
     document.getElementById("txtemptotalincome").value = a + b + c + d;

});

$('#txtempvariableincome').change(function() {
		var a, b, c, d;
	a = parseInt(document.getElementById("txtempmonthlyincome").value);
         
 if (isNaN(a) == true) {
         a = 0;
     }
     var b = parseInt(document.getElementById("txtempvariableincome").value);
     if (isNaN(b) == true) {
         b = 0;
     }
     var c = parseInt(document.getElementById("txtempallowanceincome").value);
     if (isNaN(c) == true) {
         c = 0;
     }
     var d = parseInt(document.getElementById("txtempadditionalincome").value);
     if (isNaN(d) == true) {
         d = 0;
     }
     document.getElementById("txtemptotalincome").value = a + b + c + d;
});

$('#txtempallowanceincome').change(function() {
	var a, b, c, d;
	a = parseInt(document.getElementById("txtempmonthlyincome").value);
         
 if (isNaN(a) == true) {
         a = 0;
     }
     var b = parseInt(document.getElementById("txtempvariableincome").value);
     if (isNaN(b) == true) {
         b = 0;
     }
     var c = parseInt(document.getElementById("txtempallowanceincome").value);
     if (isNaN(c) == true) {
         c = 0;
     }
     var d = parseInt(document.getElementById("txtempadditionalincome").value);
     if (isNaN(d) == true) {
         d = 0;
     }
     document.getElementById("txtemptotalincome").value = a + b + c + d;
});

$('#txtempadditionalincome').change(function() {
	var a, b, c, d;
	a = parseInt(document.getElementById("txtempmonthlyincome").value);
         
 if (isNaN(a) == true) {
         a = 0;
     }
     var b = parseInt(document.getElementById("txtempvariableincome").value);
     if (isNaN(b) == true) {
         b = 0;
     }
     var c = parseInt(document.getElementById("txtempallowanceincome").value);
     if (isNaN(c) == true) {
         c = 0;
     }
     var d = parseInt(document.getElementById("txtempadditionalincome").value);
     if (isNaN(d) == true) {
         d = 0;
     }
     document.getElementById("txtemptotalincome").value = a + b + c + d;
});


$('#drpemploymentstatus').change(function() {

	document.getElementById("empsal").style.display="none";
	document.getElementById("empself").style.display="none";

	var item=$(this);
    var Empstatus = item.val();
	
	if (Empstatus == "Self Employed") 
	{
		document.getElementById("empself").style.display="block";
	}
	else
	{
		document.getElementById("empsal").style.display="block";
	}
	 
 }); 

$('#drpoccupationtype').change(function() {

    var item=$(this);
    var Empstatus = item.val();
    
    if (Empstatus == "S") 
    {
        document.getElementById("divnaturebusiness").style.display="block";
        document.getElementById("divtypeentity").style.display="block";
        document.getElementById("divownershippercent").style.display="block";
    }
    else
    {
        document.getElementById("divnaturebusiness").style.display="none";
        document.getElementById("divtypeentity").style.display="none";
        document.getElementById("divownershippercent").style.display="none";
    }
     
 });

/**** // Key Press Functions Starts //   ****/

$('#txtfirstname').keypress(function (key) {
    if ((key.charCode >= 65 && key.charCode <= 90) ||
        (key.charCode >= 97 && key.charCode <= 122) || key.charCode == 32 ) return true;
    else return false;
});

$('#txtmiddlename').keypress(function (key) {
    if ((key.charCode >= 65 && key.charCode <= 90) ||
        (key.charCode >= 97 && key.charCode <= 122) || key.charCode == 32) return true;
    else return false;
});

$('#txtlastname').keypress(function (key) {
    if ((key.charCode >= 65 && key.charCode <= 90) ||
        (key.charCode >= 97 && key.charCode <= 122) || key.charCode == 32) return true;
    else return false;
});

$('#txtnationality').keypress(function (key) {
    if ((key.charCode >= 65 && key.charCode <= 90) ||
        (key.charCode >= 97 && key.charCode <= 122) || key.charCode == 32) return true;
    else return false;
});

$('#txtmobilenumber').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});

$('#txtmonthlyincome').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});

$('#companyname').keypress(function (key) {
    if ((key.charCode >= 65 && key.charCode <= 90) ||
        (key.charCode >= 97 && key.charCode <= 122) || key.charCode == 32) return true;
    else return false;
});

$('#txtMobileOTP').keypress(function (key) {
    if ((key.charCode >= 48 && key.charCode <= 57) || key.charCode == 45) return true;
    else return false;
});

$('#txtpassportnumber').keypress(function (key) {
        if ((key.charCode >= 48 && key.charCode <= 57) || (key.charCode >= 65 && key.charCode <= 90) ||
            (key.charCode >= 97 && key.charCode <= 122)) return true;
        else return false;
});

$('#txtemiratesid').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57 && key.charCode <=189) return true;
    else return false;
});

$('#txtvisano').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtyrsinuae').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtmonthsinuae').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtcardlimit').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtidaccname').keypress(function (key) {
        if ((key.charCode >= 48 && key.charCode <= 57) || (key.charCode >= 65 && key.charCode <= 90) ||
            (key.charCode >= 97 && key.charCode <= 122)) return true;
        else return false;
});

$('#companyname').keypress(function (key) {
    if ((key.charCode >= 65 && key.charCode <= 90) ||
        (key.charCode >= 97 && key.charCode <= 122) || key.charCode == 32 ) return true;
    else return false;
});

$('#txtempmonthlyincome').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtempallowanceincome').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtrelationshipvalueconstit').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtrelationshipvalue').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});
$('#txtempvariableincome').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtempadditionalincome').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtemptotalincome').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

$('#txtownership').keypress(function (key) {
    if ((key.charCode >= 65 && key.charCode <= 90) ||
        (key.charCode >= 97 && key.charCode <= 122) || key.charCode == 32 ) return true;
    else return false;
});

$('#txtmonthlycash').keypress(function (key) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
});

/**** // Key Press Functions Ends //   ****/


/**** // Card Selection Starts // *****/

$( "#categorynextbtn" ).click(function() {
	 if($("#catergoryhide").hasClass("selectedcat") && $("#catergoryhide").val() != -1) {
	 	$("#catergoryerror").removeClass("error");
	 	 document.getElementById("categoryselection").style.display="none";
		 document.getElementById("featureselection").style.display="block";
	  }
	  else if($("#catergoryhide").hasClass("selectedcat") && $("#catergoryhide").val() >= 0) {
		 $("#catergoryerror").removeClass("error");
	  }
	  else {
	  	$("#catergoryerror").addClass("error");
	  }
});

$( "#categorycancelbtn" ).click(function() {
	document.getElementById("categoryselection").style.display="block";
	document.getElementById("featureselection").style.display="none";
});

$( "#featurenxtbtn" ).click(function() {
	
	 if($("#featureshide").hasClass("selectedfea") && $("#featureshide").val() != -1) {
	 	$("#featureserror").removeClass("error");
	 	 document.getElementById("featureselection").style.display="none";
		 document.getElementById("compare2").style.display="block";
	  }
	  else if($("#featureshide").hasClass("selectedfea") && $("#featureshide").val() >= 0) {
		 $("#featureserror").removeClass("error");
	  }
	  else {
	  	$("#featureserror").addClass("error");
	  }
});

$( "#featurebackbtn" ).click(function() {
	document.getElementById("categoryselection").style.display="block";
	  document.getElementById("featureselection").style.display="none";
});

$( "#featurescancelbtn" ).click(function() {
	document.getElementById("categoryselection").style.display="block";
	document.getElementById("featureselection").style.display="none";
});

$( "#cardsbackbtn" ).click(function() {
	document.getElementById("featureselection").style.display="block";
	  document.getElementById("compare2").style.display="none";
});

$( "#cardscancelbtn" ).click(function() {
	document.getElementById("categoryselection").style.display="block";
	document.getElementById("featureselection").style.display="none";
	 document.getElementById("compare2").style.display="none";
});

/**** // Card Selection Ends // *****/

/**** // on Click Events Starts // ****/

$("#Pernext").click(function(){
	$("input.datepickerbefore").datepicker( "option", "dateFormat", "yy-mm-dd" );
	if($("#section1").valid())
	{
		$( "input.datepickerbefore" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
		sec1Valid();
	}
	else {
		$( "input.datepickerbefore" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	
});


/*$("#Pernext").click(function() {
    //alert('hi am here')
		$("input.datepickerbefore").datepicker( "option", "dateFormat", "yy-mm-dd" );
		 if($("#section1").valid())
         { 
		 	$( "input.datepickerbefore" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
		  	//sec4valid();
		  	sec1submit();
		}else{
			$( "input.datepickerbefore" ).datepicker( "option", "dateFormat", "dd-mm-yy" );		}
});*/

$("#edunext").click(function() {
	if($("#section2").valid()){ 
	  	sec2Valid();
	}
});

$("#nonindvfournext").click(function() {
		if($("#section4").valid()){  
		  	sec4valid();
		  	//sec4submit();
		}
});
$("#nonindvfivenext").click(function() {
	$("input.datepicker3").datepicker( "option", "dateFormat", "yy-mm-dd" );
		if($("#section5").valid()){ 
			$( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" ); 
		  	sec5valid();
		  	//sec5submit();
		}
		else{
			$( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" );		}
});


$("#nonindvfiveback").click(function(){
    $("#collapse5").collapse("hide");
    $("#collapse4").collapse("show");   
});
$("#nonindsevenback").click(function(){
    $("#collapse7").collapse("hide");
    $("#collapse6").collapse("show");   
    $("#collapse5").collapse("hide");   
});



$("#pass_upd").click(function()
{
	
	$("input.datepicker3").datepicker( "option", "dateFormat", "yy-mm-dd" );
	if($('#section10').valid())
	{
			
		////sec11submit();
		//window.location= "passport.cfm";

	if($("#UAEVisa").hasClass("uploaderror"))
	{
		$("#UAEVisa").removeClass("uploaderror");
	}
	if($("#section10").valid())
	{  
		//$("#hdnuaeresvisa").val("uploaded");
		if($("#txtuaeresvisafile").val() !="")
		{
			//$("#hdnuaeresvisa").val("uploaded");
		}
	  	else
	  	{
	  		$("#hdntxtuaeresvisafile").val("");
	  	}
		
	  	var sendvar="visanext"
	  	IsValid_Ajax_Visa_Sec10(sendvar);
		$( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	else 
	{
		if($("#txtuaeresvisafile").hasClass("error"))
		{
			$("#UAEVisa").addClass("uploaderror");
		}
		$( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	}
	else 
	{
		$( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	
});
$("#pass_nxt").click(function()
{
		window.location= "/eng/kyc/cdd/cdd-passport/";
});



/*$("#nonindvfivenext").click(function(){
    $("#collapse5").collapse("hide");
    $("#collapse6").collapse("show");   
});*/

$("#nonindsixback").click(function(){
    $("#collapse6").collapse("hide");
    $("#collapse5").collapse("show");   
});

$("#nbdtonenext").click(function()
{
	$("input.datepicker1").datepicker( "option", "dateFormat", "yy-mm-dd" );
	if($('#section13').valid()) 
	{
    	//sec1submit();
    	IsValid_Ajax_PhysicalAddressNonInd_Company_Sec13();
    	$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	else {
		$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
});

$("#nbdttwoback").click(function()
{
	$("#collapse1").collapse("hide");	
	$("#collapse").collapse("show");
});

/*$("#nbdttwonext").click(function()
{
	$("input.datepicker1").datepicker( "option", "dateFormat", "yy-mm-dd" );
    if($('#section14').valid()) 
	{
		
		if($("#txtuploadfile_trd").val() !="")
		{
			$("#hdntxtuploadfile_trd").val("uploaded");
		}
	  	else
	  	{
	  		$("#hdntxtuploadfile_trd").val("");
	  	}
		IsValid_Ajax_PhysicalAddressNonInd_CompanyTLnext_Sec14();
    	//sec2submit();
    	$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	else {
		$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}

});*/


/*$("#nbdtthreenext").click(function(){
    if($('#section15').valid()) 
	{
    	sec3submit();
	}   
});
*/

$("#nbdtthreeback").click(function(){
    $("#collapse2").collapse("hide");
    $("#collapse1").collapse("show");   
});


$("#nbdtfourback").click(function(){
    $("#collapse3").collapse("hide");
    $("#collapse2").collapse("show");
	$("#nbdtfourback").addClass("displaynone");
	$("#crsfat_nxt").css("display","block");
	$("#crsfat_upd").css("display","none");
});

$("#nbdtfournext").click(function()
{
	if($('#section16').valid()) 
	{
    	/*sec16submit();
		$("#collapse16").collapse("hide");
    	$("#collapse17").collapse("show");*/
		
	}
});

$("#proofaddressback").click(function()
{
	$("#collapse18").collapse("hide");
    $("#collapse17").collapse("show"); 
	$("#crs_nxt").css("display","block");
	$("#crs_upd").css("display","none");
	$("#proofaddressback").addClass("displaynone");
});




$("#transindnext").click(function(){
		if($("#section3").valid()){ 
		  	sec3Valid();
		  	//$("#cdd_nxt").css("display","none");
		  	//$("#cdd_upd").css("display","block");
			//$("#divTooltip").css("display","none");
			
		  	//sec3submit();
		}
});

$("#customerindnext").click(function(){
	$("#collapse1").collapse("hide");	
	$("#collapse2").collapse("hide");	
	$("#collapse3").collapse("hide"); 	
	$("#collapse4").collapse("show"); 	
	$("#heading2a").removeClass("accodheader");
	$("#heading2").removeClass("accodheader");	
	$("#heading3").removeClass("accodheader");
	$("#heading3a").removeClass("accodheader"); 
	$("#heading4").removeClass("accodheader");
	$("#heading4a").removeClass("accodheader"); 
	//$("#heading3").removeClass("diableacc");	
	//$("#productprogress3").addClass("displayblock");
	//$("#productprogress3").removeClass("displaynone");
	//$("#productprogress2").removeClass("displayblock");
	//$("#productprogress2").addClass("displaynone");
	$("#custindback").addClass("displayblock");
	//$("#custindback").removeClass("displaynone");
		
	$("#cdd_nxt").css("display","none");
	$("#cdd_upd").css("display","block");
	$("#divTooltip").css("display","none");
			
		  	//sec3submit();
});

$("#antiindback").click(function(){
	$("#collapse2").collapse("show");
	$('#collapse3').collapse("hide");
	$("#antiindback").addClass("displaynone");
	$("#cdd_nxt").css("display","block");
	$("#cdd_upd").css("display","none");
});

$("#custindback").click(function(){
	$("#collapse3").collapse("show");
	$('#collapse4').collapse("hide");
	$("#custindback").removeClass("displayblock");
	$("#custindback").addClass("displaynone");
	$("#cdd_nxt").css("display","block");
	$("#cdd_upd").css("display","none");
});

$("#tradeback").click(function(){
	$("#collapse").collapse("show");
	$('#collapse1').collapse("hide");
	$("#tradeback").addClass("displaynone");
	$("#incorp_nxt").css("display","block");
	$("#incorp_upd").css("display","none");

});

$("#memeback").click(function(){
	$("#collapse24").collapse("show");
	$('#collapse25').collapse("hide");
	$("#memeback").addClass("displaynone");
	$('#update_go_address').html('Address &gt; &gt;');
});

$("#antiindnext").click(function(){
		if($("#section25").valid()){ 
		  window.location.href = '/eng/kyc/cdd/cdd-emiratesid/';
		}
});



$("#termsnext").click(function() {
	if($("#section7").valid()){ 
	  	//window.location.href = 'Thankyou.cfm';
	  	document.getElementById("page5").style.display="block";
		document.getElementById("page4").style.display="none";
	}
});

$("#noteligiblenext").click(function(){
	  	document.getElementById("page7").style.display="block";
		document.getElementById("page6").style.display="none";
});

$("#prodoffnext").click(function(){
	if($("#hdnprodradio").val() != ""){ 
	  	//window.location.href = 'Thankyou.cfm';
	  	$("#sec8error").removeClass("error");
	  	document.getElementById("page6").style.display="block";
		document.getElementById("page5").style.display="none";
		addsecopen();
	}
	else {
		$("#sec8error").addClass("error");
	}
});

$("#addpernext").click(function(){
	if($("#Section9").valid()){  
		  	sec9submit();
		}
});
$("#visa_upd").click(function(){
	if($("#Section9").valid()){  
		  	sec9submit();
		}
});

$("#addrefnext").click(function(){
	sec10submit();
});

$("#addempnext").click(function(){
	if($("#section11").valid()){ 
		corrsecopen();
		sec11submit();
	}
});

$("#addunlistempnext").click(function(){
	if($("#section12").valid()){ 
		document.getElementById("page8").style.display="block";
		document.getElementById("page7").style.display="none";
	}
});

/*$("#officenext").click(function(){
	if($("#section13").valid()){ 
		sec13submit();
	}
});

$("#residentnext").click(function(){
	sec14submit();
});

$("#homenext").click(function(){
	if($("#section15").valid()){ 
		prodsecopen();
		document.getElementById("page9").style.display="block";
		document.getElementById("page8").style.display="none";
	}
});

$("#Productnext").click(function(){
	if($("#section16").valid()){ 
		sec16submit();
	}
});

$("#carddnext").click(function(){
	if($("#section17").valid()){ 
		docsecopen();
		sec17submit();
	}
});

$("#docnext").click(function(){
	sec18submit();
});
*/
$("#previewnext_ind").click(function(){
	if($("#sectionpreview").valid()){ 
		////alert("valid");
	  //	window.location.href = 'Thankyou.cfm';
	  $(".presubmit").hide();
	  submitIndCDD();
	  //.accordbtn=display.hide();
	}
});

$("#previewnext_nonind").click(function(){
	if($("#sectionpreview").valid()){ 
		////alert("valid");
	  //	window.location.href = 'Thankyou.cfm';
	  $(".presubmitNon").hide();
	  submitNonIndCDD();
	}
});


$("#Perback").click(function(){
	location.href = 'Primary-Personal.cfm';
});

$("#eduback").click(function(){
    $("#collapse").collapse("show");   
    $("#collapse1").collapse("hide");
});


$("#nonindsixnext").click(function(){
// sec4submit();
	if($("#section6").valid())
	{  
			sec6valid();
		  	//sec6submit();  
    }
});

/*$("#nonindsevennext").click(function(){
sec5submit();
    $("#collapse7").collapse("hide");
    $("#collapse5").collapse("show");   
});*/

$("#nonindsevennext").click(function()
{
	if($("#section7").valid())
	{
		sec7valid();
		//sec7submit();
	}
});


/*Navigate to the memorandam page*/
$("#nav_memorand").click(function()
{	
	window.location= "/eng/kyc/cdd/cdd-non-memorandum/";
});

/*$("#update_incorporate").click(function()
{
		if($("#txtuploadfile_trd").hasClass("uploaderror"))
		{
			$("#txtuploadfile_trd").removeClass("uploaderror");
		}
		
	
	if($("#section23").valid())
	{
		
		if($("#txtuploadfile_trd").val() !="")
		{
			$("#hdntxtuploadfile_trd").val("uploaded");
		}
	  	else
	  	{
	  		$("#hdntxtuploadfile_trd").val("");
	  	}

		IsValid_Ajax_Tradelicense_Sec() ;

	}
});*/

$("#update_tradelic").click(function()
{
		$("input.datepicker3").datepicker( "option", "dateFormat", "yy-mm-dd" );
	//alert($('#section14').valid())
    if($('#section23').valid()) 
	{
		
		if($("#txtuploadfile_trd").val() !="")
		{
			$("#hdntxtuploadfile_trd").val("uploaded");
		}
	  	else
	  	{
	  		$("#hdntxtuploadfile_trd").val("");
	  	}
		var sendvar="tradelic"
		IsValid_Ajax_PhysicalAddressNonInd_CompanyTL_Sec14(sendvar);
    	//sec2submit();
    	$( "input.datepicker3" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}
	else {
		$( "input.datepicker1" ).datepicker( "option", "dateFormat", "dd-mm-yy" );
	}

});

$("#certifinext").click(function()
{
	if($("#section24").valid())
	{
		
		if($("#txtuploadfile_incorp").val() !="")
		{
			$("#hdntxtuploadfile_incorp").val("uploaded");
		}
	  	else
	  	{
	  		$("#hdntxtuploadfile_incorp").val("");
	  	}
		IsValid_Ajax_incorporation_Sec() ;
		

	}
});
$("#update_go_address").click(function()
{
	if($("#update_go_address").text()=="ADDRESS >>")
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
	else
	{
		if($("#section25").valid() && $("#section24").valid() )
		{
			if($("#txtuploadfile_memorand").val() !="")
			{
				$("#hdntxtuploadfile_memorand").val("uploaded");
			}
			else
			{
				$("#hdntxtuploadfile_memorand").val("");
			}
			var sendvar="iamnext"
			IsValid_Ajax_association_Sec(sendvar) ;
		}
	}
});

$("#go_address").click(function()
{
	
	window.location = "/eng/kyc/cdd/cdd-address-individual/";
	
});


$("#nonindsevenback").click(function(){
	document.getElementById("page3").style.display="block";
	document.getElementById("page4").style.display="none";

    $("#collapse4").collapse("hide");
    $("#collapse3").collapse("show");   
});

$("#nonindeightback").click(function()
{
    $("#collapse8").collapse("hide");
    $("#collapse7").collapse("show");
	$("#nonindeightback").addClass("displaynone");
	$("#eida_upd").css("display","none");
	$("#eida_nxt").css("display","block");
});

$("#nonindeightback").click(function(){
    $("#collapse5").collapse("hide");
    $("#collapse4").collapse("show");   
});

$("#nonindeightnext").click(function()
{
		//$("#heading7").removeClass("accodheader");
//		$("#heading7a").removeClass("accodheader");	
//		$("#heading8").removeClass("accodheader");
//		$("#heading8a").removeClass("accodheader"); 
//		$("#collapse7").collapse("hide");
//   		$("#collapse8").collapse("hide");
		NonIndMonTranPattern_Sec8Valid();
   		//$("#collapseC").collapse("show");
});

$("#nonindAMTback").click(function()
{
	
    $("#collapseC").collapse("hide");
    $("#collapse8").collapse("show");
	$("#nonindAMTback").removeClass("displayblock");
	$("#nonindAMTback").addClass("displaynone");
	$("#eida_upd").css("display","none");
	$("#eida_nxt").css("display","block");
});

$("#nonindORGnext").click(function()
{
	
	$("#headingO").removeClass("accodheader");
	$("#headingOa").removeClass("accodheader");
    $("#collapseC").collapse("hide");
    $("#collapseO").collapse("show");
	$("#nonindCCDback").removeClass("displaynone");
	$("#nonindCCDback").addClass("displayblock");
	$("#eida_nxt").css("display","none");
	$("#eida_upd").css("display","block");
});

$("#nonindCCDback").click(function()
{
	
    $("#collapseO").collapse("hide");
    $("#collapseC").collapse("show");
	$("#nonindCCDback").removeClass("displayblock");
	$("#nonindCCDback").addClass("displaynone");
	$("#eida_upd").css("display","none");
	$("#eida_nxt").css("display","block");
});

$("#transindback").click(function(){
	$("#collapse1").collapse("show");
	$('#collapse2').collapse("hide");
});

$("#callback").click(function(){
	var radioValue = $("input[name='options']:checked").val();
	if (radioValue == "yes")
	{
		document.getElementById("newapp2").style.display="block";
		document.getElementById("newapp1").style.display="none";
	}
	else
	{
		document.getElementById("page2").style.display="none";
		document.getElementById("page1").style.display="block";
	}
});

$("#newback").click(function(){
	var radioValue = $("input[name='options']:checked").val();
	if (radioValue == "yes"){
		document.getElementById("newapp2").style.display="block";
		document.getElementById("newapp1").style.display="none";
	}
	else {
		document.getElementById("page2").style.display="none";
		document.getElementById("page1").style.display="block";
	}
});

$("#termsback").click(function(){
	document.getElementById("page3").style.display="block";
	document.getElementById("page4").style.display="none";
	$("#collapse2").collapse("hide");	
	$("#collapse3").collapse("show");
});

$("#prodoffback").click(function(){
	document.getElementById("page4").style.display="block";
	document.getElementById("page5").style.display="none";
});

$("#noteligibleback").click(function(){
	document.getElementById("page5").style.display="block";
	document.getElementById("page6").style.display="none";
});

$("#addperback").click(function(){
	document.getElementById("page6").style.display="block";
	document.getElementById("page7").style.display="none";
});

$("#addrefback").click(function(){
	$("#collapse9").collapse("show");
	$('#collapse10').collapse("hide");
});

$("#addempback").click(function(){
	$("#collapse10").collapse("show");
	$('#collapse11').collapse("hide");
});

$("#addunlistempback").click(function(){
	$("#collapse11").collapse("show");
	$('#collapse12').collapse("hide");
});

$("#officeback").click(function(){
	document.getElementById("page7").style.display="block";
	document.getElementById("page8").style.display="none";
});

$("#residentback").click(function(){
	$("#collapse13").collapse("show");
	$('#collapse14').collapse("hide");
});

$("#homeback").click(function(){
	$("#collapse14").collapse("show");
	$('#collapse15').collapse("hide");
});

$("#Productback").click(function(){
	document.getElementById("page8").style.display="block";
	document.getElementById("page9").style.display="none";
});

$("#carddback").click(function(){
	$("#collapse16").collapse("show");
	$('#collapse17').collapse("hide");
});

$("#docback").click(function(){
	$("#collapse17").collapse("show");
	$('#collapse18').collapse("hide");
});

$(".btncancel").click(function(){
	cancelapp();
});

$("#cancelyes").click(function(){
	location.href = '/eng/kyc/cdd/cdd-authentication/';
});

$("#cancelno").click(function(){
	$('#exampleModalLong').modal('hide');
});


$(".submit_cddind,.visa_ind,.passport_ind,.phyaddress_ind,.emiratesid_ind,.fatca_ind,.iam_ind").click(function(){
	//var getid=$(this).attr("id");
//	if(getid=='submit_eida')
//	{
//		var sendvar='submisson_eida'
//		$.when(IsValid_Ajax_EmirateID_Sec09(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success' || checkform1_errors["errors"]=='false')
//					{
//						submitIndCDD();
//					}
//		});
//	}
//	else if(getid=='submit_visa')
//	{
//		var sendvar='submisson_visa'
//		$.when(IsValid_Ajax_Visa_Sec10(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success' || checkform1_errors["errors"]=='false')
//					{
//						submitIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_passport')
//	{
//		var sendvar='submisson_passport'
//		$.when(IsValid_Ajax_Passport_Sec12(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success' || checkform1_errors["errors"]=='false')
//					{
//						submitIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_addind')
//	{
//		var sendvar='submisson_address'
//		$.when(IsValid_Ajax_PhysicalAddressIndProof_Sec18(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success' || checkform1_errors["errors"]=='false')
//					{
//						submitIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_fatcaindv')
//	{
//		var sendvar='submisson_fatca'
//		$.when(IsValid_Ajax_CRSFATCAInd_Sec19(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					//alert(checkform1_errors["errors"])
//					var check_sts=checkform1_errors["errors"];
//					if(check_sts=='Success' || check_sts==false)
//					{
//						//alert(1)
//						submitIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_IndCDD')
//	{
//		submitIndCDD();
//	}

	window.location.href='/eng/kyc/cdd/kyc-review/';
	//submitIndCDD();
});

$(".submit_CDDnonInd,.visa_nonind,.passport_nonind,.phyaddress_nonind,.emiratesid_nonind,.tradelicense_nonind,.fatca_nonind,.iam_nonind").click(function(){
	////var getid=$(this).attr("id");
//	if(getid=='submit_eida')
//	{
//		var sendvar='submisson_eida'
//		$.when(IsValid_Ajax_EmirateID_Sec09(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success')
//					{
//						submitNonIndCDD();
//					}
//		});
//	}
//	else if(getid=='submit_iamind')
//	{
//		var sendvar='submisson_iam'
//		$.when(IsValid_Ajax_association_Sec(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success')
//					{
//						submitNonIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_tradeli')
//	{
//		var sendvar='submisson_tradeli'
//		$.when(IsValid_Ajax_PhysicalAddressNonInd_CompanyTL_Sec14(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success')
//					{
//						submitNonIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_visa')
//	{
//		var sendvar='submisson_visa'
//		$.when(IsValid_Ajax_Visa_Sec10(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success')
//					{
//						submitNonIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_passport')
//	{
//		var sendvar='submisson_passport'
//		$.when(IsValid_Ajax_Passport_Sec12(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success')
//					{
//						submitNonIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_addnonind')
//	{
//		var sendvar='submisson_nonaddress'
//		$.when(IsValid_Ajax_PhysicalAddressNonInd_AddressProof_Sec16(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success')
//					{
//						submitNonIndCDD();
//					}
//		});
//		
//	}
//	else if(getid=='submit_fatcaindv')
//	{
//		var sendvar='submisson_fatca'
//		$.when(IsValid_Ajax_CRSFATCAInd_Sec19(sendvar)).then(function(result) {
//			var checkform1_errors = $.parseJSON(result);
//					if(checkform1_errors["errors"]=='Success')
//					{
//						submitNonIndCDD();
//					}
//		});
//		
//	}
//else if(getid=='submit_nonIndCDD')
//	{
//		alert();
//		submitNonIndCDD();
//	}

	window.location.href='/eng/kyc/cdd/kyc-review/';
	//submitNonIndCDD();
});
/**** // on Click Events Ends // ****/


$('#drpemploymentstatus').change(function() {

    document.getElementById("empsal").style.display="none";
    document.getElementById("empself").style.display="none";

    var item=$(this);
    var Empstatus = item.val();
    
    if (Empstatus == "Self Employed") 
    {
        document.getElementById("empself").style.display="block";
    }
    else
    {
        document.getElementById("empsal").style.display="block";
    }
     
 });




/*CALCULATION FOR THE Transaction Details DONE HERE!*/

$('.details').delegate('.amount','keyup',function()
{
    total();
});
$('.details').delegate('.amount1','keyup',function()
{
    total_amount1();
});

$('.details').delegate('.fretot','keyup',function()
{
    total_fretot();
});
$('.details').delegate('.fretot1','keyup',function()
{
    total_fretot1();
});

function total()
        {
           var gg = 0;
           $('.amount').each(function(i,e)
            {
                var amt = $(this).val()-0;
                    gg += amt;
            });

               $('input[name=txtmnth9]').val(gg);
          
        }
function total_amount1()
        {
           var gg = 0;
           $('.amount1').each(function(i,e)
            {
                var amt = $(this).val()-0;
                    gg += amt;
            });

               $('input[name=txtmnth10]').val(gg);
          
        }
function total_fretot()
        {
           var gg = 0;
           $('.fretot').each(function(i,e)
            {
                var amt = $(this).val()-0;
                    gg += amt;
            });

               $('input[name=txtfrequen9]').val(gg);
          
        }

function total_fretot1()
        {
           var gg = 0;
           $('.fretot1').each(function(i,e)
            {
                var amt = $(this).val()-0;
                    gg += amt;
            });

               $('input[name=txtfrequen10]').val(gg);
          
        }




/*Add more  for Nationalities*/

$('#addnationailty').click(function() 
{
	var add_more_nationality = $("input[name=txtnationality1]").val();

	if (add_more_nationality != '')
	{
		
		document.getElementById("add_multiple_row").style.display="block";
		var tr = '<tr >'+
				   '<td>'+ add_more_nationality +'</td>'+
				   '<input type="hidden" name="new_nationalities" value="'+add_more_nationality +'">'+
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove" style="padding: 3px 0px;">Remove</button></td>'+
		  		 '</tr>';
		$('.add_multiple_nationality').append(tr);
	}

});

// delete row 
		$('.add_multiple_nationality').delegate('.remove','click',function(){
				var con = confirm("Do you want to remove it ?");
				if(con)
				{
					$(this).parent().parent().remove();
					 var totalRowCount = $("#check_row_of_nationalities tr").length;
		             var rowCount = $("#check_row_of_nationalities td").closest("tr").length;
		            if (rowCount == 0) 
		            {
		            	document.getElementById("add_multiple_row").style.display="none";
		            }
				}
		});
// end 
/*function CountRows() {
        var totalRowCount = 0;
        var rowCount = 0;
        var table = document.getElementById("check_rows");
        var rows = table.getElementsByTagName("tr")
        for (var i = 0; i < rows.length; i++) {
            totalRowCount++;
            if (rows[i].getElementsByTagName("td").length > 0) {
                rowCount++;
            }
        }
        var message = "Total Row Count: " + totalRowCount;
        message += "\nRow Count: " + rowCount;
        //alert(message);
    }*/

$('#addmorebanks').click(function() 
{
	var bankname = $("input[name=bankname1]").val();
	var txtrelationshipvalue = $("input[name=txtrelationshipvalue1]").val();
	var txtbankingsince = $("input[name=txtbankingsince1]").val();
	var d = new Date(txtbankingsince);
	
	if (bankname != '' && txtrelationshipvalue != '' && txtbankingsince != '')
	{
		
		var dataString='bankname='+bankname+'&txtrelationshipvalue='+txtrelationshipvalue+'&txtbankingsince='+txtbankingsince;
		console.log(dataString);	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=add_Bank",
			type: "POST",
			data:dataString,
			//processData: false,
			//contentType: false,
			success: function(response)
			{
				var parsedjson = $.parseJSON(response);
				var new_bankID=parsedjson["bankid"];
				var txtbankingsince = d.getFullYear();
				document.getElementById("add_multiple_banks").style.display="block";
				$("#existingbankcnt").val("1");
				var tr = '<tr>'+
						   '<td>'+ bankname +'</td><input type="hidden" name= "bankname" id= "bankname" value="'+bankname +'">'+
						   '<td>'+ txtrelationshipvalue +'</td><input type="hidden" id= "txtrelationship" name= "txtrelationship" value="'+txtrelationshipvalue +'"></td>'+
						   '<td>'+ txtbankingsince +'</td><input type="hidden" id= "txtbankingsince" name= "txtbankingsince" value="'+txtbankingsince +'"></td>'+
						   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_bank" id="'+ new_bankID +'" style="padding: 0px 0px; ">Remove</button></td>'+
						 '</tr>';
				$('.add_more_banks').append(tr);
			}
		});
		
	}
	$("#bankname1").val('');
	$("#bankname_val").val('');
	$("#txtrelationshipvalue1").val('');
	$("#txtbankingsince1").val('');
});

// delete row 
		$('.add_more_banks').delegate('.remove_bank','click',function(){
				//var con = confirm("Do you want to remove it ?");
				
			var get_bid=$(this).attr("id");	
			var getclosetr=$(this).closest("tr")
			$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_Bank",
				type: "POST",
				data: 'bank_id='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
						var con = true;
						if(con)
						{
							//$('table#check_rows_of_bank tr#'+get_bid).remove();

							//var getclosetr=$('#get_bid').closest("tr");
							getclosetr.remove();
							var totalRowCount = $("#check_rows_of_bank tr").length;
							var rowCount = $("#check_rows_of_bank td").closest("tr").length;
							if (rowCount == 0) 
							{
								document.getElementById("add_multiple_banks").style.display="none";
							}
						}
					}
				}
			});

				
				
		});
// end 



/*non Individual account functionalites*/

$('#add_name_of_account').click(function() 
{
	var txtnameofaccount = $("input[name=txtnameofaccount]").val();
	if (txtnameofaccount != '')
	{
		document.getElementById("account_name_new_rows").style.display="block";
		var tr = '<tr>'+
				   '<td>'+ txtnameofaccount +'</td><input type="hidden" name= "name_of_account" value="'+txtnameofaccount +'">'+				   
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_account_name" style="padding: 0px 0px; ">Remove</button></td>'+		  		 '</tr>';
		$('.add_multiple_name_of_account').append(tr);
	}

});
// delete row 
		$('.add_multiple_name_of_account').delegate('.remove_account_name','click',function(){
				var con = confirm("Do you want to remove it ?");
				if(con)
				{
					$(this).parent().parent().remove();
					 var totalRowCount = $("#check_row_of_account tr").length;
		             var rowCount = $("#check_row_of_account td").closest("tr").length;
		            if (rowCount == 0) 
		            {
		            	document.getElementById("account_name_new_rows").style.display="none";
		            }
				}
		});
// end 

$('#constitbankdetails').click(function() 
{
	//alert('asdfasdf')
	var txtbanknameconstit = $("input[name=bankname2]").val();
	var txtbankingsinceconstit = $("input[name=txtbankingsinceconstit1]").val();
	var d = new Date(txtbankingsinceconstit);
	var txtrelationshipvalueconstit = $("input[name=txtrelationshipvalueconstit1]").val();
	if (txtbankingsinceconstit != '' && txtrelationshipvalueconstit != '' && txtbanknameconstit != '')
	{
		
		var dataString='txtbankNameCC='+txtbanknameconstit+'&txtbankingSinceCC='+txtbankingsinceconstit+'&txtRelationshipCC='+txtrelationshipvalueconstit;
		console.log(dataString);	
		$.ajax({
			url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=add_Bank",
			type: "POST",
			data:dataString,
			//processData: false,
			//contentType: false,
			success: function(response)
			{
				var parsedjson = $.parseJSON(response);
				var new_bankID=parsedjson["bankid"];
				var txtbankingsinceconstit = d.getFullYear();
		// //alert('am inside')
		document.getElementById("constitution_new_rows").style.display="block";
		var tr = '<tr>'+
				   '<td>'+ txtbanknameconstit +'</td><input type="hidden" name= "constit_date" value="'+txtbanknameconstit +'">'+				   
				   '<td>'+ txtrelationshipvalueconstit +'</td><input type="hidden" name= "constit_txtrelationshipvalueconstit" value="'+txtrelationshipvalueconstit +'">'+				   
				   '<td>'+ txtbankingsinceconstit +'</td><input type="hidden" name= "constit_bankname_valconstit" value="'+txtbankingsinceconstit +'">'+				   
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_bankname_valconstit" id="'+ new_bankID +'" style="padding: 0px 0px; ">Remove</button></td>'+'</tr>';
		$('.add_multiple_bank_names').append(tr);
	}
		});
		
	}
	$("#bankname2").val('');
	$("#bankname_val").val('');
	$("#txtrelationshipvalueconstit1").val('');
	$("#txtbankingsinceconstit1").val('');

});
// delete row 
		$('.add_multiple_bank_names').delegate('.remove_bankname_valconstit','click',function(){
				//var con = confirm("Do you want to remove it ?");
			var get_bid=$(this).attr("id");	
			var getclosetr=$(this).closest("tr")

			$.ajax({
				url:"/eng/cfc/cdd/GeneralFunctions.cfc?method=remove_Bank",
				type: "POST",
				data: 'bank_id='+get_bid,
				//processData: false,
				//contentType: false,
				success: function(response)
				{
					var parsedjson = $.parseJSON(response);
					var check_status=parsedjson["action"];
					if(check_status=='success')
					{
						var con = true;
				if(con)
				{
					//$(this).parent().parent().remove();
					getclosetr.remove();
					 var totalRowCount = $("#check_row_of_bank_details tr").length;
		             var rowCount = $("#check_row_of_bank_details td").closest("tr").length;
		            if (rowCount == 0) 
		            {
		            	document.getElementById("constitution_new_rows").style.display="none";
							}
						}
					}
				}
			});

				
				
		});
// end 



/*Emirates functionalities done here!*/

/*$('#emiratesaddmore').click(function() 
{
	var txtemidno = $("input[name=txtemidno]").val();
	var txtpassexpdate = $("input[name=txtpassexpdate]").val();
	
	if (txtemidno != '' && txtpassexpdate != '' )  
	{
		document.getElementById("add_multiple_row_emirates").style.display="block";
		var tr = '<tr>'+
				   '<td>'+ txtemidno +'</td><input type="hidden" name= "txtemidno" value="'+txtemidno +'">'+
				   '<td>'+ txtpassexpdate +'</td><input type="hidden" name= "txtpassexpdate" value="'+txtpassexpdate +'"></td>'+
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_emirates" style="padding: 0px 0px; ">Remove</button></td>'+
		  		 '</tr>';
		$('.add_multiple_emirates').append(tr);
	}
});
*/
// emirates delete row 
/*	$('.add_multiple_emirates').delegate('.remove_emirates','click',function(){
			var con = confirm("Do you want to remove it ?");
			if(con)
			{
				$(this).parent().parent().remove();
				 var totalRowCount = $("#check_row_of_emirates tr").length;
	             var rowCount = $("#check_row_of_emirates td").closest("tr").length;
	            if (rowCount == 0) 
	            {
	            	document.getElementById("check_row_of_emirates").style.display="none";
	            }
			}
	});*/
// end

//alert('stast eib')

/*
//Visa functions
$('#addvisa').click(function() 
{
	var resvisanum = $("input[name=txtuaeresvisano]").val();
	var resvisaexp = $("input[name=txtuaeresvisaexpdate]").val();
	if (resvisanum != '' && resvisaexp != '' )  
	{
		document.getElementById("add_multiple_visa").style.display="block";
		var tr = '<tr>'+
				   '<td>'+ resvisanum +'</td><input type="hidden" name= "resvisanum" value="'+resvisanum +'">'+
				   '<td>'+ resvisaexp +'</td><input type="hidden" name= "resvisaexp" value="'+resvisaexp +'"></td>'+
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_visa" style="padding: 0px 0px; ">Remove</button></td>'+
		  		 '</tr>';
		$('.add_more_visa').append(tr);
	}

});

// delete row 
		$('.add_more_visa').delegate('.remove_visa','click',function(){
				var con = confirm("Do you want to remove it ?");
				if(con)
				{
					$(this).parent().parent().remove();
					 var totalRowCount = $("#check_rows_of_visa tr").length;
		             var rowCount = $("#check_rows_of_visa td").closest("tr").length;
		            if (rowCount == 0) 
		            {
		            	document.getElementById("add_multiple_visa").style.display="none";
		            }
				}
		});
// end
*/
//Address functions

$('#Addaddress').click(function() 
{
	var restype = $("select[name=drpresaddrproof]").val();
	var proofdt = $("input[name=txtdateresaddr]").val();
	if (restype != '' && proofdt != '')  
	{
		document.getElementById("add_multiple_address").style.display="block";
		var tr = '<tr>'+
				   '<td>'+ restype +'</td><input type="hidden" name= "restype" value="'+restype +'"></td>'+
				   '<td>'+ proofdt +'</td><input type="hidden" name= "proofdt" value="'+proofdt +'"></td>'+
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_address" style="padding: 0px 0px; ">Remove</button></td>'+
		  		 '</tr>';
		$('.add_more_address').append(tr);
	}

});

// delete row 
		$('.add_more_address').delegate('.remove_address','click',function(){
				var con = confirm("Do you want to remove it ?");
				if(con)
				{
					$(this).parent().parent().remove();
					 var totalRowCount = $("#check_rows_of_address tr").length;
		             var rowCount = $("#check_rows_of_address td").closest("tr").length;
		            if (rowCount == 0) 
		            {
		            	document.getElementById("add_multiple_address").style.display="none";
		            }
				}
		});
// end

//Passport functions

/*$('#passportaddmore').click(function() 
{
	var passnum = $("input[name=txtpassnumr]").val();
	var passexpdate = $("input[name=txtpasselexpdate]").val();
	if (passnum != '' && passexpdate != '')  
	{
		document.getElementById("add_multiple_passport").style.display="block";
		var tr = '<tr>'+
				   '<td>'+ passnum +'</td><input type="hidden" name= "passnum" value="'+passnum +'"></td>'+
				   '<td>'+ passexpdate +'</td><input type="hidden" name= "passexpdate" value="'+passexpdate +'"></td>'+
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_passport" style="padding: 0px 0px; ">Remove</button></td>'+
		  		 '</tr>';
		$('.add_more_passport').append(tr);
	}

});

// delete row 
		$('.add_more_passport').delegate('.remove_passport','click',function(){
				var con = confirm("Do you want to remove it ?");
				if(con)
				{
					$(this).parent().parent().remove();
					 var totalRowCount = $("#check_rows_of_passport tr").length;
		             var rowCount = $("#check_rows_of_passport td").closest("tr").length;
		            if (rowCount == 0) 
		            {
		            	document.getElementById("add_multiple_passport").style.display="none";
		            }
				}
		});
// end
*/

/*TL and Phy Add Non INDV */

$('#addcrs').click(function() 
{
	var crsval = $("input[name=txtcrs1]").val();
	if (crsval != '')
	{
		document.getElementById("add_multiple_crs").style.display="block";
		var tr = '<tr>'+
				   '<td>'+ crsval +'</td><input type="hidden" name="crs_name" value="'+crsval +'">'+
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_crs" style="padding: 0px 0px; ">Remove</button></td>'+
		  		 '</tr>';
		$('.add_more_crs').append(tr);
	}

});

// delete row 
		$('.add_more_crs').delegate('.remove_crs','click',function(){
				var con = confirm("Do you want to remove it ?");
				if(con)
				{
					$(this).parent().parent().remove();
					 var totalRowCount = $("#check_row_of_crs tr").length;
		             var rowCount = $("#check_row_of_crs td").closest("tr").length;
		            if (rowCount == 0) 
		            {
		            	document.getElementById("add_multiple_crs").style.display="none";
		            }
				}
		});
// end 


$("#twentynxt").click(function()
{
	if($("#section20").valid())
		{ 
		  	//sec19submit();
		}
});


$('#addcrs1').click(function() 
{
	var crsval1 = $("input[name=txtcrs2]").val();
	if (crsval1 != '')
	{
		document.getElementById("add_multiple_crs1").style.display="block";
		var tr = '<tr>'+
				   '<td>'+ crsval1 +'</td><input type="hidden" name="crs1_name" value="'+crsval1 +'">'+
			  	   '<td><button type="button" class="btn btn-block btn-info btn-xs remove_crs1" style="padding: 0px 0px; ">Remove</button></td>'+
		  		 '</tr>';
		$('.add_more_crs1').append(tr);
	}

});

// delete row 
		$('.add_more_crs1').delegate('.remove_crs1','click',function(){
				var con = confirm("Do you want to remove it ?");
				if(con)
				{
					$(this).parent().parent().remove();
					 var totalRowCount = $("#check_row_of_crs1 tr").length;
		             var rowCount = $("#check_row_of_crs1 td").closest("tr").length;
		            if (rowCount == 0) 
		            {
		            	document.getElementById("add_multiple_crs1").style.display="none";
		            }
				}
		});
// end 

/*****KYC*****/
var product = $("#Product").text();

$("#dashheading1a").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-individual/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-non-individual/";
	}
});

$("#dashheading2a").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-emiratesid/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-emiratesid/";
	}
});

$("#dashheading3a").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-visa/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-visa/";
	}
});

$("#dashheading7a").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-passport/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-passport/";
	}
});

$("#dashheading8a").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-address-individual/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-add-non-individual/";
	}
});

$("#dashheading9a").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-fatca-individual/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-fatca-individual/";
	}
});

$("#dashheading10a").click(function() 
{
	if(product == "Individual")
	{
		//window.location= "/eng/kyc/cdd/cdd-non-trade-license/";
	}
	else
	{
		window.location= "/eng/kyc/cdd/cdd-non-trade-license/";
		}
	
});
$("#dashheading11a").click(function() 
{
	if(product == "Individual")
	{
		//window.location= "/eng/kyc/cdd/cdd-non-memorandum/";
	}
	else
	{
		window.location= "/eng/kyc/cdd/cdd-non-memorandum/";
	}
	
});


$(".sideacc").click(function() 
{
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-dashboard/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-dashboard-non/";
	}
});

$(".sideacc1").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-individual/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-non-individual/";
	}
});

$(".sideacc12").click(function() {

		window.location = "/eng/kyc/cdd/cdd-passport/";

});
$(".sideacc11").click(function() {
			window.location = "/eng/kyc/cdd/cdd-non-trade-license/";
});

$("#update_cdd").click(function() {
		update_CDDInd();
		//window.location= "/eng/kyc/cdd/cdd-emiratesid/";
});

$("#update_Noncdd").click(function() {
	update_CDDNonInd();
});

$(".sideacc3").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-visa/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-visa/";
	}
});
$(".sideacc3back").click(function() {
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-visa/";
	}
	else
	{
		window.location = "/eng/kyc/cdd/cdd-visa/";
	}
});

$('.go_passport').click(function()
{
	window.location= "/eng/kyc/cdd/cdd-passport/";
});
$(".sideacc4").click(function()
{
	if(product == "Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-passport/";
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-passport/";
	}
});

$(".sideacc5").click(function() {
	if(product == "Individual")
	{
		/*if($("#section12").valid())
			{ */ 
		window.location= "/eng/kyc/cdd/cdd-address-individual/";
			//}
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-add-non-individual/";
	}
});
$(".sideacc5back").click(function() 
{
	if(product == "Individual")
	{
		/*if($("#section12").valid())
			{ */ 
		window.location= "/eng/kyc/cdd/cdd-address-individual/";
			//}
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-add-non-individual/";
	}
});

$(".sideacc2").click(function() 
{
	
	if(product == "Individual")
	{
		/*if($("#section12").valid())
			{ */ 
		window.location = "/eng/kyc/cdd/cdd-emiratesid/";
			//}
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-emiratesid/";
	}
});

$(".sideacc6").click(function() {
	if(product == "Individual")
	{
		//if($("#section18").valid())
			//{  
			 	sec18submit();
				window.location= "/eng/kyc/cdd/cdd-fatca-individual/";
			//}
	}
	else
	{
		window.location = "/eng/kyc/cdd/cdd-fatca-individual/";
	}
});

$(".sideacc7").click(function() 
{
	if(product == "Non-Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-non-trade-license/";
	}

});

$(".sideacc8").click(function() 
{
	if(product == "Non-Individual")
	{
		window.location= "/eng/kyc/cdd/cdd-non-memorandum/";
	}
});

$(".sideacc9").click(function() 
{
	
	if(product == "Individual")
	{
		/*if($("#section12").valid())
			{ */ 
		window.location = "/eng/kyc/cdd/cdd-customercompliance/";
			//}
	}
	else {
		window.location = "/eng/kyc/cdd/cdd-customercompliance/";
	}
});

$('input:radio[name=addperformmailing]').change(function() {
var value = $(this).val();
$("#hdnaddperformmailing").val(value);
});

$('input:radio[name=ejari]').change(function() {
var value = $(this).val();
if($(this).val()== "yes")
{
	$('input[id=rdonoutilitybillno][value="no"]').prop("checked",true);
	$('input[id=rdootherbankstatementno][value="no"]').prop("checked",true);
	$("#hdnnoutilitybill").val("no");
	$("#hdnotherbankstatement").val("no");
}
$("#hdnejari").val(value);
});
$('input:radio[name=noutilitybill]').change(function() {
var value = $(this).val();
$("#hdnnoutilitybill").val(value);
});

$('input:radio[name=otherbankstatement]').change(function() {
var value = $(this).val();
$("#hdnotherbankstatement").val(value);
});

$('input:radio[name=countryother]').change(function() {
var value = $(this).val();
$("#hdncountryother").val(value);
if(value == "Y")
{
	$("#divtxtmultination").css("display","block");
}
else
{
	$("#divtxtmultination").css("display","none");
}
});
$('input:radio[name=taxresident]').change(function() {
var value = $(this).val();
$("#taxresident").val(value);
if(value == "Y")
{
	$("#divFatca").css("display","block");
}
else
{
	$("#divFatca").css("display","none");
}
});

$('input:radio[name=countryother]').change(function() {
var value = $(this).val();
$("#hdnaddcountryother").val(value);
});