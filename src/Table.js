// import react, { useState } from "react";
// // import Form from "Form";  


// import "./Table.css" ;

// function Table(){

//     const [Search,setSearch] =useState("")


//     const data =[
//         {
//             BankInfo:"STARK BANK",
//             Date:"11/12/2023",
//             TransID:"1",
//             Payment:20000,
//             Description:"Hello this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0


//         },
//         {
//             BankInfo:"Arc BANK",
//             Date:"11/09/2021",
//             TransID:"2",
//             Payment:20000,
//             Description:"Hi from data base",
//             Entries:"",
//             Debit :100,
//             Credit:0

//         },
//         {
//             BankInfo:"New BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0

//         },
//         {
//             BankInfo:"Auturias BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0

//         },
//         {
//             BankInfo:"Auturias BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0

//         },
//         {
//             BankInfo:"Auturias BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0
           
//         },
//         {
//             BankInfo:"Auturias BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0

//         },
//     ]



    
//     return(
//         <div >    
//         <div>
//             {/* <Form>
//                 <inputgroup className="my-3">
//                     <form.control onChange={(e) => setSearch(e.target.value)} placeholder="search here"  />
//                 </inputgroup>
                                      
//             </Form> */}
//         </div>        

        
                 
//         {/* <table className=" tabs">
//         <thead >
//           <tr >
//             <th>BANK DETAILS</th>
//             <th>TRANSACTION DATE</th>
//             <th>TRANSACTION ID</th>
//             <th>PAYMENT TYPE</th>
//             <th>DESCRIPTION</th>
//             <th>ENTRIES</th>
//             <th>DEBIT</th>
//             <th>CREDIT</th>
//           </tr>
//         </thead>
//         <tbody>
//             {
//                 data.map((val,i)=>

//                 <tr>
//                   <td>{val.BankInfo}</td>
//                   <td>{val.Date}</td>
//                   <td>{val.TransID}</td>
//                   <td>{val.Payment}</td>
//                   <td>{val.Description}</td>
//                   <td>{val.Entries}</td>
//                   <td>{val.Debit}</td>
//                   <td colSpan={0}>{val.Credit}</td> */}
//                   {/* <td colSpan={2}>{val.Debit} - {val.Credit}</td> */}
                 
            
//                  {/* </tr>
//                 )
//             }
          
         
//         </tbody>
//       </table>              */}



// {/* 
// <table className=" tabs">
//         <thead >
//           <tr >
//             <th>BANK DETAILS</th>
//             <th>TRANSACTION DATE</th>
//             <th>TRANSACTION ID</th>
//             <th>PAYMENT TYPE</th>
//             <th>DESCRIPTION</th>
//             <th>ENTRIES</th>
//             <th>DEBIT</th>
//             <th>CREDIT</th>
//           </tr>
//         </thead>
//         <tbody>
//             {
//                 data.
//                 filter((val) =>{
//                     return Search.toLowerCase() ===''
//                     ? val 
//                     :
//                     val.TransID.toLowerCase().includes( Search)
//                 }).map((val,i)=>

//                 <tr>
//                   <td>{val.BankInfo}</td>
//                   <td>{val.Date}</td>
//                   <td>{val.TransID}</td>
//                   <td>{val.Payment}</td>
//                   <td>{val.Description}</td>
//                   <td>{val.Entries}</td>
//                   <td>{val.Debit}</td>
//                   <td colSpan={0}>{val.Credit}</td> */}
//                   {/* <td colSpan={2}>{val.Debit} - {val.Credit}</td> */}
                 
// {/*             
//                  </tr>
//                 )
//             }
          
         
//         </tbody>
//       </table>  */}
      
              
              
//         </div>
//     )
// } 



// export default Table; 
    

                                                        //    new  hi



// import { useState } from "react";
// import "./Table.css" ;
// // import InputGroup from "react-bootstrap/InputGroup"
// // import Form from "react-bootstrap/From"
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
 
// function Table(){
//     const [Search,setSearch]=useState("")
 
 
//     const data =[
//         {
//             BankInfo:"STARK BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0
 
 
//         },
//         {
//             BankInfo:"Arc BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0
 
//         },
//         {
//             BankInfo:"New BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0
 
//         },
//         {
//             BankInfo:"Auturias BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0
 
//         },
//         {
//             BankInfo:"Auturias BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0
 
//         },
//         {
//             BankInfo:"Auturias BANK",
//             Date:"11/12/2023",
//             TransID:"123",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0
 
//         },
//         {
//             BankInfo:"Auturias BANK",
//             Date:"11/12/2023",
//             TransID:"8",
//             Payment:20000,
//             Description:"Hello STARK this is from data base",
//             Entries:"started since",
//             Debit :100,
//             Credit:0
 
//         },
//     ]
 
 
 
    
//     return(
//         <div >   
//             <div>
//              <Form>
//                 <InputGroup className="my-3">
//                     <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="search here"  />
//                 </InputGroup>
                                      
