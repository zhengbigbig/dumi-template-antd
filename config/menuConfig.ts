const antdPath = [
  'Button/index.md',
  'Layout/index.md',
]

module.exports = {
  // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  '/components': [
    {
      title: 'Ant Design 基础组件',
      children: antdPath
    }
  ],
  '/': [
    {
      title: '快速开始',
      path: '/quick-start'
    }
  ],
  '/quick-start': [
    {
      title: '快速开始',
      path: '/quick-start'
    }
  ],
  '/CHANGELOG': [
    {
      title: 'Changelog',
      path: '/CHANGELOG'
    }
  ]
}
