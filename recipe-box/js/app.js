var Accordion = ReactBootstrap.Accordion;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var Col = ReactBootstrap.Col;
var Input = ReactBootstrap.Input;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Modal = ReactBootstrap.Modal;
var Panel = ReactBootstrap.Panel;
var Row = ReactBootstrap.Row;

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
		// I need to ask Quincy/FCC about this small section because DOM wasn't working.
		if (document.getElementById('title') && document.getElementById('ingredients')) {
      $('#title').val(recipeTitle);
      $('#ingredients').val(recipeIngredients);
      if (recipeTitle !== '') {
      	$('#modalTitle').text('Edit Recipe');
      	$('#modalButton').text('Edit');
      }
    } else {
    	window.requestAnimationFrame(this.openRecipe);
    }
	},
	closeRecipe: function() {
		recipeTitle = '';
		recipeIngredients = [];
		this.setState({modal: false});
	},
	addRecipe: function() {
		var title = document.getElementById('title').value;
		var ingredients = document.getElementById('ingredients').value.split(',');
		var previousRecipe = false;
		recipes.forEach(function(recipe) {
			if (recipe.title === title) {
				recipe.ingredients = ingredients;
				previousRecipe = true;
			}
		}); 
		// Using ES2015 to push object to the array!
		if (!previousRecipe) recipes.push({title, ingredients});
		renderRecipes();
		this.closeRecipe();
	},
  render: function() {
    return (
    	<div>
    		<Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
    			<Button bsStyle="primary" id="modal" onClick={this.openRecipe}>Add Recipe</Button>
    		</Col>
    		<Modal bsSize="sm" show={this.state.modal} onHide={this.closeRecipe}>
    			<Modal.Header closeButton="true">
    				<Modal.Title id="modalTitle">Add Recipe</Modal.Title>
    			</Modal.Header>
    			<Modal.Body>
    				<form>
    					<Input type="text" id="title" label="Name" placeholder="Name" autoFocus="true" />
    					<Input type="textarea" rows="3" id="ingredients" label="Ingredients" placeholder="Ingredients seperated by commas" />
    				</form>
    			</Modal.Body>
    			<Modal.Footer>
    				<Button id="modalButton" bsStyle="success" onClick={this.addRecipe}>Add</Button>
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
			<Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
				<h1>Recipe Box</h1>
				<Accordion>
					{this.props.data}
				</Accordion>
			</Col>
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
				<Recipe index={idx} title={recipe.title} ingredients={recipe.ingredients} />
			</Panel>
		);
	});
	ReactDOM.render(<RecipeBook data={recipeArr} />, document.getElementById('freecodecamp'));
}

ReactDOM.render(<App />, document.getElementById('recipe'));
renderRecipes();
