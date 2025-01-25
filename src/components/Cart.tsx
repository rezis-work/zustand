import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { ShoppingCart, CircleX, Trash2 } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import ChangeQtyButtons from "./ChangeQtyButtons";

const Cart = () => {
  const { products, total, address, removeProduct, reset } = useStore(
    useShallow((state) => ({
      products: state.products,
      total: state.total,
      address: state.address,
      removeProduct: state.removeProduct,
      reset: state.reset,
    }))
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"} size={"icon"}>
          <ShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-scroll space-y-2 w-96 max-h-96">
        <div className="flex gap-2 text-lg items-center">
          <h1>Cart:</h1>
          <Button variant={"destructive"} size={"icon"} onClick={reset}>
            <CircleX />
          </Button>
        </div>
        <div className="space-y-2">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-2">
                <CardTitle>{product.title}</CardTitle>
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  onClick={() => removeProduct(product.id)}
                >
                  <Trash2 />
                </Button>
              </CardHeader>
              <CardContent>
                <p>{product.price}</p>
              </CardContent>
              <CardFooter>
                <ChangeQtyButtons productId={product.id} />
              </CardFooter>
            </Card>
          ))}
        </div>
        <p>Total: {total}$</p>
        <p>Address: {address}</p>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
