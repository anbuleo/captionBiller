import React, { useEffect, useRef, useState } from 'react'
import {Formik } from 'formik'
import * as Yup from 'yup';
import { Link, useParams } from 'react-router-dom';
import convertToBase64 from '../common/ImageCoverter';
import useCreateProduct from '../Hooks/useCreateProduct';
import { useSelector } from 'react-redux';
import useEditProduct from '../Hooks/useEditProduct';




function CreateProduct() {
    
    const {product}= useSelector((state)=>state.product)

    let {loading,editProdduct} = useEditProduct()

    let {id} = useParams()

    let productr = product.filter((a,b)=>a._id==id)
    let products = productr[0]
    

    // console.log(product)
//   let [id,setId] = useState("")
  const [file,setFile] = useState('')
 
//   let {loading,createProduct} = useCreateProduct()
//   let avathar = useRef("")
  let [inputFeild,setInputFeild] = useState(true)
  let [inputFeildbtn,setInputFeildbtn] = useState('')
  // let {getUSer} = GetAllProductHook()


//   let userId = JSON.parse(localStorage.getItem("data"))._id

    const ProductSchema = Yup.object().shape({
        productName : Yup.string().required('Required Name *'),
        productCost : Yup.string().required('Required Cost *'),
        productPrice : Yup.string().required('Required Price *'),
        tanglishName: Yup.string().required('Required Tanglish Name *') ,
        stockQuantity:Yup.string().required('Add Stock *'),
        qantityType:Yup.string().required('Select One *'),
        unitValue : Yup.string().required('Enter One pcs value *'),
        productType : Yup.string().required('Select one *'),
        MRP : Yup.string().required('MRP required*')
    })
    const handleAddAvathar = async(e)=>{
      try {
        const base64 = await convertToBase64(e.target.files[0])
        setFile(base64)
        // console.log(avathar)
        // console.log(base64)
      // setFile(base64)
      } catch (error) {

        console.log(error)
      }
     
    }
    const handleSubmitValues =async(val)=>{

      try {
        editProdduct(val,id)
      } catch (error) {
        
      }
      // console.log(val)
    //   await createProduct(val)
    }

  return <>
  <div className=" flex justify-end p-4">
   
    <div className="btn btn-info"><Link to={'/product'}>{`<-- Back`}</Link></div>
  </div>
  <div className="h-screen place-content-center w-screen ">
    
    <div className="w-full max-w-lg p-4  mx-auto  bg-slate-500 backdrop-blur-xl text-white  opacity-95 border border-zinc-950  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="heading">
          <h1 className='text-center text-xl'>Create Product</h1>
        </div>
        <div className="form  ">
        <Formik enableReinitialize
          initialValues={{
           
            productName:products?.productName,
            avatar:products?.avatar,
            productType:products?.productType,
            productBarCode:"",
            productPrice:products?.productPrice,
            productCost:products?.productCost,
            stockQuantity:products?.stockQuantity,
            qantityType:products?.qantityType,
            createBy:JSON.parse(localStorage.getItem("data"))._id ,
            unitValue:products?.unitValue,
            productCode:products?.productCode,
            tanglishName:products?.tanglishName,
            MRP:products?.MRP    



            
          }}
          validationSchema={ProductSchema}
          onSubmit={(values)=>handleSubmitValues(values)}
          
        >
          {({values, errors,touched,handleBlur,handleSubmit,handleChange})=>(
            <form onSubmit={handleSubmit} className=''>
           
    
              <div className="flex gap-10">
                <div className="">
                <div className="">
                <label>Name</label>
                <input value={values.productName} className='input input-bordered w-full text-black' type="text" name='productName' placeholder="Product Name"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.productName && touched.productName ? <div style={{color:"red"}}>{errors.productName}</div>:null}
              </div>
                <div className="">
                <label>Tanglish Name</label>
                <input value={values.tanglishName} className='input input-bordered w-full text-black' type="text" name='tanglishName' placeholder="Tanglish Name"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.tanglishName && touched.tanglishName ? <div style={{color:"red"}}>{errors.tanglishName}</div>:null}
              </div>
              <div className="">
              <label>Price of Product</label>
                <input value={values.productPrice} className='input input-bordered w-full text-black' type="number" name='productPrice' placeholder="Product Selling Price"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.productPrice && touched.productPrice ? <div style={{color:"red"}}>{errors.productPrice}</div>:null}
              </div>
              
              <div className="">
                <label>One Unit Value</label>
             
                <input value={values.unitValue} className='input input-bordered w-full text-black' type="number" name='unitValue' placeholder="unitValue"  onBlur={handleBlur} onChange={handleChange}/>
              {errors.unitValue && touched.unitValue ? <div style={{color:"red"}}>{errors.unitValue}</div>:null}
              </div>
              <div className="">
                <label> select</label>
             
              <select value={values.qantityType} className="select select-info w-full max-w-xs text-gray-800" type="text" name='qantityType'   onBlur={handleBlur} onChange={handleChange}>
                <option disabled selected>Select Unit Value</option>
                <option value={'Pcs'}>Pcs</option>
                <option value={'Kg'}>Kg</option>
                <option value={'G'}>Gram</option>
                <option value={"Bag"}>Bag</option>
                <option value={"Box"}>Box</option>
              </select>
              {errors.qantityType && touched.qantityType ? <div style={{color:"red"}}>{errors.qantityType}</div>:null}
              </div>
                </div>
             
              <div className="">
              <div className="">
              <label>MRP of Product</label>
                <input value={values.MRP} className='input input-bordered w-full text-black' type="number" name='MRP' placeholder="MRP Cost"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.MRP && touched.MRP ? <div style={{color:"red"}}>{errors.MRP}</div>:null}
              </div>
              <div className="">
              <label>Cost of Product</label>
                <input value={values.productCost} className='input input-bordered w-full text-black' type="number" name='productCost' placeholder="Product Cost"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.productCost && touched.productCost ? <div style={{color:"red"}}>{errors.productCost}</div>:null}
              </div>
              <div className="">
              <label>Quantity of Product</label>
                <input value={values.stockQuantity} className='input input-bordered w-full text-black' type="number" name='stockQuantity' placeholder="Product Quantity"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.stockQuantity && touched.stockQuantity ? <div style={{color:"red"}}>{errors.stockQuantity}</div>:null}
              </div>
              <div className="">select<select value={values.productType} className="select select-success w-full max-w-xs text-black " name='productType'   onBlur={handleBlur} onChange={handleChange}>
  <option disabled selected className='bg-transparent'>Select by catagory</option>
  <option value={"Atta & Flour"}>Atta & Flour</option>
  <option value={"Dhall"}>Dhall</option>
  <option value={"Spieces"}>Spieces</option>
  <option value={"Vegetables"}>Vegetables</option>
  <option value={"plastics"}>plastics</option>
  <option value={"Beauty & Degredant"}>Beauty & Degredant</option>
  <option value={"Milk & batten"}>Milk & batten</option>
  <option value={"Grains & cattleFeeds"}>Grains & cattleFeeds</option>
  <option value={"Snacks"}> Snacks</option>
  <option value={"Tea & Beverages"}>Tea & Beverages</option>
  
