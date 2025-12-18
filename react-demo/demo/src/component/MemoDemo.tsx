import { memo, useEffect, useState } from "react";

// memo : 只有当 props 发生变化时，组件才会重新渲染，否则会复用上一次的渲染结果。
export const Header = memo(() => {
  useEffect(() => {
    console.log("Header render");
  });
  return <div>Header</div>;
});

interface FooterProps {
  count: number;
}

export const Footer: React.FC<FooterProps> = ({ count }) => {
  return <div>Footter: {count}</div>;
};

export const MemoDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header></Header>
      <Footer count={count}></Footer>
      <button onClick={() => setCount((c) => c + 1)}> footercount + </button>
      <button onClick={() => setCount((c) => c - 1)}> footercount - </button>
    </div>
  );
};
