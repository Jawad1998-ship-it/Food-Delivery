

export default function Validation(values)
{
    const errors = {};
    var regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(values.name === "")
    {
        errors.name = "FullName is required"
    }
    if(values.username === "")
    {
        errors.username = "Username is required"
    }
    if(values.password === "")
    {
        errors.password = "Password is required"
    }
    if(values.confirmPassword !== values.password)
    {
        errors.confirmPassword = "Password did not match"
    }
    if(values.email === "")
    {
        errors.email = "Email is required"
    }
    if(!values.email.match(regex))
    {
        errors.email2 = "Email is invalid"
    }
    if(values.phone === "")
    {
        errors.phone = "Phone Number is required"
    }
    if(values.address === "")
    {
        errors.address = "Address is required"
    }
    return errors;
} 