var recipes = typeof localStorage['recipeBook'] !== 'undefined' ? JSON.parse(localStorage['recipeBook']) : [
	{title: 'Chicken Quesadillas', ingredients: ['Chicken Breast', 'Shredded Cheddar Cheese', 'Shredded Monterey Jack Cheese', 'Flour Tortillas']}, 
  {title: 'Cereal', ingredients: ['Cinnamon Toast Crunch', 'Milk']}, 
  {title: 'Baked Ziti', ingredients: ['Ziti Pasta', 'Tomato Sauce', 'Mozzarella Cheese', 'Parmesan Cheese']}
  ], recipeTitle = '', recipeIngredients = [];


var App = React.createClass({
  render: function() {
    return (
    	<h1>Hello world!</h1>
    );
  }
});

// var Recipe = React.createClass({
// 	render: function() {
// 		return (

// 		);
// 	}
// });

// var RecipeBook = React.createClass({
// 	render: function() {
// 		return (

// 		);
// 	}
// });

ReactDOM.render(<App />, document.getElementById('freecodecamp'));
