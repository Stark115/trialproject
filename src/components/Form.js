// import React, { useState } from 'react'
// import Input from './Input'
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from 'yup';

// const schema = yup
//   .object({
//     bankInfo: yup
//     .string("Bank information must be alpha numeric")
//     .matches(/^[a-zA-Z]*$/, 'Mention a valid name')
//     .required('Required'),
//     accountNumber: yup
//     .number()
//     .transform((originalValue) => (originalValue === '' ? null : originalValue))
//     .positive('Account number must be a positive number')
//     .integer('Account number must be an integer').typeError("must not be empty or must be in a proper format")
//     .required('Account number is required'),
//     //date: yup.required(),
//     transID: yup.number("transactionID  must be a number").positive("must not be a negative number").integer("must be a number").typeError("must not be empty or must be in a proper format").required("required"),
//     // paymentType: yup.number().positive().integer().required(),
//     description: yup.string("Description information should not be a number").required("required"),

//     // creditTo: yup.string().required(),
//     // debitTo: yup.string().required(),
//     // debit: yup.number().positive().integer().required(),
//     // credit: yup.number().positive().integer().required(),

//     email: yup.string()
//     .email('Invalid email format')
//     .matches(
//       /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//       'Invalid email format'
//     )
//     .required('Email is required'),
//     transactionType: yup.string().required('Transaction type is required')

//   }).required()

 
    

// function Form() {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//     trigger,
//     clearErrors,
   
//   } = useForm({
//     resolver: yupResolver(schema),
//   })
//     const [transactionType, setTransactionType] = useState('');
//     const handleTransactionTypeChange = (type) => {
//       setTransactionType(type);
//       setValue('transactionType', type); // Set the value in the form state
//     };  
//     const onSubmit = (data) =>{ console.log(data)}

//       const handleChange = (bankInfo, e) => {
//         // Clear errors for the specific field when the user starts filling it
//         clearErrors(bankInfo);
        
//         // Trigger validation for the specific field on change
//         trigger(bankInfo);
//       };
//   return (
//     <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
          
//         {/* <input {...register("bankInfo")} 
//         onChange={(e) => handleChange('bankInfo', e)}
//         onBlur={() => trigger('bankInfo')}
//         /> */}
//         {/* <p>{errors.bankInfo?.message}</p> */}

//         <input {...register("accountNumber")} />
//         <p>{errors.accountNumber?.message}</p>

//         {/* <input {...register("date")} />
//         <p>{errors.date?.message}</p> */}

//         <input {...register("transID")} />
//         <p>{errors.transID?.message}</p>

//         {/* <input {...register("firstName")} />
//         <p>{errors.firstName?.message}</p>    payment dropdown  */}

//         <input {...register("description")} />
//         <p>{errors.description?.message}</p>

//         <input {...register("email")}/>
//         <p>{errors.email?.message}</p>
//         <label for='credit'>Credit</label>
//         <input
//           type="radio"
//           id='credit'
//           value="credit"
//           {...register('transactionType')}
//           checked={transactionType === 'credit'}
//           onChange={() => handleTransactionTypeChange('credit')}
//         /><br/>
//         <label for='debit'>Debit</label>
//         <input
//           id='debit'
//           type="radio"
//           value="debit"
//           {...register('transactionType')}
//           checked={transactionType === 'debit'}
//           onChange={() => handleTransactionTypeChange('debit')}
//         />
//         <p>{errors.transactionType?.message}</p><br/>

//         <input type="submit" />
//       </form>

//     </div>
//   )
// }

// export default Form


// code 2
import React, { useState } from 'react';
import Input from './Input'; // Assuming this component is defined
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import{z} from 'zod'
import * as yup from 'yup';

const schema = z.object({
  bankInfo: z
    .string("Bank information must be alpha numeric")
    .matches(/^[a-zA-Z]*$/, 'Mention a valid name')
    .required('Required'),
    accountNumber: z
    .number()
    .transform((originalValue) => (originalValue === '' ? null : originalValue))
    .positive('Account number must be a positive number')
    .integer('Account number must be an integer').typeError("must not be empty or must be in a proper format")
    .required('Account number is required'),
    //date: yup.required(),
    transID: z.number("transactionID  must be a number").positive("must not be a negative number").integer("must be a number").typeError("must not be empty or must be in a proper format").required("required"),
    // paymentType: yup.number().positive().integer().required(),
    description: z.string("Description information should not be a number").required("required"),

    // creditTo: yup.string().required(),
    // debitTo: yup.string().required(),
    // debit: yup.number().positive().integer().required(),
    // credit: yup.number().positive().integer().required(),

    email: z.string()
    .email('Invalid email format')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email format'
    )
    .required('Email is required'),
    transactionType: z.string().required('Transaction type is required')

  }).required()
  

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    clearErrors,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [transactionType, setTransactionType] = useState('');

  const handleTransactionTypeChange = (type) => {
    setTransactionType(type);
    // No need to use setValue here, as the radio button is already registered
  };

  const onSubmit = (data) => {
    console.log(data); // Should now log the form data
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Other form fields */}
        <input {...register("accountNumber")} />
      <p>{errors.accountNumber?.message}</p>

        {/* <input {...register("date")} />
        <p>{errors.date?.message}</p> */}

         <input {...register("transID")} />
         <p>{errors.transID?.message}</p>

        {/* <input {...register("firstName")} />
         <p>{errors.firstName?.message}</p>    payment dropdown  */}

        <input {...register("description")} />
       <p>{errors.description?.message}</p>

        <label for='credit'>Credit</label>
        <input
          type="radio"
          id='credit'
          value="credit"
          {...register('transactionType')}
          checked={transactionType === 'credit'}
          onChange={() => handleTransactionTypeChange('credit')}
        />
        <br />
        <label for='debit'>Debit</label>
        <input
          id='debit'
          type="radio"
          value="debit"
          {...register('transactionType')}
          checked={transactionType === 'debit'}
          onChange={() => handleTransactionTypeChange('debit')}
        />
        <p>{errors.transactionType?.message}</p>
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form