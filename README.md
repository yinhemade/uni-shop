# uni-shop
小程序商城-学习
**仅用作个人练手**
10.2 登录功能
黑马的接口无法使用，获取不了token值
注：新版--2023/2/16时，getUserProfile已无法获取头像和昵称 
处理：
1.用匿名方式登录，随手编个token，我这是直接用wx.login（）的code值直接当作是token使用
2.用button的open-type="chooseAvatar"，调用 @chooseavatar="事件"，方法会直接获得一个参数，可作为头像的src
3.获得昵称，可以在input里设置type="nickname" 然后用@input=“事件”一直获取输入，但是在模拟器短有问题，真机没问题
