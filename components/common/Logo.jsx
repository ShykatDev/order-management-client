import { ShoppingBagIcon } from "lucide-react"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center gap-2">
            <ShoppingBagIcon/>
            <h2 className="text-2xl">Flex
                <span className="text-zinc-400 italic">Cart</span>
            </h2>
        </Link>
    )
}

export default Logo