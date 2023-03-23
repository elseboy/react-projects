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
setCount(prevCount => prevCount +1)
```

