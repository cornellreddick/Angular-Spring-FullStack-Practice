import { Coach } from "./Coach";

export class FootballCoach implements Coach{

    getDailyWorkOut(): string {
        return "Do 25 sprints with the football from the 50 yard line to the endzone!";
    }
}