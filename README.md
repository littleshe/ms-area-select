# avalon2-地区选择器

[示例](https://littleshe.github.io/ms-area-select/)

数据来源：[]()

原格式为xml，写了个工具转成json格式

```
node tool/parse.js
```

json格式如下：

```
{	
	"name": "北京",
	"code": "1",
	"children": [
		{	
			"name": "海淀",
			"code": "11"
		}
		...
	]
}
```