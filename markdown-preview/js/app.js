var App = React.createClass({
  render: function() {
    return (
    	<InputDisplay />
    );
  }
});



var InputDisplay = React.createClass({
	getInitialState: function() {
		return {input: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](http://freecodecamp.com/hermanfassett)*'};
	},
	render: function() {
		return (
			<div className="row">
				<div className="small-6 columns">
					<h1>Hello!</h1>
				</div>
				<div className="small-6 columns">
					<h2>World!</h2>
				</div>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('freecodecamp'));
