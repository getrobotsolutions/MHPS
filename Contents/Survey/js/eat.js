//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

/*function redirect(){
    window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,60000);
});*/
//-----------------------------------------------------


function LanguageChange(lang)
{
    if(lang === "english")
    {
        eraseCookie("Spanish");
        writeCookie("CurrentLanguage", "English", 30);
        document.getElementById("btn_english").style.backgroundColor = "white";
        document.getElementById("btn_english").style.color = "#FF6600";
        document.getElementById("btn_spanish").style.backgroundColor = "#FF6600";
        document.getElementById("btn_spanish").style.color = "white";
    }
    else if (lang === "spanish")
    {
        eraseCookie("English");
        writeCookie("CurrentLanguage", "Spanish", 30);
        document.getElementById("btn_english").style.backgroundColor = "#FF6600";
        document.getElementById("btn_english").style.color = "white";
        document.getElementById("btn_spanish").style.backgroundColor = "white";
        document.getElementById("btn_spanish").style.color = "#FF6600";
    }
location.reload();
}






$(document).ready(function(){

   $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
   $('.close').click(function () {   
      $('#dialog-overlay1, #dialog-box1').hide();   
      return false;
    });

  $("#btn").click(function () {
    ShowPopup($("#btn").attr('dir'));

    //$("$list1").show();

  });
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));

    //$("$list1").show();

  });
  //$("#form-submit").click(function () {
    //ShowPopup();

    //$("$list1").show();

  //});
  

  $("#form-submit").click(function( e ) {

    /*if($("#name").val()== "")
    {
      alert("Please enter your name.");
      $("#name").focus();
      return false;
    }
    $name=$("#name").val();
    
    var nameReg = /^[a-zA-Z ]+$/;
    if( !nameReg.test( $name ) ) {
    alert("Please enter a valid Name.");
    $("#name").val("");
    $("#name").focus();
    return false;
    }*/

    
    /*if($("#company").val()=="")
    {
      alert("Please enter Company.");
      $("#question").focus();
      return false;
    }
    if($("#city").val()=="")
    {
      alert("Please enter city.");
      $("#question").focus();
      return false;
    }*/

    var radioValue = $('input:radio[name=demo]:checked').val();
    //alert(radioValue);
    if (radioValue==null) {
      alert("Please Select an option.");
      $("#demo").focus();
      return false;
    }
    if (radioValue=='Other' &&  $("#other-text").val()=="") {
      alert("Please specify others.");
      $("#other-text").focus();
      return false;
    }
    
    var radioValue2 = $('input:radio[name=visit]:checked').val();
    //alert(radioValue);
    if (radioValue2==null) {
      alert("Please Select an option1.");
      $("#visit").focus();
      return false;
    }
    if($("#mphs").val()=="")
    {
      alert("Please type your response.");
      $("#mphs").focus();
      return false;
    }
    ShowPopup();
    /*if($("#email").val()== "")
    {
      alert("Please enter a valid email address.");
      $("#email").focus();
      return false;
    }
    
    $email=$("#email").val();
    
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( $email ) ) {
      alert("Please enter a valid email address.");
      $("#email").val("");
      $("#email").focus();
      return false;
    }*/
    /*if($("#properties").val()=="")
    {
      alert("Please enter properties.");
      $("#question").focus();
      return false;
    }
    $properties=$("#properties").val();
    var nameReg = /^[0-9 ]+$/;
    if( !nameReg.test( $properties ) ) {
      alert("Please enter a number.");
      $("#properties").val("");
      $("#properties").focus();
      return false;
    }*/
  
    });
  $("#form-submit1").click(function(){
    if($("#email").val()== "")
    {
      alert("Please enter a valid email address.");
      $("#email").focus();
      return false;
    }
    
    $email=$("#email").val();
    
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( $email ) ) {
      alert("Please enter a valid email address.");
      $("#email").val("");
      $("#email").focus();
      return false;
    }
    //e.preventDefault();

            var $action = $('#contactForm').prop('action');
            var $data = $('#contactForm').serialize();
            var $this = $('#contactForm');

            $this.prevAll('.alert').remove();

            $.post( $action, $data, function( data ) {

                if( data.response=='error' ){

                    //$this.before( '<div class="alert danger-border"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <i class="mdi mdi-close-box"></i> '+data.message+'</div>' );
                }

                if( data.response=='success' ){
                  $('#dialog-overlay1, #dialog-box1').hide();
                  $("#contactForm")[0].reset();
                  $('#form-success').show();
                  $( "#form-success" ).delay( 10000 ).fadeOut( 400 );
                  //setTimeout(hideSuccessMessage(), 20000);

                }
            }, "json");


       

  });

});
function hideSuccessMessage() {
    document.getElementById("form-success").style.display='none';
}

function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
  var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box1').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay1').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box1').css({top:dialogTop, left:dialogLeft}).show();
  

  //document.getElementById('dialog-box1').innerHTML = '<p style="width:  70%;display:  block;float:  left;font-size: 29px;padding: 20px;">Take Picture and Show merchant</p><a href="#" class="button" style="float: left;position:  relative;top: 20px;">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
  
}

function ShowPopupARS(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
}
