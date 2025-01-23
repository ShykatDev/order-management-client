const data = {
    id: 4,
    quantity: "3",
    user_id: 2,
    slab_id: 4,
    total_order_price: "1200",
    weight: "1000",
    products: [
        {
            product: {
                name: "Jackfruit",
                price: "70",
                weight: "1200",
                promotions: {}
            },
            quantity: 2
        },
        {
            product: {
                name: "Kiwi",
                price: "30",
                weight: "200",
                promotions: {
                    discount_amount: "10",
                    promotion_type: {
                        type: "fixed"
                    }
                }
            },
            quantity: 1
        }
    ],
    user: {
        id: 2,
        name: "Shykat Raha",
        email: "shykat.raha@gmail.com"
    },
    weight_slab: {
        promotion_type: {
            id: 4,
            type: "weighted"
        },
        amount: "10"
    }
};

const calculateSubTotal = (item) => {
    const { price, promotions } = item.product;
    const quantity = Number(item.quantity);
    const promoType = promotions?.promotion_type?.type;
    const discountAmount = Number(promotions?.discount_amount);
    const basePrice = Number(price);

    if (promoType === "fixed") {
        return (basePrice - discountAmount) * quantity;
    }

    if (promoType === "percentage") {
        const discount = basePrice * (discountAmount / 100);
        return (basePrice - discount) * quantity;
    }

    return basePrice * quantity;
};

const OrdersCard = () => {
    const { products, user, weight_slab } = data;

    const totalAmount = products.reduce((total, item) => total + calculateSubTotal(item), 0);
    const totalWeight = products.reduce((total, item) => total + Number(item.product.weight), 0);
    const discount = Math.floor(totalWeight / 500) * Number(weight_slab.amount);
    const grandTotal = totalAmount - discount;

    return (
        <div className="rounded-md border p-4">
            {/* Customer Information */}
            <div className="py-2">
                <small className="text-gray-400">Customer Information</small>
                <div className="flex items-center justify-between">
                    <h2>{user.name}</h2>
                    <small>{user.email}</small>
                </div>
            </div>

            {/* Products Information */}
            <div className="border-t py-2">
                <small className="text-gray-400">Products Information</small>
                <div className="space-y-2 divide-y">
                    {products.map((item, index) => {
                        const { product, quantity } = item;
                        const promoType = product.promotions?.promotion_type?.type;
                        const subTotal = calculateSubTotal(item);

                        return (
                            <div key={index} className="flex flex-col justify-between">
                                {promoType && (
                                    <small className="mt-2 shadow bg-gradient-to-r from-green-100 to-green-300 text-green-600 text-center capitalize px-2 font-semibold rounded text-sm">
                                        {promoType} promotion applied!
                                    </small>
                                )}
                                <span className="font-semibold flex justify-between items-center">
                                    {product.name} <span className="font-normal text-gray-400">Qty: {quantity}</span>
                                </span>
                                <span className="text-gray-400 flex justify-between items-center">
                                    Price: <span>{product.price} tk</span>
                                </span>
                                <span className="text-gray-400 flex justify-between items-center">
                                    Weight: <span>{product.weight} g</span>
                                </span>
                                <span className="text-gray-400 flex justify-between items-center">
                                    Sub Total: <span className="font-semibold text-black">{subTotal} tk</span>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Weight and Total Amount */}
            <div className="border-t py-2">
                <p className="flex justify-between items-center text-gray-400">
                    Total Weight: <span>{totalWeight} g</span>
                </p>
                <p className="flex justify-between items-center">
                    Total Amount: <span className="font-semibold">{totalAmount} tk</span>
                </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 rounded-lg shadow-lg flex justify-between items-center p-2">
                <small className="text-yellow-600 font-semibold">Weighted Promotion Applied!</small>
                <p className="">
                    <span className="font-semibold text-amber-800">{weight_slab.amount}</span> tk per 500g
                </p>
            </div>


            {/* Grand Total */}
            <div className="border-t py-2">
                <small className="text-gray-400">Amount Information</small>
                <div>
                    <h2 className="flex justify-between items-center">
                        Grand Total: <span>{grandTotal} tk</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default OrdersCard;
