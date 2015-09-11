fis.hook('commonjs', {
  // 配置项
});

fis.match('::package', {
  postpackager: fis.plugin('loader', {})
});
/**
 * 模块化相关
 * */
fis.match('/js/**.js', {
    id: '$1',
    isMod: true
})
fis.match('/components/**/*.js', {
    isMod: true
})
fis.config.set('livereload.port', 8133);