import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'imdbID',
    keyForAttribute(key) {
        return key;
    },
    normalizeResponse(store, primaryModelClass, payload) {
        payload.data = payload.Search;
        payload.data.forEach(item => {
            item.type = primaryModelClass.modelName;
            item.attributes = {
                Title: item.Title,
                Year: item.Year,
                Type: item.Type,
                Poster: item.Poster
            };
            delete item.Title;
            delete item.Year,
            delete item.Type,
            delete item.Poster
        });

        delete payload.Search;
        return this._super(...arguments);
    }
});
