import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export interface Product {
  _id: string;
  image: string[];
  name: string;
  price: number;
  category?: string;
  subCategory?: string;
  sizes?: string[];
  description?: string;
}

export interface ShopContextValue {
  products: Product[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: (s: string) => void;
  showSearch: boolean;
  setShowSearch: (v: boolean) => void;
  cartItems: Record<string, Record<string, number>>;
  addToCart: (itemId: string, size: string) => Promise<void>;
  getCartCount: () => number;
  updateQuantity: (itemId: string, size: string, quantity: number) => Promise<void>;
  getCartAmount: () => number;
  navigate: (path: string) => void;
}

export const ShopContext = createContext<ShopContextValue | undefined>(undefined);

const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Record<string, Record<string, number>>>({});
  const router = useRouter();

  const navigate = (path: string) => {
    // normalize to absolute path
    if (!path.startsWith("/")) {
      router.push("/" + path);
    } else {
      router.push(path);
    }
  };

  const addToCart = async (itemId: string, size: string) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    const cartData: Record<string, Record<string, number>> = structuredClone(cartItems) as any;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        try {
          if (cartItems[item][size] > 0) {
            totalCount += cartItems[item][size];
          }
        } catch (error) {
          // ignore
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId: string, size: string, quantity: number) => {
    const cartData: Record<string, Record<string, number>> = structuredClone(cartItems) as any;
    if (!cartData[itemId]) cartData[itemId] = {};
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
        const itemInfo = products.find((product: Product) => product._id === items);
      if (!itemInfo) continue;
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          // ignore
        }
      }
    }
    return totalAmount;
  };

  const value: ShopContextValue = {
    products: products as Product[],
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
