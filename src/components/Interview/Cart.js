// import { useEffect, useState } from "react";

// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCart = async () => {
//       setLoading(true);
//       try {
//         const cartResponse = await fetch("https://fakestoreapi.com/carts/2");
//         const cartData = await cartResponse.json();

//         const productDetails = [];
//         for (const item of cartData.products) {
//           const productResponse = await fetch(
//             `https://fakestoreapi.com/products/${item.productId}`
//           );
//           const productData = await productResponse.json();
//           productDetails.push({ ...productData, quantity: item.quantity });
//         }

//         setProducts(productDetails);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} width="50" />
//             <p>
//               {product.title} - ${product.price} (x{product.quantity})
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;

// import React, { useEffect, useState } from "react";

// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setloading] = useState(true);

//   useEffect(() => {
//     const fetchdata = async () => {
//       const response = await fetch("https://fakestoreapi.com/carts/2");
//       const cartRes = await response.json();

//       const productsDetails = [];
//       for (const item of cartRes.products) {
//         const productRes = await fetch(
//           `https://fakestoreapi.com/products/${item.productId}`
//         );
//         const productsData = await productRes.json();
//         productsDetails.push({ ...productsData, quantity: item.quantity });
//       }
//       setProducts(productsDetails);
//     };
//     fetchdata();
//   }, []);
//   console.log(products);
//   return (
//     <div>
//       <h1>Product Details</h1>
//       <ul style={{ listStyle: "none" }}>
//         {products.map((product) => (
//           <li>
//             <img src={product.image} width="50" />;
//             <p>
//               {product.title}- {product.price} : {product.quantity}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/carts/2");
        const responseJson = await response.json();
        const data = responseJson.products;

        const cartData = await Promise.all(
          data.map(async (item) => {
            const itemRes = await fetch(
              `https://fakestoreapi.com/products/${item.productId}`
            );
            return await itemRes.json();
          })
        );

        setCartList(cartData);
      } catch {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cartList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cartList.length) % cartList.length
    );
  };

  return (
    <div>
      <h1>Cart Carousel</h1>
      {cartList.length > 0 && (
        <div>
          <img
            src={cartList[currentIndex].image}
            width={100}
            alt={cartList[currentIndex].title}
          />
          <p>{cartList[currentIndex].title}</p>
          <p>${cartList[currentIndex].price}</p>
        </div>
      )}
      <button onClick={handlePrev} disabled={cartList.length === 0}>
        Prev
      </button>
      <button onClick={handleNext} disabled={cartList.length === 0}>
        Next
      </button>
    </div>
  );
};

export default Cart;
