/**封装的展示消息提示的方法
 * */
uni.$showMsg = function (title = '数据加载失败！', duration = 3500) {
	uni.showToast({
		title,
		duration,
		icon: 'none',
	})
}