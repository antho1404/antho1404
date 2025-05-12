import Link from "next/link";

export default function Back() {
  return (
    <Link href="/">
      Anthony Estebe
      <span className="text-sm text-muted-foreground">- @antho1404</span>
    </Link>
  );
}
