import PromotionCard from "@/components/common/PromotionCard";
import { Button } from "@/components/ui/button";

const PromotionsPage = () => {
  return (
    <div>
      <h2 className="text-xl">Promotions</h2>

      <div className="my-6 flex flex-wrap gap-4 items-center">
        <Button variant="outline">Fixed</Button>
        <Button variant="outline">Percentage</Button>
        <Button variant="outline">Weighted</Button>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(16)].map((_, i) => (
          <PromotionCard
            className={`${i === 0 && "col-span-2 row-span-1"}`}
            key={i}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionsPage;
