import { bgColorOptions } from "@/constants/options"
import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

const PromotionCard = ({ className, index }) => {
    const randomIndex = Math.floor(Math.random() * bgColorOptions.length)
    return (
        <div style={{backgroundColor: bgColorOptions[randomIndex]}} className={cn("border rounded-md p-6", className)}>
            <div className="w-full h-full relative flex items-start justify-center flex-col">
                <Badge>6 products listed</Badge>
                <h1 className="text-5xl text-green-900 w-3/5 mt-2">6000tk</h1>
                <h2 className="text-2xl">Flat 40% off on listed products.</h2>
                <p className="text-gray-400 mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi praesentium error quasi similique! Eaque vel obcaecati dicta, nobis commodi vero.</p>

                <Button size="sm" variant="outline" className="mt-6">View Products</Button>
            </div>
        </div>
    )
}

export default PromotionCard