provider "aws" {
  region = "ap-south-1"
}

resource "aws_s3_bucket" "devOps-portfolio-bucket" {
    bucket = "devops-portfolio-bucket-6545548"
}

resource "aws_dynamodb_table" "devOps-portfolio-lock-table" {
    name         = "devops-portfolio-lock-table"
    billing_mode = "PAY_PER_REQUEST"
    hash_key     = "LockID"

    attribute {
        name = "LockID"
        type = "S"
    }
}