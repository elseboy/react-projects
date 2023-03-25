# react-projects

#### Hooks

##### useState

   * useState详解：
   * useState有两个状态，一个n，另外一个是setN
   * setN是修改数据n的，将修改后的n存入state
   * steN修改数据后一定会发生re-render
   * useState一定会从state读取最新的n值
   * 每个组件都有自己的数据state
   * 多个useState setN的时候一定要传函数，里面可以拿到旧的state值再去操作，state hook是重写所有的old state value，也就是说直接setN的话所有state hook都会发生re-render

```jsx
setCount(prevCount => prevCount + 1)
```

##### useEffect

* useEffect详解：
* useEffect()有两个参数，第一个参数是要执行的函数，第二个参数是一个依赖项数组，可以为空也可以是其他state
* strings, numbers, booleans 都是基本数据类型 (primitive data type), 但如果第二个数组参数是object的时候要注意可以用useMemo封装一下或者把obejct state里面的所有primitive拿出来放进数组，state.name, state.age...
* 要注意在useEffect hook里面创建cleaing-up function来保证程序不会出现前后不一的情况, 比如设置一个true跟false去保证打断的同时不会去更新state

```jsx
function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let isCancled = false;
    fetch("https://course-api.com/react-tours-project")
      .then((response) => response.json())
      .then((data) => {
        // make sure it's not cancled, then set data
        if (!isCancled) {
          setNumber(1000);
        }
      });

    // cleaning-up function
    return () => {
      console.log("just cancled!");
      isCancled = true;
    };
  }, [number]);
}
```

或者用更加专业的 javascript 里面的 AbortController(), 在fetch的时候可以带个singal过去，例如：

```jsx
function App() {
  const [number, setNumber] = useState(0);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((response) => response.json())
      .then((data) => {
        setNumber(1000);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("just cancled!");
        } else {
          // todo: handle error
        }
      });

    // cleaning-up function
    return () => {
      controller.abort();
    };
  }, [number]);
}
```
worng