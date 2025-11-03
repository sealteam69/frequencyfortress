/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://frequencyfortress.com/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: false,
  exclude: [
    '/private/*',
    '/hidden',
    '/orgasm404',
    '/orgasm404-2',
    '/orgasm404-3', 
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  }
};