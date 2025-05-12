import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => {
      const className = "underline underline-offset-4 text-primary";
      if (href?.startsWith("/")) {
        return (
          <Link href={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    },
    ...components,
  };
}
