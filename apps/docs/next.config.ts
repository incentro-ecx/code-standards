import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  mdxOptions: {
    format: "mdx",
  },
});

export default withNextra({
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  typescript: {
    // We run type checking separately in CI/CD pipelines.
    ignoreBuildErrors: true,
  },
});
