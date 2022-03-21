const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/register',
        destination: '/preregister',
        permanent: false,
      }
    ]
  },
})
