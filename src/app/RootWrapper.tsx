"use client";

import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

/**
 *  RootWrapper
 * @param param0  children
 * @returns  React.ReactNode
 */
export default function RootWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  const queryClient = new QueryClient();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (process.env.NODE_ENV === "production") {
    console.error = () => {};
  }

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </RecoilRoot>
  );
}
