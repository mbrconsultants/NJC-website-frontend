import ErrorMain from "@/components/main/ErrorMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJC",
  description: "National Judiciary Council",
};
export default function NotFound() {
  return <ErrorMain />;
}
