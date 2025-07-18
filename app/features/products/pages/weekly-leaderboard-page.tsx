import type { Route } from "../../../+types/features/products/pages/weekly-leaderboard-page";
import type { MetaFunction } from "@react-router/types";

export function meta({ params }: Route.MetaArgs): MetaFunction {
  return [
    {
      title: `Week ${params.week}, ${params.year} Leaderboard | ProductHunt Clone`,
    },
    {
      name: "description",
      content: `Top products of week ${params.week}, ${params.year}`,
    },
  ];
}

export function loader({ parmas }: Route.LoaderArgs) {
  return {
    year: parmas.year,
    week: parmas.week,
    products: [],
  };
}

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of week {loaderData.week}, {loaderData.year}
      </h1>
    </div>
  );
}
