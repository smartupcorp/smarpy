

function toggleChevron() {
  let admin = document.querySelector(".admin");
  if (admin) {
    if (admin.dataset.smarpyAdminSidebar === "collapse") {
      admin.dataset.smarpyAdminSidebar = "";
    } else {
      admin.dataset.smarpyAdminSidebar = "collapse";
    }
  }
}
