import React from 'react';


export default function ComValidation(values)
{
    const errors = {};
    var regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(values.name === "")
    {
        errors.name = "Outlet name is required"
    }
    if(values.fullname === "")
    {
        errors.fullname = "Fullname is required"
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
    if(values.photo === "")
    {
        errors.photo = "Photo is required"
    }
    return errors;
} 