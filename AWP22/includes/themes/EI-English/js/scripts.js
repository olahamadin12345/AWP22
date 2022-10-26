
/*Expandable search*/
//new UISearch( document.getElementById( 'sb-search' ) );

/*Menu Drop Down mouseover content*/
$(document).ready(function() {
$("#mtab1,#mtab2,#mtab3,#mtab4,#mtab5,#mtab6,#mtab7,#mtab8").tabs({
event:'mouseover'  
});
});

/*Drop down menu hover*/
$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});

/*Drop down hyper link*/
$('li.dropdown ul').find('a').on('click', function() {
    window.location = $(this).attr('href');
});

/*Back to top*/
$(document).ready(function(){

  // hide #back-top first
  $("#back-top").hide();
  
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

});


$(document).ready(function () {
    $('.accordion-toggle').on('click', function(event){
      event.preventDefault();
      // create accordion variables
      var accordion = $(this);
      var accordionContent = accordion.next('.accordion-content');
      var accordionToggleIcon = $(this).children('.toggle-icon');
      
      // toggle accordion link open class
      accordion.toggleClass("open");
      // toggle accordion content
      accordionContent.slideToggle(250);
      
      // change plus/minus icon
      if (accordion.hasClass("open")) {
        accordionToggleIcon.html("<i class='fa fa-minus-square-o '></i>");
      } else {
        accordionToggleIcon.html("<i class='fa fa-plus-square-o '></i>");
      }
    });
  
  
  


});

      function openSectionSelectorNav() {
        if(screen.width < 768) {
          document.getElementById("sectionSelectorBlock").style.display = "block";
          document.getElementById("clsButton").style.display = "block";
        }
      }

      function closeSectionSelectorNav() {
        if(screen.width < 768) {
          document.getElementById("sectionSelectorBlock").style.display = "none";
        }
      }
			
		$(document).on('click','ul li',function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
  
  
  
        function openNav() {                       
          if(document.getElementById("mySidepanel").style.width == "" || document.getElementById("mySidepanel").style.width == "0px") {
            document.getElementById("mySidepanel").style.width = "100%";
            document.getElementById("mySidepanel").style.height = "100%";
            document.getElementById("myLogin").style.display = "none";         
          } else {
            document.getElementById("mySidepanel").style.width = "0";
          }
        }

        function closeNav() {
          document.getElementById("mySidepanel").style.width = "0";
          document.getElementById("mySidepanel").style.height = "0";
        }

        function loginClick() {

          var x = document.getElementById("myLogin");

          document.getElementById("mySidepanel").style.width = "0";
          document.getElementById("mySidepanel").style.height = "0";

          if (x.style.display === "none" || x.style.display === "") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }


        window.onload = function()

        {
          var hideLoginDiv=document.getElementById('myLogin');
          var hideMenuDiv=document.getElementById('mySidepanel');
          document.onclick=function(div)
          {

            if(div.target.id !='loginDiv')
            {
            hideLoginDiv.style.display='none';
            }

            /*if(div.target.id !='menuDiv' && div.target.id !='childmenuDiv')
            {
             hideMenuDiv.style.width = "0";
            }*/

          };
        };





