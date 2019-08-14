$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/pet.feature");
formatter.feature({
  "name": "petStore",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "POST pet with json body",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to add a new pet",
  "keyword": "Given "
});
formatter.step({
  "name": "I do a \"POST\" operation",
  "keyword": "When "
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.step({
  "name": "with Content-Type value \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "name": "body \"\u003cjson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The response code must be \"\u003cresponseCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "json",
        "responseCode"
      ]
    },
    {
      "cells": [
        "validPet1.json",
        "200"
      ]
    },
    {
      "cells": [
        "invalidPet.json",
        "405"
      ]
    }
  ]
});
formatter.scenario({
  "name": "POST pet with json body",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to add a new pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToAddANewPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"POST\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "body \"validPet1.json\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.body(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "POST pet with json body",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to add a new pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToAddANewPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"POST\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "body \"invalidPet.json\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.body(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"405\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: Not expected response code. Response was 200, expected 405\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.restAssuredSteps.PetStoreSteps.checkResponseCode(PetStoreSteps.java:124)\r\n\tat com.restAssuredSteps.PetStoreSteps$$EnhancerByCGLIB$$de4c0fda.CGLIB$checkResponseCode$6(\u003cgenerated\u003e)\r\n\tat com.restAssuredSteps.PetStoreSteps$$EnhancerByCGLIB$$de4c0fda$$FastClassByCGLIB$$c1806a47.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:361)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:132)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat com.restAssuredSteps.PetStoreSteps$$EnhancerByCGLIB$$de4c0fda.checkResponseCode(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.PetStoreStepDefinitions.theResponseCodeMustBe(PetStoreStepDefinitions.java:65)\r\n\tat ✽.The response code must be \"405\"(src/test/resources/features/pet.feature:8)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "PUT pet with json body",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to actualize the information of a pet that is already on the system",
  "keyword": "Given "
});
formatter.step({
  "name": "I do a \"PUT\" operation",
  "keyword": "When "
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.step({
  "name": "with Content-Type value \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "name": "body \"\u003cjson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The response code must be \"\u003cresponseCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "json",
        "responseCode"
      ]
    },
    {
      "cells": [
        "validPet2.json",
        "200"
      ]
    },
    {
      "cells": [
        "invalidPet.json",
        "405"
      ]
    }
  ]
});
formatter.scenario({
  "name": "PUT pet with json body",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to actualize the information of a pet that is already on the system",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToActualizeTheInformationOfAPetThatIsAlreadyOnTheSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"PUT\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "body \"validPet2.json\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.body(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PUT pet with json body",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to actualize the information of a pet that is already on the system",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToActualizeTheInformationOfAPetThatIsAlreadyOnTheSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"PUT\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "body \"invalidPet.json\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.body(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"405\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: Not expected response code. Response was 200, expected 405\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.restAssuredSteps.PetStoreSteps.checkResponseCode(PetStoreSteps.java:124)\r\n\tat com.restAssuredSteps.PetStoreSteps$$EnhancerByCGLIB$$de4c0fda.CGLIB$checkResponseCode$6(\u003cgenerated\u003e)\r\n\tat com.restAssuredSteps.PetStoreSteps$$EnhancerByCGLIB$$de4c0fda$$FastClassByCGLIB$$c1806a47.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:361)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:132)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat com.restAssuredSteps.PetStoreSteps$$EnhancerByCGLIB$$de4c0fda.checkResponseCode(\u003cgenerated\u003e)\r\n\tat com.stepDefinitions.PetStoreStepDefinitions.theResponseCodeMustBe(PetStoreStepDefinitions.java:65)\r\n\tat ✽.The response code must be \"405\"(src/test/resources/features/pet.feature:20)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "GET pet by status",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to get a pet",
  "keyword": "Given "
});
formatter.step({
  "name": "I do a \"GET\" operation",
  "keyword": "When "
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.step({
  "name": "status \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The response code must be \"\u003cresponseCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "responseCode"
      ]
    },
    {
      "cells": [
        "available",
        "200"
      ]
    },
    {
      "cells": [
        "pending",
        "200"
      ]
    },
    {
      "cells": [
        "sold",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "GET pet by status",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to get a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToGetAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"GET\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status \"available\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET pet by status",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to get a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToGetAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"GET\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status \"pending\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET pet by status",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to get a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToGetAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"GET\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status \"sold\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "GET pet with petID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to get a pet",
  "keyword": "Given "
});
formatter.step({
  "name": "I do a \"GET\" operation",
  "keyword": "When "
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.step({
  "name": "pet ID \"\u003cpetId\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The response code must be \"\u003cresponseCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "petId",
        "responseCode"
      ]
    },
    {
      "cells": [
        "1",
        "200"
      ]
    },
    {
      "cells": [
        "2",
        "404"
      ]
    },
    {
      "cells": [
        "3",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "GET pet with petID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to get a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToGetAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"GET\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pet ID \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.petID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET pet with petID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to get a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToGetAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"GET\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pet ID \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.petID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "GET pet with petID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to get a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToGetAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"GET\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pet ID \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.petID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "DELETE pet with petID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to delete a pet",
  "keyword": "Given "
});
formatter.step({
  "name": "I do a \"DELETE\" operation",
  "keyword": "When "
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.step({
  "name": "pet ID \"\u003cpetId\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The response code must be \"\u003cresponseCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "petId",
        "responseCode"
      ]
    },
    {
      "cells": [
        "1",
        "200"
      ]
    },
    {
      "cells": [
        "2",
        "404"
      ]
    },
    {
      "cells": [
        "3",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "DELETE pet with petID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to delete a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToDeleteAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"DELETE\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pet ID \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.petID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DELETE pet with petID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to delete a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToDeleteAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"DELETE\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pet ID \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.petID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DELETE pet with petID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to delete a pet",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iWantToDeleteAPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a \"DELETE\" operation",
  "keyword": "When "
});
formatter.match({
  "location": "PetStoreStepDefinitions.iDoAOperationToEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint is \"/pet\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theEndpointIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "with Content-Type value \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.withContentTypeValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pet ID \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "PetStoreStepDefinitions.petID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response code must be \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreStepDefinitions.theResponseCodeMustBe(String)"
});
formatter.result({
  "status": "passed"
});
});