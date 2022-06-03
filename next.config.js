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
      },
      {
        source: '/prospectus',
        destination: '/MHHacks_v0_Sponsorship_Prospectus_20220322.pdf',
        permanent: false
      }
    ]
  },
})
