import CartCard from "@/components/common/CartCard";
import OrderSummary from "@/components/common/OrderSummary";

const CartPage = () => {
  return (
    <div>
      <h2 className="text-xl">Cart Page</h2>

      <div className="mt-6 flex justify-between items-start gap-6 flex-col md:flex-row">
      <div className="w-full md:w-2/3 space-y-6">
        {[...Array(7)].map((_, i) => (
          <CartCard key={i} />
        ))}
      </div>
      <div className="w-full md:w-1/3 border p-4 rounded-md">
        <OrderSummary/>
      </div>
      </div>
    </div>
  );
};

export default CartPage;
