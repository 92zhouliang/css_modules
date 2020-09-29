git clone  
npm i
npm start

1、使用 css module不用担心类名重复。可以舍弃掉 BEM 那种很长的类名，在保证基本语意化的前提下采取尽量简单的类名。

2、建议类名为驼峰，因为 js 里的 dot 取值形式对驼峰友好，而对styles.btn-login 会报错。

3、也可以在 react项目 中用 classname 库提高书写效率（很适合搭配 state / props ）。

```
# classname 用法
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
```
4、也可以用 react-css-modules 自动加 styles 前缀，避免使用很多styles.xx

```
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './table.css';

class Table extends React.Component {
    render () {
        return <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}

export default CSSModules(Table, styles);
```

食用方法：

1.webpack 加载器css-loader开启css-module

```
{
            loader: "css-loader?modules",
            options: {
                modules: {
                    localIdentName: "[path][name]-[local]-[hash:5]"
                }
             }
          },
```

2.通过 import "xxx.less"方式导入样式即为全局方位样式；

3.import xxx from "xxx.less"，产生作用域，不会产生类名、样式冲突；

4.在样式文件中也可通过:global方式添加全局样式

```
:global {  //定义多个全局样式
    body{
        font-size: 40px
    }
    div{
        border-radius: .5px;
    }
}

:global(.text) { //定义单个全局样式
    font-size: 16px;
  }
```

5.样式的复用即组件的复用（要不要使用scoped？）
