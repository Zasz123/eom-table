import { useMemo } from "react";
import { useRouter } from "next/router";

export default function useUrlParams() {
  const router = useRouter();

  const page = useMemo(
    () => Number(router.query.page) || undefined,
    [router.query.page]
  );

  return {
    page,
  };
}
