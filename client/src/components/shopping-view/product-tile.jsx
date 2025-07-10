import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full  md:w-[180px]  shadow-md">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[160px] object-contain rounded-t-lg p-2" // Adjusted height, object-contain, padding
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-3">
          <h2 className="text-lg font-semibold mb-1 truncate">{product?.title}</h2> {/* Reduced font, truncate title */}
          <div className="flex justify-between items-center mb-1 text-sm"> {/* Reduced font size */}
            <span className="text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              }  font-semibold text-primary text-sm`}
            >
              ₹{product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className=" font-semibold text-primary text-sm">
              ₹{product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-3">
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed text-sm"> {/* Reduced font size */}
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full text-sm"  // Reduced font size
          >
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;