import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      const newFavorite = this.store.createRecord('favorite', {
<<<<<<< HEAD
<<<<<<< HEAD
        title: this.get('model.      movie.Title'),
        imdbID: this.get('model.debuggvie.id')
      });      newFavorite.save()
        .then(() => {
          this.set('model.favorite', newFavorite)
        });
    },
    unsave() {
      this.get('model.favorite')
        .destroyRecord()
        .then(() => {
          this.set('model.favorite', undefined);
        });
=======
=======
>>>>>>> f56c37bc0df74f166cda642a685f1a0b227545f3
        title: this.get('model.Title'),
        imdbID: this.get('model.id')
      });
      newFavorite.save();
    }
  }
});
<<<<<<< HEAD
>>>>>>> f56c37bc0df74f166cda642a685f1a0b227545f3
=======
>>>>>>> f56c37bc0df74f166cda642a685f1a0b227545f3
