var idEdit = null;
var cart = [];
var productArr = [];
var dataJson = localStorage.getItem("DSSV_LOCAL");

if(dataJson !=null){
   
   // convert 1 array chua object ko co method tro thanh 1 array chua object co method 
   // map() ~ convert 
   let result = JSON.parse(dataJson);
   
   cart = result.map(function(item){
    console.log(item)
    //ở đây có thể tạo 1 obj khác để lưu cart, hoặc dung es6 để thêm vào trong obj cart 1 thuôc tính số lượng thì render ra mới đúng dc nhá
    const newCartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
  };
   return newCartItem;
      });
      console.log(cart)
      renderCart(cart)
     
}


function fetchProductList() {
  turnOnLoading();
  axios({
    url: "https://654a4768e182221f8d52e086.mockapi.io/Products",
    method: "GET",
  })
  .then(function (res) {
    console.log('res: ', res);
    productArr = res.data;
    renderProductList(res.data);
    turnOffLoading();
  })
  .catch(function (err) {
    turnOffLoading();
    console.log("😀 - err", err);
  });
}



fetchProductList();

function deleteProduct(id) {
  turnOnLoading();
  axios({
      url: `https://654a4768e182221f8d52e086.mockapi.io/Products/${id}`,
      method: "DELETE",
    })
    .then(function (res) {
      
        fetchProductList();
        
      })
      .catch(function (err) {
        turnOffLoading();
      });
    }
    
    function createProduct() {
      console.log("yes");
      
      var product = getDataForm();
      axios({
        url: "https://654a4768e182221f8d52e086.mockapi.io/Products",
        method: "POST",
        data: product,
      })
      .then(function (res) {
        fetchProductList();
        $("#myModal").modal("hide");
      })
      .catch(function (err) {});
    }
    
    
    function editProduct(id) {
      
      idEdit = id;
      $("#myModal").modal("show");
      
      axios({
        url: `https://654a4768e182221f8d52e086.mockapi.io/Products/${id}`,
        method: "GET",
      })
      .then(function (res) {
        console.log(res.data);
        var product = res.data;
        
        document.getElementById("TenSP").value = product.name;
        document.getElementById("GiaSP").value = product.price;
        document.getElementById("ScreenSP").value = product.screen;
        document.getElementById("BackCameraSP").value = product.backCamera;
        document.getElementById("FrontCameraSP").value = product.frontCamera;
        document.getElementById("HinhSP").value = product.img;
      document.getElementById("MoTaSP").value = product.desc;
      document.getElementById("LoaiSP").value = product.type;
    })
    .catch(function (err) {
      console.log(err);
    });
  }
  
  function updateProduct() {
    var product = getDataForm();
    
    axios({
      url: `https://654a4768e182221f8d52e086.mockapi.io/Products/${idEdit}`,
      method: "PUT",
      data: product,
    })
    .then(function (res) {
      
      fetchProductList();
      $("#myModal").modal("hide");
      
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  

function fetchCart() {
  const cartDataFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
  return cartDataFromLocalStorage;
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify("cart",cart));
}
// add
function addToCart(id) {
  
    const selectedProduct = productArr.find(product => product.id === id);

    if (!selectedProduct) {
        console.error(`Product with id ${id} not found.`);
        return;
    }

    const existingCartItem = cart.find(item => item.id === id);

    if (!existingCartItem) {
      
        const newCartItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: 1,
        };
        //chỗ này do obj của cart nó khác so với obj sp,
        cart.push(newCartItem);
    } else {
        
        existingCartItem.quantity++;
    }
// JSOn
    var dataJson = JSON.stringify(cart);
    console.log('dataJson: ', dataJson);
localStorage.setItem("DSSV_LOCAL", dataJson);

    
   
    
    renderCart(cart);
}



function deleteCart(itemId) {
  
  var index = -1;
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === itemId) {
          index = i;
          break;
      }
  }

  
  if (index !== -1) {
      cart.splice(index, 1);
      var dataJson = JSON.stringify(cart);
      console.log('dataJson: ', dataJson);
  localStorage.setItem("DSSV_LOCAL", dataJson);
      renderCart(cart);
  } else {
      alert("Item not found in the cart!");
  }
}




function updateCartItemQuantity(id, newQuantity) {
    const existingCartItem = cart.find(item => item.id === id);

    if (existingCartItem) {
        existingCartItem.quantity = newQuantity;
    }

   
    saveCart(cart);

    
    renderCart(cart);
}










// Gọi API để lấy dữ liệu
const sortProduct = (()=> {
fetch('https://654a4768e182221f8d52e086.mockapi.io/Products')
  .then(response => response.json())
  .then(data => {
    const sortedData = data.sort((a, b) => a.price - b.price);
    console.log('sortedData: ', sortedData);
    renderProductList(sortedData);
  })
  .catch(error => console.error('Error fetching data:', error));
})




const sortProduct1 = (()=> {
  fetch('https://654a4768e182221f8d52e086.mockapi.io/Products')
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => b.price - a.price);
      console.log('sortedData: ', sortedData);
      renderProductList(sortedData);
    })
    .catch(error => console.error('Error fetching data:', error));
  })





