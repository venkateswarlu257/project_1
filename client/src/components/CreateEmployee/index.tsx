import {useFormik} from 'formik'
import Cookies from 'js-cookie'
import {jwtDecode} from "jwt-decode";
import MasterSlideBar from '../MasterSlideBar'
import MasterNavBar from '../MasterNavBar'

import './index.css'


const CreateEmployee = () => {
    // Cookies.get('jwt_token')
    interface CustomJwtPayload {
        id: string;
      }
    const decoded = jwtDecode<CustomJwtPayload>(JSON.stringify(Cookies.get('jwt_token')))

    const onSubmit = async (values:any) => {
        const url = 'http://localhost:5000/register'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        alert(data.message)
        console.log(data)
      }
      
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password: '',
            role:"employee",
            createdBy: decoded.id,
            permissions:{
                products:{ R:0, W:0, D:0 },
                orders:{ R:0, W:0, D:0 },
                employee:{ R:0, W:0, D:0 },
                productcategory:{ R:0, W:0, D:0 },
                productsubcategory:{ R:0, W:0, D:0 }
            }
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
                    <label className="input-label" htmlFor="username">
                    USERNAME
                    </label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="input-filed"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    />

                    <label className="input-label" htmlFor="email">
                    EMAIL
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="input-filed"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />

                    <label className="input-label" htmlFor="password">
                    PASSWORD
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create password"
                    className="input-filed"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    />

                    <p>Permissions</p>

                    <p>products</p>
                    <input onChange={(e) => formik.setFieldValue('permissions.products.R', e.target.checked ? 1 : 0)} id="products-read" type="checkbox" />
                    <label htmlFor='products-read'>Read</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.products.W', e.target.checked ? 1 : 0)} id="products-write" type="checkbox" />
                    <label htmlFor='products-write'>Write</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.products.D', e.target.checked ? 1 : 0)} id="products-delete" type="checkbox" />
                    <label htmlFor='products-delete'>Delete</label>

                    <p>Orders</p>
                    <input onChange={(e) => formik.setFieldValue('permissions.orders.R', e.target.checked ? 1 : 0)} id="orders-read" type="checkbox" />
                    <label htmlFor='orders-read'>Read</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.orders.W', e.target.checked ? 1 : 0)} id="orders-write" type="checkbox" />
                    <label htmlFor='orders-write'>Write</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.orders.D', e.target.checked ? 1 : 0)} id="orders-delete" type="checkbox" />
                    <label htmlFor='orders-delete'>Delete</label>

                    <p>employee</p>
                    <input onChange={(e) => formik.setFieldValue('permissions.employee.R', e.target.checked ? 1 : 0)} id="employee-read" type="checkbox" />
                    <label htmlFor='employee-read'>Read</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.employee.W', e.target.checked ? 1 : 0)} id="employee-write" type="checkbox" />
                    <label htmlFor='employee-write'>Write</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.employee.D', e.target.checked ? 1 : 0)} id="employee-delete" type="checkbox" />
                    <label htmlFor='employee-delete'>Delete</label>

                    <p>product category</p>
                    <input onChange={(e) => formik.setFieldValue('permissions.productcategory.R', e.target.checked ? 1 : 0)} id="category-read" type="checkbox" />
                    <label htmlFor='category-read'>Read</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.productcategory.W', e.target.checked ? 1 : 0)} id="category-write" type="checkbox" />
                    <label htmlFor='category-write'>Write</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.productcategory.D', e.target.checked ? 1 : 0)} id="category-delete" type="checkbox" />
                    <label htmlFor='category-delete'>Delete</label>

                    <p>product sub category</p>
                    <input onChange={(e) => formik.setFieldValue('permissions.productsubcategory.R', e.target.checked ? 1 : 0)} id="sub-category-read" type="checkbox" />
                    <label htmlFor='sub-category-read'>Read</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.productsubcategory.W', e.target.checked ? 1 : 0)} id="sub-category-write" type="checkbox" />
                    <label htmlFor='sub-category-write'>Write</label>

                    <input onChange={(e) => formik.setFieldValue('permissions.productsubcategory.D', e.target.checked ? 1 : 0)} id="sub-category-delete" type="checkbox" />
                    <label htmlFor='sub-category-delete'>Delete</label>

                    <button type="submit" className="button">Sign Up</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default CreateEmployee