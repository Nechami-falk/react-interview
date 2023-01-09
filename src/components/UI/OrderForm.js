import React, {useContext} from 'react';
import { useForm, useState } from 'react-hook-form';
import classes from './OrderForm.module.css';
import CartContext from '../../store/cart-context';

const OrderForm =(props)=>{

    
    const cartCtx = useContext(CartContext);
    const { register, handleSubmit,  formState: { errors } } = useForm(); 

    const onSubmit =(data) =>{
        console.log('hhhh');
        props.onClose();
        console.log(data);
        
    }
  
    const resetTheCart=()=>{
        console.log('reset');
      }

    return(
    <>
    <div className ='container m-3'>
    <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
        
            
            <lable className="form-label">Your Name</lable>
            <input className="form-control text-end" type="text" name="yourName" {...register("yourName", {required:true})}/>
            {errors.yourName && errors.yourName.type === "required" && (
              <p>Please enter a valid name!</p>
            )}

            <lable className="form-label">Street</lable>
            <input className="form-control text-end" type="text" name="street" {...register("street", {required:true})}/>
            {errors.street && errors.street.type === "required" && (
              <p>please enter a valid street!</p>
            )}

            <lable className="form-label">Postal Code</lable>
            <input className="form-control text-end" type="text" name="postalCode" {...register("postalCode", {required:true})}/>
            {errors.postalCode && errors.postalCode.type === "required" && (
              <p>Please enter valid postal code</p>
            )}

            <lable className="form-label">City</lable>
            <input className="form-control text-end" type="text" name="city" {...register("city", {required:true})}/>
            {errors.city && errors.city.type === "required" && (
              <p>Please enter valid city</p>
            )}
            
            <div className={classes.actions}>
      
            <button className={classes['button--alt']} type="button" onClick={resetTheCart}>cancel</button>
            <button className={classes.button } type="submit">confirm</button>
    </div>
            
</form>
</div>
</div>
</>
    )
}
export default OrderForm;