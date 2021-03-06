// 配置按需编译：设置编译范围为 html 文件，不过 html 文件中使用到的资源也会参与编译。
fis.set('project.files', '*.html');

// npm install [-g] fis3-hook-module
// 引入模块化开发插件，设置规范为 commonJs 规范。
fis.hook('commonjs');

// 设置组件库里面的 js 都是模块化 js.
fis.match('/components/**.js', {
    isMod: true
});

// 因为是纯前段项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
});
