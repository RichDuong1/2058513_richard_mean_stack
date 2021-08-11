//Item class to hold all the information on each item
class Item{
    constructor(private name:string, private price:number, private id:number){}

    getid():number{
        return this.id;
    }

    getname():string{
        return this.name;
    }

    getprice():number{
        return this.price;
    }
}

//List of all the items in the store, items obtained based on id
class Itemlist{
    private itemlist: Item[] = [];

    finditem(id : number):Item{
        for (let i of this.itemlist){
            if (id == i.getid()){
                return i;
            }
        }
        let item = new Item("unidentified", 0, 0);
        return item;
    }

    additem(item : Item):void{
        this.itemlist.push(item);
    }
}

//Class that holds all the items being bought
class Cart{
    constructor(private list:number[] = []){}

    additem(id : number):void{
        this.list.push(id);
        document.getElementById("cartsize")!.innerHTML = this.getsize().toString();
    }

    getsize():number{
        return this.list.length;
    }

    checkout():void{
        let table = document.createElement("table");
        table.className = "center table-primary";
        let row = document.createElement("tr");
        let tableheader1 = document.createElement("th");
        let tableheader2 = document.createElement("th");

        let header1 = "Name";
        let header2 = "Price";
        
        let headernode1 = document.createTextNode(header1);
        let headernode2 = document.createTextNode(header2);

        tableheader1.appendChild(headernode1);
        tableheader2.appendChild(headernode2);
        row.appendChild(tableheader1);
        row.appendChild(tableheader2);
        table.appendChild(row);

        let totalprice = 0;

        for (let i of this.list){
            let item = storelist.finditem(i);
            
            let tablerow = display(item);
            table.appendChild(tablerow);

            totalprice = totalprice + item.getprice();
        }
        let totalpriceformat = "Total Price: " + totalprice;

        document.getElementById("table")!.appendChild(table);
        document.getElementById("totalprice")!.innerHTML = totalpriceformat;
    }

    store():void{
        localStorage.setItem("cart",JSON.stringify(this.list))
    }
}

//Initializes the cart and the storage
if (localStorage.getItem("cart")){
    let cartjson =localStorage.getItem("cart")!;
    let newcart:number[] =[];
    let j = 0;
    for (let i = 1; i < cartjson.length - 1; i = i + 2){
        newcart[j] = parseInt(cartjson[i]);
        j++;
    }
    var cart = new Cart(newcart);
}    
else{
    var cart = new Cart;
}

//Function to display row
function display(item:Item): HTMLTableRowElement{
    let row = document.createElement("tr");
    row.className = "table-light";
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    let name = item.getname();
    let price = item.getprice();

    let namedata = document.createTextNode(name);
    let pricedata = document.createTextNode(price.toString());

    cell1.appendChild(namedata);
    cell2.appendChild(pricedata);
    row.appendChild(cell1);
    row.appendChild(cell2);

    return row;

}

//Fuction to display item names and price in the shop
function storedisplay():void{
    document.getElementById("cartsize")!.innerHTML = cart.getsize().toString();

    document.getElementById("name1")!.innerHTML = item1.getname();
    document.getElementById("name2")!.innerHTML = item2.getname();
    document.getElementById("name3")!.innerHTML = item3.getname();
    document.getElementById("name4")!.innerHTML = item4.getname();

    document.getElementById("price1")!.innerHTML = item1.getprice().toString();
    document.getElementById("price2")!.innerHTML = item2.getprice().toString();
    document.getElementById("price3")!.innerHTML = item3.getprice().toString();
    document.getElementById("price4")!.innerHTML = item4.getprice().toString();
}

//Initializations
let storelist = new Itemlist;
let item1 = new Item("Yogurt", 5.00, 1);
let item2 = new Item("Chips", 3.00, 2);
let item3 = new Item("Candy", 1.00, 3);
let item4 = new Item("Cheese", 10.00, 4);
storelist.additem(item1);
storelist.additem(item2);
storelist.additem(item3);
storelist.additem(item4);