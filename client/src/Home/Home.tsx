import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Category from '../Category'
import EachCard from '../EachCard/Index'
import './Index.css'

interface Props{
    image:string,
    title: String,
    brand: String,
    price: String,
    category: String,
    description: String,
    // "http://localhost:5000/getproducts"
}

function Home() {

    const [eachProduct, setEachProduct] = useState<Props[]>([]);
    const [onClickCards,setOnclickCard] = useState<Props | false>(false);
     const [cart, setCart] = useState<Props[]>([]);


    const getProducts=async()=>{
        try{
        const products=await axios.get("http://localhost:5000/getproducts")
        const allProducts = await products
        setEachProduct(allProducts.data)
        console.log(allProducts.data)
        }
        catch(err){
            console.log("getting Api error",err)
        }
    }
        useEffect(()=>{getProducts()},[])

       const onClickCard=(eachProductDetails:Props)=>{
        setOnclickCard(eachProductDetails)
        console.log(eachProductDetails)
       }

       const onClickBack=()=>{
        setOnclickCard(false)
       }

       const handleCart=(pro:Props)=>{
            setCart((prev)=>[...prev,pro])
       }

       console.log(cart)

  return (
    <>
    <Category/>
   {onClickCards?
   <div>
    
    <EachCard onClickCards={onClickCards} onClickBack={onClickBack} />

   </div>:
    <div className='card' > 
          
        {eachProduct.map((pro,index)=>
         <div className='SingleCard' >
            <div onClick={()=>onClickCard(pro)}>
                
            <img className='Card-Image1' src={require(`../../src/Images/${pro.image}`)} alt="imagerrrr" />
    
                <p><b>Title:</b>{pro.title}</p>
                <p><b> brand:</b>{pro.brand}</p>
                <p><b>category:</b>{pro.category}</p>
                
            </div> 
            <button className='Card-Button' onClick={()=>{handleCart(pro)}}>Add to Cart</button> 
             </div>
        )} 
    </div>}
    </>
  )
}

export default Home
//<img src={require(`../../src/Images/${pro.image}`)} alt="imagerrrr" />
        
