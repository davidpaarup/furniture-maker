import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import {
  furnitureProducts,
  categories,
  woodTypes,
  priceRanges,
  sortOptions,
  Product,
} from "@/data/products";
import ProductDetailModal from "@/components/ProductDetailModal";

export default function Furniture() {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWoodType, setSelectedWoodType] = useState("All Wood Types");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    inStock: false,
    isNew: false,
    isBestseller: false,
    isCustomizable: false,
  });

  // Cart and toast hooks
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = furnitureProducts.filter((product) => {
      // Search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) &&
        !product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }

      // Wood type filter
      if (
        selectedWoodType !== "All Wood Types" &&
        product.woodType !== selectedWoodType
      ) {
        return false;
      }

      // Price range filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Additional filters
      if (filterOptions.inStock && !product.inStock) return false;
      if (filterOptions.isNew && !product.isNew) return false;
      if (filterOptions.isBestseller && !product.isBestseller) return false;
      if (filterOptions.isCustomizable && !product.isCustomizable) return false;

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Featured - keep bestsellers first
        filtered.sort(
          (a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0),
        );
    }

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedWoodType,
    priceRange,
    sortBy,
    filterOptions,
  ]);

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductDetail = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-wood-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-wood-900">
              Furniture Collection
            </h1>
            <p className="text-wood-600 max-w-2xl mx-auto">
              Discover our complete range of handcrafted wooden furniture, each
              piece carefully designed and built to last generations.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:w-80 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <Card className="border-wood-200">
              <CardContent className="p-6 space-y-6">
                <h3 className="font-semibold text-wood-900">Filters</h3>

                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-700">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-wood-400" />
                    <Input
                      placeholder="Search furniture..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Separator />

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-700">
                    Category
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Wood Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-700">
                    Wood Type
                  </label>
                  <Select
                    value={selectedWoodType}
                    onValueChange={setSelectedWoodType}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {woodTypes.map((wood) => (
                        <SelectItem key={wood} value={wood}>
                          {wood}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <label className="text-sm font-medium text-wood-700">
                    Price Range: ${priceRange[0]} - $
                    {priceRange[1] === 3000 ? "3000+" : priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={3000}
                    step={50}
                    className="w-full"
                  />
                </div>

                <Separator />

                {/* Additional Filters */}
                <div className="space-y-4">
                  <label className="text-sm font-medium text-wood-700">
                    Additional Filters
                  </label>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="inStock"
                        checked={filterOptions.inStock}
                        onCheckedChange={(checked) =>
                          setFilterOptions((prev) => ({
                            ...prev,
                            inStock: !!checked,
                          }))
                        }
                      />
                      <label
                        htmlFor="inStock"
                        className="text-sm text-wood-700"
                      >
                        In Stock Only
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isNew"
                        checked={filterOptions.isNew}
                        onCheckedChange={(checked) =>
                          setFilterOptions((prev) => ({
                            ...prev,
                            isNew: !!checked,
                          }))
                        }
                      />
                      <label htmlFor="isNew" className="text-sm text-wood-700">
                        New Arrivals
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isBestseller"
                        checked={filterOptions.isBestseller}
                        onCheckedChange={(checked) =>
                          setFilterOptions((prev) => ({
                            ...prev,
                            isBestseller: !!checked,
                          }))
                        }
                      />
                      <label
                        htmlFor="isBestseller"
                        className="text-sm text-wood-700"
                      >
                        Bestsellers
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isCustomizable"
                        checked={filterOptions.isCustomizable}
                        onCheckedChange={(checked) =>
                          setFilterOptions((prev) => ({
                            ...prev,
                            isCustomizable: !!checked,
                          }))
                        }
                      />
                      <label
                        htmlFor="isCustomizable"
                        className="text-sm text-wood-700"
                      >
                        Customizable
                      </label>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedWoodType("All Wood Types");
                    setPriceRange([0, 3000]);
                    setFilterOptions({
                      inStock: false,
                      isNew: false,
                      isBestseller: false,
                      isCustomizable: false,
                    });
                  }}
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>

                <p className="text-sm text-wood-600">
                  {filteredProducts.length} of {furnitureProducts.length}{" "}
                  products
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className={`group cursor-pointer hover:shadow-xl transition-all duration-300 border-wood-200 ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                    onClick={() => openProductDetail(product)}
                  >
                    <CardContent
                      className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}
                    >
                      {/* Product Image */}
                      <div
                        className={`relative bg-gradient-to-br from-wood-100 to-wood-200 overflow-hidden ${
                          viewMode === "list"
                            ? "w-48 h-48 flex-shrink-0"
                            : "aspect-square rounded-t-lg"
                        }`}
                      >
                        {/* Product Image */}
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
                          {!product.inStock && (
                            <Badge
                              variant="secondary"
                              className="bg-red-100 text-red-800"
                            >
                              Out of Stock
                            </Badge>
                          )}
                        </div>

                        {/* Wishlist Button */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white hover:bg-wood-50 shadow-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle wishlist toggle
                          }}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Product Info */}
                      <div
                        className={`p-4 space-y-3 ${viewMode === "list" ? "flex-1" : ""}`}
                      >
                        <div>
                          <p className="text-sm text-wood-500 font-medium">
                            {product.category}
                          </p>
                          <h3 className="font-semibold text-wood-900 group-hover:text-wood-600 transition-colors">
                            {product.name}
                          </h3>
                          {viewMode === "list" && (
                            <p className="text-sm text-wood-600 mt-2 line-clamp-2">
                              {product.description}
                            </p>
                          )}
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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-wood-900">
                              ${product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-wood-500 line-through">
                                ${product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>

                          {viewMode === "list" && (
                            <Button
                              size="sm"
                              className="bg-wood-600 hover:bg-wood-700"
                              disabled={!product.inStock}
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product, 1);
                                toast({
                                  title: "Added to cart!",
                                  description: `${product.name} added to your cart.`,
                                });
                              }}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          )}
                        </div>

                        {/* Additional info for list view */}
                        {viewMode === "list" && (
                          <div className="flex items-center space-x-4 text-sm text-wood-600">
                            <span>Wood: {product.woodType}</span>
                            <span>•</span>
                            <span>Crafting: {product.craftingTime}</span>
                            {product.isCustomizable && (
                              <>
                                <span>•</span>
                                <span className="text-wood-700 font-medium">
                                  Customizable
                                </span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-wood-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-8 w-8 text-wood-400" />
                </div>
                <h3 className="font-semibold text-wood-900 mb-2">
                  No products found
                </h3>
                <p className="text-wood-600">
                  Try adjusting your filters or search terms to find what you're
                  looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductDetail}
      />
    </div>
  );
}
