import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../NavBar'
import './index.css'
import { useState,useEffect } from "react";

const Home = () => {
    interface DataItem {
        image: string,
        title: string,
        brand: string,
        price: string,
        description:string;
      }
    const [data,setDAta] = useState<DataItem[] >([])

    const getData = async() => {
        const response = await fetch('http://localhost:5000/getproducts')
        const result = await response.json()
        setDAta(result)
    }
    useEffect(()=>{
        getData()
    },[])

    var settings = {
        dots: true,
        Infinite:false,
        speed:300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <div>
            <NavBar/>
            <div className='cart'>
            <Slider {...settings}>
                <div><img className='img' src="https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png" alt="1"/></div>
                <div><img className='img' src="https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png" alt="3"/></div>
                <div><img className='img' src="https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png" alt="4"/></div>
            </Slider>
            <div className="product-container">
                <ul>
                {data && data.map((eachItem:any) => (
                    <li key={eachItem.id}>
                    <img className="image" src={require(`../../Images/${eachItem.image}`)} alt=""/>
                    <p>{eachItem.title}</p>
                    <p>{eachItem.brand}</p>
                    <p>{eachItem.price}</p>
                    <p>{eachItem.description}</p>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Home