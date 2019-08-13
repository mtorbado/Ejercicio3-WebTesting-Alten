package com.stepDefinitions;

import com.restAssuredSteps.PetStoreSteps;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;

import java.io.IOException;

public class PetStoreStepDefinitions {

    @Steps
    PetStoreSteps steps;

    // Scenario 1 POST
    @Given("^I want to add a new pet$")
    public void iWantToAddANewPet() throws IOException {
        steps.requestSetup();
    }

    //Scenario 2: PUT
    @Given("^I want to actualize the information of a pet that is already on the system$")
    public void iWantToActualizeTheInformationOfAPetThatIsAlreadyOnTheSystem() throws IOException {
        steps.requestSetup();
    }

    //Scenario 3: GET
    @Given("^I want to get a pet$")
    public void iWantToGetAPet() throws IOException {
        steps.requestSetup();
    }

    //Scenario 4: DELETE
    @Given("^I want to delete a pet$")
    public void iWantToDeleteAPet() throws IOException {
        steps.requestSetup();
    }

    // --- Common test conditions: ---

    @When("^I do a \"([^\"]*)\" operation$")
    public void iDoAOperationToEndpoint(String operation) {
        steps.setOperation(operation);
    }

    @And("^the endpoint is \"([^\"]*)\"$")
    public void theEndpointIs(String endpoint){
        steps.setEndpoint(endpoint);
    }

    @And("^with Content-Type value \"([^\"]*)\"$")
    public void withContentTypeValue(String contentType) {
        steps.setContentType(contentType);
    }

    @And("^body \"([^\"]*)\"$")
    public void body(String jsonFile) throws IOException {
        steps.getJsonFile(jsonFile);
    }

    @Then("^The response code must be \"([^\"]*)\"$")
    public void theResponseCodeMustBe(String responseCode) {
        steps.checkResponseCode(Integer.parseInt(responseCode));
    }

    @And("^status \"([^\"]*)\"$")
    public void status(String petStatus) {
        steps.setStatus(petStatus);
    }

    @And("^pet ID \"([^\"]*)\"$")
    public void petID(String petID) throws Throwable {
        steps.setPetID(Integer.parseInt(petID));
    }


}
