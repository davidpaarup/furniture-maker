import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  suggestedAction?: string;
}

export default function PlaceholderPage({
  title,
  description,
  suggestedAction = "Continue prompting to fill in this page content",
}: PlaceholderPageProps) {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-wood-200">
            <CardContent className="p-12 space-y-6">
              <div className="w-16 h-16 bg-wood-100 rounded-full mx-auto flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-wood-600" />
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-wood-900">{title}</h1>
                <p className="text-wood-600 leading-relaxed">{description}</p>
              </div>

              <div className="bg-wood-50 p-4 rounded-lg border border-wood-200">
                <p className="text-sm text-wood-700">
                  <span className="font-medium">Note:</span> {suggestedAction}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-wood-600 text-wood-600 hover:bg-wood-50"
                >
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button className="bg-wood-600 hover:bg-wood-700">
                  Request Page Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
