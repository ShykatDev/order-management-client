import { Trash2Icon } from "lucide-react"


const CartCard = () => {
    return (
        <div className="border p-4 rounded-md grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            <div className="col-span-3 lg:col-span-2">
                <small className="text-gray-400">Product</small>
                <p>Product Namesasd - <span className="font-semibold">890 tk</span></p>
            </div>
            <div className="col-span-2 sm:col-span-1 md:text-right lg:text-left">
                <small className="text-gray-400">Quantity</small>
                <div>
                    <div className="flex md:justify-end lg:justify-start items-center gap-2">
                        <button className="size-5 bg-black flex items-center justify-center text-white rounded">-</button>
                        <p>3</p>
                        <button className="size-5 bg-black flex items-center justify-center text-white rounded">+</button>
                    </div>
                </div>
            </div>
            <div>
                <small className="text-gray-400">Promotion Applied</small>
                <p><span className="font-semibold">10%</span> OFF</p>
            </div>
            <div>
                <small className="text-gray-400">Weight (gm)</small>
                <p>400</p>
            </div>
            <div>
                <small className="text-gray-400">Discount Price</small>
                <p>700 tk</p>
            </div>
            <div className="text-right col-span-3 md:col-span-1">
                <small className="text-gray-400">Action</small>
                <Trash2Icon size={18} className="text-red-600 ml-auto" />
            </div>
        </div>
    )
}

export default CartCard