/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://frequencyfortress.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/private/*',
    '/hidden',
    '/orgasm404*' 
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://frequencyfortress.com/sitemap.xml']
  }
};