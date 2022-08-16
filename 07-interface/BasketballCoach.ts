import { Coach } from "./Coach";

export class BaskeballCoach implements Coach{
    getDailyWorkOut(): string {
        return "We will be doing 30 suicides with the basketball."
    }
}