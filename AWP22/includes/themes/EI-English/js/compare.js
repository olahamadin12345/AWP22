// JavaScript Document



//Page Re direct

function fnLangRedirect()
{
var currentlocpath = window.location.pathname;
var arry=currentlocpath.split('en/');
arry[0]=arry[0]+'ar/';
var redirectlocpath =  arry[0] +arry[1] ;
window.location.href = redirectlocpath;
}

//Top Bottom scroll

$("#scroll1").click(function(){
          $('html, body').animate({ scrollTop: 0 }, 'slow');
   })
   
//Compare Packages function : for Displaying Block of Compare Packages
function showCompareBlock(blockPrefix,tabPrefix,xBlock,nBlock,defBlock,proceedHideBlock)
{
	if(proceedHideBlock == true)
	{
	  document.getElementById('mydiv2').style.display = 'none';
	  document.getElementById('mydiv').style.display = 'none';
	  document.getElementById('condition_limit').style.display = 'none';
	  
	}
	else
	{
	 document.getElementById('mydiv2').style.display = 'block';
	 document.getElementById('mydiv').style.display = 'block';
	 document.getElementById('condition_limit').style.display = 'block';
	}


  //alert(document.forms[0].chkpackages_compare.length);
  if(proceedHideBlock!=undefined)
  {  
    if(hidePackageCol(blockPrefix)==false)
    {
      return;
    }
  }

  for(var i=1;i<=nBlock;i++)
  {  
    if(xBlock==i){
      document.getElementById(blockPrefix+i).style.display="block";
      if(tabPrefix!="")
        document.getElementById(tabPrefix+i).className="compareBoxTabOn runTxt";
    }else{
      if(defBlock>0 && defBlock!=i)
      {
        document.getElementById(blockPrefix+i).style.display="none";  
        if(tabPrefix!="")        
          document.getElementById(tabPrefix+i).className="compareBoxTabOff runGrayLtTxt";
      }
    }
  }
  
}


//function hidePackageCol(objCheck,prefBlock,xCol,nRow)
function hidePackageCol(strMainPrefix)
{
  nRow=9;
  
  strName="chkpackages_"+strMainPrefix;
  strPrefix=strMainPrefix+"package";
  strBlockMain="mainblock_"+strMainPrefix;
  
  objName=document.getElementsByName(strName);
  chkObjCount = objName.length;
  intWidth=0; boxWidth=107; cntChecked=0, cntUnChecked=0; 
  
  for(var i=0;i<chkObjCount;i++)
  {  
    if(objName[i].checked==false)
    {  
      document.getElementById(strPrefix+objName[i].value).style.display="none";
      cntUnChecked++;
    }
    else
    {
      
      cntChecked++;
      intWidth=intWidth+boxWidth;
      document.getElementById(strPrefix+objName[i].value).style.display="block";
    }
  }
  
//  marLef = (cntUnChecked * boxWidth) / 2 ;
//  if(chkObjCount==5)
//    marLef = marLef + boxWidth ;
//    
//  document.getElementById(strBlockMain).style.marginLeft=marLef+"px";

  if(cntChecked>=5){
    alert("Please select  only 4 products.");
    document.getElementById('mydiv').style.display = 'block';
	document.getElementById('mydiv2').style.display = 'block';
	 document.getElementById('condition_limit').style.display = 'block';
    return false;
  }
  else if(cntChecked==0){
    alert("Please select atleast 2 products to compare.");
    document.getElementById('mydiv').style.display = 'block';
	 document.getElementById('mydiv2').style.display = 'block';
	  document.getElementById('condition_limit').style.display = 'block';
    return false;
  }
  return true;
  
}