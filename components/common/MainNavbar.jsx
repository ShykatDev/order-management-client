import { userNavOptions } from "@/constants/options"
import { LogInIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import Logo from "./Logo"

const MainNavbar = () => {
  return (
        <div className="border-b border-gray-200">
            <div className="container py-2 flex items-center justify-between">
                <Logo />
                <div className="flex items-center gap-8">
                    {userNavOptions.map((item, index) => (
                        <Link href={item.href} key={index}>
                            <span className="flex items-center space-x-2">
                                <item.icon size={18} className="-mt-0.5"/>
                                <span>{item.label}</span>
                            </span>
                        </Link>
                    ))}

                    <Link href={"/login"}>
                        <Button size="sm"><LogInIcon size={18}/> Login</Button>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default MainNavbar