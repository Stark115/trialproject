import React, { useEffect, useState } from 'react'

function PaymentFilter() {
    const[filterdata,setFilterData]=useState([])
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
//     useEffect(()=>{setFilterData(filter((item)=>{item==='CITI BANK'}))},[])
//    setFilterData(filter((item)=>{item==='CITI BANK'}))
  return (
    <div>
        {/* {
      fildata.map((item)=>{
        return
        (<div>
          <h1>{item.BankInfo}</h1>
          <h1>{item.Credit}</h1>
         <h1>{item.Debit}</h1>
        <h1>{item.Date}</h1>
          <h1>{item.Description}</h1>
          <h1>{item.PaymentType}</h1>
       </div>)
     })
           
} */}


 {
                                                                        data.filter((val) =>{
                                                                            return 1 + 3 !== 4
                                                                            ? val
                                                                            :
                                                                            val.BankInfo.includes('CITI BANK') 
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
    </div>
  )
}

export default PaymentFilter