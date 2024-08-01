import { Product } from "@/models/product";
import { useState } from "react";

export function useProductList(initialValue: Product[]) {
    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState(initialValue);
  
    const onRemoveProduct = (name: string) => {
      setProducts(products.filter((product) => name !== product.name));
    };
  
    const onAddProduct = (name: string) => {
      setProducts([...products, { name }]);
    };
  
    return { productName, setProductName, products, onRemoveProduct, onAddProduct };
  }