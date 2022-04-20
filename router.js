const paths = {
  catalog: document.querySelector("#catalog-template"),
  header: document.querySelector("#header-template"),
  intro: document.querySelector("#intro-template"),
  info: document.querySelector("#info-template"),
  contact: document.querySelector("#contact-template"),
};

function trimUrl(path) {
  window.history.replaceState({}, "", "/" + path);
  return;
}
function show(...componentsToBeShown) {
  for (const key in paths) {
    if (componentsToBeShown.includes(key)) {
      paths[key].style.display = "block";
    } else {
      paths[key].style.display = "none";
    }
  }
}

function navigate(e) {
  const route = e.path[0].textContent;
  switch (route) {
    case "Products":
      show("catalog");
      trimUrl("catalog");
      break;
    case "Home":
      show("header");
      trimUrl("home");
      break;
    case "Info":
      show("info");
      trimUrl("info");
      break;
    case "Contact":
      show("contact");
      trimUrl("contact");
      break;

    default:
      show("header");
      trimUrl("home");
      break;
  }
}

//   navigation.forEach((element) => {
//     element.addEventListener("click", (e) => {
//       e.preventDefault();
//       const text = element.textContent;

//       if (text == "ABOUT US") {
//         show("aboutSectionComponents");
//         trimUrl("about-us");
//       } else if (text == "CAMPS") {
//         show("campsComponents");
//         trimUrl("camps");
//       } else if (text == "OFFERINGS") {
//         show("offerts");
//         trimUrl("offerts");
//       } else if (text == "BLOG") {
//         show("welcomeComponent", "commentsComponent");
//         trimUrl("blog");
//       } else if (text == "HOME") {
//         show("header", "welcomeComponent");
//         trimUrl("home");
//       }
//     });
//   });
