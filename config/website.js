const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Jimmy Cook - Software Developer', // Navigation and Site Title
  siteTitleAlt: 'Jimmy Cook', // Alternative Site title for SEO
  siteTitleShort: 'Jimmy', // short_name for manifest
  siteHeadline: 'Creating marvelous apps & websites', // Headline for schema.org JSONLD
  siteUrl: 'https://wjimmycook.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Software Developer',
  author: 'Jimmy Cook', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-109623725-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
