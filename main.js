var productName= document.getElementById("productNameInput")
var productPrice= document.getElementById("productPriceInput")
var productCtagory= document.getElementById("productCtagoryInput")
var productDesc= document.getElementById("productDescInput")
var addBtn=document.getElementById("addBtn")
var updateBtn=document.getElementById("updateBtn")
if (localStorage.getItem('myproduct')!=null)
{
    productContainer=JSON.parse(localStorage.getItem('myproduct'))
    displyProducts(productContainer);
}
else{
    productContainer=[];
}
function AddProduct()
{
    if (validateProducte()==true){
         var product={
        name:productName.value,
        price:productPrice.value,
        ctagory:productCtagory.value,
        Desc:productDesc.value

    }
    productContainer.push(product)
    localStorage.setItem('myproduct',JSON.stringify(productContainer))
    console.log(productContainer)    
    clearform();
    displyProducts(productContainer)
    updateBtn.classList.replace('d-inline-block', 'd-none');
    addBtn.classList.remove('d-none');

    }
    else{
        alert('product invalid')
    }
    

}
function clearform(){
    productName.value="",
    productPrice.value="",
    productCtagory.value="",
    productDesc.value=""
}
function displyProducts(list){
    var cartona=``
    for(var i=0; i<list.length;i++)
    {
        cartona+=`<tr>
        <td>${i}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].ctagory}</td>
        <td>${list[i].Desc}</td>
        <td><button  class="btn btn-sm btn-outline-warning" onclick="updateItem(${i})">update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartona;
}
 function searchProduct(searchTerm){

    searchResult=[]
    for (var i=0 ; i<productContainer.length; i++){
        if (productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchResult.push(productContainer[i]);
        }

    }
    displyProducts(searchResult)

 }
 function deleteProduct(deletedItem){
    productContainer.splice(deletedItem,1)
    localStorage.setItem('myproduct',JSON.stringify(productContainer))
    displyProducts(productContainer)
    
 }
function updateItem(updatedItem){
    productName.value=productContainer[updatedItem].name
    productPrice.value=productContainer[updatedItem].price
    productCtagory.value=productContainer[updatedItem].ctagory;
    productDesc.value=productContainer[updatedItem].Desc;
    updateBtn.classList.replace('d-none','d-inline-block')
    addBtn.classList.add('d-none')
}
function seveUpdate(savedUpdate){
    productContainer[savedUpdate].name=productName.value
    productContainer[savedUpdate].price=productPrice.value
    productContainer[savedUpdate].ctagory=productCtagory.value
    productContainer[savedUpdate].Desc=productDesc.value
    productContainer.push(savedUpdate)
    localStorage.setItem('myproducts',JSON.stringify(productContainer))
  

}
function validateProducte(){
    var regax=/^[A-Z][a-z]{3,8}$/;
    if (regax.test(productName.value)==true){
        productName.classList.replace('is-invalid','is-valid')
        return true
    }
    else{
        productName.classList.add('is-invalid')
        return false
    }
}
var hd=document.querySelector('h2')
hd.addEventListener('mouseover',function(){
    console.log('hello')
})
productName.addEventListener('dblclick',function(){
    console.log('hi ')
})
