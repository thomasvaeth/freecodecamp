var Accordion = ReactBootstrap.Accordion;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var ListGroup = ReactBootstrap.ListGroup;
var Panel = ReactBootstrap.Panel;

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

var RecipeBook = React.createClass({
	render: function() {
		return (
			<Accordion>
				{this.props.data}
			</Accordion>
		);
	}
});

var IngredientsList = React.createClass({
	render: function() {
		var ingredientsList = this.props.ingredients.map(function(ingredient, idx) {
			return (
				<ListGroupItem key={idx}>
					{ingredient}
				</ListGroupItem>
			);
		});
		return (
			<ListGroup>
				{ingredientsList}
			</ListGroup>
		);
	}
});

var Recipe = React.createClass({
	render: function() {
		return (
			<IngredientsList ingredients={this.props.ingredients} />
		);
	}
});

function renderRecipes() {
	localStorage.setItem('recipeBook', JSON.stringify(recipes));
	var recipeArr = [];
	recipes.forEach(function(recipe, idx) {
		recipeArr.push(
			<Panel header={recipe.title} eventKey={idx}>
				<Recipe ingredients={recipe.ingredients} index={idx} />
			</Panel>
		);
	});
	ReactDOM.render(<RecipeBook data={recipeArr} />, document.getElementById('freecodecamp'));
}

ReactDOM.render(<App />, document.getElementById('freecodecamp'));
renderRecipes();
