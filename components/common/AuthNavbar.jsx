import { HomeIcon } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"

const AuthNavbar = () => {
    return (
        <div className="">
            <div className="container py-2 flex items-center justify-between">
                <Logo />
                <Link href="/" className="flex items-center gap-1 hover:underline">
                    <HomeIcon size={16} className="-mt-0.5"/>
                    <span className="font-medium">Home</span>
                </Link>
            </div>
        </div>
    )
}

export default AuthNavbar