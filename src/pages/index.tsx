import ProductList from "@/components/ProductList";
import { useProductList } from "@/hooks/useProduct";

export default function Home() {
  // const productName = "";
  // const products = [{ name: "Loose Cropped Jeans (Damaged)" }];
  const { productName, setProductName, products, onRemoveProduct, onAddProduct } = useProductList([
    { name: "Loose Cropped Jeans (Damaged)" },
    { name: "Smart Skort Solid" },
  ]);
  console.log(products);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAddProduct(productName);
          // setProductName("");
        }}
      >
        <h1 className="text-2xl font-bold">Add a new product</h1>
        <div>
          <label htmlFor="product-name">Product name:</label>
          <input className="bg-slate-200" id="product-name" onChange={(event) => {
              setProductName(event.target.value);
            }}/>
          <p data-testid="result">{productName}</p>
        </div>
      </form>
      <hr />
      <ProductList items={products} onRemoveProduct={onRemoveProduct}/>
    </>
  );
}
