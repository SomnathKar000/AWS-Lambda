# AWS Lambda Project

This project deploys a basic structure of an AWS Lambda function using the Serverless Framework

## Prerequisites

- Node.js (v18.x)
- AWS account with appropriate IAM permissions
- Serverless Framework (v3.33.0) installed globally

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/AWS-Lambda.git
```

2. Navigate to the project directory:

```bash
cd AWS-Lambda
```

## Configuration

1. Configure your AWS credentials locally:

```bash
serverless config credentials --provider aws --key YOUR_AWS_ACCESS_KEY_ID --secret YOUR_AWS_SECRET_ACCESS_KEY
```

2. Update the `serverless.yml` file with your desired configuration, including the AWS region, function name, and any other necessary settings.

## Usage

1. Deploy the Lambda function:

```bash
serverless deploy
```

2. Test the Lambda function:

```bash
serverless invoke -f hello
```

## Permissions and Policies

The IAM role associated with the Lambda function has the following permission policies attached:

1. `CloudWatchLogsFullAccess`: This policy grants access to create log groups, log streams, and put log events in CloudWatch Logs. It is required to enable logging for your Lambda function and store logs.

2. `IAMFullAccess`: This policy provides full access to IAM resources. It is required to manage IAM roles and permissions for your Lambda function.

3. `AmazonS3FullAccess`: This policy allows full access to Amazon S3 resources. It is required if your Lambda function needs to read from or write to S3 buckets.

4. `AWSLambdaRole`: This AWS managed policy provides basic permissions required by Lambda functions. It includes permissions for executing the function, accessing CloudWatch Logs, and more.

5. `AWSCloudFormationFullAccess`: This policy grants full access to AWS CloudFormation resources. It is required if you are using CloudFormation to deploy your Lambda function.

6. `AWSLambda_FullAccess`: This AWS managed policy provides full access to Lambda resources and actions. It includes permissions for creating, updating, and deleting Lambda functions.

Make sure to review and validate these permission policies based on your specific requirements and adjust them accordingly. The provided policies are examples, and you should only grant the necessary permissions required by your application.

## Resources

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

Feel free to customize this template based on your project's specific details and requirements. Include any additional sections or information that you think would be relevant and useful for users of your project.
