module.exports = function(migration) {
  const post = migration.editContentType('post');
  post.createField('video_url')
  .name('Video URL')
  .type('Text');
}