import React, { useState } from 'react';
import { FaCalendar, FaUser, FaTag, FaArrowRight, FaSearch, FaFilter, FaBookOpen, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';
import './Careers.css';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Ethiopian Businesses",
    excerpt: "How artificial intelligence is transforming traditional business models in Ethiopia and creating new opportunities for growth and innovation.",
    author: "Samuel Getnet",
    date: "December 15, 2024",
    category: "AI & Machine Learning",
    readTime: "5 min read",
    image: "https://source.unsplash.com/400x250/?artificial-intelligence",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with React",
    excerpt: "Best practices for developing modern, scalable web applications using React and modern JavaScript frameworks.",
    author: "Zemam Team",
    date: "December 10, 2024",
    category: "Web Development",
    readTime: "7 min read",
    image: "https://source.unsplash.com/400x250/?coding,react"
  },
  {
    id: 3,
    title: "Digital Transformation in Ethiopian SMEs",
    excerpt: "A comprehensive guide to helping small and medium enterprises in Ethiopia embrace digital transformation.",
    author: "Samuel Getnet",
    date: "December 5, 2024",
    category: "Digital Transformation",
    readTime: "6 min read",
    image: "https://source.unsplash.com/400x250/?business,digital"
  },
  {
    id: 4,
    title: "Mobile App Development Trends 2024",
    excerpt: "Exploring the latest trends in mobile app development and what's coming next in the industry.",
    author: "Zemam Team",
    date: "November 28, 2024",
    category: "Mobile Development",
    readTime: "4 min read",
    image: "https://source.unsplash.com/400x250/?mobile-app"
  },
  {
    id: 5,
    title: "Web3 and Blockchain Opportunities in Africa",
    excerpt: "How blockchain technology and Web3 are creating new opportunities for African businesses and developers.",
    author: "Samuel Getnet",
    date: "November 20, 2024",
    category: "Web3 & Blockchain",
    readTime: "8 min read",
    image: "https://source.unsplash.com/400x250/?blockchain"
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Startups",
    excerpt: "Essential cybersecurity measures that every startup should implement to protect their digital assets.",
    author: "Zemam Team",
    date: "November 15, 2024",
    category: "Cybersecurity",
    readTime: "6 min read",
    image: "https://source.unsplash.com/400x250/?cybersecurity"
  }
];

const categories = ["All", "AI & Machine Learning", "Web Development", "Digital Transformation", "Mobile Development", "Web3 & Blockchain", "Cybersecurity"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section className="page-section fade-in-section">
      <h1 className="section-title"><span className="accent-bar"></span>Insights & Blog</h1>
      <hr className="section-divider" />
      
      {/* Search and Filter */}
      <div className="blog-controls">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="category-filter">
          <FaFilter className="filter-icon" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && searchTerm === "" && (
        <div className="featured-post fade-in-section">
          <div className="featured-content">
            <div className="featured-badge">
              <FaBookOpen />
              <span>Featured Article</span>
            </div>
            <h2 className="featured-title">{featuredPost.title}</h2>
            <p className="featured-excerpt">{featuredPost.excerpt}</p>
            <div className="featured-meta">
              <span><FaUser /> {featuredPost.author}</span>
              <span><FaCalendar /> {featuredPost.date}</span>
              <span><FaTag /> {featuredPost.category}</span>
              <span className="read-time">{featuredPost.readTime}</span>
            </div>
            <button className="read-more-btn">
              Read Full Article <FaArrowRight />
            </button>
          </div>
          <div className="featured-image">
            <img src={featuredPost.image} alt={featuredPost.title} />
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <article key={post.id} className="blog-card fade-in-section">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-category">{post.category}</div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span><FaUser /> {post.author}</span>
                <span><FaCalendar /> {post.date}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              <button className="read-more-btn">
                Read More <FaArrowRight />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter-section fade-in-section">
        <div className="newsletter-content">
          <FaLightbulb className="newsletter-icon" />
          <h2>Stay Updated with Latest Insights</h2>
          <p>Get the latest articles on technology, AI, and digital transformation delivered to your inbox.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe <FaRocket />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Blog; 