import Image from "next/image"
import { Badge } from "../ui/badge"

const ProductCard = () => {
    return (
        <div className="w-full rounded-md overflow-hidden border">
            <Image alt="book" src={"/assets/book_cover.webp"} width={500} height={500} className="w-full h-64 object-cover" />

            <div className="p-2 space-y-2">
                <div className="flex justify-between">
                    <Badge className={"bg-green-100 flex gap-2 w-fit hover:bg-transparent"}>
                        <span className="size-2 rounded-full bg-green-700"></span>
                        <span className="text-green-700">Promotion Applied</span>
                    </Badge>
                    <Badge>10% OFF</Badge>
                </div>

                <div>
                    <h1>Alice in wonderland</h1>
                    <p className="line-clamp-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad expedita reprehenderit a incidunt magni cum sequi consequatur fugit illo, dolor amet eius eligendi optio non mollitia vel, porro laborum?</p>
                </div>
                <hr className="my-3"/>
                <div className="grid grid-cols-3">
                    <div>
                        <small className="text-gray-400">Regular Price</small>
                        <h3>$20</h3>
                    </div>
                    <div>
                        <small className="text-gray-400">Discount Applied</small>
                        <h3>Flat 30</h3>
                    </div>
                    <div className="text-right">
                        <small className="text-gray-400">Weight</small>
                        <h3>200 gm</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard