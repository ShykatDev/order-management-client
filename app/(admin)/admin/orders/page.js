"use client";

import OrdersCard from "@/components/common/OrdersCard";

const data = [
  {
    id: 4,
    quantity: "3",
    user_id: 2,
    slab_id: 4,
    total_order_price: "1200",
    weight: "1000",
    products: [
      {
        product: {
          id: 4,
          name: "Jackfruit",
          description: "This is a fruit",
          price: "70",
          weight: "1200",
          is_enabled: true,
          created_at: "2025-01-21T18:27:05.393Z",
        },
        quantity: 2,
      },
      {
        product: {
          id: 5,
          name: "Kiwi",
          description: "This is a fruit",
          price: "30",
          weight: "200",
          is_enabled: true,
          created_at: "2025-01-21T18:32:10.249Z",
        },
        quantity: 1,
      },
    ],
    user: {
      id: 2,
      name: "Shykat Raha",
      email: "shykat.raha@gmail.com",
    },
    weight_slab: {
      promotion_type: {
        id: 4,
        type: "weighted",
      },
    },
  },
];

const OrderPage = () => {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-xl">Orders</h1>
      </div>

      <div className="">
        <div className="w-full grid grid-cols-3 gap-6">
          <OrdersCard/>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
