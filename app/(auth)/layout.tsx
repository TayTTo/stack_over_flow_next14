import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 with Clerk</title>
      </head>
      {/* <ClerkProvider> */}
      <body>{children}</body>
      {/* </ClerkProvider> */}
    </html>
  );
}
