module.exports = function(migration) {
  const blogFeedSection = migration.editContentType('selected_posts_section');
  blogFeedSection.createField('show_video')
  .name('Show video')
  .type('Boolean');
}