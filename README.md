# react-interview

## react18 有哪些更新

## react 组件异常如何捕获

## react 生命周期，react18 有哪些更新

- 挂载
- 更新
- 卸载
- 错误处理
- react18 新增的并发特性对生命周期的影响
- 自动批处理
- 新 hooks

## 基础概念

声明式 UI，UI = render(state)

- 声明式，定义状态，修改状态，将状态写入 jsx
- 组件化
- 单向数据流。 Vue 是 MVVM
- 虚拟 DOM
- JSX 支持

### 组件化

```jsx
// 类组件
class Wellcome extends React.Component{
    constructor(){
        this.state = {};
    }
    render(){
        return <div>123<div>
    }
}
// 函数组件
function Wellcome(props){
    const state = useState({});
    return <div>123<div>
}
```

### 属性

### hooks

## 样式方案

## 状态方案

## react 进阶

ref
forwardRef 封装组件库需要的
suspense
lazy
memo
