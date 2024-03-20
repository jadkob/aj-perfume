import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import pic1 from "./assets/pic1.webp";
import pic2 from "./assets/pic2.webp";
import pic3 from "./assets/pic3.webp";
import pic4 from "./assets/pic4.webp";
import pic5 from "./assets/pic5.webp";
import pic6 from "./assets/pic6.webp";
import pic7 from "./assets/pic7.webp";
import pic8 from "./assets/pic8.webp";
import pic9 from "./assets/pic9.webp";
import pic10 from "./assets/pic10.webp";
import pic11 from "./assets/pic11.webp";
import pic12 from "./assets/pic12.webp";
import pic13 from "./assets/pic13.webp";
import pic14 from "./assets/pic14.webp";
import "./index.css";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import axios from "axios";

interface Product {
  name: string;
  price5ml: number;
  price10ml: number;
  quantity: number;
  id: number;
  imgPath?: string;
  uid?: string;
  finalPrice: number;
}
export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedTotal = localStorage.getItem("total");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
      setCart([]);
    }

    if (storedTotal) {
      setTotal(parseInt(storedTotal));
    } else {
      localStorage.setItem("total", "0");
      setTotal(0);
    }
  }, []);

  const products: Product[] = [
    {
      name: "Azuree Estee Lauder (for women)",
      price5ml: 15,
      price10ml: 26,
      quantity: 1,
      id: 1,
      imgPath: pic1,
      finalPrice: 0,
    },
    {
      name: "Good Girl Supreme Carolina Herrera (for women)",
      price5ml: 15,
      price10ml: 25,
      quantity: 2,
      id: 2,
      imgPath: pic2,
      finalPrice: 0,
    },
    {
      name: "The Only One Dolce&Gabbana (for women)",
      price5ml: 15,
      price10ml: 23,
      quantity: 3,
      id: 3,
      imgPath: pic3,
      finalPrice: 0,
    },
    {
      name: "Gucci Bloom Nettare Di Fiori Gucci (for women)",
      price5ml: 17,
      price10ml: 26,
      quantity: 4,
      id: 4,
      imgPath: pic4,
      finalPrice: 0,
    },
    {
      name: "Le Male Jean Paul Gaultier (for men)",
      price5ml: 13,
      price10ml: 25,
      quantity: 5,
      id: 5,
      imgPath: pic5,
      finalPrice: 0,
    },
    {
      name: "Le Male Le Parfum Jean Paul Gaultier (for men)",
      price5ml: 13,
      price10ml: 25,
      quantity: 6,
      id: 6,
      imgPath: pic6,
      finalPrice: 0,
    },
    {
      name: "9pm Afnan (for men)",
      price5ml: 5,
      price10ml: 10,
      quantity: 7,
      id: 7,
      imgPath: pic7,
      finalPrice: 0,
    },
    {
      name: "Coco Mademoiselle Intense Chanel (for women)",
      price5ml: 20,
      price10ml: 30,
      quantity: 8,
      id: 8,
      imgPath: pic8,
      finalPrice: 0,
    },
    {
      name: "Sauvage Eau de Parfum Dior (for men)",
      price5ml: 15,
      price10ml: 25,
      quantity: 9,
      id: 9,
      imgPath: pic9,
      finalPrice: 0,
    },
    {
      name: "Gentleman Only Givenchy (for men)",
      price5ml: 17,
      price10ml: 28,
      quantity: 10,
      id: 10,
      imgPath: pic10,
      finalPrice: 0,
    },
    {
      name: "Versace Crystal Noir Eau De Parfum",
      price5ml: 16,
      price10ml: 25,
      quantity: 10,
      id: 11,
      imgPath: pic11,
      finalPrice: 0,
    },
    {
      name: "Aventus Creed (for men)",
      price5ml: 23,
      price10ml: 35,
      quantity: 10,
      id: 12,
      imgPath: pic12,
      finalPrice: 0,
    },
    {
      name: "Valentino Uomo Born in Roma Valentino (for men)",
      price5ml: 15,
      price10ml: 25,
      quantity: 10,
      id: 13,
      imgPath: pic13,
      finalPrice: 0,
    },
    {
      name: "Toy Boy Moschino for men (coming soon)",
      price5ml: 13,
      price10ml: 20,
      quantity: 10,
      id: 14,
      imgPath: pic14,
      finalPrice: 0,
    },
  ];
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        {products.map((product) => (
          <Route
            key={product.name}
            path={"/" + product.name}
            element={
              <Product
                product={product}
                setCart={setCart}
                cart={cart}
                total={total}
                setTotal={setTotal}
              />
            }
          />
        ))}
        <Route
          path={"/checkout"}
          element={<Checkout cart={cart} total={total} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
function Nav() {
  return (
    <nav className="">
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/checkout"}>Checkout</Link>
    </nav>
  );
}
function Home({ products }: { products: Product[] }) {
  return (
    <>
      <h1 className="title">AJ Perfumes</h1>
      <div className="container-main">
        {products.map((product) => (
          <div key={product.id} className="home-product">
            {product.imgPath && (
              <img src={product.imgPath} className="" alt={product.name} />
            )}
            <h1 className="">{product.name}</h1>
            <h2 className="">${product.price5ml} (5 mL)</h2>
            <Link to={"/" + product.name} className="">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

function Cart({
  cart,
  setCart,
  total,
  setTotal,
}: {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}) {
  const removeFromCart = (
    uid: string | undefined,
    price: number,
    name: string
  ) => {
    const newCart = cart.filter((product) => product.uid !== uid);
    const newTotal = (total -= price);
    setCart(newCart);
    setTotal(newTotal);
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(name + " removed from cart");
  };
  return (
    <>
      {cart.length > 0 && (
        <h1 style={{ textAlign: "center", marginTop: "5vh" }}>
          Total: {total}
        </h1>
      )}
      <div className="container-cart">
        {cart.length === 0 && (
          <h1 style={{ textAlign: "center" }}>
            You Dont Have Anything In Your Cart 🤯
          </h1>
        )}
        {cart.map((product) => (
          <div key={product.uid} className="cart-product">
            <img src={product.imgPath} className="" alt={product.name} />
            <h1 className="">{product.name}</h1>
            <button
              className=""
              onClick={() =>
                removeFromCart(product.uid, product.finalPrice, product.name)
              }
            >
              Remove From Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Product({
  product,
  setCart,
  cart,
  total,
  setTotal,
}: {
  product: Product;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selectedSize, setSelectedSize] = useState<number>(10);
  const [finalPrice, setFinalPrice] = useState<number>(product.price5ml); // Initialize finalPrice state with price5ml

  const handleChange = (num: number) => {
    setSelectedSize(num);
    // Update finalPrice based on selected size
    setFinalPrice(num === 10 ? product.price5ml : product.price10ml);
  };

  const handleAddToCart = () => {
    const product_obj: Product = {
      name: product.name,
      finalPrice: finalPrice, // Use finalPrice state in the product object
      imgPath: product.imgPath,
      quantity: product.quantity,
      id: product.id,
      uid: v4(),
      price5ml: product.price5ml,
      price10ml: product.price10ml,
    };
    const newCart = [...cart, product_obj];
    const newTotal = total + finalPrice; // Use finalPrice in total calculation

    setCart(newCart);
    setTotal(newTotal);

    // Update local storage after state has been updated
    localStorage.setItem("cart", JSON.stringify(newCart));
    localStorage.setItem("total", JSON.stringify(newTotal));
    alert(product_obj.name + " added to cart");
  };

  return (
    <div>
      <Link to={"/"} className={""}>
        Back
      </Link>
      <div className={"product"}>
        <img className="" src={product.imgPath} alt={product.name} />
        <div className="product-texts">
          <h1 className="">Name: {product.name}</h1>
          <h2 className="">Price: ${finalPrice}</h2> {/* Display finalPrice */}
          <div id="inputs">
            <label htmlFor="">
              5ml
              <input
                type="radio"
                value="10ml"
                name="grade"
                checked={selectedSize === 10}
                onChange={() => handleChange(10)}
              />
            </label>
            <label>
              10ml
              <input
                type="radio"
                value={"15ml"}
                name="grade"
                checked={selectedSize === 15}
                onChange={() => handleChange(15)}
              />
            </label>
          </div>
          <button
            onClick={() => {
              handleAddToCart();
            }}
            id={""}
            className=""
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function Checkout({ cart, total }: { cart: Product[]; total: number }) {
  const [name, setName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const [grade, setGrade] = useState<string>(0);
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!clicked) {
          setClicked(true);
          alert("Order Placed!");
          axios
            .post("https://dent-smoggy-willow.glitch.me/", {
              name: name,
              grade: grade,
              total: total,
              cart: cart,
            })
            .then(() => {
              setName("");
              setGrade("");
              localStorage.setItem("cart", "[]");
              localStorage.setItem("total", "0");
              window.location.href = "/";
            });
        }
      }}
      className="checkout"
    >
      <input
        type="text"
        placeholder={"Full Name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=""
      />
      <input
        type="text"
        placeholder={"Grade"}
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className=""
      />
      <button type="submit" className="">
        Checkout
      </button>
    </form>
  );
}
