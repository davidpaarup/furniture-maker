import { X, ShoppingCart, Trash2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
}: WishlistDrawerProps) {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleRemoveItem = (productId: number, productName: string) => {
    removeFromWishlist(productId);
    toast({
      title: "Item removed",
      description: `${productName} has been removed from your saved items.`,
    });
  };

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleMoveToCart = (product: any) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
    toast({
      title: "Moved to cart!",
      description: `${product.name} has been moved from saved items to your cart.`,
    });
  };

  const handleClearWishlist = () => {
    clearWishlist();
    toast({
      title: "Wishlist cleared",
      description: "All saved items have been removed.",
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-wood-900">
            Saved for Later ({items.length})
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-wood-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-wood-900 mb-2">
                No saved items
              </h3>
              <p className="text-wood-600 mb-6">
                Items you save for later will appear here.
              </p>
              <Button
                onClick={onClose}
                className="bg-wood-600 hover:bg-wood-700"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((product) => (
                <div key={product.id} className="flex space-x-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-wood-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-wood-900">
                      {product.name}
                    </h3>

                    <p className="text-sm text-wood-600">
                      Wood: {product.woodType} | {product.category}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-wood-900">
                            ${product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-wood-500 line-through">
                              ${product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {!product.inStock && (
                          <p className="text-sm text-red-600 font-medium">
                            Currently out of stock
                          </p>
                        )}
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() =>
                          handleRemoveItem(product.id, product.name)
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-wood-600 hover:bg-wood-700 flex-1"
                        disabled={!product.inStock}
                        onClick={() => handleMoveToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Move to Cart
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!product.inStock}
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Wishlist Button */}
              {items.length > 0 && (
                <div className="pt-4">
                  <Button
                    variant="outline"
                    onClick={handleClearWishlist}
                    className="w-full text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All Saved Items
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-wood-600 mb-4">
                {items.length} item{items.length !== 1 ? "s" : ""} saved for
                later
              </p>

              <div className="space-y-3">
                <Button
                  className="w-full bg-wood-600 hover:bg-wood-700"
                  size="lg"
                  onClick={() => {
                    // Move all in-stock items to cart
                    const inStockItems = items.filter((item) => item.inStock);
                    inStockItems.forEach((item) => {
                      addToCart(item, 1);
                      removeFromWishlist(item.id);
                    });

                    if (inStockItems.length > 0) {
                      toast({
                        title: "Items moved to cart!",
                        description: `${inStockItems.length} item${inStockItems.length !== 1 ? "s" : ""} moved to your cart.`,
                      });
                    }
                  }}
                >
                  Move All to Cart
                </Button>

                <Button variant="outline" className="w-full" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
