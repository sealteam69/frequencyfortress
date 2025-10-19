/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://frequencyfortress.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 6.9,
  trailingSlash: true,
  exclude: [
    '/private/*',
    '/hidden',
    '/orgasm404*' 
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  }
};