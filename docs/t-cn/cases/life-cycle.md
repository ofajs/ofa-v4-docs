<template is="exm-article">
<a href="../../publics/examples/life-cycle/demo.html" preview></a>
<a href="../../publics/examples/life-cycle/test-demo.html" main></a>
</template>

# 生命周期

生命周期鉤子函數提供了在組件不同階段執行代碼的機會。在 `ofa.js` 中，有五個主要的生命周期鉤子函數，它們分別是：`created`、`ready`、`watch`、`attached` 和 `detached`。

- **created()**: 在組件被創建時調用，此時 shadow root 尚未開始渲染。可以在這裏執行一些初始化設置，但不能訪問 shadow root 中的元素。
  
- **ready()**: 在 shadow root 渲染完成後調用，一般用於組件的初始化邏輯。在這個階段，您可以訪問並操作 shadow root 內的元素，以及執行其他需要在渲染完成後執行的操作。

- **watch**: 通過定義 `watch` 對象來監聽數據的變化。在 `ready` 完成後，會觸發一次 `watch`，對應著 `data` 上的值。之後，每次對應的鍵的值發生變動後，都會觸發 `watch` 內對應的函數。

- **attached()**: 當組件被添加到 document 中時調用，此時可以進行與外部環境交互的操作，如獲取組件外觀或初始化共享數據的邏輯。

- **detached()**: 當組件從 document 中移除時調用。在這個階段，您可以執行清理工作，取消與外部環境的交互，並釋放資源。


