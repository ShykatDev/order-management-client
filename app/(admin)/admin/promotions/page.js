"use client";

import { columns } from "@/components/columns/PromotionTableColumns";
import DataTable from "@/components/common/DataTable";
import PromotionForm from "@/components/forms/PromotionForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";


const data = [
  {
      "id": 1,
      "title": "Oukuxxs Promo",
      "start_date": "2025-01-21T18:09:31.429Z",
      "end_date": "2025-01-23T11:05:16.620Z",
      "is_enabled": true,
      "promotion_type_id": 2,
      "discount_amount": "10",
      "created_at": "2025-01-21T18:09:31.429Z",
      "promotion_type": {
          "id": 2,
          "type": "percentenge"
      }
  },
  {
      "id": 2,
      "title": "Oukuxxs Promo",
      "start_date": "2025-01-21T18:32:28.080Z",
      "end_date": "2025-01-23T11:05:16.620Z",
      "is_enabled": false,
      "promotion_type_id": 1,
      "discount_amount": "10",
      "created_at": "2025-01-21T18:32:28.080Z",
      "promotion_type": {
          "id": 1,
          "type": "fixed"
      }
  },
  {
    "id": 3,
    "title": "New Promo",
    "start_date": "2025-01-23T19:26:27.539Z",
    "end_date": "2025-01-24T18:00:00.000Z",
    "is_enabled": true,
    "promotion_type_id": 1,
    "discount_amount": "100",
    "created_at": "2025-01-23T19:26:27.539Z",
    "promotion_type": {
        "id": 1,
        "type": "fixed"
    }
}
]


const AdminPromotions = () => {
  const [promoModal, setPromoModal] = useState(false);
  const [addPromoType, setAddPromoType] = useState(false);

  

  const handleSaveType = () => {
    console.log("Type saved");
  };

  const handleClose = () => {
    setPromoModal(false);
  }

  return (
    <div>
      <div className="border p-4 rounded-md">
        <h1 className="text-xl mb-2">Promotion Types</h1>
        <div className="flex gap-3 items-center">
          <div className="flex gap-3">
            <Badge
              className="h-8 text-green-800 bg-green-100"
              variant={"outline"}
            >
              Fixed Promotion
            </Badge>
            <Badge
              className="h-8 text-green-800 bg-green-100"
              variant={"outline"}
            >
              Percentenge Promotion
            </Badge>
            <Badge
              className="h-8 text-green-800 bg-green-100"
              variant={"outline"}
            >
              Weighted Promotion
            </Badge>
            {!addPromoType && (
              <Button size="sm" onClick={() => setAddPromoType(true)}>
              Add new type
            </Button>
            )}
          </div>
          {addPromoType && (
            <div className="flex items-center gap-3">
              <Input placeholder="Type name" className="h-8"/>

              <Button
                variant="destructive"
                size="sm"
                onClick={() => setAddPromoType(false)}
              >
                Cancel
              </Button>
              <Button size="sm" onClick={handleSaveType}>
                Save type
              </Button>
            </div>
          )}
        </div>
      </div>

      <div>

      <div className="my-6 flex justify-between items-center">
        <h1 className="text-xl">Promotions</h1>
        <Button onClick={() => setPromoModal(!promoModal)}>
          <PlusCircleIcon size={18} /> Add Promotion
        </Button>
        </div>

        <div className="flex gap-6 items-start">
        <div className={`${promoModal ? "w-3/5" : "w-full"}`}>
          <DataTable columns={columns} data={data} />
        </div>

        {/* Product Add Form */}
        {promoModal && (
            <div className="w-2/5 border p-4 rounded-md">
            <h1>Promotion Add Form</h1>
            <PromotionForm onClose={handleClose}/>
        </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default AdminPromotions;
