import React, { useEffect, useId, useRef } from "react";

interface InputProps {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const id = useId();
  return (
    <div style={{ display: "flex" }}>
      <label htmlFor={id}>children input</label>
      <input id={id} ref={ref}></input>
    </div>
  );
});

export const ForwardRefDemo = () => {
  const ref = useRef(null);
  useEffect(() => {
    // 在父组件方法子组件的ref
    console.log("childINPUT ref: ", ref);
  });
  return (
    <>
      <div>
        FowardRef Demo
        <Input ref={ref}></Input>
      </div>
    </>
  );
};
