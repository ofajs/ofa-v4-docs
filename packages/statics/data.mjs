// 文档时的左侧导航数据
export const leftNavsData = $.stanz([]);

window.leftNavsData = leftNavsData;

// 用于监听窗口大小
export const size = $.stanz({
  width: 0,
  height: 0,
});

let timer;
window.addEventListener("resize", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
  }, 100);
});

export const isDark = $.stanz({
  value: localStorage.isDark === "true",
});

isDark.watch(() => {
  localStorage.isDark = isDark.value;
});

export const lang = location.pathname.replace(/\/(.+?)\/.+/, "$1");