import { When } from "@badeball/cypress-cucumber-preprocessor";
import { PersonalDataPage } from "../../page-objects/personalDataPage";

const personalPage = new PersonalDataPage()

When("I fill the correct personal data", (country: string, city: string) => {
    personalPage.fillPersonalDataAndSubmit()
});

When("I see 'Success' message", (country: string, city: string) => {
    personalPage.verifySuccessMessage()
});

