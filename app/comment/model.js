import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  comment_body: DS.attr('string'),
  post: DS.belongsTo('post'),
});
