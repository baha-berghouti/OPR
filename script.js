
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
  var x=0;
  var bill = 0 ;
  //Food Variables
  var selectedFoodValue = 0 ;
  var numberofitems = 0 ;
  var size =0;
  var foodBill = 0 ;
  var food_Bill = 0 ;
  //Pizza Variables
  var selectedPizzaValue = 0 ;
  var numberOfPizza =0
  var Psize =0
  var pizzaBill =0;
  var pizza_bill=0;

// Take & Set The Values 
  //Food Functions 
  function selectFood(){
    selectedFoodValue = $("#foodSelect"+i).val() ;
  };
  function howMany(){
     numberofitems = $("#numberofitems"+i).val() ;
  };
  function chooseSize(){
     size =$("#size"+i).val();
  };
  function takeFoodValues (){
    selectFood();
    howMany();
    chooseSize(); 
    if(selectedFoodValue==250 || selectedFoodValue==300 ){
      document.getElementById("size"+i).disabled=true;
      }
    else {
      document.getElementById("size"+i).disabled=false;
    }
  }
  function resetTheBill() {
     food_Bill = food_Bill- foodBill ; 
  }
  function setValues (){
     foodBill = selectedFoodValue*numberofitems*size;
    food_Bill = food_Bill + foodBill
    // $("#bill").html(food_Bill+pizza_bill +"DA");
  }

   // Pizza Functions 
   function selectPizza(){
    selectedPizzaValue = $("#pizzaSelect"+j).val() ;
  }
  function howManyP(){
    numberOfPizza = $("#numberOfPizza"+j).val() ;
  }
  function choosePizzaSize(){
    Psize =$("#Psize"+j).val();
  }  
  function takePizzaValues (){
    selectPizza();
    howManyP();
    choosePizzaSize(); 
  }
  function resetThePizzaBill() {
     pizza_bill = pizza_bill- pizzaBill ; 
  }
  function setPizzaValues (){
     pizzaBill = selectedPizzaValue*numberOfPizza*Psize;
     pizza_bill = pizza_bill+ pizzaBill ; 
    // $("#bill").html(food_Bill+pizza_bill +"DA");

  }
// funcionality of adding and removing orders 
function check(){
  if($("#checkIcon"+(x-1)).html()!=""){
    $("#checkIcon"+(x-1)).html()=""
  }
   document.querySelector("#checkIcon"+(x-1)).insertAdjacentHTML("afterbegin",'<svg id="check'+(x-1)+'" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/></svg>'
   )

      document.querySelector(".size"+(x-1)).disabled=true;
      document.querySelector(".select"+(x-1)).disabled=true;
      document.querySelector(".numberOf"+(x-1)).disabled=true;
  
}
function uncheck(){
      $("#check"+(x-1)).remove();
      document.querySelector(".size"+(x-1)).disabled=false;
      document.querySelector(".select"+(x-1)).disabled=false;
      document.querySelector(".numberOf"+(x-1)).disabled=false;
}

$('#add').click(function(e){ 
  i=i+1; 
  x=x+1;
    e.preventDefault();
    document.querySelector("#order").insertAdjacentHTML("beforeend",
    '<div class="form-row order" id="form-row'+i+'"><div class="form-group col-4"><select onchange="resetTheBill(); takeFoodValues(); setValues (); " id="foodSelect'+i+'" class="form-control form-control-sm select'+x+'"><option value="500">Tacos</option><option value="300">Fajitas</option><option value="300">Melfouf</option><option value="250">Hamburger</option></select></div><div class="form-group col-2"> <input  min="1" value="1" type="number" onchange="resetTheBill(); takeFoodValues(); setValues(); " class="form-control numberOf'+x+'" id="numberofitems'+i+'" style="height:32px;"></div><div class="form-group col-4"><select id="size'+i+'" id="mySelect" onchange="resetTheBill(); takeFoodValues(); setValues (); " class="form-control form-control-sm size'+x+'"><option  value="1">S</option><option value="1.2">M</option><option value="1.3">L</option><option value="1.4">XL</option><option value="1.7">XXL</option></select></div><div id="checkIcon'+x+'"></div><button type="button"  class="close mb-4"  onclick="deleteorder()" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
    )  
  takeFoodValues(); 
  setValues();
  check();
});    
function deleteorder(){
  document.getElementById("form-row"+i).remove();
  food_Bill = food_Bill- foodBill ;
  $("#bill").html(food_Bill + pizza_bill +"DA");
    i=i-1;
    uncheck();
    x=x-1;
  };

