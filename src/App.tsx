import Cart from "./components/Cart";
import ChangeQtyButtons from "./components/ChangeQtyButtons";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import User from "./components/User";
import { PRODUCTS_DATA } from "./lib/mockData";
import { useStore } from "./store/store";

function App() {
  const cartProducts = useStore((state) => state.products);
  const addproduct = useStore((state) => state.addProduct);
  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <div className="flex justify-between">
        <User />
        <Cart />
      </div>
      <h1 className="text-2xl">Products:</h1>
      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id == product.id) ? (
                <ChangeQtyButtons productId={product.id} />
              ) : (
                <Button variant={"default"} onClick={() => addproduct(product)}>
                  Add to cart
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default App;
