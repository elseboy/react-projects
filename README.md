# react-projects

#### Hooks



#### useState

   * `useState`详解：
   * `useState`有两个状态，一个`n`，另外一个是`setN`
   * `setN`是修改数据n的，将修改后的`n`存入`state`
   * `steN`修改数据后一定会发生`re-render`
   * `useState`一定会从`state`读取最新的n值
   * 每个组件都有自己的数据`state`
   * 多个`useState setN`的时候一定要传函数，里面可以拿到旧的`state`值再去操作，`state hook`是重写所有的`old state value`，也就是说直接`setN`的话所有`state hook`都会发生`re-render`

```jsx
setCount(prevCount => prevCount + 1)
```



#### useEffect

* `useEffect`详解：
* `useEffect()`有两个参数，第一个参数是要执行的函数，第二个参数是一个依赖项数组，可以为空也可以是其他`state`
* `strings, numbers, booleans` 都是基本数据类型` (primitive data type)`, 但如果第二个数组参数是`object`的时候要注意可以用`useMemo`封装一下或者把`obejct state`里面的所有`primitive`拿出来放进数组，`state.name, state.age...`
* 要注意在`useEffect hook`里面创建`cleaing-up function`来保证程序不会出现前后不一的情况, 比如设置一个`true`跟`false`去保证打断的同时不会去更新`state`

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

或者用更加专业的`javascript`里面的`AbortController()`, 在fetch的时候可以带个`singal`过去，例如：

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



#### useContext

`useContext`可以帮助我们跨越组件层级直接传递变量，以此来实现数据的共享

* 使用`createContext`来创建`Context`组件
* 在顶层组件也就是父组件通过`Provider`提供数据
* 在底层组件也就是子组件通过`useContex`函数获取数据



#### useRef

`useState`每一次渲染函数内部都拥有自己的独立的`props`和`state`, 当在jsx中调用代码中的`state`进行渲染时，每一次渲染都会获得各自渲染作用域内的`props`和`state`, 每次改变`state/props`造成函数组件重新执行，从而每次渲染函数中的`state/props`都是独立的，固定的.

`useState`问题：点击页面 + 会递增，但是点击完`like`以后再点击 + 会出现`page value`与`alert value`不相同的情况, 所以说他们之间是每次都是独立的，有自己的作用域

```jsx
import React, { useState, useEffect } from 'react';

export default function Demo() {
  const [like, setLike] = useState(0);

  useEffect(() => {});

  const handleClick = () => {
    setLike(like + 1);
  };

  const getLikeValue = () => {
    setTimeout(() => {
      alert(like);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <button>{like} 👍</button>
      <button onClick={getLikeValue}>获得like值</button>
    </div>
  );
}
```

`useRef`可以解决这个问题
作用1：多次渲染之间的纽带
	`useRef`会在所有的`render`中保持对返回值的唯一引用。因为所有对ref的赋值和取值拿到的都是最终的状态，并不会因为不同的`render`中存在不同的隔离。简单俩说就是可以把`useRef`的返回值想象成一个全局变量

改写如下：

```jsx
import React, { useState, useEffect, useRef } from 'react';

export default function Demo() {
  const [like, setLike] = useState(0);
  // 初始化likeRef 初始值为0
  const likeRef = useRef(0);

  useEffect(() => {});

  const handleClick = () => {
    setLike(like + 1);
    // 看做是全局变量，直接使用current属性赋值
    likeRef.current = likeRef.current + 1;
  };

  const getLikeValue = () => {
    setTimeout(() => {
      alert(likeRef.current);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <button>{like} 👍</button>
      <button onClick={getLikeValue}>获得like值</button>
    </div>
  );
}
```

需要注意的是修改`useRef`返回的值并不会引起react进行重新渲染执行函数，demo中的页面渲染不是因为修改Ref的值，而是因为我们在修改`likeRef.current`时同时修改了state中的`setLike`造成了页面渲染。

作用2：获取`DOM`元素

- 1.通过`useRef`创建一个变量进行保存`(domRef)`。
- 2.在jsx中通过`ref={domRef}`给对应元素节点添加属性。
- 3.在页面挂载后通过`domRef.current`就可以获取对应节点的真实`DOM`元素了。

```jsx
import React, { useEffect, useRef } from 'react';

export default function Demo() {
  const domRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    domRef.current?.focus();
    console.log(domRef,'domRef')
  });

  return (
    <div>
      <input ref={domRef} type="text" />
      <button>增加</button>
    </div>
  );
}
```







#### useCallback & useMemo

useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。


```jsx
import React, { useState } from "react";

export default function WithoutMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  function expensive() {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }

  return (
    <div>
      <h4>
        {count}-{val}-{expensive()}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}
```

以上函数无论是修改`count`还是`val`，由于组件的重新渲染，都会触发`expensive`的执行(能够在控制台看到，即使修改`val`，也会打印)；但是这里的昂贵计算只依赖于`count`的值，在`val`修改的时候，是没有必要再次计算的. 在这种情况下就可以使用`useMemo`, 只有在修改`count`的时候去执行`expensive`函数

```jsx
import React, { useState } from "react";

export default function WithoutMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  function expensive() {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }
  return (
    <div>
      <h4>
        {count}-{val}-{expensive()}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}
```

上面我们可以看到，使用`useMemo`来执行昂贵的计算，然后将计算值返回，并且将`count`作为依赖值传递进去。这样，就只会在`count`改变的时候触发`expensive`执行，在修改`val`的时候，返回上一次缓存的值。



`useCallback`跟`useMemo`比较类似，但它返回的是缓存的函数

```jsx
const functionA = useCallback(functionB, [a])
```

上面的`useCallback`会将我们传递给它的函数`functionB`返回，并且将这个结果缓存；当依赖`a`变更时，会返回新的函数。既然返回的是函数，我们无法很好的判断返回的函数是否变更，所以我们可以借助ES6新增的数据类型`Set`来判断

```jsx
import React, { useState, useCallback } from "react";

const set = new Set();

export default function Callback() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");

  const callback = useCallback(() => {
    console.log(count);
  }, [count]);
  set.add(callback);

  return (
    <div>
      <h4>{count}</h4>
      <h4>{set.size}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input value={val} onChange={(event) => setVal(event.target.value)} />
      </div>
    </div>
  );
}

```

这里可以看到可以看到，每次修改`count`，`set.size`就会+1，这说明`useCallback`依赖变量`count`，`count`变更时会返回新的函数；而`val`变更时，`set.size`不会变，说明返回的是缓存的旧版本函数

使用场景：
有一个父组件，其中包含子组件，子组件接收一个函数作为`props`；通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，我们可以借助`useCallback`来返回函数，然后把这个函数作为`props`传递给子组件；这样，子组件就能避免不必要的更新。

```jsx
import React, { useState, useCallback, useEffect } from 'react';
function Parent() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
 
    const callback = useCallback(() => {
        return count;
    }, [count]);
    return <div>
        <h4>{count}</h4>
        <Child callback={callback}/>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}
 
function Child({ callback }) {
    const [count, setCount] = useState(() => callback());
    useEffect(() => {
        setCount(callback());
    }, [callback]);
    return <div>
        {count}
    </div>
}
```

​	