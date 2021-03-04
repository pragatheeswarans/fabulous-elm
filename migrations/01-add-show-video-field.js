module.exports = function(migration) {
  const blogFeedSection = migration.editContentType('blog_feed_section');
  blogFeedSection.createField('show_video')
  .name('Show video')
  .type('Boolean');
}