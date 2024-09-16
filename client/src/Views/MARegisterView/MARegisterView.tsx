import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import MASideBar from '../MASideBar/MASideBar';
import { register } from '../../Services/Service';
import "./MARegisterView.css"


type PermissionField = 'R' | 'W' | 'D';
type PermissionCategory = 'products' | 'orders' | 'employee' | 'prodCategory' | 'prodSubCategory';

interface Permissions {
  products: { R: number; W: number; D: number };
  orders: { R: number; W: number; D: number };
  employee: { R: number; W: number; D: number };
  prodCategory: { R: number; W: number; D: number };
  prodSubCategory: { R: number; W: number; D: number };
}

function MARegisterView() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword:'',
        role: '',
        createdBy: '',
        permissions: {
          products: { R: 0, W: 0, D: 0 },
          orders: { R: 0, W: 0, D: 0 },
          employee: { R: 0, W: 0, D: 0 },
          prodCategory: { R: 0, W: 0, D: 0 },
          prodSubCategory: { R: 0, W: 0, D: 0 },
        } as Permissions,
      });
    
      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value});
      };

      useEffect(() => {
        const loginid = Cookies.get('loginid'); 
        if (loginid) {
          setFormData((prev) => ({ ...prev, createdBy: loginid }));
        }
      }, []);
    
      const handlePermissionChange = (category: PermissionCategory, field: PermissionField) => {
        setFormData((prev) => ({...prev,permissions: {...prev.permissions,
            [category]: { ...prev.permissions[category],
              [field]: prev.permissions[category][field] === 1 ? 0 : 1,
            },
          },
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            //  const response = await axios.post('http://localhost:5000/register', formData);
          const response =register(formData)
          console.log(response);
          console.log(formData)
          alert('User registered successfully');
        } catch (error) {
          console.error('Error registering user', error);
          alert('Failed to register user');
        }
      }
    
      // try {
      //   const response = await fetch('http://localhost:5000/register', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(formData),
      //   });
      
      //   if (!response.ok) {
      //     throw new Error(`Failed to register user: ${response.statusText}`);
      //   }
      
      //   const data = await response.json();
      //   console.log(data);
      //   console.log(formData);
      //   alert('User registered successfully');
      // } catch (error) {
      //   console.error('Error registering user:', error);
      //   alert('Failed to register user');
      // }
      // }
      
      return (
        <div className='rrrr'>
       
         <div className='SideBar'><MASideBar/></div>

         <div className='registiondiv'>
         <form className='registionform' onSubmit={handleSubmit}>
          <h2>Register User</h2>
    
           <div>
          <label>Username:</label>
          <input className='input' type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>

          <div>
          <label>Email:</label>
          <input className='input' type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
          <label>Password:</label>
          <input className='input' type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div>
          <label>confirmpassword:</label>
          <input className='input' type="password" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} required />
          </div>
           
           <div>
          <label>Role:</label>
          <select className='input' name="role" value={formData.role} onChange={handleChange} required>
          <option value="">Select Category</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
         </div>
    
      
          <h3>Permissions</h3>
    
          <h4>Products</h4>
          <label htmlFor='Productsread'>Read:</label>
          <input
            type="checkbox"
            id='Productsread'
            checked={formData.permissions.products.R === 1}
            onChange={() => handlePermissionChange('products', 'R')}
          />
          <label htmlFor='ProductsWrite'>Write:</label>
          <input
            type="checkbox"
            id='ProductsWrite'
            checked={formData.permissions.products.W === 1}
            onChange={() => handlePermissionChange('products', 'W')}
          />
          <label htmlFor='ProductsDelete'>Delete:</label>
          <input
            type="checkbox"
            id='ProductsDelete'
            checked={formData.permissions.products.D === 1}
            onChange={() => handlePermissionChange('products', 'D')}
          />
    
          <h4>Orders</h4>
          <label htmlFor='OrdersRead'>Read:</label>
          <input
          id='OrdersRead'
            type="checkbox"
            checked={formData.permissions.orders.R === 1}
            onChange={() => handlePermissionChange('orders', 'R')}
          />

          <label htmlFor='OrdersWrite'>Write:</label>
          <input
            type="checkbox"
            id='OrdersWrite'
            checked={formData.permissions.orders.W === 1}
            onChange={() => handlePermissionChange('orders', 'W')}
          />
          <label htmlFor='OrdersDelete'>Delete:</label>
          <input
            type="checkbox"
            id='OrdersDelete'
            checked={formData.permissions.orders.D === 1}
            onChange={() => handlePermissionChange('orders', 'D')}
          />
    
          <h4 >Employee</h4>
          <label htmlFor='EmployeeRead'>Read:</label>
          <input
            type="checkbox"
            id='EmployeeRead'
            checked={formData.permissions.employee.R === 1}
            onChange={() => handlePermissionChange('employee', 'R')}
          />

          <label htmlFor='EmployeeWrite'>Write:</label>
          <input
            type="checkbox"
            id='EmployeeWrite'
            checked={formData.permissions.employee.W === 1}
            onChange={() => handlePermissionChange('employee', 'W')}
          />

          <label htmlFor='EmployeeDelete'>Delete:</label>
          <input
            type="checkbox"
            id='EmployeeDelete'
            checked={formData.permissions.employee.D === 1}
            onChange={() => handlePermissionChange('employee', 'D')}
          />
    
          <h4>Product Category</h4>
          <label htmlFor='Product CategoryRead'>Read:</label>
          <input
            type="checkbox"
            id='Product CategoryRead'
            checked={formData.permissions.prodCategory.R === 1}
            onChange={() => handlePermissionChange('prodCategory', 'R')}
          />
          <label htmlFor='Product CategoryWrite'>Write:</label>
          <input
            type="checkbox"
            id='Product CategoryWrite'
            checked={formData.permissions.prodCategory.W === 1}
            onChange={() => handlePermissionChange('prodCategory', 'W')}
          />
          <label htmlFor='Product CategoryDelete'>Delete:</label>
          <input
            type="checkbox"
            id='Product CategoryDelete'
            checked={formData.permissions.prodCategory.D === 1}
            onChange={() => handlePermissionChange('prodCategory', 'D')}
          />
    
          <h4>Product SubCategory</h4>
          <label htmlFor='Product SubCategoryRead'>Read:</label>
          <input
            type="checkbox"
            id='Product SubCategoryRead'
            checked={formData.permissions.prodSubCategory.R === 1}
            onChange={() => handlePermissionChange('prodSubCategory', 'R')}
          />

          <label htmlFor='Product SubCategoryWrite'>Write:</label>
          <input
            type="checkbox"
            id='Product SubCategoryWrite'
            checked={formData.permissions.prodSubCategory.W === 1}
            onChange={() => handlePermissionChange('prodSubCategory', 'W')}
          />
          <label htmlFor='Product SubCategoryDelete'>Delete:</label>
          <input
            type="checkbox"
            id='Product SubCategoryDelete'
            checked={formData.permissions.prodSubCategory.D === 1}
            onChange={() => handlePermissionChange('prodSubCategory', 'D')}
          />
    
          <button type="submit">Register</button>
        </form>
         </div>
        </div>
      );
    };
    
export default MARegisterView


