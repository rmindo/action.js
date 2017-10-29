action.model( 'animate', function( model ) {


	var move = action.module('animation');




	return move;
});



action.model( 'DOM', function( model ) {



	return model.createElements( {


		header: {

			tag: 'header',

			node: function( node ) {

				node.style.border = '1px solid #000';
				node.style.opacity = 0.04;

				node.innerHTML = '<h1>{title} {list}</h1>';

				node.animate({
					color: 'red',
					// width: '500px',
					// height: '500px',
					// marginTop: '100px',
					width: {
						value: 300,
						duration: 1,
					},
					height: {
						value: 500,
						duration: 100,
					},
					opacity: {
						value: 0.5,
						duration: 2
					},
					marginTop: {
						value: 100,
						duration: 1,
					},
					marginLeft: {
						value: 100,
						duration: 1,
					}

				}, 1 );

			}
		},


		footer: {

			tag: 'footer',

			node: function( node ) {

				node.innerHTML = '<p>Copyright &copy; {year}</p>';
			}
		},


		content: {

			tag: 'main',

			node: function( node ) {

				node.className = 'text';
			}
		},


		category: {

			tag: 'h3',

			node: function( node ) {

				node.innerHTML = '{category}';
			}
		},


	});

});
