const isDark = $.stanz({
  value: false,
});

export default isDark;

const refreshBodyMode = () => {
  if (isDark.value) {
    $("body").css = {
      backgroundColor: "#000",
      color: "#fff",
    };
  } else {
    $("body").css = {
      backgroundColor: "#fff",
      color: "#000",
    };
  }
};

refreshBodyMode();
isDark.watch(() => {
  refreshBodyMode();
});
