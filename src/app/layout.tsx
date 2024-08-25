import React from "react";
import { Providers } from "@/store/providers";
import MyApp from "./app";

export const metadata = {
  title: "Modernize Main Demo",
  description: "Modernize Main kit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <MyApp>{children}</MyApp>
        </Providers>
      </body>
    </html>
  );
}
