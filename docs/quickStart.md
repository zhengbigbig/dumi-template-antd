# 快速开始

## hdd

文档地址：https://doc.hunliji.com

基本 antd 4.0 二次封装的业务组件库。

文档请配合 antd 文档使用 [Ant Design](https://ant.design/components/overview-cn/)

## 使用方法

### 安装

以 yarn 为例

```sh
yarn add hdd
```

### 配置

.bablerc

### 使用

1、 使用包内的 `ConfigProvider` 组件对应用根节点组件进行包裹，修改全局组件命名空间为 `hdd`

index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ConfigProvider } from 'hdd'

ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.querySelect('#root')
)
```

2、这样引入组件即可，会按需加载基于 antd 定制过的组件

```js
import React from 'react'
import { Button } from 'hdd'

export default () => {
  return <Button type="primary">点我</Button>
}
```

3、此外 `hdd` 必须全量引入定制过的 `antd` 样式。

```js
import 'hdd/esm/styles/index.css'
```

PS：如果项目中已经有 antd 3.x 版本，请引入 hdd 所有组件样式。

```js
import 'hdd/esm/styles/styleWithoutGlobal.css'
```

## 如何开发 hdd

```sh
git clone https://github.com/zhengbigbig/hdd-dumi.git

yarn

# 启动
yarn start

# 构建
yarn build
```

## 开发官网

在 src 文件中，修改组件，编写组件文档及单元测试。

# 发包流程

1. 提交代码

```shell
# 首先确认要提交的文件
git add .

# 运行提交命令
# 无add时，需要优化
yarn commit
# 或者
npm run commit

后续步骤同正常git代码提交流程

```

2. 发包

```shell
# 升级版本
yarn release
# 或者
npm run release
```
