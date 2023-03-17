function foodList(menu){
    if(menu === "pizza"){
        return "Your pizza is going to be served shortly!!!";
    }  else if (menu === "burger"){
        return "Your burger is going to be served shortly!!!";
    }  else if (menu === "pasta"){
        return "Your pasta is going to be served shortly!!!";
    }  else {
        return "Oops!! Sorry you have to order it from the above menu only!!";
    }
 }
 
 const order1 = foodList("pizza");
 const order2 = foodList("burger");
 const order3 = foodList("pasta");
 const order4 = foodList("Noodles");
 
 console.log(order1);  //"Your pizza is going to be served shortly!!!"
 console.log(order4);  //"Oops!! Sorry you have to order it from the above menu only!!"