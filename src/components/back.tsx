import Link from "next/link";

export default function Back() {
  return (
    <Link href="/" className="flex items-center mb-4">
      <div className="name-header transition-all" style={{ viewTransitionName: 'author-name' }}>
        Anthony Estebe
        <span className="text-sm text-muted-foreground">- @antho1404</span>
      </div>
    </Link>
  );
}
