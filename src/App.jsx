import { useEffect, useState } from 'react';

const App = () => {
  const [Product, setProduct] = useState([])

  async function getdata() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    setProduct(data.products)
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>

      

      {Product.map((item) => (
        <div key={item.usernam}  >
          {/* <img src={item.thumbnail} width="250" height="250" /> */}
          <h2>{item.title}</h2>
          <h3>${item.price}</h3>
        </div>
      ))}
    </div>
  )
}

export default App
