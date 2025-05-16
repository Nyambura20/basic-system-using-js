const Attachee = require("./groupingTask");
class TaskManager {
  constructor() {
    this.attachees = [];
  }
  addAttachee(attachee) {
    this.attachees.push(attachee);
  }
  assignTasksToAttachee() {
    for (let i = 0; i < this.attachees.length; i++) {
      this.attachees[i].assignTask();
    }
  }
  assignScores(scores) {
    for (let i = 0; i < this.attachees.length; i++) {
      const score = scores[i] ?? 0;
      this.attachees[i].computeScore(score);
    }
  }
  attacheePerDivision() {
    const grouped = {};
    for (let i = 0; i < this.attachees.length; i++) {
      const attachee = this.attachees[i];
      const division = attachee.division;
      if (!grouped[division]) {
        grouped[division] = [];
      }
      grouped[division].push(attachee.name);
    }
    const divisions = Object.keys(grouped);
    for (let i = 0; i < divisions.length; i++) {
      const division = divisions[i];
      console.log(`\n ${division} `);
      const names = grouped[division];
      for (let j = 0; j < names.length; j++) {
        console.log(`- ${names[j]}`);
      }
    }
  }
  displayAttacheeInfo() {
    for (let i = 0; i < this.attachees.length; i++) {
      console.log("----------------------");
      this.attachees[i].infoDisplay();
    }
  }
}
// for testing
const manager = new TaskManager();
const a1 = new Attachee("Samira", "Engineering");
const a2 = new Attachee("Ali", "Tech Programs");
const a3 = new Attachee("Maya", "Hub Support");
const a4 = new Attachee("Kevin", "Radio Support");
manager.addAttachee(a1);
manager.addAttachee(a2);
manager.addAttachee(a3);
manager.addAttachee(a4);
manager.assignTasksToAttachee();
manager.assignScores([87, 72, 53, 40]);
manager.attacheePerDivision();
manager.displayAttacheeInfo();
