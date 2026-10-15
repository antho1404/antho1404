import Link from "next/link";

export default function Back() {
  return (
    <Link href="/" className="flex items-center mb-4">
      Anthony Estebe
      <span className="text-sm text-muted-foreground">- @antho1404</span>
    </Link>
  );
}
