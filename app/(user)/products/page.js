import ProductCard from "@/components/common/ProductCard"
import { Button } from "@/components/ui/button"

const ProductsPage = () => {
    return (
      <div>
        <h2 className="text-xl">Products</h2>

        <div className="my-6 flex flex-wrap gap-4 items-center">
          <Button variant="outline">All</Button>
          <Button variant="outline">Promotion Applied</Button>
        </div>

        <div className="grid grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(7)].map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    )
  }
  
  export default ProductsPage