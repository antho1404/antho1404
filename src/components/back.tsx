import { unstable_ViewTransition as ViewTransition } from "react";
import Link from "next/link";

export default function Back() {
  return (
    <ViewTransition name="author-name">
      <Link href="/" className="flex items-center mb-4">
        Anthony Estebe
        <span className="text-sm text-muted-foreground">- @antho1404</span>
      </Link>
    </ViewTransition>
  );
}
