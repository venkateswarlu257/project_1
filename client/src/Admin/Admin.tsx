import React, { useState } from 'react'
import './Admin.css'
import axios from 'axios'

function Admin() {

    const [addProduct,setAddProduct]=useState({})

    const handleOnchange=(e:any)=>{
        setAddProduct({...addProduct,[e.target.name]:e.target.value})
    }
  


    const handleOnsubmit=(e:any)=>{
        e.preventDefault()
        axios.post("qqqqqqq")
        try{
            alert("Prodect is saved")
        }
        catch(err){
            console.log("prodect is not saved",err)
        }
    }

  return (
    <form onSubmit={handleOnsubmit}>
            <div className='main-div'>
                <div>
                    <label className='label' htmlFor="productimage">Product Image:</label>
                    <input className='input' onChange={(e)=>{handleOnchange(e)}} name='image' id="productimage" type="file" accept="image/*" />
                </div>

                <div>
                    <label className='label' htmlFor='title'>Title:</label>
                    <input className='input' onChange={(e)=>{handleOnchange(e)}} name='title' id='title' type="text" />
                </div>
                <div>
                    <label className='label' htmlFor='brand'>Brand:</label>
                    <input className='input' onChange={(e)=>{handleOnchange(e)}} name='brand' id='brand' type="text" />
                </div>
                <div>
                    <label className='label' htmlFor='price'>Price:</label>
                    <input className='input' onChange={(e)=>{handleOnchange(e)}} name='price' id="price" type="Number" />
                </div>
                <div>
                    <label className='label' htmlFor='des'>Description:</label>
                    <input className='input' onChange={(e)=>{handleOnchange(e)}} name='description' id="des" type="text" />
                </div>
                <div>
                    <label className='label' htmlFor='cat'>Category:</label>
                    <select name='Category' onChange={(e)=>{handleOnchange(e)}} >
                        <option value="clothes">clothes</option>
                        <option value="electronics">electronics</option>   
                        <option value="toys">toys</option>
                        <option value="grocery">grocery</option>
                        <option value="appliances">appliances</option>
                    </select>
                </div>
             <button className='button'>Submit</button>
            </div>
    </form>
  )
}

export default Admin