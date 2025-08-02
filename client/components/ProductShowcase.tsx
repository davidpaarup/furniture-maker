import { useState } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import ProductDetailModal from "@/components/ProductDetailModal";
import { Product, furnitureProducts } from "@/data/products";

// Get featured products (first 4 products)
const featuredProducts = furnitureProducts.slice(0, 4);

export default function ProductShowcase() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductDetail = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleWishlistToggle = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening product detail modal

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your saved items.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Saved for later!",
        description: `${product.name} has been added to your saved items.`,
      });
    }
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
            Featured Collection
          </h2>
          <p className="text-wood-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium wooden furniture, each
            piece carefully crafted to bring warmth and elegance to your space.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-wood-200"
              onClick={() => openProductDetail(product)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-wood-100 to-wood-200 rounded-t-lg overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isBestseller && (
                      <Badge className="bg-wood-600 text-white">
                        Bestseller
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        New
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white hover:bg-wood-50 shadow-sm"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Quick Shop Button */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      className="w-full bg-wood-600 hover:bg-wood-700"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                        toast({
                          title: "Added to cart!",
                          description: `${product.name} added to your cart.`,
                        });
                      }}
                    >
                      Quick Shop
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-sm text-wood-500 font-medium">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-wood-900 group-hover:text-wood-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-wood-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-wood-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-wood-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-wood-600 text-wood-600 hover:bg-wood-50"
          >
            <Link to="/furniture">View All Furniture</Link>
          </Button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductDetail}
      />
    </section>
  );
}
