import { Suspense } from "react";
import { screens } from "@/screens/manifest";
import ViewerLayout from "./components/ViewerLayout";

export default async function ViewerPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;

  return (
    <Suspense>
      <ViewerLayout initialId={id ?? ""} screens={screens} />
    </Suspense>
  );
}
