var menu_list_array=["Peppy Paneer"
,"Veg Extravaganza"
,"Indi Tandoori Paneer"
,"Cheese N Corn"
,"Mexican Green Wave"
,"Cheese burst"]

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' +menu_list_array[i] +'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById ("display_menu").innerHTML=htmldata
}

function addmenu(){
    var htmldata;
    var item=document.getElementById("add_item").value
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaimg.png"/>' +
        menu_list_array[i] +'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById ("display_menu").innerHTML=htmldata
}

function getorder(){
document.getElementById ("Myorderimg").value=href="#sectionMyFavbooks";
}

