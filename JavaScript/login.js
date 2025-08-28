// document.getElementById('loginButton').addEventListener('click',function(e){
//     e.preventDefault()

//     const mobileNumber = 12345678900
//     const password = 123

//     const mobileValue = document.getElementById('mobile-number').value
//     const mobileValueConvert = parseInt(mobileValue)

//     const passwordValue = document.getElementById('password').value
//     const passwordValueConvert = parseInt('passwordValue')

//     if(mobileNumber.length === mobileValueConvert.length && password.length === passwordValueConvert){
//         window.location.href="main_page.html"
//     }else{
//         alert("Wrong input.Please enter again..!")
//     }

// })

// // console.log("hi")


document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault();

    // Correct mobile and password
    const mobileNumber = "12345678900";
    const password = "123";

    // Get user input values
    const mobileValue = document.getElementById('mobile-number').value;
    const passwordValue = document.getElementById('password').value;

    // Check if inputs match
    if (mobileNumber === mobileValue && password === passwordValue) {
        window.location.href = "main_page.html"; // Redirect to dashboard
    } else {
        alert("Wrong input. Please enter again..!");
    }
});
