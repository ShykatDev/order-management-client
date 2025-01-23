import { BoxIcon, CalculatorIcon, MailIcon, TagIcon, UserIcon, WeightIcon } from "lucide-react"
import { Button } from "../ui/button"

const OrderSummary = () => {
  return (
    <div>
        <h1 className="text-lg">Order Summary</h1>

        <div className="border-t grid grid-cols-2 gap-2 my-4 py-2">
            <div className="flex flex-col">
                <small className="text-gray-400 flex items-center gap-1"><UserIcon size={12}/> Full Name</small>
                <small className="text-gray-400 flex items-center gap-1"><MailIcon size={12}/> Email</small>
            </div>
            <div className="flex flex-col">
                <small className="text-right">Shykat Raha</small>
                <small className="text-right">shykat.raha29@gmail.com</small>
            </div>
        </div>
        <div className="border-t grid grid-cols-2 gap-2 my-4 py-2">
            <div className="flex flex-col">
                <small className="text-gray-400 flex items-center gap-1"><BoxIcon size={12}/> Total Products</small>
                <small className="text-gray-400 flex items-center gap-1"><WeightIcon size={12}/> Total Weight</small>
            </div>
            <div className="flex flex-col">
                <small className="text-right">7</small>
                <small className="text-right">700 gm</small>
            </div>
        </div>
        <div className="border-t grid grid-cols-2 gap-2 my-4 py-2">
            <div className="flex flex-col">
                <small className="text-gray-400 flex items-center gap-1">Sub Total</small>
                <small className="text-gray-400 flex items-center gap-1"><TagIcon size={12}/> Discount applied</small>
            </div>
            <div className="flex flex-col">
                <small className="text-right">7000 tk</small>
                <small className="text-right">1800 tk</small>
            </div>
        </div>
        <div className="border-t grid grid-cols-2 gap-2 my-4 py-2">
            <div className="flex flex-col">
                <p className="flex items-center gap-1"><CalculatorIcon size={14}/> Grand Total</p>
            </div>
            <div className="flex flex-col">
                <p className="text-right font-semibold">5200 tk</p>
            </div>
        </div>
        <Button className="w-full">Place Order</Button>
    </div>
  )
}

export default OrderSummary