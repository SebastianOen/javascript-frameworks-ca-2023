import { getLocalStorageData } from "./localStorageData.js";

export function showLocalStorage() {
  const localStorageContainer = document.querySelector(
    ".local-storage-container"
  );
  const localData = getLocalStorageData();

  localStorageContainer.innerHTML = "";

  localData.forEach((item) => {
    localStorageContainer.innerHTML += `<li><span>${item.title}</span></li>`;
  });
}
