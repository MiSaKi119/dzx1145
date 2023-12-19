module.exports = {
	productionSourceMap: false, //  生产环境的构造
	publicPath: './',   // 根目录
	outputDir: 'dist', // 打包输出文件地址
	assetsDir: 'assets',// 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	devServer: {  // dev环境下，webpack-dev-server 相关配置
			port: 8888,    //开发运行时的端口
			host: '0.0.0.0',  // 开发运行时域名，设置成'0.0.0.0',在同一个局域网下，如果你的项目在运行，同时可以通过你的http://ip:port/...访问你的项目
			https: false,  // 是否启用 https
			open: true,   // npm run serve 时是否直接打开浏览器
					//如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
					//配置代理
					//默认值是一个字符串或对象string|Object
		// 设置eslint校验错误信息,显示,warning信息不显示
			overlay: {
				warnings: false,
				errors: true
			},

			 proxy: {
				[process.env.VUE_APP_IDENT]:{
					 changeOrigin:true, // 配置代理默认开启target方式
					 secure:false, // 如果是http接口，需要配置该参数
					 target:PROXY_API_BASE_URL,
						pathRewrite:{
							["^" + process.env.VUE_APP_IDENT]:""
						}
				},
				'/webapps':{
					target:PROXY_BASE_URL,
					pathRewrite:{
						"^/webapps":"/webapps"
					}
				},
				'/javapubzy':{
					target:PROXY_BASE_URL,
					pathRewrite:{
						"^/javapubzy":"/javapubzy"
					}
				},
				'/arcgis':{
					target:PROXY_BASE_URL,
					pathRewrite:{
						"^/arcgis":"/arcgis"
					}
				}

				before:app=>{}
	},
	// 其他配置
	...
