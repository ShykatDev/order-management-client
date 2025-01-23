import { Button } from "@/components/ui/button";
import { PartyPopperIcon, ShoppingBasket } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <h1 className="text-3xl lg:text-7xl text-center">
        A place to discover <br /> masterpiece products.
      </h1>
      <Image
        src={"/assets/homecard.png"}
        width={1000}
        height={1000}
        alt="homecards"
        className="my-10 mx-auto"
      />

      <div className="">
        <p className="text-center font-medium text-lg">
          Attksts can cfsplay their and ba•yers and p.rchaso works that resonato
          vhth them.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Button size="lg" className=""><ShoppingBasket/> View Products</Button>
          <Button size="lg" variant="outline" className=""><PartyPopperIcon/> Promotions</Button>
        </div>
      </div>
    </div>
  );
}
