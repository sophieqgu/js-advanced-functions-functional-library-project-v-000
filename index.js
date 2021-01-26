const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach( element =>
          callback(element);
        )
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            callback(element);
          }
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];
      if (Array.isArray(collection)) {
        collection.forEach( element =>
          newCollection.push(callback(element));
        )
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            newCollection.push(callback(element));
          }
        }
      }
      return newCollection;
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
