// Gets JSON response
var responseData = response.content;
// Get the Cloud Healthcare API path and proxy domain variables that are set in the common-config shared flow
var hcaPath = context.getVariable("gcp.healthcareapi-path");
var proxyDomain = context.getVariable("gcp.proxy-domain");
// Build URLs and Paths
var targetPath = "https://healthcare.googleapis.com/v1/" + hcaPath + "/fhir";
var targetPathRegExp = new RegExp(targetPath, 'g');
var proxyUrl = "https://" + proxyDomain + context.getVariable("proxy.basepath");

// Replace HCA URL with API URL
responseData = responseData.replace(targetPathRegExp, proxyUrl);
// Set target response
context.setVariable("response.content", responseData);