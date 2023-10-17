const button = document.getElementById("selection_button");
const body = document.body;

button.addEventListener("click", function () {
  if (body.classList.contains("special-bg")) {
    body.classList.remove("special-bg");
    button.value = "Edit";
  } else {
    body.classList.add("special-bg");
    button.value = "Save";
  }
});
const linksIds = [];
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (body.classList.contains("special-bg")) {
      if (link.classList.contains("selected")) {
        this.classList.remove("selected");
        const index = linksIds.indexOf(link.id);
        if (index !== -1) {
          linksIds.splice(index, 1);
        }
        console.log("You deselected Element with id: " + link.id);
      } else {
        this.classList.add("selected");
        if (linksIds.indexOf(link.id) === -1) {
          linksIds.push(link.id);
        }
        console.log("You Selected Element with id: " + link.id);
      }
    } else if (
      this.classList.contains("selected") &&
      !body.classList.contains("special-bg")
    ) {
      const linkId = link.id;
      if (linksIds.includes(linkId)) {
        counter++;
        updateCounter(linkId);
      } else {
      }
    } else {
    }
  });
});
const buttonIds = [];
const buttons = document.querySelectorAll("button");
let counter = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (body.classList.contains("special-bg")) {
      if (btn.classList.contains("selected")) {
        this.classList.remove("selected");
        const index = buttonIds.indexOf(btn.id);
        if (index !== -1) {
          buttonIds.splice(index, 1);
        }
        console.log("You deselected Element with id: " + btn.id);
      } else {
        this.classList.add("selected");
        if (buttonIds.indexOf(btn.id) === -1) {
          buttonIds.push(btn.id);
        }
        console.log("You Selected Element with id: " + btn.id);
      }
    } else if (
      this.classList.contains("selected") &&
      !body.classList.contains("special-bg")
    ) {
      const buttonId = btn.id;
      if (buttonIds.includes(buttonId)) {
        counter++;
        updateCounter(buttonId);
      } else {
      }
    } else {
    }
  });
});

const buttonCounters = {}; // Create an empty object to store counters

// Function to update and display the click count for a button
function updateCounter(buttonId) {
  if (!buttonCounters[buttonId]) {
    buttonCounters[buttonId] = 1;
  } else {
    buttonCounters[buttonId]++;
  }
  const count = buttonCounters[buttonId];
  console.log(
    `Element with ID ${buttonId} was clicked ${count} time${
      count === 1 ? "" : "s"
    }.`
  );
}