</select>
{errors.productType && touched.productType ? <div style={{color:"red"}}>{errors.productType}</div>:null}</div>
<div className="">
                <label >If Allready had Barcode</label><br />
                {!inputFeild ?
               <div className={`btn ${inputFeildbtn}`} disabled={!inputFeild} onClick={(e)=>{
                  e.preventDefault() 
                  setInputFeildbtn('hidden')
                  setInputFeild(false)
                }}>Yes</div>: <div className=''>
                <input type="text" value={values.productCode} className='input input-bordered w-full text-black' name='productCode' onClick={(e)=>e.preventDefault()}/></div>}
              </div>
              <div className="">
                <label >{'(Optional)'} Avatar</label>
                {!file && <div className="flex">
                <input type="file"   className="file-input file-input-ghost w-full max-w-xs"  name='avatar' accept='image/*' multiple onChange={(e)=>handleAddAvathar(e)}/>
              
                </div>}
              {file  &&  <div className="flex justify-between mt-4">
                <img  src={file} className='w-20 h-20 object-contain rounded-lg'  alt="" />
                <div className="btn bg-red-600" onClick={(e)=>setFile('')}>DELETE</div>
                </div> }
                
                
              </div>
              
              </div>
    
              </div>
              
            
              
             
    
              
                <div className="flex-none">
                <button className='mt-4 btn btn-outline w-full bg-slate-200 ' type='submit'>
                {loading?<span className="loading loading-dots loading-lg"></span>:'Submit'}
              </button>
                </div>
              
            </form>
          )}
        </Formik>
        </div>
        
        
    </div>
  </div>
  </>
}

export default CreateProduct