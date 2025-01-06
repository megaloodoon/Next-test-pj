// app/pages/test/page.js

export default async function Page() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
  
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  