//             </Form> 
//         </div>        
                             
//         <table className=" tabs">
//         <thead >
//           <tr >
//             <th>BANK DETAILS</th>
//             <th>TRANSACTION DATE</th>
//             <th>TRANSACTION ID</th>
//             <th>PAYMENT TYPE</th>
//             <th>DESCRIPTION</th>
//             <th>ENTRIES</th>
//             <th>DEBIT</th>
//             <th>CREDIT</th>
//           </tr>
//         </thead>
//         <tbody>
//             {
//                 data.filter((val) =>{
//                     return Search.toLowerCase() ===''
//                     ? val
//                     :
//                     val.TransID.toLowerCase ().includes( Search)||val.BankInfo.toLowerCase ().includes( Search) ||val.Date.toLowerCase ().includes( Search)
//                       ||val.Description.toLowerCase ().includes( Search) 
//                      ||val.Entries.toLowerCase ().includes( Search) ||val.Debit.toLowerCase ().includes( Search) ||val.Entries.toLowerCase ().includes( Search) 
//                 }) .map((val,i)=>
 
//                 <tr>
//                   <td>{val.BankInfo}</td>
//                   <td>{val.Date}</td>
//                   <td>{val.TransID}</td>
//                   <td>{val.Payment}</td>
//                   <td>{val.Description}</td>
//                   <td>{val.Entries}</td>
//                   <td>{val.Debit}</td>
//                   <td colSpan={0}>{val.Credit}</td>
//                   {/* <td colSpan={2}>{val.Debit} - {val.Credit}</td> */}
                 
            
//                  </tr>
//                 )
//             }
          
         
//         </tbody>
//       </table>             
      
              
              
//         </div>
//     )
// }
 
 
 
// export default Table;

// import React, {useState} from 'react';
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { data } from "./data"
 
// function Taable() {
//   const [search, setSearch] = useState('');
 
//   return (
//     < div className='App' >
//       <Container>
//         <h1 className='text-center mt-4'>Name List</h1>
//         <Form>
//           <InputGroup className='my-3'>
//             <Form.Control onChange={(e) => (setSearch(e.target.value))}
//               placeholder='Search contacts' />
//           </InputGroup>
//         </Form>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               data.filter((item) => {
//                 return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)
//               }).map((item) => (
//                 <tr key={item.key}>
//                   <td>{item.first_name}</td>
//                   <td>{item.last_name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.mobile_number}</td>
//                 </tr>
//               ))
//             }
 
//           </tbody>
//         </Table>
//       </Container>
//     </div >
//   );
// }
 
