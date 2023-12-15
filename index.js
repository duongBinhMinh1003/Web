
var idEdit = null;
var cart = [];
var productArr = [];
 
  
function fetchProductListUser() {
  turnOnLoading();
  axios({
    url: "https://653122fa4d4c2e3f333c72b8.mockapi.io/foods",
    method: "GET",
  })
  .then(function (res) {

    productArr = res.data;
    renderProductListUser(res.data);
    turnOffLoading();
  })
  .catch(function (err) {
    turnOffLoading();
    console.log("😀 - err", err);
  });
}
  
  
  function dangKi() {
    console.log("yes");
    
    var product = getDataFormDangKi();
    if(product){
    axios({
      url: "https://653122fa4d4c2e3f333c72b8.mockapi.io/foods",
      method: "POST",
      data: product,
    })
    .then(function (res) {
      Swal.fire("Register success!");
      fetchProductListUser();
      
    })
    .catch(function (err) {});
  }
}
  fetchProductListUser();




  // function login() {
    
  //   axios({
  //     url: "https://653122fa4d4c2e3f333c72b8.mockapi.io/foods",
  //     method: "GET",
  //   })
  //   .then(function (res) {
  
  //     productArr = res.data;
  //     renderProductListUser(res.data);
  //     console.log('res.data: ', res.data);
     
  //   })
  //   .catch(function (err) {
     
  //     console.log("😀 - err", err);
  //   });
  // }


  function login() {
    var emailUser = document.getElementById("loginEmail").value;
    var mkUser = document.getElementById("loginMk").value;

    axios.get("https://653122fa4d4c2e3f333c72b8.mockapi.io/foods")
    .then(function (response) {
        
        var users = response.data;
        console.log('response.data: ', response.data);

     
        var user = users.find(function(u) {
          return u.emailUser === emailUser && u.Password === mkUser;
        });
        console.log('user: ', user);
         if(user.emailUser == "admin") {
        
          alert("Login successful! Welcome, " + user.emailUser + "!");
          window.location.href = './capstone/admin.html';
        }



       else if (user) {
       
            alert("Login successful! Welcome, " + user.emailUser + "!");

         
            window.location.href = './page/login.html';
        } 
        
        else {
            alert("Invalid email or password. Please try again.");
        }
        
    })
    .catch(function (error) {
        console.error('Error fetching user data from API:', error);
        alert("Tài khoản hoặc mật khẩu không chính xác! ");
    });
}





  // function login() {
  
   
  //   var userData = [
  //     { username: 'admin', password: 'admin' },
  //     { username: 'user2', password: 'pass2' },
  //     // Thêm dữ liệu người dùng khác nếu cần thiết
  //   ];
  //   var emailUser = document.getElementById("loginEmail").value;
  //   var mkUser = document.getElementById("loginMk").value;
  
  
  //   // Kiểm tra xem người dùng có tồn tại không
  //   var user = userData.find(function(user) {
  //       return user.username === emailUser && user.password === mkUser;
  //   });
  
  //   if (user) {
  //       alert("Login successful! Welcome, " + user.username + "!");
  //       // Thực hiện các hành động sau khi đăng nhập thành công
  //       window.location.href = './page/login.html';
  //   } else {
  //       alert("Invalid username or password. Please try again.");
  //   }
   
  // } 