$('#pizzaorder').click(function(e){
  j=j+1;
  x=x+1;
  e.preventDefault();
  document.querySelector("#order").insertAdjacentHTML("beforeend",
   '<div class="form-row"  id="pizza-form'+j+'"><div class="form-group col-4"><select onchange="resetThePizzaBill(); takePizzaValues(); setPizzaValues ();" id ="pizzaSelect'+j+'" class="form-control form-control-sm select'+x+'"><option value="500">Pizza Poulet</option><option value="800">Pizza 4 Fromage</option><option value="600">Pizza Mergaz</option><option value="800">Pizza Margeritte</option></select></div><div class="form-group col-2"> <input  min="1" value="1" style=" height: 32px;" onchange="resetThePizzaBill(); takePizzaValues(); setPizzaValues ();" id ="numberOfPizza'+j+'"  type="number" class="form-control numberOf'+x+'"></div><div class="form-group col-4"><select id="Psize'+j+'" onchange="resetThePizzaBill(); takePizzaValues(); setPizzaValues ();" class="form-control form-control-sm size'+x+'"><option value="1">Small</option><option value="1.5">Medium</option><option value="2">Mega</option></select></div><div id="checkIcon'+x+'"></div><button type="button"  class="close mb-4"  onclick="deletepizzaorder()" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
)
  takePizzaValues();
  setPizzaValues(); 
  check();    
});
function deletepizzaorder(){
document.getElementById("pizza-form"+j).remove();
pizza_bill = pizza_bill- pizzaBill ;
$("#bill").html(food_Bill+pizza_bill +"DA");
j=j-1; 
uncheck(); 
x=x-1;

};


  $("#sumButton").click(function(e){
   e.preventDefault();
     $("#bill").html(food_Bill+pizza_bill +"DA");
     document.querySelector(".size"+(x)).disabled=true;
     document.querySelector(".select"+(x)).disabled=true;
     document.querySelector(".numberOf"+(x)).disabled=true;
     if($("#checkIcon"+(x)).html()==""){
     document.querySelector("#checkIcon"+(x)).insertAdjacentHTML("afterbegin",'<svg id="check'+(x)+'" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/></svg>'
     );}
  })
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
  var x=0;
  var bill = 0 ;
  //Food Variables
  var selectedFoodValue = 0 ;
  var numberofitems = 0 ;
  var size =0;
  var foodBill = 0 ;
  var food_Bill = 0 ;
  //Pizza Variables
  var selectedPizzaValue = 0 ;
  var numberOfPizza =0
  var Psize =0
  var pizzaBill =0;
  var pizza_bill=0;

// Take & Set The Values 
  //Food Functions 
  function selectFood(){
    selectedFoodValue = $("#foodSelect"+i).val() ;
  };
  function howMany(){
     numberofitems = $("#numberofitems"+i).val() ;
  };
  function chooseSize(){
     size =$("#size"+i).val();
  };
  function takeFoodValues (){
    selectFood();
    howMany();
    chooseSize(); 
    if(selectedFoodValue==250 || selectedFoodValue==300 ){
      document.getElementById("size"+i).disabled=true;
      }
    else {
      document.getElementById("size"+i).disabled=false;
    }
  }
  function resetTheBill() {
     food_Bill = food_Bill- foodBill ; 
  }
  function setValues (){
     foodBill = selectedFoodValue*numberofitems*size;
    food_Bill = food_Bill + foodBill
    // $("#bill").html(food_Bill+pizza_bill +"DA");
  }

   // Pizza Functions 
   function selectPizza(){
    selectedPizzaValue = $("#pizzaSelect"+j).val() ;
  }
  function howManyP(){
    numberOfPizza = $("#numberOfPizza"+j).val() ;
  }
  function choosePizzaSize(){
    Psize =$("#Psize"+j).val();
  }  
  function takePizzaValues (){
    selectPizza();
    howManyP();
    choosePizzaSize(); 
  }
  function resetThePizzaBill() {
     pizza_bill = pizza_bill- pizzaBill ; 
  }
  function setPizzaValues (){
     pizzaBill = selectedPizzaValue*numberOfPizza*Psize;
     pizza_bill = pizza_bill+ pizzaBill ; 
    // $("#bill").html(food_Bill+pizza_bill +"DA");

  }
