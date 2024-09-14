import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

type PermissionField = 'R' | 'W' | 'D';
type PermissionCategory = 'products' | 'orders' | 'employee' | 'prodCategory' | 'prodSubCategory';

interface Permissions {
  products: { R: number; W: number; D: number };
  orders: { R: number; W: number; D: number };
  employee: { R: number; W: number; D: number };
  prodCategory: { R: number; W: number; D: number };
  prodSubCategory: { R: number; W: number; D: number };
}

function RegisterView() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
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
          const response = await axios.post('http://localhost:5000/register', formData);
          console.log(response.data);
          alert('User registered successfully');
        } catch (error) {
          console.error('Error registering user', error);
          alert('Failed to register user');
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <h2>Register User</h2>
    
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
    
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
           
           <div>
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
          </div>
    
      
          <h3>Permissions</h3>
    
          <h4>Products</h4>
          <label>Read:</label>
          <input
            type="checkbox"
            checked={formData.permissions.products.R === 1}
            onChange={() => handlePermissionChange('products', 'R')}
          />
          <label>Write:</label>
          <input
            type="checkbox"
            checked={formData.permissions.products.W === 1}
            onChange={() => handlePermissionChange('products', 'W')}
          />
          <label>Delete:</label>
          <input
            type="checkbox"
            checked={formData.permissions.products.D === 1}
            onChange={() => handlePermissionChange('products', 'D')}
          />
    
          <h4>Orders</h4>
          <label>Read:</label>
          <input
            type="checkbox"
            checked={formData.permissions.orders.R === 1}
            onChange={() => handlePermissionChange('orders', 'R')}
          />
          <label>Write:</label>
          <input
            type="checkbox"
            checked={formData.permissions.orders.W === 1}
            onChange={() => handlePermissionChange('orders', 'W')}
          />
          <label>Delete:</label>
          <input
            type="checkbox"
            checked={formData.permissions.orders.D === 1}
            onChange={() => handlePermissionChange('orders', 'D')}
          />
    
          <h4>Employee</h4>
          <label>Read:</label>
          <input
            type="checkbox"
            checked={formData.permissions.employee.R === 1}
            onChange={() => handlePermissionChange('employee', 'R')}
          />
          <label>Write:</label>
          <input
            type="checkbox"
            checked={formData.permissions.employee.W === 1}
            onChange={() => handlePermissionChange('employee', 'W')}
          />
          <label>Delete:</label>
          <input
            type="checkbox"
            checked={formData.permissions.employee.D === 1}
            onChange={() => handlePermissionChange('employee', 'D')}
          />
    
          <h4>Product Category</h4>
          <label>Read:</label>
          <input
            type="checkbox"
            checked={formData.permissions.prodCategory.R === 1}
            onChange={() => handlePermissionChange('prodCategory', 'R')}
          />
          <label>Write:</label>
          <input
            type="checkbox"
            checked={formData.permissions.prodCategory.W === 1}
            onChange={() => handlePermissionChange('prodCategory', 'W')}
          />
          <label>Delete:</label>
          <input
            type="checkbox"
            checked={formData.permissions.prodCategory.D === 1}
            onChange={() => handlePermissionChange('prodCategory', 'D')}
          />
    
          <h4>Product SubCategory</h4>
          <label>Read:</label>
          <input
            type="checkbox"
            checked={formData.permissions.prodSubCategory.R === 1}
            onChange={() => handlePermissionChange('prodSubCategory', 'R')}
          />
          <label>Write:</label>
          <input
            type="checkbox"
            checked={formData.permissions.prodSubCategory.W === 1}
            onChange={() => handlePermissionChange('prodSubCategory', 'W')}
          />
          <label>Delete:</label>
          <input
            type="checkbox"
            checked={formData.permissions.prodSubCategory.D === 1}
            onChange={() => handlePermissionChange('prodSubCategory', 'D')}
          />
    
          <button type="submit">Register</button>
        </form>
      );
    };
    
export default RegisterView
