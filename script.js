
// HOME PAGE SCRIPT 

$('body').click(function(){
    $('#navbar').collapse('hide');
});



$(document).ready(function(){
        $("#carousel").carousel( { interval: 2000 } )
        $("#carouselButton").click(function(){
            if(document.getElementById('carouselSpan').classList.contains('fa-pause')){
                document.querySelector('#carouselSpan').classList.add('fa-play');
                document.querySelector('#carouselSpan').classList.remove('fa-pause');
                $("#carousel").carousel('pause');
            }
            else {
                document.querySelector('#carouselSpan').classList.add('fa-pause');
                document.querySelector('#carouselSpan').classList.remove('fa-play');
                $("#carousel").carousel('cycle');
            } 
        })
    });
    var i =0;
    var j =0;
    $('#add').click(function(e){  
        i=i+1;
        e.preventDefault();
        document.querySelector("#order").insertAdjacentHTML("beforebegin",
        '<div class="form-row" id="form-row'+i+'"><div class="form-group col-4"><select class="form-control form-control-sm"><option>Tacos</option><option>Fajitas</option><option>Melfouf</option><option>Hamburger</option></select></div><div class="form-group col-2"> <input min="1" value="1" type="number" class="form-control" id="numberofitems"></div><div class="form-group col-4"><select class="form-control form-control-sm"><option>S</option><option>M</option><option>L</option><option active>XL</option><option>XXL</option></select></div></div>'
        )
    });
    $('#pizzaorder').click(function(e){
        j=j+1;
        e.preventDefault();
        document.querySelector("#order").insertAdjacentHTML("beforebegin",
        '<div class="form-row" id="form-row'+j+'"><div class="form-group col-4"><select class="form-control form-control-sm"><option>Pizza Poulet</option><option>Pizza 4 Fromage</option><option>Pizza Mergaz</option><option>Pizza Margeritte</option></select></div><div class="form-group col-2"> <input min="1" value="1" type="number" class="form-control" id="numberofitems"></div><div class="form-group col-4"><select class="form-control form-control-sm"><option>Small</option><option>Medium</option><option>Mega</option></select></div></div> '
        )
    });
    
   function deleteorder(){
       document.getElementById("form-row"+i).remove();
       i=i-1;
    }
    function deletepizzaorder(){
       document.getElementById("form-row"+j).remove();
       j=i-1;
    }
//END OF HOME PAGE SCRIPT 





// MENU PAGE SCRIPT 


// templates variables 
var categories_template , photos_template , slideshow_template;
// variables that store the current menu type that we selected and its photos
var current_category = menu.categories[0];
var current_photos = current_category.pictures[0];
// the function that put the data into the template
function showTemplate (template,data){
  var html = template(data);
  $('#content').html(html);
}
// compiling all the templates
$(document).ready(function(){
  source = $("#categories_template").html();
  categories_template=Handlebars.compile(source);

  source = $("#photos_template").html();
  photos_template= Handlebars.compile(source);
  source = $("#slideshow_template").html();
  slideshow_template= Handlebars.compile(source);
  // source = $("#slideshow-template").html();
  // photos_template= Handlebars.compile(source);


  // clicking on the menu list tab 
  $("#menulist_tab").click(function(){
    // displaying our menu list 
    showTemplate(categories_template,menu);
    // putting the active class on the current tab 
    $(".nav-tabs .active").removeClass("active");
    $("#menulist_tab").addClass("active");
    
    // clicking on one of the showing menu list types 
    $(".categories").click(function(){
      var index = $(this).data("id");
      current_category=menu.categories[index];
      showTemplate(photos_template,current_category);
      $(".nav-tabs .active").removeClass("active");
      $("#types_tab").addClass("active");
    var html1 = slideshow_template(current_category);
    $('#slideshow').html(html1);
    })
  // clicking on the types tab 
  $('#types_tab').click(function(){
    showTemplate(photos_template,current_category);
    $(".nav-tabs .active").removeClass("active");
    $("#types_tab").addClass("active");
    var html1 = slideshow_template(current_category);
    $('#slideshow').html(html1);
  })

  })
  $("#menulist_tab").click();
})

