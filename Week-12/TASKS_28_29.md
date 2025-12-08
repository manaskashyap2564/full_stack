# Task 28-29: Props and State Management

## 📦 Task 28: Create Reusable Card Component with Props

### Step 1: Create Card Component

Create file: `src/components/ProductCard.jsx`

```jsx
function ProductCard(props) {
  return (
    <div style={{
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      margin: '15px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
      backgroundColor: 'white'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    }}>
      <img 
        src={props.image} 
        alt={props.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h3 style={{ color: '#333', marginBottom: '10px' }}>
        {props.title}
      </h3>
      <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.6' }}>
        {props.description}
      </p>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <span style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#667eea' 
        }}>
          ${props.price}
        </span>
        <button style={{
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
```

### Step 2: Use Card Component with Different Props

Update `src/App.jsx`:

```jsx
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: '30px' 
      }}>
        🛍️ Product Catalog
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <ProductCard 
          image="https://via.placeholder.com/300x200/667eea/ffffff?text=Laptop"
          title="Premium Laptop"
          description="High-performance laptop with latest processor and 16GB RAM"
          price="999"
        />
        
        <ProductCard 
          image="https://via.placeholder.com/300x200/f093fb/ffffff?text=Phone"
          title="Smartphone Pro"
          description="Latest smartphone with amazing camera and 5G connectivity"
          price="799"
        />
        
        <ProductCard 
          image="https://via.placeholder.com/300x200/43e97b/ffffff?text=Headphones"
          title="Wireless Headphones"
          description="Noise-cancelling wireless headphones with 30hr battery life"
          price="299"
        />
        
        <ProductCard 
          image="https://via.placeholder.com/300x200/fa8231/ffffff?text=Watch"
          title="Smart Watch"
          description="Fitness tracker with heart rate monitor and GPS"
          price="199"
        />
      </div>
    </div>
  );
}

export default App;
```

---

## 🎮 Task 29: Form with useState() Hooks

### Create: `src/components/ContactForm.jsx`

```jsx
import { useState } from 'react';

function ContactForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        📧 Contact Form
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 'bold',
            color: '#555'
          }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your name"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 'bold',
            color: '#555'
          }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 'bold',
            color: '#555'
          }}>
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#764ba2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#667eea'}
        >
          Submit
        </button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          borderLeft: '4px solid #667eea'
        }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>
            ✅ Form Submitted Successfully!
          </h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
```

### Update App.jsx to include ContactForm:

```jsx
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      {/* Product Cards */}
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        🛍️ Product Catalog
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Product cards here */}
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default App;
```

---

## 🎯 Key Concepts:

### Props:
- Passing data to components
- Props are read-only
- Reusable component patterns
- Destructuring props

### useState Hook:
- Managing component state
- Controlled form inputs
- State updates
- Event handling

---

## 💡 Practice Challenges:

1. Add a rating (1-5 stars) prop to ProductCard
2. Add form validation messages
3. Create a counter that increases/decreases with buttons
4. Build a todo list with add/remove functionality using useState
