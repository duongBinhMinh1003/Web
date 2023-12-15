

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


function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Password should be at least 8 characters long
  return password.length >= 8;
}



const getDataFormDangKi = () => { 
    var emailUser = document.getElementById("emailUser").value;
    var mkUser = document.getElementById("mkUser").value;
    if (!validateEmail(emailUser)) {
      alert('Invalid email format');
      return null;
  }
  if (!validatePassword(mkUser)) {
    alert('Password must be at least 8 characters long');
    return null;
}
   
    return {
      emailUser: emailUser,
      Password: mkUser,
      
    };
 }

const addToCart = () => { 
  Swal.fire("You have to login first!");
 }