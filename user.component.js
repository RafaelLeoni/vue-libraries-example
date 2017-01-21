const User = {
	template: `
		<div class="user">
      <h2>User {{ $route.params.id }}</h2>

      <ul class="tab">
				<li @click="changePath('/home')">Home</li>
				<li @click="changePath('/profile')">Profile</li>
				<li @click="changePath('/posts')">Posts</li>
			</ul>
			<br>

      <router-view></router-view>
    </div>
	`,
	data: function() {
		return {
			currentPath: router.currentRoute.path
		}
	},
	watch: {
    '$route.params.id': 'fetchData'
  },
	methods: {
		changePath: function(tab) {
			router.replace({path: this.currentPath.concat(tab)})
		},
		fetchData() {
			this.currentPath = router.currentRoute.path
		}
	}
}