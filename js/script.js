function onCalculate() {
    var pizzaCrust = ["crispy", "stuffed", "gluten free"];
    var pizzaSize = ["large ksh 600", "medium ksh 500", "small ksh"];
    var meatyPizzatpping = ["peperonni", "sausage", "chicken"];
    var veggyPizzatopping = ["onion", "spinach", "pineapple"];

    var size = document.getElementById("size").value;
    var veggyToppings = document.getElementById("veggy").value;
    var crust = document.getElementById("crust").value;
    var meatToppings = document.getElementById("meaty").value;
    var num = document.getElementById("number").value;

    function order() {
        return size + " " + veggyToppings + " " + crust + " " + meatToppings;
    }
    function size() {
        var price = 0;
        if (size === "Small") {
            price = 300;
        }
        else if (size === "Medium") {
            price = 500;
        }
        else if (size === "Large") {
            price = 600;
        }
        return price;
    }
    function crust() {
        var price1 = 0;
        if (crust === "Crispy") {
            price1 = 100;
        }
        else if (crust === "Stuffed") {
            price1 = 150;
        }
        else if (crust === "Glutten-free") {
            price1 = 200;
        }
        return price1;
    }
    function meaty() {
        var price2 = 0;
        if (meatToppings === "Peperonni") {
            price2 = 100;
        }
        else if (meatToppings === "Sausage") {
            price2 = 100;
        }
        else if (meatToppings === "Chicken") {
            price2 = 150;
        }
        return price2;
    }
    function veggy() {
        var price3 = 0;
        if (veggyToppings === "  Onion") {
            price3 = 100;
        }
        else if (veggyToppings === " Spinach") {
            price3 = 100;
        }
        else if (veggyToppings === " Pineapple") {
            price3 = 150;
        }
        return price3;
    }

    alert(veggy());
    var total;
    total = crust() + meaty() + veggy();

    $("tbody#summary:last").append("<tr>" +
        "<td>" + order() + "</td>" +
        "<td>" + num + "</td>" +
        "<td>" + "ksh:" + total+ "</td>" +
        "</tr>");
}



