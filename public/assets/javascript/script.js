$(()=> {
  const render = arr => {
    arr.forEach(idx => {
      const listItem = `<a href='#' id='${idx.id}' class='list-group-item list-group-item-action'>${idx.name}</a>`;
      if(!idx.isEaten) {
        $("uneaten").append(listItem);
      } else {
        $("#eaten").append(listItem);
      }
    });
};
  const removeBurgers = () => {
    $("#uneaten").html("");
    $("#eaten").html("");
  };

  const getBurgers = () => {
    $.get("/burgers").then(response => {
      removeBurgers();
      render(response);
    });
  };
  getBurgers();
  $("uneaten").on("click", e => {
    let clicked = $(e.target).attr("id");
    $.post(`/eat/${clicked}`).then(() => {
      getBurgers();
    })
  })
});