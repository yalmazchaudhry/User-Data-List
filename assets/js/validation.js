
// login function
function login(e){
   
    
   
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;


    let userData = JSON.parse(localStorage.getItem("userData")) || [];

    let exist = userData.length &&
    JSON.parse(localStorage.getItem("userData")).some(data=>{
       console.log(data.password.toLowerCase(), password)
        return data.email.toLowerCase() == email &&
         data.password == password;

    });
    console.log(exist);
    // e.preventDefault();
    if(!exist){
        alert("wrong information");
    }else{
        localStorage.setItem("currentUser",email)
        
        // window.location.href="dashboard.html";
        window.open("dashboard.html");
        
    }
    
}
//logout function
function logout(){

    
    localStorage.setItem("currentUser","logged out");
    // window.open("login.html");
    window.location.href="login.html";

}


// validation function

function validateForm(e){

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    var pass=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(firstName == null || firstName == ""){
       document.getElementById("userFirstNameError").innerText = "User name is empty!";
        } if(firstName.length < 3 ){
            document.getElementById("userFirstNameError").innerText = "User name is short!";

        }if(lastName == null || lastName == ""){
            document.getElementById("userLastNameError").innerText = "User name is empty!";
             } if(lastName.length < 3 ){
                 document.getElementById("userLastNameError").innerText = "User name is short!";
     
             }
         if(password.match(pass)){


        } if(!password.match(pass)){
            document.getElementById("passError").innerText = "Invalid Password";
        }if(password !== confirmPassword){
            document.getElementById("confirmPassError").innerText = "Password not matched";
        }if(confirmPassword=='' || confirmPassword==null){
            document.getElementById("confirmPassError").innerText = "Invalid Password";
        } if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            document.getElementById("userEmailError").innerText = "Invalid E-mail";
        }else{
            
            signUP(e);
            
        }
        e.preventDefault();

        }
// sign up function

        function signUP(e){
            
            
            let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;
let img='';

            let userData = JSON.parse(localStorage.getItem("userData")) || [];

            let exist = userData.length && JSON.parse(localStorage.getItem("userData")).some(data=>{
                console.log(data.email,email);
                
              if(data.email == email) return true;
            });
            console.log(exist);
            if(!exist){
                userData.push({firstName , lastName, email, password, img});
                localStorage.setItem("userData", JSON.stringify(userData));
                document.querySelector("form").reset();
                document.getElementById("firstName").focus();
                alert("account created");
                window.location.href="login.html";
            }else{
                alert("duplicate found");
            }
            e.preventDefault();

           

            // window.location.href = "login.html";

            
        }

          
  

