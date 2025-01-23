import { XCircleIcon } from "lucide-react";
import { Switch } from "../ui/switch";

export const columns = [
    {
        accessorKey: "sl",
        header: "SL",
    },
    {
        accessorKey: "name",
        header: "Product Name",
    },
    {
        accessorKey: "description",
        header: "Product Description",
    },
    {
        accessorKey: "price",
        header: "Regular Price",
    },
    {
        accessorKey: "weight",
        header: "Weight",
    },
    {
        accessorKey: "promotion",
        header: "Promotion",
        cell: ({ row }) => {
            const { promotion } = row.original;
            return (
                <span>{promotion.length ? <div className="flex flex-col gap-1">
                    {promotion.map((promo, index) => (
                        <span key={index} className="bg-green-100 text-green-700 px-2 rounded w-fit">{promo}</span>
                    ))}
                </div> : <XCircleIcon size={16} className="text-red-500" />}</span>
            )
        }
    },
    {
        accessorKey: "enabled",
        header: "Enabled",
        cell: ({ row }) => {
            const { enabled } = row.original

            return (
                <Switch checked={enabled} onCheckedChange={() => { }}
                />
            )
        }
    },
]