import { BoxIcon, PartyPopperIcon, ShoppingBasket, ShoppingCartIcon, TruckIcon, WeightIcon } from "lucide-react";

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

export const adminNavOptions = [
    {
        label: 'Products',
        href: '/admin/products',
        icon: BoxIcon,
    },
    {
        label: 'Promotions',
        href: '/admin/promotions',
        icon: PartyPopperIcon,
    },
    {
        label: 'Weight Slabs',
        href: '/admin/weight-slabs',
        icon: WeightIcon,
    },
    {
        label: 'Orders',
        href: '/admin/orders',
        icon: TruckIcon,
    },
]

export const bgColorOptions = [
    "#fef2f2",
    "#eff6ff",
    "#f0fdf4",
    "#fefce8",
    "#f5f3ff",
    "#eef2ff",
    "#f0fdfa",
    "#ecfeff",
    "#fdf2f8",
    "#f5f3ff",
]