var app = new Vue({
	el: '#order-center',
	data: {
		token: '',
		isLogin: false,
		orderList: []
	},
	methods: {
		getOrderList: function () {
			//this.getToken()
			debugger
			var token = getCookie().token
			console.log(token)
			var _this = this
			axios.post('http://dou.fudayiliao.com/order/GetOrderList', {
					Token: token
				}, {
					headers: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				})
				.then(function (res) {
					console.log(res.data.Data)
					_this.orderList = res.data.Data
				})
		},
		timeString: function (string) {
			var aa = new Date(parseInt(string.substr(6, 19)))
			var timeYear = new Date(parseInt(string.substr(6, 19))).getFullYear();
			var timeMouth = new Date(parseInt(string.substr(6, 19))).getMonth();
			var timeDate = new Date(parseInt(string.substr(6, 19))).getDate();
			var timeHours = new Date(parseInt(string.substr(6, 19))).getHours();
			var timeMinutes = new Date(parseInt(string.substr(6, 19))).getMinutes();
			var timeSeconds = new Date(parseInt(string.substr(6, 19))).getSeconds();
			var time = this.checkTen(timeYear) + "-" + this.checkTen(timeMouth) + "-" + this.checkTen(timeDate) + "   " + this.checkTen(timeHours) + ":" + this.checkTen(timeMinutes) + ":" + this.checkTen(timeSeconds)
			return time
		},
		checkTen: function (num) {
			if (num < 10) {
				num = "0" + num
			}
			return num
		}

	},
	mounted: function () {
		this.getOrderList()

	}
})
