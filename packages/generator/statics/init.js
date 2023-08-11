$("body").on("doc-component-loaded", () => {
  $("#outer-layer").classList.add("fadeout");
  setTimeout(() => {
    $("#outer-layer").remove();
  }, 300);
});

if (localStorage.isDark === "true") {
  $("body").classList.add("dark");
} else {
  $("body").classList.remove("dark");
}
