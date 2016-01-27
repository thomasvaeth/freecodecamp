var Accordion = ReactBootstrap.Accordion;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Modal = ReactBootstrap.Modal;
var Panel = ReactBootstrap.Panel;

var recipes = typeof localStorage['recipeBook'] !== 'undefined' ? JSON.parse(localStorage['recipeBook']) : [
	{title: 'Chicken Quesadillas', ingredients: ['Chicken Breast', 'Shredded Cheddar Cheese', 'Shredded Monterey Jack Cheese', 'Flour Tortillas']}, 
  {title: 'Cereal', ingredients: ['Cinnamon Toast Crunch', 'Milk']}, 
  {title: 'Baked Ziti', ingredients: ['Ziti Pasta', 'Tomato Sauce', 'Mozzarella Cheese', 'Parmesan Cheese']}
  ], recipeTitle = '', recipeIngredients = [];


var App = React.createClass({
	getInitialState: function() {
		return {modal: false}
	},
	openRecipe: function() {
		this.setState({modal: true});
	},
	closeRecipe: function() {
		recipeTitle = '';
		recipeIngredients = [];
		this.setState({modal: false});
	},
	addRecipe: function() {
		var title = document.getElementById('title').value;
		var ingredients = document.getElementById('ingredients').value.split(',');
		// Using ES2015 to push object to the array!
		recipes.push({title, ingredients});
		renderRecipes();
		this.closeRecipe();
	},
  render: function() {
    return (
    	<div>
    		<Button bsStyle="primary" id="modal" onClick={this.openRecipe}>Add Recipe</Button>
    		<Modal show={this.state.modal} onHide={this.closeRecipe}>
    			<Modal.Header>
    				<Modal.Title>Add/Edit Recipe</Modal.Title>
    			</Modal.Header>
    			<Modal.Body>
    				<form>
    					<Input type="text" id="title" label="Name" placeholder="Name" />
    					<Input type="textarea" id="ingredients" label="Ingredients" placeholder="Ingredients seperated by commas" />
    				</form>
    			</Modal.Body>
    			<Modal.Footer>
    				<Button bsStyle="success" onClick={this.addRecipe}>Add/Edit</Button>
    				<Button onClick={this.closeRecipe}>Close</Button>
    			</Modal.Footer>
    		</Modal>
    	</div>
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
	editRecipe: function() {
		recipeTitle = this.props.title;
		recipeIngredients = this.props.ingredients;
		document.getElementById('modal').click();
	},
	removeRecipe: function() {
		recipes.splice(this.props.index, 1);
		renderRecipes();
	},
	render: function() {
		return (
			<div>
				<IngredientsList ingredients={this.props.ingredients} />
				<ButtonToolbar>
					<Button bsStyle="danger" onClick={this.removeRecipe}>Delete</Button>
					<Button bsStyle="info" onClick={this.editRecipe}>Edit</Button>
				</ButtonToolbar>
			</div>
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

ReactDOM.render(<App />, document.getElementById('recipe'));
renderRecipes();
