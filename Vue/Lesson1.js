/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-06-24 22:52:12
 * @version $Id$
 */
var app = new Vue({
	el: '#app',
	data: {
		message: "hello Vue"
	}
})

var app2 = new Vue({
	el: "#app2",
	data: {
		message: "页面加载于" + new Date().toLocaleString()
	}
})

var app3 = new Vue({
	el: "#app3",
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: "#app4",
	data: {
		todos: [{
			text: "学习Vue"
		}, {
			text: "加油学习Vue"
		}, {
			text: "我一定是可以的！！"
		}]
	}
})


var app5 = new Vue({
	el: "#app5",
	data: {
		message: "Vue Hello!!"
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: "#app6",
	data: {
		message: "Hello Vue"
	}
})

Vue.component('todo-item', {
	//todo-item组件现在接受一个prop类似一个自定义特性这个prop命名为todo

	props: ["todo"],
	template: '<li>{{ todo.text}}</li>'
})

var app7 = new Vue({
	el: '#app7',
	data: {
		groceryList: [{
			id: 0,
			text: '蔬菜'
		}, {
			id: 1,
			text: '奶酪'
		}, {
			id: 2,
			text: '随便其它什么人吃的东西'
		}]
	}
})