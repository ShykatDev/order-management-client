import { PartyPopperIcon, ShoppingBasket, ShoppingCartIcon } from "lucide-react";

export const userNavOptions = [
    {
        label: 'Products',
        href: '/products',
        icon: ShoppingBasket,
    },
    {
        label: 'Promotions',
        href: '/promotions',
        icon: PartyPopperIcon,
    },
    {
        label: 'Cart',
        href: '/cart',
        icon: ShoppingCartIcon,
    },
]