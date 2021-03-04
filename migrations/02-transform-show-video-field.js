module.exports = function(migration) {
  migration.transformEntries({
    contentType: 'blog_feed_section',
    from: [],
    to: ['show_video'],
    transformEntryForLocale: async(from, locale) => {
      return {
        show_video: false
      }
    }
  })
}