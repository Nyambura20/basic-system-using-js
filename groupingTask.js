class Attachee {
  constructor(name, division) {
    this.name = name;
    this.division = division;
    this.task = "";
    this.feedback = "";
    this.score = 0;
  }
  assignTask() {
    if (this.division === "Engineering") {
      this.task = "Build applications";
    } else if (this.division === "Hub Support") {
      this.task = "Manage event programs";
    } else if (this.division === "Tech Programs") {
      this.task = "Organize coding workshop";
    } else if (this.division === "Radio Support") {
      this.task = "Assist in live broadcast";
    } else {
      this.task = "No task assigned";
    }
  }
  computeScore(score) {
    if (score >= 0 && score <= 100) {
      this.score = score;
      if (score >= 85) {
        this.feedback = "Excellent!";
      } else if (score >= 70) {
        this.feedback = "Great Job!";
      } else if (score >= 50) {
        this.feedback = "Good performance.";
      } else {
        this.feedback = "Poor performance.";
      }
    } else {
      console.log(
        `Invalid score for ${this.name}. Score must be between 0 and 100.`
      );
    }
  }
  infoDisplay() {
    console.log(`Name: ${this.name}`);
    console.log(`Division: ${this.division}`);
    console.log(`Task: ${this.task}`);
    console.log(`Feedback: ${this.feedback}`);
    console.log(`Score: ${this.score}`);
  }
}
module.exports = Attachee;
