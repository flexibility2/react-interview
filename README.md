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

1. useState
2. useEffect
3. useContext
4. useRef
5. useReducer
6. useTransition
7. useDeferredValue
8. useSyncExternalStore
9. useLayoutEffect
10. useId
11. useMemo
12. useCallback
13. useImperativeHandle: forwardRef

自定义 hook

```js
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}
function Form() {
  const name = useFormInput("");
  const handleSubmit = () => {
    console.log(name.value);
  };
  // input 里面通过解构，将value，onChange 传入 input，从而在useFormInput中实现双向绑定，内部自己管理状态
  return (
    <form onSubmit={handleSubmit}>
      <input {...name} />
      <button type="submit">提交</button>
    </form>
  );
}
```

## 样式方案

## 状态方案

## react 进阶

ref
forwardRef 封装组件库需要的
suspense
lazy
memo

泛型列表组件

使用 infer 定义类型

进阶版的 tsconfig

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```
