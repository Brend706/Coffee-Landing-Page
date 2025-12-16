import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";
import HomePage from "~/content/home/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coffee Landing Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

/*export default function Home() {
  return <Welcome />;
}*/

export default function HomeRoute() {
  return <HomePage />;
}
