import type { Route } from "../../../+types/features/products/pages/products-page";
import type { MetaFunction } from "@react-router/types";

export function meta(): MetaFunction {
  return [
    { title: "Products | ProductHunt Clone" },
    { naem: "description", content: "Browse all products" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    products: [],
  };
}

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
    </div>
  );
}
