// Sign in
let users = JSON.parse(localStorage.getItem("userTinder")) || [];
let formSign = document.querySelector(".mainFormSign");
let signbtn = document.getElementById("signbtn");
let errorSign = document.querySelector(".errorsign");

// let addMatch = [
//   {
//     email: "vinhto1a@gmail.com",
//     name: "Thế Vinh",
//     like: ["ngoctrinh@gmail.com"],
//     unlike: [],
//     match: ["ngoctrinh@gmail.com"],
//   },
//   {
//     email: "ngoctrinh@gmail.com",
//     name: "Ngọc Trinh",
//     unlike: ["vinhto1a@gmail.com"],
//     unlike: [],
//     match: ["vinhto1a@gmail.com"],
//   },
//   {
//     email: "hoa@gmail.com",
//     name: "Hoa",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "lan@gmail.com",
//     name: "Lan",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "thao@gmail.com",
//     name: "Thảo",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "huong@gmail.com",
//     name: "Hương",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "linh@gmail.com",
//     name: "Linh",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "ha@gmail.com",
//     name: "Hà",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "minhanh@gmail.com",
//     name: "Minh Anh",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "hanh@gmail.com",
//     name: "Hạnh",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "Sontung@gmail.com",
//     name: "Sơn Tùng",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "Soobin@gmail.com",
//     name: "Soobin",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "Mono@gmail.com",
//     name: "Mono",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "Huy@gmail.com",
//     name: "Huy",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "Hoang@gmail.com",
//     name: "Hoàng",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "Cuong@gmail.com",
//     name: "Cường",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
//   {
//     email: "Cuong@gmail.com",
//     name: "Cường",
//     like: [""],
//     unlike: [],
//     match: [""],
//   },
// ];

// localStorage.setItem("match", JSON.stringify(addMatch));

// sign in

signbtn.onclick = function (e) {
  e.preventDefault();

  let email = formSign.signemail.value;
  let password = formSign.signpassword.value;
  let confirmPassword = formSign.signconfirmPassword.value;
  let name = formSign.name.value;
  let age = formSign.age.value;
  let image = formSign.image.value;
  let address = formSign.name.value;
  let location = formSign.location.value;
  let errorsign = "";

  let passRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!emailRegex.test(email)) {
    errorsign = errorsign + "Email không hợp lệ! <br/>";
  }
  if (!passRegex.test(password)) {
    errorsign = errorsign + "Mật khẩu không hợp lệ! <br/>";
  }
  if (password !== confirmPassword) {
    errorsign = errorsign + "Xác nhận mật khẩu không hợp lệ! ";
  }

  if (
    passRegex.test(password) &&
    emailRegex.test(email) &&
    password === confirmPassword
  ) {
    error = "";

    // Goi local Match về
    let match = JSON.parse(localStorage.getItem("match"));
    console.log("localStorage.match", localStorage.match);

    // => thêm 1 đối tượng mới thêm email và tên
    let userMath = {
      email: email,
      name: name,
      like: [],
      match: [],
      unlike: [],
    };
    match.push(userMath);
    localStorage.match = JSON.stringify(match);
    // console.log("localStorage.match", localStorage.match);
    let newUser = {
      id: Math.floor(Math.random() * 10000000),
      email: email,
      password: password,
      name: name,
      age: age,
      image: image,
      address: address,
      location: location,
    };

    users.push(newUser);

    localStorage.userTinder = JSON.stringify(users);
    window.location.href =
      "http://127.0.0.1:5500/Trang%20ch%E1%BB%A7%20tinder/Trang%20ch%E1%BB%A7%20Tinder.html";
  }
  errorSign.innerHTML = errorsign;
};

// Login

let formLogin = document.querySelector(".mainformLogin");
let loginbtn = document.getElementById("loginbtn");
let errorlogin = document.querySelector(".errorlogin");

console.log(loginbtn);
// Login
loginbtn.onclick = function (e) {
  let users = JSON.parse(localStorage.getItem("userTinder")) || [];
  e.preventDefault();

  let email = formLogin.loginemail.value;
  let password = formLogin.loginpassword.value;

  let check = false;
  for (let i = 0; i < users.length; i++) {
    console.log("==>", users[i]);
    if (users[i].email == email && users[i].password == password) {
      check = true;
      console.log("==>", check);
    }
  }

  if (check) {
    // luu thong tin
    localStorage.setItem(
      "login",
      JSON.stringify({
        email: email,
        password: password,
      })
    );

    window.location.href = "http://127.0.0.1:5500/TinderApp/TinderApp.html";
  } else {
    errorlogin.innerHTML = "Vui lòng nhập lại ";
  }
};
