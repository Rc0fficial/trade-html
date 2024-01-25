function activateTab(index) {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab, i) => {
      const liElement = tab.closest("li");
      const tabText = tab.querySelector(".tab-text");

      if (liElement && tabText) {
        liElement.classList.toggle("bg-[#E5FFF5]", i === index);
        liElement.style.borderLeft =
          i === index ? "2px solid #13B440" : "none";
        tabText.classList.toggle("text-[#13B440]", i === index);
      }
    });
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