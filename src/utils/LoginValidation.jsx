export default function Validation(values)
{
    const errors = {};
    var regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(values.email === "")
    {
        errors.email = "Email is empty"
    }
    if(!values.email.match(regex))
    {
        errors.email2 = "Invalid email";
    }
    if(values.password === "")
    {
        errors.password = "Password is empty"
    }

    return errors;
} 