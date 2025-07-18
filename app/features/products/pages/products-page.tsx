import { redirect } from "react-router";

export function loader() {
  return redirect("/products/leaderboards");
  // json 파일 생성 가능
  // return Response.json({hello: "world"});
}
