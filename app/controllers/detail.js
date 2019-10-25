import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      const newFavorite = this.store.createRecord('favorite', {
        title: this.get('model.Title'),
        imdbID: this.get('model.id')
      });
      newFavorite.save();
    }
  }
});
