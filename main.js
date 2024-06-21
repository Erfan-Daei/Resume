const skills = document.getElementById("skills");
const languageBox = document.getElementById("language-box");

const skillsData = [
  { id: 1, title: "Windows Form ", level: 3 },
  { id: 2, title: "C#", level: 4 },
  { id: 3, title: "Sql Server", level: 3 },
  { id: 4, title: "Unity", level: 2 },
  { id: 6, title: "git", level: 3 },
];

const languageData = [{ id: 1, title: "انگلیسی", level: 4 }];

function setLevels(parent, data) {
  data.forEach((item) => {
    const skillItem = document.createElement("div");
    const title = document.createElement("p");
    const levels = document.createElement("div");

    skillItem.classList.add("skill-item");
    levels.classList.add("levels");
    title.innerText = item.title;

    for (let index = 0; index < 6; index++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      if (item.level >= index) {
        circle.classList.add("filled-circles");
      } else {
        circle.classList.add("empty-circle");
      }
      levels.appendChild(circle);
    }

    skillItem.appendChild(title);
    skillItem.appendChild(levels);
    parent.appendChild(skillItem);
  });
}

setLevels(languageBox, languageData);
setLevels(skills, skillsData);
