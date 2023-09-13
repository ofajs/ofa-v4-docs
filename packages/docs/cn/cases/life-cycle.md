<template is="exm-article">
<a href="../../publics/examples/life-cycle/demo.html" preview demo></a>
<a href="../../publics/examples/life-cycle/test-demo.html" main demo></a>
</template>

# 生命周期

生命周期钩子函数提供了在组件不同阶段执行代码的机会。在 `ofa.js` 中，有五个主要的生命周期钩子函数，它们分别是：`created`、`ready`、`watch`、`attached` 和 `detached`。

- **created()**: 在组件被创建时调用，此时 shadow root 尚未开始渲染。可以在这里执行一些初始化设置，但不能访问 shadow root 中的元素。
  
- **ready()**: 在 shadow root 渲染完成后调用，一般用于组件的初始化逻辑。在这个阶段，您可以访问并操作 shadow root 内的元素，以及执行其他需要在渲染完成后执行的操作。

- **watch**: 通过定义 `watch` 对象来监听数据的变化。在 `ready` 完成后，会触发一次 `watch`，对应着 `data` 上的值。之后，每次对应的键的值发生变动后，都会触发 `watch` 内对应的函数。

- **attached()**: 当组件被添加到 document 中时调用，此时可以进行与外部环境交互的操作，如获取组件外观或初始化共享数据的逻辑。

- **detached()**: 当组件从 document 中移除时调用。在这个阶段，您可以执行清理工作，取消与外部环境的交互，并释放资源。


