import { format } from 'date-fns';
import { Switch } from "../ui/switch";

export const columns = [
    {
        accessorKey: "id",
        header: "SL",
    },
    {
        accessorKey: "title",
        header: "Promotion Title",
    },
    {
        accessorKey: "promotion_type",
        header: "Promotion Type",
        cell: ({ row }) => {
            const { promotion_type } = row.original
            return (
                <span className='capitalize'>{promotion_type?.type}</span>
            )
        }
    },
    {
        accessorKey: "start_date",
        header: "Start Date",
        cell: ({row})=> {
            const {start_date} = row.original
            return (
                <span>{format(new Date(start_date), 'PP')}</span>
            )
        }
    },
    {
        accessorKey: "end_date",
        header: "End Date",
        cell: ({row})=> {
            const {end_date} = row.original
            return (
                <span>{format(new Date(end_date), 'PP')}</span>
            )
        }
    },
    {
        accessorKey: "discount_amount",
        header: "Discount Amount",
        cell: ({row})=> {
            const {discount_amount} = row.original
            return (
                <span>{discount_amount} tk</span>
            )
        }
    },
    {
        accessorKey: "enabled",
        header: "Enabled",
        cell: ({ row }) => {
            const { is_enabled } = row.original

            return (
                <Switch checked={is_enabled} onCheckedChange={() => { }}
                />
            )
        }
    },
]