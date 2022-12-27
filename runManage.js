let products = [
    new Product("Iphone 14 Pro Max", 42000000, 10, "https://cdn.tgdd.vn/Products/Images/42/251192/TimerThumb/iphone-14-pro-max-(2).jpg"),
    new Product("Samsung Galaxy S22 Ultra", 31000000, 5, "https://cdn.tgdd.vn/Products/Images/42/235838/TimerThumb/samsung-galaxy-s22-ultra.jpg"),
    new Product("Samsung Galaxy Z Flip 4", 28000000, 5, "https://cdn.tgdd.vn/Products/Images/42/258047/TimerThumb/samsung-galaxy-z-flip4-(2).jpg")
];
function showAllProducts() {
    let content = "";
    let numberOfProducts = 0;
    for( let i = 0; i < products.length; i++) {
        numberOfProducts += Number(products[i].number);
        content += `<tr>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].number}</td>
            <td><img src="${products[i].img}" style="width:174px; height:174px"</td>
            <td><button onclick="editByIndex()">Edit</button></td>
            <td><button onclick='deleteByIndex()'>Delete</button></td>
            </tr>`
    }
    document.getElementById("listProduct").innerHTML = content;
    document.getElementById("numberOfProduct").innerHTML = numberOfProducts.toString();
}
showAllProducts();
function createNewProduct() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let number = document.getElementById("number").value;
    let img = document.getElementById("img").value;
    let newProduct = new Product(name, price, number, img);
    products.push(newProduct);
    showAllProducts();
}
function deleteByIndex(index) {
    products.splice(index,1);
    showAllProducts()
}
function editByIndex(index) {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let number = document.getElementById("number").value;
    let img = document.getElementById("img").value;
    let newProduct = new Product(name, price, number, img);
    products[index] = newProduct;
    showAllProducts();
}