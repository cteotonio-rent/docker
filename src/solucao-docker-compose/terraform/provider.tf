variable "region_name" {
  type = string
}

provider "aws" {
  region                      = var.region_name
  access_key                  = "test"
  secret_key                  = "test"
  skip_credentials_validation = true
  skip_requesting_account_id  = true
  skip_metadata_api_check     = true
  s3_force_path_style         = true
  endpoints {
    acm        = "http://localstack:4566"
    apigateway = "http://localstack:4566"
    dynamodb   = "http://localstack:4566"
    ec2        = "http://localstack:4566"
    iam        = "http://localstack:4566"
    lambda     = "http://localstack:4566"
    kms        = "http://localstack:4566"
    route53    = "http://localstack:4566"
    s3         = "http://localstack:4566"
    sqs        = "http://localstack:4566"
  }
}
