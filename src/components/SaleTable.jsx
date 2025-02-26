import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSaleTableDataHook from '../Hooks/SaleTableDataHook'
import { toast } from 'react-toastify'

function SaleTable({props}) {
    let {tableData} = props
    let {customerBill,getBillOfuser,handleDelete} = useSaleTableDataHook()
    // useEffect(()=>{},[tableData])
    // console.log(tableData)
    let navigate = useNavigate()
    // console.log(tableData)
    useEffect(()=>{
        let data = calculateSale(tableData)
       if(data){
        toast.info(`sale Code ${data}`)
       }
    },[tableData])
    
    let calculateSale = (data)=>{
        let totalAmount 
        let totalCost

        if(!data && data.length < 0) return
        totalAmount= data?.reduce((acc,curr)=>{
            let total = curr.products.reduce((sum,product)=>sum + Number(product.productTotal),0)
            return acc + total
        },0)
        totalCost= data?.reduce((acc,curr)=>{
            let total = curr.products.reduce((sum,product)=>sum + (Number(product.MinCost) * Number(product.productQuantity)),0)
            return acc + total
        },0)
        // console.log(data,totalAmount,totalCost)
        return totalCost
    }
    // calculateSale(tableData)


  return <>
  <div className="w-full">
    <table className="table bg-slate-600 text-white">
        <thead>
            <tr className='text-white'>
                <th>#</th>
                <th>Name</th>
                <th>dueAmount</th>
                <th>paid Amount</th>
                <th>payment Type</th>
                <th>Total Amount</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {tableData?.length>0 && tableData?.map((e,i)=>{
                return <tr key={i} className={`${Number(e.dueAmount)>0 ?'bg-red-800':'bg-slate-400'}`}>
                <td>{i+1}</td>
                <td>{e.customerName}</td>
                <td>{e.dueAmount}</td>
                <td>{e.paidAmount}</td>
                <td>{e.paymentType}</td>
                <td>{e.totalAmount}</td>
                <td className='flex gap-4 cursor-pointer '> <i className="fa-solid  fa-trash text-red-400" onClick={()=>handleDelete(e._id)}></i></td>
            </tr>
            })}
        </tbody>
    </table>
  </div>
  
  
  
  </>
  
}

export default SaleTable