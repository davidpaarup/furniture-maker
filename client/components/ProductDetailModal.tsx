import { useState } from "react";
import {
  X,
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  const [selectedFinish, setSelectedFinish] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!isOpen || !product) return null;

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  const handleAddToCart = () => {
    if (!product.inStock) return;

    addToCart(product, quantity, selectedFinish);
    toast({
      title: "Added to cart!",
      description: `${quantity} × ${product.name} ${selectedFinish ? `(${selectedFinish})` : ""} added to your cart.`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-wood-100 to-wood-200 rounded-lg overflow-hidden">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 rounded border-2 transition-colors ${
                      currentImageIndex === index
                        ? "border-wood-500"
                        : "border-wood-200 hover:border-wood-300"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={product.images[index]}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-wood-600">
                  {product.category}
                </Badge>
                {product.isNew && (
                  <Badge className="bg-green-100 text-green-800">New</Badge>
                )}
                {product.isBestseller && (
                  <Badge className="bg-wood-600 text-white">Bestseller</Badge>
                )}
              </div>

              <h1 className="text-2xl font-bold text-wood-900">
                {product.name}
              </h1>

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
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-wood-900">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-wood-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <Badge variant="destructive">
                      Save {discountPercentage}%
                    </Badge>
                  </>
                )}
              </div>
              {!product.inStock && (
                <Badge variant="secondary" className="text-red-600">
                  Currently Out of Stock
                </Badge>
              )}
            </div>

            {/* Description */}
            <p className="text-wood-700 leading-relaxed">
              {product.description}
            </p>

            {/* Options */}
            <div className="space-y-4">
              {product.finishOptions.length > 0 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-900">
                    Finish Options
                  </label>
                  <Select
                    value={selectedFinish}
                    onValueChange={setSelectedFinish}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select finish" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.finishOptions.map((finish) => (
                        <SelectItem key={finish} value={finish}>
                          {finish}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-wood-900">
                  Quantity
                </label>
                <Select
                  value={quantity.toString()}
                  onValueChange={(value) => setQuantity(parseInt(value))}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full bg-wood-600 hover:bg-wood-700"
                size="lg"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart - ${(product.price * quantity).toLocaleString()}
              </Button>

              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Save for Later
                </Button>
                <Button variant="outline" className="flex-1">
                  Share
                </Button>
              </div>
            </div>

            <Separator />

            {/* Product Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-wood-900">
                Product Information
              </h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-wood-600">Wood Type:</span>
                  <p className="font-medium text-wood-900">
                    {product.woodType}
                  </p>
                </div>
                <div>
                  <span className="text-wood-600">Dimensions:</span>
                  <p className="font-medium text-wood-900">
                    {product.dimensions.width}" × {product.dimensions.height}" ×{" "}
                    {product.dimensions.depth}"
                  </p>
                </div>
                <div>
                  <span className="text-wood-600">Weight:</span>
                  <p className="font-medium text-wood-900">
                    {product.weight} lbs
                  </p>
                </div>
                <div>
                  <span className="text-wood-600">Crafting Time:</span>
                  <p className="font-medium text-wood-900">
                    {product.craftingTime}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <span className="text-wood-600 text-sm">Key Features:</span>
                <ul className="mt-2 space-y-1">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-wood-700 flex items-start"
                    >
                      <span className="w-1 h-1 bg-wood-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Icons */}
              <div className="flex justify-between pt-4 border-t border-wood-200">
                <div className="text-center">
                  <Truck className="h-6 w-6 text-wood-600 mx-auto mb-1" />
                  <p className="text-xs text-wood-600">Free Delivery</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 text-wood-600 mx-auto mb-1" />
                  <p className="text-xs text-wood-600">Lifetime Warranty</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-wood-600 mx-auto mb-1" />
                  <p className="text-xs text-wood-600">Custom Timeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
