import { Server } from 'https';

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');


var schema = buildSchema(`
  type Query {
    category(id: Int!) : Category
    categories(title: String) : [Category]
    listItems(label: String): [ListItems]
  }
  type Category {
    id: Int
    title: String
    label: String
  }
  type ListItems {
    label: String
    category: [Category!]!
  }
`);

var categoryList = [
  {
    id: 1,
    title: 'Depression',
    label: 'Thing, new'
    // ListItems: {
    //   label: ['Call a friend', 'New one']
    //   }
    },
  {
    id: 2,
    title: 'Anxiety',
    label: 'Breathe'
  },
  {
    id: 3,
    title: 'Nonsense',
    label: 'Eat'
  }
];

var getCategory = function(args) {
  var id= args.id;
  return categoryList.filter(category => {
    return category.id === id;
  })[0];
};

var getCategories = function(args) {
  if(args.title) {
    var title = args.title;
    return categoryList.filter(category => category.title === title);
  } else {
      return categoryList;
    }
  };
  var getListItems = function(args) {
    if(args.label) {
      var label = args.label;
      return categoryList.filter(label => category.label === label);
    } else {
      return categoryList;
    }
  };

var root = {
  category: getCategory,
  categories: getCategories,
  listItems: getListItems
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

export default Server;