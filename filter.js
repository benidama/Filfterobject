
 filterObjects("all");

function filterObjects(a){
    //console.log(a);
 var x, i;
 x = document.getElementsByClassName("box");
 if(a == "all")  a = "";
 for(i = 0; i < x.length; i++){
    removeClass(x[i], "show") ;
     if(x[i].className.indexOf(a) > -1) addClass(x[i], "show")
     
 }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    //console.log(arr1);
    arr2 = name.split(" ");
    //console.log(arr2);
    for(i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            console.log(arr2[i]);
            element.className += " " + arr2[i];
        }
    }

}


function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}









// const numbers = [2, -3, 4, -5, 8];
//  const answer = numbers.filter(function(value){
//     return value >= 0;
// });

// console.log(answer);




































