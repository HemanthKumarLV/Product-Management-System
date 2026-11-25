import React, { useState } from "react";
import axios from "axios";
import "./ProductForm.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/products/";

function ProductForm({ onProductAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name: name.trim(),
      price: Number(price),
      qty: Number(qty),
    };

    try {
      setSubmitting(true);
      const response = await axios.post(API_URL, product);

      alert("Product Added Successfully!");
      console.log(response.data);

      setName("");
      setPrice("");
      setQty("");

      if (onProductAdded) {
        onProductAdded(response.data);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Product insertion failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="product-form-card">
      <div className="form-header">
        <p className="form-eyebrow">CREATE RECORD</p>
        <h2>Add Product</h2>
        
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            id="product-name"
            type="text"
        
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="product-price">Price (₹)</label>
            <input
              id="product-price"
              type="number"
              step="0.01"
              min="0"
              
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="product-qty">Quantity</label>
            <input
              id="product-qty"
              type="number"
              min="0"
             
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              required
            />
          </div>
        </div>

        <button className="submit-btn" type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Save Product"}
        </button>
      </form>
    </section>
  );
}

export default ProductForm;