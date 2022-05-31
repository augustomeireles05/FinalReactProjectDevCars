export const validateCPF = new RegExp(
    /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
)

export const validatePassword = new RegExp(
//    /^.{8}$/
    /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/
)

export const validateEmail = new RegExp(
    /[a-zA-Z\d]+@[a-zA-Z\d]+\.[a-zA-Z\d]+\.[a-zA-Z\d]+/ 
)

export const validateDate = new RegExp(

)

