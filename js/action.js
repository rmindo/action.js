var action = (function() {

	var factory = {};


	var helpers = {


		this: function() {

			return document.getElementById( helpers.target );
		},


		parent: function() {

			return document.getElementById( factory.parent );
		},


		append: function( node ) {

			this.parent().appendChild( node );
		},



		prepend: function( node ) {

			this.parent().insertBefore( node, this.parent().children[0] );
		},


		render: function( node, data ) {

			if( node.nodeType === 1 ) {

				return this.content( data );
			}
		},


		create: function( tag, callback ) {

			var node = document.createElement( tag );

			node.id = helpers.target;


			if( callback ) {
				
				callback( node );
			}

			return node;
		},



		content: function( data ) {

			var template = this.this().children[0];

			return template.innerHTML.replace( new RegExp( template.textContent.replace(/\s/g, '').match( /(\{[a-z]+\})/g ).join('|'), 'g' ),  function( matched ) {

				return data[matched.match( /([a-z]+)/g )];
			});
		},



		foreach: function( callback ) {

			var out = '',
				dom = this.this();


			window[dom.getAttribute('foreach')].forEach( function( item, index ) {

				var node = dom.children[0].cloneNode();

				node.innerHTML = helpers.content( item );


				callback({

					node: node,

					index: index
				});


				out += node.outerHTML;
			});

			dom.children[0].remove();

			dom.removeAttribute('foreach');


			return out;
		}

	};




	factory.view = function( view, callback ) {



		if( typeof view == 'string' ) {

			helpers.target = view;

			var view = document.getElementById(view);
		}



		if( callback ) {

			if( view == null ) {

				var view = callback( helpers );

				document.getElementById( helpers.target ).innerHTML = view;

			} else {

				if( view['parentElement'].id === factory.parent ) {

					view.innerHTML = callback( helpers );
				}
			}
		}

	},




	factory.model = function( arg ) {


	},



	factory.controller = function( con, callback ) {

		helpers.target = con;
		factory.parent = con;


		return callback( helpers );
	};



	return factory;

})();
