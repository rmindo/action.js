// action.view( 'header', function( get ) {

// 	get.this.render({ title: 'Restaurants' });

// });



// action.view( 'content', function( get ) {

// 	var node = get.this;


// 	node.append( get.element('restaurants').foreach( restaurants, function( node, index ) {

// 		node.id = 'item-' + index;

// 	}));

// 	node.prepend( get.node['test'] );
// });



// action.view( 'footer', function( get ) {

// 	get.node['footer'].render({ year: '2017' });

// });