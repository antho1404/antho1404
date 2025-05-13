import React from "react";

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="article-page">
      {children}
    </div>
  );
}