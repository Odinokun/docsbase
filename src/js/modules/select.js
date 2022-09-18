module.exports = function () {
  $("#language-select")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("shop-top__search-input-select-menu");
  $("#type-select")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("shop-top__search-input-select-menu");
};