import React, { useState } from 'react'
import './Admin.css'
import axios from 'axios'

function Admin() {

    const [image, setImage] = useState<File | null>(null);
    const [title, setTitle] = useState<string>('');
    const [brand, setBrand] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
            console.log(image)
        }
    };
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!image) {
            alert('Please select an image before uploading.');
            return; 
        }
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("brand", brand);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("description", description); 
        console.log(image)

        axios.post('http://localhost:5000/postproducts', formData)
            .then(response =>  alert('Upload Successfully')
        )
           
            .catch(error => {
                console.log('Error uploading:', error);
                alert('Upload failed. Please try again.');
            });
    };

    return (
        <div className='adminInput'>
        <form className="sign-up-form" onSubmit={onSubmit}>
            <h1 className='head'>Upload Your Product</h1>

            <label className="input-label" htmlFor="image">Uplode Product Image</label>
            <input  type="file" accept="image/*" id="image" onChange={handleChange} />

            <label className="input-label" htmlFor="title">Product Title</label>
            <input 
            className="input-filed" 
            type="text" 
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
             />

            <label className="input-label" htmlFor="brand">Product Brand</label>
            <input 
            className="input-filed" 
            type="text" 
            id="brand"
            value={brand}
            onChange={e => setBrand(e.target.value)} 
            />

            <label className="input-label" htmlFor="cost">Product Cost</label>
            <input 
            className="input-filed" 
            type="text" 
            id="cost" 
            value={price}
            onChange={e => setPrice(e.target.value)} />

            <label className="input-label" htmlFor="category">Product Category</label>
            <select className="input-file" id="category" value={category}
                onChange={e => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option>clothes</option>
                <option>electronics</option>
                <option>appliances</option>
                <option>grocery</option>
                <option>toys</option>
            </select>

            <label className="input-label" htmlFor="description">Product Description</label>
            <input className="input-filed" type="text" id="description" value={description}
                onChange={e => setDescription(e.target.value)} /><br/><br/>

            <button type="submit" className="button">Upload</button>
        </form>
        
        </div>
    );
};

export default Admin