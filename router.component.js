const router = new VueRouter({
  routes: [
    { path: '/user/:id', name: 'user', component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: 'home', component: UserHome },
				
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'posts', component: UserPosts },

        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
      	{ path: '', redirect: '/user/:id/home'},

      	// UserHome will be rendered inside User's <router-view>
        // when /user/:id/* is matched
      	{ path: '*', redirect: '/user/:id/home'}
      ]
    }
  ]
})
