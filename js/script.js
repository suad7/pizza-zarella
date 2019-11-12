function onCalculate() {
    var sizeP = document.getElementById("size").value;
    var veggyToppings = document.getElementById("veggy").value;
    var crustP = document.getElementById("crust").value;
    var meatToppings = document.getElementById("meaty").value;
    var num = parseInt(document.getElementById("number").value);
    function order() {
        return sizeP + " " + veggyToppings + " " + crustP + " " + meatToppings;
    }
    function size() {
        var price = 0;
        if (sizeP === "Small") {
            price = 300;
        }
        else if (sizeP === "Medium") {
            price = 500;
        }
        else if (sizeP === "Large") {
            price = 600;
        }
        return price;
    }
    function crust() {
        var price1 = 0;
        if (crustP === "Crispy") {
            price1 = 100;
        }
        else if (crustP === "Stuffed") {
            price1 = 150;
        }
        else if (crustP === "Glutten-free") {
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
    function pizzaTotal() {
        return (size() + crust() + meaty() + veggy()) * num;
    }
    $("tbody#summary:last").append("<tr>" +
        "<td>" + order() + "</td>" +
        "<td>" + num + "</td>" +
        "<td>" + "ksh:" + pizzaTotal() + "</td>" +
        "</tr>");
};
function validate() {
    var nameDelivery = document.getElementById("name").value;
    var lpocation = document.getElementById("lpocation").value
    if (nameDelivery === "")
        alert("Invalid Name")
    else if (lpocation === "")
        alert("Invalid location")
    else
        alert("Thank you " + nameDelivery + " for your order. Pizza will be delivered at" + lpocation + " and your charges for delivery is ksh150")
    $("#x")[0].request()

}