// funcionality of adding and removing orders 
function check(){
  if($("#checkIcon"+(x-1)).html()!=""){
    $("#checkIcon"+(x-1)).html()=""
  }
   document.querySelector("#checkIcon"+(x-1)).insertAdjacentHTML("afterbegin",'<svg id="check'+(x-1)+'" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/></svg>'
   )
      document.querySelector(".size"+(x-1)).disabled=true;
      document.querySelector(".select"+(x-1)).disabled=true;
      document.querySelector(".numberOf"+(x-1)).disabled=true;
}
function uncheck(){
      $("#check"+(x-1)).remove();
      document.querySelector(".size"+(x-1)).disabled=false;
      document.querySelector(".select"+(x-1)).disabled=false;
      document.querySelector(".numberOf"+(x-1)).disabled=false;
}

$('#add').click(function(e){ 
  i=i+1; 
  x=x+1;
    e.preventDefault();
    document.querySelector("#order").insertAdjacentHTML("beforeend",
    '<div class="form-row order" id="form-row'+i+'"><div class="form-group col-4"><select onchange="resetTheBill(); takeFoodValues(); setValues (); " id="foodSelect'+i+'" class="form-control form-control-sm select'+x+'"><option value="500">Tacos</option><option value="300">Fajitas</option><option value="300">Melfouf</option><option value="250">Hamburger</option></select></div><div class="form-group col-2"> <input  min="1" value="1" type="number" onchange="resetTheBill(); takeFoodValues(); setValues(); " class="form-control numberOf'+x+'" id="numberofitems'+i+'" style="height:32px;"></div><div class="form-group col-4"><select id="size'+i+'" id="mySelect" onchange="resetTheBill(); takeFoodValues(); setValues (); " class="form-control form-control-sm size'+x+'"><option  value="1">S</option><option value="1.2">M</option><option value="1.3">L</option><option value="1.4">XL</option><option value="1.7">XXL</option></select></div><div id="checkIcon'+x+'"></div></div>'
    )  
  takeFoodValues(); 
  setValues();
  check();
});    
function deleteorder(){
  document.getElementById("form-row"+i).remove();
  food_Bill = food_Bill- foodBill ;
  $("#bill").html(food_Bill + pizza_bill +"DA");
    i=i-1;
    uncheck();
    x=x-1;
  };

$('#pizzaorder').click(function(e){
  j=j+1;
  x=x+1;
  e.preventDefault();
  document.querySelector("#order").insertAdjacentHTML("beforeend",
   '<div class="form-row"  id="pizza-form'+j+'"><div class="form-group col-4"><select onchange="resetThePizzaBill(); takePizzaValues(); setPizzaValues ();" id ="pizzaSelect'+j+'" class="form-control form-control-sm select'+x+'"><option value="500">Pizza Poulet</option><option value="800">Pizza 4 Fromage</option><option value="600">Pizza Mergaz</option><option value="800">Pizza Margeritte</option></select></div><div class="form-group col-2"> <input  min="1" value="1" style=" height: 32px;" onchange="resetThePizzaBill(); takePizzaValues(); setPizzaValues ();" id ="numberOfPizza'+j+'"  type="number" class="form-control numberOf'+x+'"></div><div class="form-group col-4"><select id="Psize'+j+'" onchange="resetThePizzaBill(); takePizzaValues(); setPizzaValues ();" class="form-control form-control-sm size'+x+'"><option value="1">Small</option><option value="1.5">Medium</option><option value="2">Mega</option></select></div><div id="checkIcon'+x+'"></div></div>'
)
  takePizzaValues();
  setPizzaValues(); 
  check();    
});
function deletepizzaorder(){
document.getElementById("pizza-form"+j).remove();
pizza_bill = pizza_bill- pizzaBill ;
$("#bill").html(food_Bill+pizza_bill +"DA");
j=j-1; 
uncheck(); 
x=x-1;

};


  $("#sumButton").click(function(e){
   e.preventDefault();
     $("#bill").html(food_Bill+pizza_bill +"DA");
     document.querySelector(".size"+(x)).disabled=true;
     document.querySelector(".select"+(x)).disabled=true;
     document.querySelector(".numberOf"+(x)).disabled=true;
     if($("#checkIcon"+(x)).html()==""){
     document.querySelector("#checkIcon"+(x)).insertAdjacentHTML("afterbegin",'<svg id="check'+(x)+'" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/></svg>'
     )};
  })
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

