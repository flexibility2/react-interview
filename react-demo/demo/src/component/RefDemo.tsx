import { useEffect, useRef } from "react";

interface Refs {
  c1?: HTMLHeadingElement | null;
  c2?: HTMLHeadingElement | null;
}

export const RefDemo = () => {
  const refs = useRef<Refs>({});
  useEffect(() => {
    console.log(refs.current);
    Object.values(refs.current).forEach((node) => {
      if (node) node.style.color = "red";
    });
  });
  return (
    <>
      <div
        ref={(node) => {
          refs.current.c1 = node;
        }}
      >
        RefDemo1
      </div>
      <div
        ref={(node) => {
          refs.current.c2 = node;
        }}
      >
        RefDemo2
      </div>
    </>
  );
};
