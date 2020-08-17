fetch("data.json")
  .then((res) => res.json())
  .then((datas) => {
    for (data of datas) {
      const contentContainer = document.createElement("div");

      const lineFeatured = document.createElement("div");
      contentContainer.setAttribute(
        "class",
        "animate__animated animate__backInUp content-container "
      );
      lineFeatured.setAttribute("class", "line-featured");
      contentContainer.append(lineFeatured);
      const contentWrapper = document.createElement("div");
      contentWrapper.setAttribute("class", "content-wrapper");

      contentContainer.append(contentWrapper);
      const categoryPlaceholder = document.createElement("div");
      categoryPlaceholder.setAttribute("class", "category-placeholder");
      contentContainer.append(categoryPlaceholder);

      const logoCompany = document.createElement("img");
      logoCompany.setAttribute("id", "logo");
      logoCompany.setAttribute("src", data.logo);
      contentWrapper.append(logoCompany);
      const content = document.createElement("div");
      content.setAttribute("class", "content");
      contentWrapper.append(content);
      const h2 = document.createElement("h2");
      h2.setAttribute("class", "company");
      h2.textContent = data.company;
      content.append(h2);
      if (data.new == true) {
        const statusNew = document.createElement("span");
        statusNew.setAttribute("class", "status-new");
        statusNew.textContent = "New!";
        content.append(statusNew);
      }
      if (data.featured == true) {
        const statusFeatured = document.createElement("span");
        statusFeatured.setAttribute("class", "status-featured");
        statusFeatured.textContent = "Featured";
        content.append(statusFeatured);
        lineFeatured.classList.add("featured-active");
      }
      const h1 = document.createElement("h1");
      h1.setAttribute("class", "position");
      const aTag = document.createElement("a");
      aTag.setAttribute("href", "");
      aTag.textContent = data.position;
      h1.append(aTag);
      content.append(h1);
      const para = document.createElement("p");
      para.setAttribute("class", "posted-at");
      para.textContent = data.postedAt;
      const firstBullet = document.createElement("i");
      firstBullet.setAttribute("class", "fa fa-circle");
      para.append(firstBullet);
      const contractStatus = document.createElement("span");
      contractStatus.setAttribute("class", "contract");
      contractStatus.textContent = data.contract;
      para.append(contractStatus);
      const secondBullet = document.createElement("i");
      secondBullet.setAttribute("class", "fa fa-circle");
      para.append(secondBullet);
      const locationStatus = document.createElement("span");
      locationStatus.setAttribute("class", "location");
      locationStatus.textContent = data.location;
      para.append(locationStatus);
      content.append(para);

      const categoryRole = document.createElement("div");
      categoryRole.setAttribute("class", "category-item");
      categoryRole.textContent = data.role;
      categoryPlaceholder.append(categoryRole);
      const categoryLevel = document.createElement("div");
      categoryLevel.setAttribute("class", "category-item");
      categoryLevel.textContent = data.level;
      categoryPlaceholder.append(categoryLevel);
      for (language of data.languages) {
        const categoryLanguage = document.createElement("div");
        categoryLanguage.classList.add("category-item");
        categoryLanguage.textContent = language;
        categoryPlaceholder.append(categoryLanguage);
      }
      document.querySelector(".content-section").append(contentContainer);
    }
    // <-- Trigger if category item click to be filtered -->
    const categoryItems = document.querySelectorAll(".category-item");
    categoryItems.forEach(function (item) {
      item.addEventListener("click", putToFilter);
    });
  });

const filterBox = document.querySelector(".filter-wrapper");
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearFilter);

function clearFilter(e) {
  e.preventDefault();
  filterBox.querySelectorAll("*").forEach((n) => n.remove());
  filtering();
}
function removeThis(e) {
  e.preventDefault();
  e.target.parentElement.remove();
  filtering();
}
function putToFilter(e) {
  e.preventDefault();
  let countDuplicate = 0;
  const filterItem = document.createElement("div");
  filterItem.setAttribute("class", "filter-item");
  filterItem.textContent = e.target.textContent;
  const removeBtn = document.createElement("i");
  removeBtn.setAttribute("class", "fa fa-times removeFilterItem");
  removeBtn.setAttribute("aria-hidden", "true");
  filterItem.appendChild(removeBtn);

  if (filterBox.children.length == 0) {
    filterBox.appendChild(filterItem);
    filtering();
  } else {
    filterBox.childNodes.forEach(function (item) {
      if (filterItem.textContent == item.textContent) {
        countDuplicate++;
      } else {
        countDuplicate += 0;
      }
    });
    if (countDuplicate == 0) {
      filterBox.appendChild(filterItem);
      filtering();
    }
  }
}
function filtering() {
  let found = 0;
  const contentContainer = document.querySelectorAll(".content-container");
  const removeFilterItems = document.querySelectorAll(".removeFilterItem");

  // Remove filter item
  removeFilterItems.forEach(function removeItem(filterItem) {
    filterItem.addEventListener("click", removeThis);
  });

  // UNTUK DISPLAY CONTAINER YANG MEMENUHI FILTER
  if (filterBox.childNodes.length == 0) {
    contentContainer.forEach(function (container) {
      container.style.display = "flex";
    });
  } else {
    filterBox.childNodes.forEach(function (filterItem) {
      contentContainer.forEach(function (container) {
        container.childNodes[2].childNodes.forEach(function (categoryItem) {
          if (filterItem.textContent == categoryItem.textContent) {
            found++;
          }
        });
        if (found == 1) {
          container.style.display = "flex";
        } else {
          container.style.display = "none";
        }
        found = 0;
      });
    });
  }
}
