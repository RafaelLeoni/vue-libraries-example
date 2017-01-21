const UserHome = { 
	template: `
		<div>
			<h2>Home</h2>
			<button @click="buscar">Buscar</button>
			<p>{{nome}} {{sobrenome}}</p>
		</div>
	`,
	data: function() {
		return {
			nome: '',
			sobrenome: ''
		}
	},
	methods: {
		buscar: function() {
			var self = this
			this.$http.get('http://localhost:3000/nomes').then(
			  // success callback
				(response) => {
					let obj = JSON.parse(response.body)[0]
					self.nome = obj.nome
					self.sobrenome = obj.sobrenome
			  },
			  // error callback
			  (response) => {
			   	console.log(response)
			  }
		  );
		}
	},
	head: {
		title: {
      inner: 'User home page'
    },
    meta: [
      { name: 'description', content: 'User home page', id: 'desc' }
     ]
	}
}