# Task 30: React Router Setup

## 🛣️ React Router with Multiple Pages

### Step 1: Install React Router

```bash
cd reactTutorial/reactapp
npm install react-router-dom
```

---

### Step 2: Create Page Components

#### Create: `src/pages/Home.jsx`

```jsx
function Home() {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: '#667eea',
        color: 'white',
        borderRadius: '15px',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
          🏠 Welcome Home!
        </h1>
        <p style={{ fontSize: '20px', opacity: 0.9 }}>
          This is the home page of our blogging app
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>📝</div>
          <h3>Latest Posts</h3>
          <p style={{ color: '#666' }}>Read our latest blog posts</p>
        </div>

        <div style={{
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>👥</div>
          <h3>Community</h3>
          <p style={{ color: '#666' }}>Join our community</p>
        </div>

        <div style={{
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>📬</div>
          <h3>Newsletter</h3>
          <p style={{ color: '#666' }}>Subscribe to updates</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
```

---

#### Create: `src/pages/About.jsx`

```jsx
function About() {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '42px', 
        color: '#333', 
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        ℹ️ About Us
      </h1>

      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        lineHeight: '1.8'
      }}>
        <h2 style={{ color: '#667eea', marginBottom: '15px' }}>
          Our Story
        </h2>
        <p style={{ color: '#555', marginBottom: '20px' }}>
          Welcome to our blogging platform! We are passionate about sharing knowledge 
          and connecting writers with readers around the world.
        </p>

        <h2 style={{ color: '#667eea', marginBottom: '15px' }}>
          Our Mission
        </h2>
        <p style={{ color: '#555', marginBottom: '20px' }}>
          To provide a platform where everyone can share their thoughts, stories, 
          and expertise with a global audience.
        </p>

        <h2 style={{ color: '#667eea', marginBottom: '15px' }}>
          What We Offer
        </h2>
        <ul style={{ color: '#555', paddingLeft: '30px' }}>
          <li>Easy-to-use blogging interface</li>
          <li>Engaged community of readers and writers</li>
          <li>Topics ranging from technology to lifestyle</li>
          <li>Regular featured content and highlights</li>
        </ul>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>
            📊 Stats
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '20px'
          }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#667eea' }}>
                1000+
              </div>
              <div style={{ color: '#666' }}>Blog Posts</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#667eea' }}>
                500+
              </div>
              <div style={{ color: '#666' }}>Writers</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#667eea' }}>
                10K+
              </div>
              <div style={{ color: '#666' }}>Readers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
```

---

#### Create: `src/pages/Blog.jsx`

```jsx
function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      author: 'John Doe',
      date: 'Dec 1, 2025',
      excerpt: 'Learn the basics of React and start building modern web applications...',
      category: 'Tutorial'
    },
    {
      id: 2,
      title: 'JavaScript ES6 Features',
      author: 'Jane Smith',
      date: 'Dec 3, 2025',
      excerpt: 'Explore modern JavaScript features including arrow functions, destructuring...',
      category: 'JavaScript'
    },
    {
      id: 3,
      title: 'CSS Grid Layout Guide',
      author: 'Bob Johnson',
      date: 'Dec 5, 2025',
      excerpt: 'Master CSS Grid and create complex layouts with ease...',
      category: 'CSS'
    },
    {
      id: 4,
      title: 'Web Performance Tips',
      author: 'Alice Williams',
      date: 'Dec 7, 2025',
      excerpt: 'Optimize your website for better performance and user experience...',
      category: 'Performance'
    }
  ];

  return (
    <div style={{
      padding: '40px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: '42px', 
        color: '#333', 
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        📚 Blog Posts
      </h1>

      <div style={{
        display: 'grid',
        gap: '25px'
      }}>
        {blogPosts.map(post => (
          <div
            key={post.id}
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              borderLeft: '4px solid #667eea'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <span style={{
                backgroundColor: '#667eea',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {post.category}
              </span>
              <span style={{ color: '#999', fontSize: '14px' }}>
                {post.date}
              </span>
            </div>

            <h2 style={{ 
              color: '#333', 
              marginBottom: '10px',
              fontSize: '28px'
            }}>
              {post.title}
            </h2>

            <p style={{ 
              color: '#666', 
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              {post.excerpt}
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '15px',
              borderTop: '1px solid #e0e0e0'
            }}>
              <span style={{ color: '#667eea', fontWeight: 'bold' }}>
                👤 {post.author}
              </span>
              <button style={{
                backgroundColor: 'transparent',
                color: '#667eea',
                border: '2px solid #667eea',
                padding: '8px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#667eea';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#667eea';
              }}>
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
```

---

### Step 3: Create Navigation Component

#### Create: `src/components/Navigation.jsx`

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '20px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white'
        }}>
          📝 MyBlog
        </div>

        <div style={{ display: 'flex', gap: '30px' }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#667eea'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            🏠 Home
          </Link>

          <Link
            to="/about"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#667eea'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            ℹ️ About
          </Link>

          <Link
            to="/blog"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#667eea'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            📚 Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
```

---

### Step 4: Setup Routes in App.jsx

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

---

## 🎯 Key Concepts:

- BrowserRouter for routing
- Routes and Route components
- Link component for navigation
- useNavigate hook (optional)
- Dynamic routing with params

---

## 💡 Practice Challenges:

1. Add a 404 Not Found page
2. Create individual blog post pages with dynamic routes
3. Add active link styling
4. Implement nested routes
5. Add a contact page with form

---

## 🎉 Congratulations!

You've completed all 30 tasks of the Full Stack Scripting Technologies Lab Manual!
