"use client";

import WeightSlabCard from "@/components/common/WeightSlabCard";
import SlabForm from "@/components/forms/SlabForm";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";

const WeightSlabs = () => {
  const [slabModal, setSlabModal] = useState(false);

  const handleClose = () => {
    setSlabModal(false);
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-xl">Weight Slabs</h1>
        <Button onClick={() => setSlabModal(!slabModal)}>
          <PlusCircleIcon size={18} /> Add Slab
        </Button>
      </div>

      <div className="w-full flex gap-6 items-start">
        <div
          className={`${slabModal ? "w-3/5" : "w-full"} flex flex-wrap gap-6 items-start`}
        >
          {[...Array(7)].map((_, i) => (
            <WeightSlabCard key={i} />
          ))}
        </div>

        {/* Product Add Form */}
        {slabModal && (
          <div className="w-2/5 border p-4 rounded-md">
            <h1>Slab Add Form</h1>
            <SlabForm onClose={handleClose} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeightSlabs;
