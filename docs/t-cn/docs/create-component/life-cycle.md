# 組件的生命周期

在 ofa.js 中，組件生命周期是在特定時間點觸發的鉤子函數。這些鉤子函數讓你能更精細地控制和交互，ofa.js 有五個關鍵生命周期鉤子：`created`、`ready`、`watch`、`loaded`、`attached` 和 `detached`，分別在不同時刻觸發。

## 生命周期鉤子

### created

`created` 生命周期鉤子在組件創建時被觸發。在此階段，組件的數據尚未被初始化，模板內容也未被渲染。你可以在這個階段執行一些初始化操作，或者準備在後續階段使用的數據。

### ready

`ready` 生命周期鉤子會在組件的數據和模板剛被初始化後觸發，表示組件已經準備就緒。在這個階段，你可以訪問組件的數據，並且模板已經渲染完成，可以執行一些與界面交互相關的操作。

如果組件模板存在對其他組件的依賴，這個階段不會等待依賴加載完成。因此，這個階段適合為組件添加Loading樣式，但需要注意等待依賴加載完成後再執行相關操作。

### watch

一旦 `ready` 階段完成，與之關聯的 `watch` 對象中的監聽函數會被觸發一次。隨後，當數據的某個值發生變動時，會再次觸發相應鍵（key）的監聽函數。

### loaded

`loaded` 生命周期鉤子在組件模板內的所有依賴都加載完成後觸發。這個階段確保在渲染組件之前，所有的依賴都已經加載完畢。這個時候適合去除在 `ready` 階段添加的Loading樣式。

### attached

`attached` 生命周期鉤子會在組件被添加到文檔中時觸發。在這個階段，適合獲取組件內元素的尺寸相關信息，進行數據綁定和全局事件的操作。

### detached

`detached` 生命周期鉤子會在組件從文檔中移除時觸發。在這個階段，你可以執行一些清理操作，比如取消事件監聽或者釋放資源，以防止內存泄漏。

## 示例演示

以下是一個示例，展示了如何使用這些生命周期鉤子：

```javascript
export default {
  data: {
    count: 0,
  },
  watch: {
    count(count) {
      console.log("count: ", count);
    },
  },
  created() {
    console.log("created: Component created, data not initialized.");
  },
  ready() {
    console.log(
      "ready: Component is ready with initialized data and template."
    );

    this.on("click", () => {
      this.count++;
    });
  },
  attached() {
    console.log("attached: Component attached to DOM.");
  },
  detached() {
    console.log("detached: Component detached from DOM.");
  },
};
```

## 生命周期流程圖

<img src="../../../publics/life-cycle.png" width="512" />
