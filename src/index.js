import React, { Component } from "react";
import ReactDom from "react-dom";

import "./stylesheets/global.less";// 直接导入全局样式
import scoped from "./stylesheets/scoped.css"; //产生作用域，局部样式

import "./stylesheets/another-global.less";
import another_scoped from "./stylesheets/another-scoped.less";
class App extends Component {
  render() {
    return (
      <div>
        <section className={scoped.container}>
          <h1 className={scoped.title}>{`scoped和another_scoped中相同类名container和title互不影响`}</h1>
        </section>
        <section className={another_scoped.container}>
          <h1 className={another_scoped.title}>another_scoped</h1>
        </section>
        <h1 className="text">{`import "./stylesheets/global.less",当全局样式处理，样式类名等不做hash计算`}</h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
