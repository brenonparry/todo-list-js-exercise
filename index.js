
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask("Clean Cat Litter", "Get all that crap (like real poop) out the litterbox"); // task 0
const task2 = newTask("Do Laundry", "Big yikes");
const tasks = [task1, task2];

// console.log(tasks)

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
