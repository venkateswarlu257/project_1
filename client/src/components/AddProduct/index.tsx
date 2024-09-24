import {useFormik} from 'formik'
// import Cookies from 'js-cookie'
// import {jwtDecode} from "jwt-decode";
import MasterSlideBar from '../MasterSlideBar'
import MasterNavBar from '../MasterNavBar'

import './index.css'


const AddProduct = () => {
    // Cookies.get('jwt_token')
    // interface CustomJwtPayload {
    //     id: string;
    //   }
    // const decoded = jwtDecode<CustomJwtPayload>(JSON.stringify(Cookies.get('jwt_token')))

    const onSubmit = async (values:any) => {
        const formData = new FormData();
    formData.append('image', values.image);
    formData.append('title', values.title);
    formData.append('brand', values.brand);
    formData.append('price', values.price);
    // formData.append('createdBy', values.createdBy);
    formData.append('category', values.category);
    formData.append('description', values.description);

        const url = 'http://localhost:5000/postproducts'
        const options = {
          method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
          body: formData,
        }
        const response = await fetch(url, options)
        const data = await response.json()
        alert(data.message)
        // console.log(values.image)
      }
      
    const formik = useFormik({
        initialValues:{
            image: null,
            title:'',
            brand: '',
            price:"",
            // createdBy: decoded.id,
            category:"",
            description:""
        },
      onSubmit,
      })
      
    return(
        <>
        <MasterNavBar/>
        <div className='create-admin-container'>
            <MasterSlideBar/>
            <div className='create-form-container'>
                <form className="sign-up-form" onSubmit={formik.handleSubmit}>
                    <label className="input-label" htmlFor="image">
                    UPLODE IMAGE
                    </label>
                    <input
                    type="file"
                    id="image"
                    name="image"
                    className="input-filed"
                    onChange={(event) => {
                        if (event.currentTarget.files && event.currentTarget.files[0]) {
                          formik.setFieldValue('image', event.currentTarget.files[0]);
                        }
                      }}
                    />

                    <label className="input-label" htmlFor="title">
                    TITLE
                    </label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    className="input-filed"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    />

                    <label className="input-label" htmlFor="brand">
                    BRAND
                    </label>
                    <input
                    type="text"
                    id="brand"
                    name="brand"
                    placeholder="brand"
                    className="input-filed"
                    value={formik.values.brand}
                    onChange={formik.handleChange}
                    />

                    <label className="input-label" htmlFor="price">
                        PRICE
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="price"
                        className="input-filed"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />

                    <label className="input-label" htmlFor="category">
                    CATEGORY
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="input-filed"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                    >
                        <option value="">Select Category</option>
                        <option value="clothes">Clothes</option>
                        <option value="electronics">Electronics</option>
                        <option value="appliances">Appliances</option>
                        <option value="grocery">Grocery</option>
                        <option value="toys">Toys</option>
                    </select>


                    <label className="input-label" htmlFor="description">
                    DESCRIPTION 
                    </label>
                    <textarea id="description"
                        name="description"
                        className="input-filed"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        />

                    <button type="submit" className="button">Sign Up</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddProduct