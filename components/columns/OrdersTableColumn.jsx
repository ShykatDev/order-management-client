import { createColumnHelper } from "@tanstack/react-table";


const columnHelper = createColumnHelper()

export const columns = [
    {
        accessorKey: "id",
        header: "SL",
    },
    {
        accessorKey: "user",
        header: "User",
        cell: ({ row }) => {
            const { name, email } = row.original.user;

            return (
                <div>
                    <p>{name}</p>
                    <p className="text-gray-400">{email}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "products",
        header: () => <span>Products</span>,
        columns: [
            columnHelper.accessor('Name', {
                cell: ({ row }) => {
                    const { products } = row.original;

                    return (
                        <>
                            {products?.map((item, i) => {
                                return <span key={i}>{item?.name}</span>
                            })}
                        </>
                    )
                }

            }),
            columnHelper.accessor('Price', {
                cell: prop => prop.getValue()
            }),
            columnHelper.accessor('Weight', {
                cell: prop => prop.getValue()
            }),
            columnHelper.accessor('Quantity', {
                cell: prop => prop.getValue()
            }),
        ]
    },

]