function activateMainTab(selectedTab, contentId) {
    // Remove 'active' class from all tabs
    document.querySelectorAll(".main-tab").forEach(tab => tab.classList.remove("active"));

    // Add 'active' class to the selected tab
    selectedTab.classList.add("active");

    // Hide all tab content
    document.querySelectorAll(".main-tab-content").forEach(content => content.classList.remove("active"));

    // Show the corresponding tab content
    document.getElementById(contentId).classList.add("active");
}





function activateTabItem(selectedTab, contentId) {
  // Remove 'active-tab' class from all tabs
  document
    .querySelectorAll(".tab-item")
    .forEach((tab) => tab.classList.remove("active-tab"));

  // Add 'active-tab' class to the selected tab
  selectedTab.classList.add("active-tab");

  // Hide all tab content
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));

  // Show the corresponding tab content
  document.getElementById(contentId).classList.add("active");
}
