"use strict";
//Item class to hold all the information on each item
var Item = /** @class */ (function () {
    function Item(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }
    Item.prototype.getid = function () {
        return this.id;
    };
    Item.prototype.getname = function () {
        return this.name;
    };
    Item.prototype.getprice = function () {
        return this.price;
    };
    return Item;
}());
//List of all the items in the store, items obtained based on id
var Itemlist = /** @class */ (function () {
    function Itemlist() {
        this.itemlist = [];
    }
    Itemlist.prototype.finditem = function (id) {
        for (var _i = 0, _a = this.itemlist; _i < _a.length; _i++) {
            var i = _a[_i];
            if (id == i.getid()) {
                return i;
            }
        }
        var item = new Item("unidentified", 0, 0);
        return item;
    };
    Itemlist.prototype.additem = function (item) {
        this.itemlist.push(item);
    };
    return Itemlist;
}());
//Class that holds all the items being bought
var Cart = /** @class */ (function () {
    function Cart(list) {
        if (list === void 0) { list = []; }
        this.list = list;
    }
    Cart.prototype.additem = function (id) {
        this.list.push(id);
        document.getElementById("cartsize").innerHTML = this.getsize().toString();
    };
    Cart.prototype.getsize = function () {
        return this.list.length;
    };
    Cart.prototype.checkout = function () {
        var table = document.createElement("table");
        table.className = "center table-primary";
        var row = document.createElement("tr");
        var tableheader1 = document.createElement("th");
        var tableheader2 = document.createElement("th");
        var header1 = "Name";
        var header2 = "Price";
        var headernode1 = document.createTextNode(header1);
        var headernode2 = document.createTextNode(header2);
        tableheader1.appendChild(headernode1);
        tableheader2.appendChild(headernode2);
        row.appendChild(tableheader1);
        row.appendChild(tableheader2);
        table.appendChild(row);
        var totalprice = 0;
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var i = _a[_i];
            var item = storelist.finditem(i);
            var tablerow = display(item);
            table.appendChild(tablerow);
            totalprice = totalprice + item.getprice();
        }
        var totalpriceformat = "Total Price: " + totalprice;
        document.getElementById("table").appendChild(table);
        document.getElementById("totalprice").innerHTML = totalpriceformat;
    };
    Cart.prototype.store = function () {
        localStorage.setItem("cart", JSON.stringify(this.list));
    };
    return Cart;
}());
//Initializes the cart and the storage
if (localStorage.getItem("cart")) {
    var cartjson = localStorage.getItem("cart");
    var newcart = [];
    var j = 0;
    for (var i = 1; i < cartjson.length - 1; i = i + 2) {
        newcart[j] = parseInt(cartjson[i]);
        j++;
    }
    var cart = new Cart(newcart);
}
else {
    var cart = new Cart;
}
//Function to display row
function display(item) {
    var row = document.createElement("tr");
    row.className = "table-light";
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var name = item.getname();
    var price = item.getprice();
    var namedata = document.createTextNode(name);
    var pricedata = document.createTextNode(price.toString());
    cell1.appendChild(namedata);
    cell2.appendChild(pricedata);
    row.appendChild(cell1);
    row.appendChild(cell2);
    return row;
}
//Fuction to display item names and price in the shop
function storedisplay() {
    document.getElementById("cartsize").innerHTML = cart.getsize().toString();
    document.getElementById("name1").innerHTML = item1.getname();
    document.getElementById("name2").innerHTML = item2.getname();
    document.getElementById("name3").innerHTML = item3.getname();
    document.getElementById("name4").innerHTML = item4.getname();
    document.getElementById("price1").innerHTML = item1.getprice().toString();
    document.getElementById("price2").innerHTML = item2.getprice().toString();
    document.getElementById("price3").innerHTML = item3.getprice().toString();
    document.getElementById("price4").innerHTML = item4.getprice().toString();
}
//Initializations
var storelist = new Itemlist;
var item1 = new Item("Yogurt", 5.00, 1);
var item2 = new Item("Chips", 3.00, 2);
var item3 = new Item("Candy", 1.00, 3);
var item4 = new Item("Cheese", 10.00, 4);
storelist.additem(item1);
storelist.additem(item2);
storelist.additem(item3);
storelist.additem(item4);
