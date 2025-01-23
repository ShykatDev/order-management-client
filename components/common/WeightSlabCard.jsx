import { bgColorOptions } from "@/constants/options"
import { WeightIcon } from "lucide-react"

const WeightSlabCard = () => {
    const randomIndex = Math.floor(Math.random() * bgColorOptions.length)
    return (
        <div className="w-72 p-4 border rounded-md">
            <p style={{ backgroundColor: bgColorOptions[randomIndex] }} className="flex items-center gap-2 p-3 rounded-md justify-center font-medium text-lg"><WeightIcon size={20} /> <span>Weight: 0g - 500g</span></p>

            <div className="pt-4">
                <p className="text-3xl text-center font-semibold">100 tk</p>
                <p className="text-center text-gray-400">Discount on every 500gm</p>
            </div>


        </div>
    )
}

export default WeightSlabCard