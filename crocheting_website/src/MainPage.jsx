import React, { useState } from "react";
import "./MainPage.css";
import logo from "./assets/logo.jpg";
import heroImage from "./assets/hero_image.jpg";
import beige_bratop from "./assets/beige_bratop.jpg";
import beige_flowerhat from "./assets/beige_flowerhat.jpg";
import black_dicehat from "./assets/black_dicehat.jpg";
import blue_bra from "./assets/blue_bra.jpg";
import blue_scrunchie from "./assets/blue_scrunchie.jpg";
import blue_top from "./assets/blue_top.jpg";
import yellow_bow from "./assets/bow.jpg";
import brown_flowerhat from "./assets/brown_flowerhat.jpg";
import grayhat from "./assets/grayhat.jpg";
import green_bratop from "./assets/green_bratop.jpg";
import green_dicehat from "./assets/green_dicehat.jpg";
import grey_bow from "./assets/grey_bow.jpg";
import grey_dicehat from "./assets/grey_dicehat.jpg";
import lightbrown_hat from "./assets/lightbrown_hat.jpg";
import mixed_pinkhat from "./assets/mixed_pinkhat.jpg";
import pink_bow from "./assets/pink_bow.jpg";
import pink_bratop from "./assets/pink_bratop.jpg";
import pink_flowerhat from "./assets/pink_flowerhat.jpg";
import pink_hat from "./assets/pink_hat.jpg";
import redblack from "./assets/redblack_hat.jpg";
import pink_rufflehat from "./assets/pink_rufflehat.jpg";
import white_scrunchie from "./assets/white_scrunchie.jpg";
import green_flowerhat from "./assets/green_flowerhat.jpg";
import pink_scrunch from "./assets/pink_scrunch.jpg";

import {
  ShoppingCart,
  Menu,
  X,
  Star,
  Plus,
  Minus,
  Heart,
  Search,
} from "lucide-react";

const MainPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    {
      id: 1,
      name: "Pink Ribbon Bow",
      price: 45,
      category: "ribbon",
      image: pink_bow,
    },
    {
      id: 2,
      name: "Yellow Ribbon Bow",
      price: 45,
      category: "ribbon",
      image: yellow_bow,
    },
    {
      id: 3,
      name: "Grey Ribbon Bow",
      price: 45,
      category: "ribbon",
      image: grey_bow,
    },
    {
      id: 4,
      name: "Blue Top",
      price: 120,
      category: "top",
      image: blue_bra,
    },
    {
      id: 5,
      name: "Blue Top",
      price: 150,
      category: "top",
      image: blue_top,
    },
    {
      id: 6,
      name: "Pink Top",
      price: 120,
      category: "top",
      image: pink_bratop,
    },
    {
      id: 7,
      name: "Green Top",
      price: 120,
      category: "top",
      image: green_bratop,
    },
    {
      id: 8,
      name: "White Scrunch",
      price: 40,
      category: "scrunch",
      image: white_scrunchie,
    },
    {
      id: 9,
      name: "Blue Scrunch",
      price: 40,
      category: "scrunch",
      image: blue_scrunchie,
    },
    {
      id: 10,
      name: "Beige Top",
      price: 120,
      category: "top",
      image: beige_bratop,
    },
    {
      id: 11,
      name: "Beige FlowerRuffle Hat",
      price: 240,
      category: "hat",
      image: beige_flowerhat,
    },
    {
      id: 12,
      name: "Black & White Dicehat",
      price: 200,
      category: "hat",
      image: black_dicehat,
    },
    {
      id: 13,
      name: "Brown RuffleFlower Hat",
      price: 220,
      category: "hat",
      image: brown_flowerhat,
    },
    {
      id: 14,
      name: "Gray Flower Hat",
      price: 220,
      category: "hat",
      image: grayhat,
    },
    {
      id: 15,
      name: "Green Dice Hat",
      price: 200,
      category: "hat",
      image: green_dicehat,
    },
    {
      id: 16,
      name: "Green Flower Hat",
      price: 200,
      category: "hat",
      image: green_flowerhat,
    },
    {
      id: 17,
      name: "Grey Dice Hat",
      price: 200,
      category: "hat",
      image: grey_dicehat,
    },
    {
      id: 18,
      name: "Light Brown FlowerHat",
      price: 220,
      category: "hat",
      image: lightbrown_hat,
    },
    {
      id: 19,
      name: "Mixed PinkHat",
      price: 5,
      category: "hat",
      image: mixed_pinkhat,
    },
    {
      id: 20,
      name: "Pink FlowerHat",
      price: 200,
      category: "hat",
      image: pink_flowerhat,
    },
    {
      id: 21,
      name: "Red & Black RuffleHat",
      price: 220,
      category: "hat",
      image: redblack,
    },
    {
      id: 22,
      name: "Pink Hat",
      price: 200,
      category: "hat",
      image: pink_hat,
    },
    {
      id: 23,
      name: "Pink Scrunch",
      price: 200,
      category: "scrunch",
      image: pink_scrunch,
    },
    {
      id: 24,
      name: "Pink RuffleHat",
      price: 200,
      category: "hat",
      image: pink_rufflehat,
    },
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "ribbon", name: "Ribbons" },
    { id: "hat", name: "Hat" },
    { id: "scrunch", name: "Scruchie" },
    { id: "top", name: "Top" },
  ];

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

       const phoneNumber = "+27798881295"; // Replace with your WhatsApp phone number
       const handleCheckout = () => {
         let message = "Hello Rea de CROCHET! I would like to place an order:\n\n";

         cartItems.forEach((item) => {
           message += `${item.quantity} x ${item.name} - R${
             item.price * item.quantity
           }\n`;
         });

         const total = cartItems.reduce(
           (sum, item) => sum + item.price * item.quantity,
           0
         );
         message += `\nTotal: R${total}\n\nPlease let me know how to proceed.`;

         const encodedMessage = encodeURIComponent(message);
         const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

         window.open(waUrl, "_blank");
       };

  return (
    <div className="container">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" loading="lazy" />
          </div>

          <div className="navLinks">
            <a href="#home" className="navLink">
              Home
            </a>
            <a href="#about" className="navLink">
              About
            </a>
            <a href="#shop" className="navLink">
              Shop
            </a>
            <a href="#contact" className="navLink">
              Contact
            </a>
          </div>

          <button
            className="cartButton   "
            onClick={() => setIsCartOpen(true)}
            onMouseEnter={() => setHoveredButton("cart")}
            onMouseLeave={() => setHoveredButton(null)}>
            <ShoppingCart size={24} />
            {getTotalItems() > 0 && (
              <span className="cartBadge">{getTotalItems()}</span>
            )}
          </button>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroImage">
          <img
            src={heroImage}
            alt="Handmade crochet dress"
            className="heroImageEl"
            loading="lazy"
          />
        </div>
        <div className="heroContent">
          <h1 className="heroTitle">
            HANDMADE WITH LOVE,
            <br />
            WOVEN WITH
            <br />
            <span style={{ color: "#2c5f5d" }}>PASSION</span>
          </h1>
          <p className="heroSubtitle">
            What started as a hobby has grown into a brand that celebrates
            creativity and craftmanship. From trending ruffle hats to cozy
            scarves and stylish bags, every piece is handcrafted with care and
            made to be as unique as you.
          </p>
          <div className="heroButtons">
            <button
              className="heroButton"
              onMouseEnter={() => setHoveredButton("shop-now")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() =>
                document
                  .getElementById("shop")
                  .scrollIntoView({ behavior: "smooth" })
              }>
              Shop Now
            </button>
            <a
              href="https://wa.me/+27798881295?text=Hi!%20I'm%20interested%20in%20placing%20an%20order"
              target="_blank">
              <button
                className="heroButtonSecondary"
                onMouseEnter={() => setHoveredButton("custom")}
                onMouseLeave={() => setHoveredButton(null)}>
                Place A Custom Order
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="storySection">
        <div className="storyContent">
          <h2 className="storyTitle">
            From Hobby To Handmade Business: My Crochet Journey
          </h2>
          <p className="storyText">
            I learned how to crochet when I was young, and it quickly became
            both my hobby and a form of stress relief. Whenever I wasn't feeling
            okay, I would crochet something to calm my mind. It was my escape, a
            way to channel my emotions into something creative. Over the years,
            I created countless pieces for myself, friends, and family, but I
            never imagined that my hobby would eventually turn into a
            business—until February 2024, when I made a ruffle hat that was
            trending. I remember feeling so accomplished when I finished it,
            after multiple attempts, and decided to post a picture of me wearing
            it on my social media. The caption read, "Finally, I made the hat!"
            It was my third try, and the excitement was real. To my surprise,
            shortly after sharing the post, people on my WhatsApp started
            reaching out, asking, "How much is your hat?" I didn't know what to
            think at first—this was just a hobby for me. But the more people
            inquired, the more I realized there might be a real opportunity
            here.
          </p>
          <p className="storyText">
            {" "}
            It wasn’t easy at first. There were challenges, of course. I had to
            figure out pricing, understand what materials worked best, and find
            my rhythm with marketing and customer service. But the joy of seeing
            someone wear something I created was so fulfilling, and it kept me
            going. I even started taking custom orders, which pushed me to
            improve my skills and try new patterns and designs. Now, my business
            has grown beyond what I could have imagined. I’ve expanded my
            product range, creating everything from jerseys and dresses to tops
            and even home decor items like blankets and pillows. Each new design
            brings new challenges and opportunities, and I love the process of
            pushing myself further. I’ve also connected with other crocheters
            and artisans, learning from them and sharing ideas. It’s amazing to
            be part of a community that celebrates creativity and craftsmanship.
            Looking back, I never could have imagined that something as simple
            as a ruffle hat could change my life. From that one picture to now
            running a full-fledged crochet business, it’s been an incredible
            journey. And the best part is, I get to continue doing what I love
            every day.
          </p>
        </div>
      </section>

      <section id="shop" className="shopSection">
        <div className="shopContent">
          <h2 className="shopTitle">Shop Items</h2>

          <div className="filersContainer">
            <h3 className="filterstitle">Filters</h3>
            <div className="filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={
                    "filterButton" +
                    (selectedCategory === category.id
                      ? " filterButtonActive"
                      : "") +
                    (hoveredButton === `filter-${category.id}` &&
                    selectedCategory !== category.id
                      ? " filterButtonHover"
                      : "")
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  onMouseEnter={() => setHoveredButton(`filter-${category.id}`)}
                  onMouseLeave={() => setHoveredButton(null)}>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="productGrid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="productCard"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="productImage"
                  loading="lazy"
                />
                <div className="productInfo">
                  <h3 className="productName">{product.name}</h3>
                  <p className="productDescription">{product.description}</p>

                  <div className="productPrice">R{product.price}</div>

                  <button
                    className="addToCartBtn"
                    onClick={() => addToCart(product)}
                    onMouseEnter={() => setHoveredButton(`add-${product.id}`)}
                    onMouseLeave={() => setHoveredButton(null)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isCartOpen && (
        <div className="cartOverlay" onClick={() => setIsCartOpen(false)}>
          <div
            className={`cartSidebar${isCartOpen ? " cartSidebarOpen" : ""}`}
            onClick={(e) => e.stopPropagation()}>
            <div className="cartHeader">
              <h2 className="cartTitle">Go To Cart</h2>
              <button
                className="closeCartButton"
                onClick={() => setIsCartOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  marginTop: "2rem",
                }}>
                Your cart is empty
              </p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="cartItem">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cartItemImage"
                    />
                    <div className="cartItemInfo">
                      <div className="cartItemName">{item.name}</div>
                      <div className="cartItemPrice">R{item.price}</div>
                      <div className="quantityControls">
                        <button
                          className="quantityBtn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }>
                          <Minus size={16} />
                        </button>
                        <span style={{ margin: "0 1rem", fontWeight: "bold" }}>
                          {item.quantity}
                        </span>
                        <button
                          className="quantityBtn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }>
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="cartTotal">
                  <div className="totalText">Total: R{getTotalPrice()}</div>
                  <a
                    href="https://wa.me/+27762730184?text=Hi!%20I'm%20interested%20in%20placing%20an%20order"
                    target="_blank">
                    <button onClick={handleCheckout} className="checkoutBtn">
                      Proceed to Checkout
                    </button>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div id="contact" className="footer">
        <div className="footer-content">
          <p className="footer-tagline">Handmade with love ❤️</p>

          <p className="footer-social">
            Contact us directly at:{" "}
            <a href="reatshephang@gmail.com">reatshephang@gmail.com</a>
          </p>

          <div class="footer-links">
            <a href="#about">About</a>
            <a href="#shop">Shop</a>
            <a
              href="https://wa.me/+27798881295?text=Hi!%20Rea%20de%20CROCHET%20"
              target="_blank">
              Contact
            </a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
          <div class="footer-copyright">
            <p>
              &copy; 2025 Re de CROCHET |Developed by{" "}
              <a href="https://www.linkedin.com/in/masilela-thembelihle-140700207?">
                Thembelihle Masilela
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
