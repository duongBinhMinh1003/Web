function renderProductList(productArr) {
  var contentHTML = "";
  for (var i = 0; i < productArr.length; i++) {
      var product = productArr[i];
      var trString = `
      <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>

      <td>  <img src="${product.img}" alt="" style="width:100px"> </td>

      <td>${product.type}</td>
      <td >
          <button onclick="editProduct('${product.id}')" class="btn btn-warning">Edit</button>
          <button onclick="deleteProduct('${product.id}')" class="btn btn-danger">Delete</button>     

      </td>
      
  </tr>
      `;
      contentHTML += trString;
  }
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}
function renderProductListUser(productArr) {
var contentHTML = "";
for (var i = 0; i < productArr.length; i++) {
    var product = productArr[i];
    var trString = `
    <tr>
    <td>${product.emailUser}</td>
    <td>${product.Password}</td>
   
    <td >
       
        <button onclick="deleteUser('${product.id}')" class="btn btn-danger">Delete</button>     

    </td>
    
</tr>
    `;
    contentHTML += trString;
}
document.getElementById("tblDanhSachUser").innerHTML = contentHTML;
}





function turnOnLoading() {
  document.getElementById("spinner").style.display = "block";
}
function turnOffLoading() {
  document.getElementById("spinner").style.display = "none";
}
function getDataForm() {
  var ten = document.getElementById("TenSP").value;
  var gia = document.getElementById("GiaSP").value*1;

  var hinhAnh = document.getElementById("HinhSP").value;
 
  var loai = document.getElementById("LoaiSP").value;
  return {
    name: ten,
    price: gia,
   
    img: hinhAnh,

    type:loai,
  };
}



const getDataFormDangKi = () => { 
    var emailUser = document.getElementById("emailUser").value;
    var mkUser = document.getElementById("mkUser").value;
   
   
    return {
      emailUser: emailUser,
      Password: mkUser,
      
    };
 }

