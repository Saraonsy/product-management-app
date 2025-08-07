var productName = document.getElementById('productNameInput');
var productPrice = document.getElementById('productPriceInput');
var productCategory = document.getElementById('productCtagoryInput');
var productDesc = document.getElementById('productDescInput');
var productContainer = [];

var currentIndex = -1;

if (localStorage.getItem('myproducts') != null) {
    productContainer = JSON.parse(localStorage.getItem('myproducts'));
    displayForm();
} else {
    productContainer = [];
}

function AddProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        desc: productDesc.value
    };

    if (currentIndex === -1) {
        productContainer.push(product);
    } else {
    
        productContainer[currentIndex] = product;
        currentIndex = -1; 
    }

    localStorage.setItem('myproducts', JSON.stringify(productContainer));
    displayForm();
    clearForm();
}

function clearForm() {
    productName.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productDesc.value = '';
}

function displayForm(list = productContainer) {
    var cartona = ``;

    for (var i = 0; i < list.length; i++) {
        cartona += `<tr>
            <td>${i}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td>${list[i].category}</td>
            <td>${list[i].desc}</td>
            <td> <button class="btn btn-sm btn-outline-warning" onclick="updateProduct(${i})">update</button></td>
            <td> <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${i})">delete</button></td>
        </tr>`;
    }

    document.getElementById('tableBody').innerHTML = cartona;
}

function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem('myproducts', JSON.stringify(productContainer)); // نحدّث localStorage
    displayForm();
}

function updateProduct(index) {
    var product = productContainer[index];
    productName.value = product.name;
    productPrice.value = product.price;
    productCategory.value = product.category;
    productDesc.value = product.desc;

    currentIndex = index; 
}

function searchProducts(searchTerm) {
    var searchResult = [];
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchResult.push(productContainer[i]);
        }
    }
    displayForm(searchResult);
}
