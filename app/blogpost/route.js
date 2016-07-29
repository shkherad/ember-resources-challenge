import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      blogpost: null,
      comments: null
    };
  },

  model (params) {
    this.get('store').findRecord('list', params.lists_id);
  },
});