// export default Taable;


















 
                                                        //    new
 
 
 
                                                        import { useState } from "react";
                                                        import "./Table.css" ;
                                                        // import InputGroup from "react-bootstrap/InputGroup"
                                                        // import Form from "react-bootstrap/From"
                                                        import Container from 'react-bootstrap/Container';
                                                        import Form from 'react-bootstrap/Form';
                                                        import InputGroup from 'react-bootstrap/InputGroup';
                                                         
                                                        function Table(){
                                                            const [Search,setSearch]=useState("")
                                                         
                                                        
                                                            const data =[
                                                                {
                                                                  BankInfo: "STARK BANK",
                                                                  Date: "11/12/2023",
                                                                  TransID: "123",
                                                                  Payment: 20000,
                                                                  Description: "Hello STARK this is from data base",
                                                                  Entries: "started since",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "credit"
                                                                },
                                                                {
                                                                  BankInfo: "CITI BANK",
                                                                  Date: "11/13/2023",
                                                                  TransID: "124",
                                                                  Payment: 15000,
                                                                  Description: "Payment for services rendered",
                                                                  Entries: "ongoing transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "debit"
                                                                },
                                                                {
                                                                  BankInfo: "WELLS FARGO",
                                                                  Date: "11/14/2023",
                                                                  TransID: "125",
                                                                  Payment: 18000,
                                                                  Description: "Purchase of equipment",
                                                                  Entries: "financial activities",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "credit"
                                                                },
                                                                {
                                                                  BankInfo: "CHASE BANK",
                                                                  Date: "11/15/2023",
                                                                  TransID: "126",
                                                                  Payment: 22000,
                                                                  Description: "Investment deposit",
                                                                  Entries: "investment portfolio",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "debit"
                                                                },
                                                                {
                                                                  BankInfo: "BANK OF AMERICA",
                                                                  Date: "11/16/2023",
                                                                  TransID: "127",
                                                                  Payment: 25000,
                                                                  Description: "Loan repayment",
                                                                  Entries: "loan transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "credit"
                                                                },
                                                                {
                                                                  BankInfo: "TD BANK",
                                                                  Date: "11/17/2023",
                                                                  TransID: "128",
                                                                  Payment: 17000,
                                                                  Description: "card payment",
                                                                  Entries: "card transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "debit"
                                                                },
                                                                {
                                                                  BankInfo: "HSBC BANK",
                                                                  Date: "11/18/2023",
                                                                  TransID: "129",
                                                                  Payment: 20000,
                                                                  Description: "Salary deposit",
                                                                  Entries: "payroll transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "credit"
                                                                },
                                                                {
                                                                  BankInfo: "BARCLAYS",
                                                                  Date: "11/19/2023",
                                                                  TransID: "130",
                                                                  Payment: 16000,
                                                                  Description: "Vendor payment",
                                                                  Entries: "vendor transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "debit"
                                                                },
                                                                {
                                                                  BankInfo: "US BANK",
                                                                  Date: "11/20/2023",
                                                                  TransID: "131",
                                                                  Payment: 19000,
                                                                  Description: "Utility bill payment",
                                                                  Entries: "utility transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "credit"
                                                                },
                                                                {
                                                                  BankInfo: "PNC BANK",
                                                                  Date: "11/21/2023",
                                                                  TransID: "132",
                                                                  Payment: 21000,
                                                                  Description: "Transfer to savings account",
                                                                  Entries: "savings transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "debit"
                                                                },
                                                                {
                                                                  BankInfo: "CAPITAL ONE",
                                                                  Date: "11/22/2023",
                                                                  TransID: "133",
                                                                  Payment: 18000,
                                                                  Description: "Online purchase",
                                                                  Entries: "online transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "credit"
                                                                },
                                                                {
                                                                  BankInfo: "ALLY BANK",
                                                                  Date: "11/23/2023",
                                                                  TransID: "134",
                                                                  Payment: 20000,
                                                                  Description: "Real estate investment",
                                                                  Entries: "investment activities",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "debit"
                                                                },
                                                                {
                                                                  BankInfo: "SANTANDER BANK",
                                                                  Date: "11/24/2023",
                                                                  TransID: "135",
                                                                  Payment: 17000,
                                                                  Description: "Membership fee payment",
                                                                  Entries: "membership transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "credit"
                                                                },
                                                                {
                                                                  BankInfo: "ALLY BANK",
                                                                  Date: "11/25/2023",
                                                                  TransID: "136",
                                                                  Payment: 22000,
                                                                  Description: "Dividend received",
                                                                  Entries: "dividend transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "debit"
                                                                },
                                                                {
                                                                  BankInfo: "SUNTRUST BANK",
                                                                  Date: "11/26/2023",
                                                                  TransID: "137",
                                                                  Payment: 19000,
                                                                  Description: "Stock purchase",
                                                                  Entries: "stock transactions",
                                                                  Debit: 0,
                                                                  Credit: 0,
                                                                  PaymentType: "credit"
                                                                }
                                                              ]
                                                              
                                                               
                                                         
                                                         
                                                         
                                                            
                                                            return(
                                                                <div >   
                                                                    <div>
                                                                     <Form>
                                                                        <InputGroup className="my-3">
                                                                            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="search here"  />
                                                                        </InputGroup>
                                                                                              
                                                                    </Form>PaymentFilter
                                                                </div>        

                                                                                  
                                                                <table className=" tabs">
                                                                <thead >
                                                                  <tr >
                                                                    <th>BANK DETAILS</th>
                                                                    <th>TRANSACTION DATE</th>
                                                                    <th>TRANSACTION ID</th>  
                                                                    <th>Transaction Type</th> 
                                                                    <th>DESCRIPTION</th>
                                                                    <th>ENTRIES</th>
                                                                    <th>DEBIT</th>
                                                                    <th>CREDIT</th>
                                                                    
                                                                  </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        data.filter((val) =>{
                                                                            return Search.toLowerCase() ===''
                                                                            ? val
                                                                            :
                                                                            val.TransID.toLowerCase ().includes( Search)||val.BankInfo.toLowerCase ().includes( Search) ||val.Date.toLowerCase ().includes( Search)
                                                                             ||val.Description.toLowerCase ().includes( Search) ||val.PaymentType.toLowerCase ().includes( Search)
                                                                             ||val.Entries.toLowerCase ().includes( Search) ||val.Payment.toString ().includes(Search) 
                                                                        }) .map((val,i)=>
                                                         
                                                                <tr>
                                                                <td>{val.BankInfo}</td>
                                                                <td>{val.Date}</td>
                                                                <td>{val.TransID}</td>
                                                                <td>{val.PaymentType}</td>
                                                                <td>{val.Description}</td>
                                                                <td>{val.Entries}</td>
                                                                <td>{val.PaymentType === 'debit' ? val.Debit=val.Payment : 0 }</td>
                                                                <td>{val.PaymentType === 'credit' ? val.Credit=val.Payment : 0 }</td>
                                                               </tr>
                                                                        )
                                                                    }
                                                                  
                                                                 
                                                                </tbody>
                                                              </table>             
                                                              
                                                                      
                                                                      
                                                                </div>
                                                            )
                                                        }
                                                         
                                                         
                                                         
                                                        export default Table;
                                                         
                                                