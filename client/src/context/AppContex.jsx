import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
   const currency=import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin]=useState(false)
  const [products, setProducts]=useState([])
  const [cartItems, setCartItems]=useState({})
  const [searchQuery, setSearchQuery]=useState([])

  
  const fetchProducts=async()=>{
    setProducts(dummyProducts)
  }

  const addtoCart=(itemId)=>{
    let cartData=structuredClone(cartItems);

    if(cartData[itemId]){
      cartData[itemId]+=1;
    }
    else{
      cartData[itemId]=1;
    }
    setCartItems(cartData);
    toast.success("Added to cart")

  
  }

  const updateCartItem=(itemId, quantity)=>{
    let cartData=structuredClone(cartItems);
    cartData[itemId]=quantity;
    setCartItems(cartData)
    toast.success("cart updated")
  }

  const removeFromCart=(itemId)=>{
    let cartData=structuredClone(cartItems);
    if(cartData[itemId]){
      cartData[itemId]-=1;
      if(cartData[itemId]===0){
        delete cartData[itemId];
      }
    }
    toast.success("Removed from cart")
    setCartItems(cartData)
  }
const getCartCount=()=>{
  let totalCount=0;
  for(const item in cartItems){
    totalCount+=cartItems[item]
  }
  return totalCount;

}

const getCartAmount=()=>{
  let totalAmount=0;
  for (const items in cartItems){
    let itemsInfo=products.find((product)=>product._id===items);
    if(cartItems[items]>0){
      totalAmount+=itemsInfo.offerPrice * cartItems[items]
    }
  }
  return Math.floor(totalAmount * 100)/100;
}

  useEffect(()=>{
    fetchProducts()
  },[])
  const value = { 
  navigate, 
  user, 
  setUser, 
  isSeller, 
  setIsSeller, 
  showUserLogin, 
  setShowUserLogin, 
  products, 
  currency, 
  addtoCart, 
  updateCartItem, 
  removeFromCart, 
  cartItems, 
  searchQuery, 
  setSearchQuery, 
  getCartCount,
  getCartAmount ,
  structuredClone
};



  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};  
