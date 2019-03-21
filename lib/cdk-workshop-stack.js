"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/cdk");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
class CdkWorkshopStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // defines an AWS Lambda resource
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NodeJS810,
            code: lambda.Code.asset('lambda'),
            handler: 'hello.handler' // file is "hello", function is "handler"
        });
        // defines an API Gateway REST API resource backed by our "hello" function.
        new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: hello
        });
    }
}
exports.CdkWorkshopStack = CdkWorkshopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQXFDO0FBQ3JDLDhDQUErQztBQUMvQyxpREFBa0Q7QUFFbEQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMzQyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsaUNBQWlDO1FBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3BELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVM7WUFDakMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxPQUFPLEVBQUUsZUFBZSxDQUFnQix5Q0FBeUM7U0FDcEYsQ0FBQyxDQUFDO1FBRUgsMkVBQTJFO1FBQzNFLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWhCRCw0Q0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2RrID0gcmVxdWlyZSgnQGF3cy1jZGsvY2RrJyk7XG5pbXBvcnQgbGFtYmRhID0gcmVxdWlyZSgnQGF3cy1jZGsvYXdzLWxhbWJkYScpO1xuaW1wb3J0IGFwaWd3ID0gcmVxdWlyZSgnQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXknKTtcblxuZXhwb3J0IGNsYXNzIENka1dvcmtzaG9wU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIC8vIGRlZmluZXMgYW4gQVdTIExhbWJkYSByZXNvdXJjZVxuICAgICAgICBjb25zdCBoZWxsbyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0hlbGxvSGFuZGxlcicsIHtcbiAgICAgICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5vZGVKUzgxMCwgICAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAgICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmFzc2V0KCdsYW1iZGEnKSwgIC8vIGNvZGUgbG9hZGVkIGZyb20gdGhlIFwibGFtYmRhXCIgZGlyZWN0b3J5XG4gICAgICAgICAgICBoYW5kbGVyOiAnaGVsbG8uaGFuZGxlcicgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRlZmluZXMgYW4gQVBJIEdhdGV3YXkgUkVTVCBBUEkgcmVzb3VyY2UgYmFja2VkIGJ5IG91ciBcImhlbGxvXCIgZnVuY3Rpb24uXG4gICAgICAgIG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsICdFbmRwb2ludCcsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6IGhlbGxvXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=