/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Calculate() {
    var  numberOfSides=document.getElementById("txtbox_numberOfSides").value;;
    var radius=document.getElementById("txtbox_radius").value;
   var sideLength = (2 * radius * Math.sin(Math.PI / numberOfSides));
   var perimeter = numberOfSides * sideLength;
   var area = 0.5 * radius*radius * Math.sin(2 * Math.PI / numberOfSides);
   document.getElementById("txtbox_sideLength").disabled=false;
    document.getElementById("txtbox_sideLength").value = sideLength.toFixed(2);
     document.getElementById("txtbox_perimeter").disabled=false;
    document.getElementById("txtbox_perimeter").value = perimeter.toFixed(2);
     document.getElementById("txtbox_area").disabled=false;
    document.getElementById("txtbox_area").value = area.toFixed(2);
}


