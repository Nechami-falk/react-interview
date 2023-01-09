import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import classes from './OrderForm.module.css';
import CartContext from '../../store/cart-context';

const OrderForm =(props)=>{

    
    const cartCtx = useContext(CartContext);
    const { register, handleSubmit,  formState: { errors } } = useForm(); 
    
    
    const onSubmit =(data) =>{
        props.onClose();
        console.log(data);
        
    }
  
    const resetTheCart=()=>{
        cartCtx.removeAll();
        props.onClose();
      }

    return(
    <>
    <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
        

            <lable className={errors.yourName ? classes.lableError : classes.lable}>Your Name</lable>
            <input className={errors.yourName ? classes.inputError : classes.input} type="text" name="yourName" {...register("yourName", {required:true})}/>
            {errors.yourName && errors.yourName.type === "required" && (
              <p>Please enter a valid name!</p>
            )}

            <lable className={errors.street ? classes.lableError : classes.lable}>Street</lable>
            <input className={errors.street ? classes.inputError : classes.input} type="text" name="street" {...register("street", {required:true})}/>
            {errors.street && errors.street.type === "required" && (
              <p>please enter a valid street!</p>
            )}

            <lable className={errors.postalCode ? classes.lableError : classes.lable}>Postal Code</lable>
            <input className={errors.postalCode ? classes.inputError : classes.input} type="text" name="postalCode" {...register("postalCode", {required:true})}/>
            {errors.postalCode && errors.postalCode.type === "required" && (
              <p>Please enter valid postal code</p>
            )}

            <lable className={errors.city ? classes.lableError : classes.lable}>City</lable>
            <input className={errors.city ? classes.inputError : classes.input } type="text" name="city" {...register("city", {required:true})}/>
            {errors.city && errors.city.type === "required" && (
              <p>Please enter valid city</p>
            )}
            
            <div className={classes.actions}>
      
            <button className={classes['button--alt']} type="button" onClick={resetTheCart}>cancel</button>
            <button className={classes.button } type="submit">confirm</button>
    </div>
            
</form>
</div>
</>
    )
}
export default OrderForm;
