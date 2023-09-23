import { Button } from "../components/Button";

export function tasksToHTML(tasks, taskManager, doneHTML) {
  removeDOM(taskManager);

  if (doneHTML.children) {
    removeDOM(doneHTML);
  }

  for (const task of tasks) {
    if (!task.hasDone) {
      const element = toHTML({
        tagName: "div",
        className: "task",
        id: task.id,
        html: {
          position: "afterbegin",
          content: `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                `,
        },
      });

      const deleteBTN = btnToHTML(
        new Button({
          className: "--delete",
          events: {
            click: (e) => {
              element.remove();

              console.log("[e.target]", e.target.parentElement);
            },
          },
          textContent: "Delete",
        })
      );

      const doneBTN = btnToHTML(
        new Button({
          className: "--done",
          events: {
            click: (e) => {
              const id = e.target.parentElement.id;

              const targetTask = tasks.filter((el, i) => id === el.id);

              targetTask[0].hasDone = true;

              tasksToHTML(tasks, taskManager, doneHTML);
              console.log("[tasks]", tasks);
            },
          },
          textContent: "Done",
        })
      );

      element.append(deleteBTN, doneBTN);
      taskManager.append(element);
    } else {
      const element = toHTML({
        tagName: "div",
        className: "task",
        id: task.id,
        html: {
          position: "afterbegin",
          content: `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                `,
        },
      });

      doneHTML.append(element);
    }
  }
}

// !DRY!
export function btnToHTML({ tagName, className, events, textContent }) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = textContent;

  for (const event in events) {
    const action = events[event];
    element.addEventListener(event, action);
  }

  return element;
}

function removeDOM(node) {
  [...node.children].forEach((el) => {
    el.remove();
  });
}

// !DRY!
function toHTML({ tagName, className, id, html }) {
  const element = document.createElement(tagName);
  className ? (element.className = className) : null;
  id ? (element.id = id) : null;

  html && element.insertAdjacentHTML(html.position, html.content);

  return element;
}
