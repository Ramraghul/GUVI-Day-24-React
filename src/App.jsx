import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CartItem from "./CardItem";
import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'


function App() {
  const [data,setdate] =useState ([
    {
      id: 1,
      no:1,
      image: "image/1.jpg",
      isSale: false,
      product: [
        {
          type: "Fancy Product",
        },
        {
          rating: "4",
        },
        {
          offer: "",
          isOffer: true,
        },
        {
          price: "$40.0-$80.00"
        },
        {
          button: "Sale Close",
        }
      ]
    },
    {
      id: 2,
      no:1,
      image: "image/2.jpg",
      isSale: true,
      product: [
        {
          type: "Special Item",
        },
        {
          rating: "4.5",
        },
        {
          offer: "$20.00",
          isOffer: true,
        },
        {
          price: "$18.00"
        },
        {
          button: "Add to cart",
        }
      ]
    },
    {
      id: 3,
      no:1,
      image: "image/3.jpg",
      isSale: true,
      product: [
        {
          type: "Sale Item",
        },
        {
          rating: "3",
        },
        {
          offer: "$50.00",
          isOffer: true,
        },
        {
          price: "$25.00"
        },
        {
          button: "Add to cart",
        }
      ]
    },
    {
      id: 4,
      no:1,
      image: "image/4.jpg",
      isSale: false,
      product: [
        {
          type: "Popular Item",
        },
        {
          rating: "3.5",
        },
        {
          offer: "",
        },
        {
          price: "$40.00"
        },
        {
          button: "Sale Close",
        }
      ]
    },
    {
      id: 5,
      no:1,
      image: "image/5.jpg",
      isSale: true,
      product: [
        {
          type: "Sale Item",
        },
        {
          rating: "2",
        },
        {
          offer: "$50.00",
          isOffer: true,
        },
        {
          price: "$25.00"
        },
        {
          button: "Add to cart",
        }
      ]
    },
    {
      id: 6,
      no:1,
      image: "image/6.jpg",
      isSale: false,
      product: [
        {
          type: "Fancy Product",
        },
        {
          rating: "5",
        },
        {
          offer: "",
        },
        {
          price: "$120.00 - $280.00"
        },
        {
          button: "Sale Close",
        }
      ]
    },
    {
      id: 7,
      no:1,
      image: "image/7.jpg",
      isSale: true,
      product: [
        {
          type: "Special Item",
        },
        {
          rating: "3",
        },
        {
          offer: "$20.00",
          isOffer: true,
        },
        {
          price: "$18.00"
        },
        {
          button: "Add to cart",
        }
      ]
    },
    {
      id: 8,
      no:1,
      image: "image/8.jpg",
      isSale: false,
      product: [
        {
          type: "Popular Item",
        },
        {
          rating: "2.5",
        },
        {
          offer: "",
        },
        {
          price: "$40.00"
        },
        {
          button: "Sale Close",
        }
      ]
    },
    {
      id: 9,
      no:1,
      image: "image/9.jpg",
      isSale: true,
      product: [
        {
          type: "Special Item",
        },
        {
          rating: "4.5",
        },
        {
          offer: "$20.00",
          isOffer: true,
        },
        {
          price: "$90.00"
        },
        {
          button: "Add to cart",
        }
      ]
    }
  ])

  const[cart,Setcart]= useState([])
  const[total,Settotal]=useState(0)

  let Addcart=(item)=>{
    Setcart([...cart,item])
    Settotal(total + item.no)
  }

  let Removecart=(item)=>{
    let index=cart.findIndex((obj)=>obj.id==item.id)
    cart.splice(index,1);
    Setcart([...cart])
    Settotal(total-item.no)
  }
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {
                data.map((item) => {
                  return (
                    <Card item={item}  CartItem={cart} handaddCart={Addcart}></Card>
                  )
                })
              }
            </div>
          </div>
          <div className="col-lg-3 ms-5 mt-2 ">
          <ol class="list-group list-group-numbered ">
            {
              cart.map((item)=>{
                return <CartItem item={item} Removecart={Removecart}></CartItem>
              })
            }
          </ol>
          <form className="d-flex justify-content-center mt-3">
                            <button className="btn btn-outline-dark fa" type="submit">
                            <FontAwesomeIcon icon={faCartShopping} /> 
                            <span classNameName='ms-2'> Cart</span>
                                <span className="badge bg-dark text-white ms-2 rounded-pill">{total}</span>
                            </button>
                        </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

