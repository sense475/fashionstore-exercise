import { Product } from "@/models/product";

type ProductListProps = {
  items: Product[];
  onRemoveProduct: (_: string) => void;
};

const ProductList = ({ items,onRemoveProduct }: ProductListProps) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li key={item.name}>{item.name} <button onClick={() => {
          onRemoveProduct(item.name);
        }}>
          <h1>X</h1>
        </button></li>
      ))}
    </ul>
  );
};

export default ProductList;
