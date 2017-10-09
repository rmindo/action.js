var action = (function() {

	var temp = {};


	temp.loop = function( id, data, callback ) {

		var con = document.getElementById(id);


		for( var index = 0; index < data.length; index++ ) {


			var node = con.children[0].cloneNode();

			var test = {

				node: node,

				index: index,

				render: function( node ) {

					node.innerHTML = temp.render( con.children[0], data[index] );	

					con.appendChild( node );
				}
			};
		
			node.removeAttribute('loop');


			callback( test );
		}

		con.children[0].remove();

	};



	temp.render = function( template, data ) {


		return template.innerHTML.replace( new RegExp( template.textContent.match( /(\{[a-z]+\})/g ).join('|'), 'g' ),  function( matched ) {

			return data[matched.match( /([a-z]+)/g )];
		});
	};


	return temp;

})();
