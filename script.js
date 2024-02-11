// // const form=document.querySelector("#form")
// const Name=document.querySelector("#name-error")
// const email=document.querySelector("#email")
// const phone=document.querySelector("#phone")
// const comments=document.querySelector("#comments")



// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//      validateInput()

// })
// function validateInput(){
//     const nameval=Name.value.trim()
//      const emmailval=email.value.trim()
//      const phoneval=phone.value.trim()
//      const commentsval=comments.value.trim()

//      if(nameval==""){
//         setError(Name,"name is required")

//      }
//      else{
//         setSuccess(Name)
//      }
//      if(emmailval=="")
//      {
//         setError(email,"email is required")
//      }
//         else if(!validateEmail(emmailval))
//         {
//             setError(email,"email is invalid")


//         }
//         else{
//             setSuccess(email)

//         }
//         if(phoneval=="")
//         {
//             setError(phone,"phone numbner is required")

//         }
//         else if(phoneval.length<10)
//         {
//             setError(phone,"enter valid number")

//         }
//         else{
//             setSuccess(phone)
//         }
//      if(commentsval=="")
//      {
//         setError(comments,"enter something")

//      }
//      else{
//         setSuccess(comments)
//      }

// }
// // element = 1st password ,but if you not type password msg is psw is required
// function setError(element,message){

//     const inputGroup=element.parentElement;
//     const errorElement=innerGroup.querySelector(".error")
//     errorElement.innerText=message;
//     inputGroup.classList.add("error")
//     inputGroup.classList.remove("succes")


// }
// function setSuccess(element){

//     const inputGroup=element.parentElement;
//     const errorElement=innerGroup.querySelector(".error")
//     errorElement.innerText="";
//     inputGroup.classList.add("succes")
//     inputGroup.classList.remove("erorr")


// }
// const validateEmail=(email) =>{

//     return String(email)
//     .toLowerCase()
//     .match(
//         /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    
// }

// var nameError = document.getElementById('name-error')
// var emailError = document.getElementById('email-error')
// var commentsError = document.getElementById('comments-error')
// var phoneError = document.getElementById('phone-error')
// var submitError = document.getElementById('submit-error')


// function validateName(){
//     var name = document.getElementById('name').value
//     if(name.length == 0){
//         nameError.innerHTML = 'Name is required'
//         return false
//     }
//     if(!name.match(/^[A-Za-z]\s{1}[A-Za-z]$/)){
//         nameError.innerHTML = 'Write full name'
//         return false
//     }
//     nameError.innerHTML = ''
//     return true
// }
// function validateEmail(){
//     var email = document.getElementById('email').value
//     if(email.length == 0){
//         emailError.innerHTML = 'Email is required'
//         return false
//     }
//     emailError.innerHTML = ''
//     return true
// }
// function validatecomments(){
//     var comments = document.getElementById('comments').value
//     var required=30
//     var left=required-comments.length

//     if(left>0){
//        commentsError.innerHTML = 'More characters required'
//         return false
//     }
//     commentsError.innerHTML = ''
//     return true
// }
// function validatePhone(){
//     var phone = document.getElementById('phone').value
    
   

//     if(phone==""){
//        phoneError.innerHTML = 'phone number is required'
//         return false
//     }
//     else if(phone.length<10 || phone.length>10)
//     {
//         phoneError.innerHTML = 'invalid'
//         return false

//     }
//     phoneError.innerHTML = ''
//     return true
// }

// function validateForm(){
//     if(!validateName() || !validateEmail() || !validatecomments() || !validatePhone()){
//         submitError.style.display = 'block'
//         submitError.innerHTML = 'Fix errors'
//         setTimeout(function(){submitError.style.display = 'none'},3000)
//         return false
//     }
//     submitError.innerHTML = 'Form Submited'
//         setTimeout(function(){submitError.style.display = 'none'},3000)
// }
var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')


function validateName(){
    var name = document.getElementById('contact-name').value
    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name'
        return false
    }
    nameError.innerHTML = ''
    return true
}
function validateEmail(){
    var email = document.getElementById('contact-email').value
    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false
    }
    emailError.innerHTML = ''
    return true
}
function validateMessage(){
    var message = document.getElementById('contact-message').value
    var required=30
    var left=required-message.length

    if(left>0){
        messageError.innerHTML = 'More characters required'
        return false
    }
    messageError.innerHTML = ''
    return true
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Fix errors'
        setTimeout(function(){submitError.style.display = 'none'},3000)
        return false
    }
    submitError.innerHTML = 'Form Submited'
        setTimeout(function(){submitError.style.display = 'none'},3000)
}