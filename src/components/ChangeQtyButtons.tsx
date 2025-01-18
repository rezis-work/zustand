import { useShallow } from "zustand/shallow";
import { useStore } from "../store/store";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

type Props = { productId: number };

const ChangeQtyButtons = ({ productId }: Props) => {
  const { getProductById, decQty, incQty, setTotal } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
      setTotal: state.setTotal,
    }))
  );

  const product = getProductById(productId);

  console.log(product);

  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <Button onClick={() => decQty(product.id)}>
            <Minus />
          </Button>
          <p>{product.qty}</p>
          <Button onClick={() => incQty(product.id)}>
            <Plus />
          </Button>
        </div>
      )}
    </>
  );
};

export default ChangeQtyButtons;
