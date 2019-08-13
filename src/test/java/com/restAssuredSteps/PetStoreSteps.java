package com.restAssuredSteps;


import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;

import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

public class PetStoreSteps {

    private String endpoint;
    private String operation;
    private String contentType;
    private Properties properties;

    private String jsonBody;
    private String petID;
    private String petStatus;

    public void requestSetup() throws IOException {
        getProperties("C:\\Users\\mario.torbado\\IdeaProjects\\formacion\\ejercicio 3 - RESTassured\\src\\test\\resources\\config.properties");
    }

    public void setEndpoint(String endpoint) {
//        this.endpoint = endpoint;
        switch (endpoint) {
            case "/pet":
                this.endpoint = properties.getProperty("PET");
                break;
            case "/store":
                this.endpoint = properties.getProperty("STORE");
                break;
            case "/user":
                this.endpoint = properties.getProperty("USER");
                break;
            default:
                Assert.fail("feature endpoint does not exist");
                break;
        }
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public void getJsonFile(String jsonFile) throws IOException {
        this.jsonBody = new String(Files.readAllBytes(Paths.get("src\\test\\resources\\jsons\\" + jsonFile)));
    }

    private Response sendRequestAndGetResponse() {
        Assert.assertNotNull("endpoint is null", endpoint);
        Assert.assertNotNull("operation is null", operation);
        Assert.assertNotNull("properties field is null", properties);

        RestAssured.baseURI = properties.getProperty("URI");
        RequestSpecification request = RestAssured.given();
        Response response = null;

        switch (operation){
            case "POST":
                if (jsonBody!=null) {
                    System.out.println("initialising POST operation with JSON BODY");
                    request.header("Content-Type", contentType);
                    request.body(jsonBody);
                    response = request.post(endpoint);
                } else {
                    Assert.fail("jsonBody is null");
                }
                break;
            case "PUT":
                System.out.println("initialising PUT operation with JSON BODY");
                request.header("Content-Type", contentType);
                request.body(jsonBody);
                response = request.post(endpoint);
                break;
            case "GET":
                if (petID != null) {
                    System.out.println("initialising GET operation with PETID");
                    response = request.get(endpoint + "/" + petID);
                } else if (petStatus != null) {
                    System.out.println("initialising GET operation with PETSTATUS");
                    request.param("status", petStatus);
                    response = request.get(endpoint + "/findByStatus?status=" + petStatus);
                } else {
                    Assert.fail("petID and petStatus are null");
                }
                break;
            case "DELETE":
                System.out.println("initialising DELETE operation with PETSTATUS");
                Assert.assertNotNull("petID is null", petID);
                response = request.delete(endpoint + "/" + petID);
                break;
            default:
                Assert.fail("invalid operation. Must be POST, PUT, GET or DELETE");
        }
        Assert.assertNotNull("Null response", response);

        endpoint = null;
        operation = null;
        contentType = null;
        properties = null;
        jsonBody = null;
        petStatus  = null;
        petID = null;

        return response;
    }

    public void checkResponseCode(int expectedCode) {
        int responseCode = sendRequestAndGetResponse().getStatusCode();

        Assert.assertTrue(
                "Not expected response code. Response was " + responseCode + ", expected " + expectedCode,
                expectedCode == responseCode);
    }

    private void getProperties(String propertiesPath) throws IOException {
        FileReader reader = new FileReader(propertiesPath);
        properties = new Properties();
        properties.load(reader);
    }

    public void setStatus(String petStatus) {
        String allStatus = properties.getProperty("PETSTATUS");
        List<String> allStatusList = Arrays.asList(allStatus.split(", "));
        if(allStatusList.contains(petStatus)){
            this.petStatus = petStatus;
        } else {
            Assert.fail("invalid pet status");
        }
    }

    public void setPetID(int petID) {
        this.petID = String.valueOf(petID);
    }
}
