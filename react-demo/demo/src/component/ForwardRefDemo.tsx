import React, {
  useEffect,
  useId,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

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

// 带 useImperativeHandle 的 Input 组件
interface CustomInputHandle {
  focus: () => void;
  getValue: () => string | undefined;
}

const ImperativeInput = forwardRef<CustomInputHandle, InputProps>(
  (props, ref) => {
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      getValue: () => {
        return inputRef.current?.value;
      },
    }));

    return (
      <div style={{ display: "flex", marginTop: 16 }}>
        <label htmlFor={id}>imperative input</label>
        <input id={id} ref={inputRef} />
      </div>
    );
  }
);

export const ForwardRefDemo = () => {
  const ref = useRef(null);
  const imperativeRef = useRef<CustomInputHandle>(null);

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
      {/* 新增示例 */}
      <div style={{ marginTop: 24 }}>
        <ImperativeInput ref={imperativeRef} />
        <button
          onClick={() => imperativeRef.current?.focus()}
          style={{ marginLeft: 8 }}
        >
          Focus Imperative Input
        </button>
        <button
          onClick={() => {
            alert(imperativeRef.current?.getValue());
          }}
          style={{ marginLeft: 8 }}
        >
          Get Value
        </button>
      </div>
    </>
  );
};
