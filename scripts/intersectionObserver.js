function callback(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
  });
}

export function initializeObserver() {
  console.log(1);
  let options = {
    root: document.querySelector("header"),
    rootMargin: "0px",
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector("#bio");
  observer.observe(target);
}
