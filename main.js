
var productName=document.getElementById('productNameInput')
var productPrice=document.getElementById('productPriceInput')
var productCategory=document.getElementById('productCtagoryInput')
var productDesc=document.getElementById('productDescInput')

var productContainer =[];
function AddProduct(){
    var product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDesc.value

    }
    productContainer.push(product)
    console.log(productContainer)
    clearForm();
    displayForm()
}
function clearForm(){
    productName.value='';
    productPrice.value='';
    productCategory.value='';
    productDesc.value='';
}
function displayForm(){
    var cartona=``

    for(var i=0; i<productContainer.length; i++){
        cartona+= `<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td> <button class="btn btn-sm btn-outline-warning">update</button></td>
        <td> <button class="btn btn-sm btn-outline-danger">delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartona;
}