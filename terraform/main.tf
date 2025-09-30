terraform {
  required_version = ">= 1.6.0"

  backend "s3" {
    bucket         = "my-terraform-state-bucket-rajureavinash7"
    key            = "portfolio/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-lock-table"
    encrypt        = true
  }
}

provider "aws" {
  region = "ap-south-1"
}

# Security group for SSH + HTTP
resource "aws_security_group" "web_sg" {
  name        = "web_sg"
  description = "Allow HTTP and SSH traffic"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# IAM role for SSM
resource "aws_iam_role" "ssm_role" {
  name = "portfolio-ssm-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = { Service = "ec2.amazonaws.com" }
      }
    ]
  })
}

# Attach AmazonSSMManagedInstanceCore
resource "aws_iam_role_policy_attachment" "ssm_attach" {
  role       = aws_iam_role.ssm_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

# IAM instance profile
resource "aws_iam_instance_profile" "ssm_profile" {
  name = "portfolio-ssm-profile"
  role = aws_iam_role.ssm_role.name
}

# EC2 instance
resource "aws_instance" "myPortfolioEc2" {
  ami                    = "ami-0d4cbf33677f7d3c5"
  instance_type          = "t2.micro"
  key_name               = "myportfolio" # Optional if using SSM only
  vpc_security_group_ids = [aws_security_group.web_sg.id]
  iam_instance_profile   = aws_iam_instance_profile.ssm_profile.name

  user_data = <<-EOF
                #!/bin/bash
                yum update -y
                amazon-linux-extras install docker -y
                systemctl start docker
                systemctl enable docker
                usermod -a -G docker ec2-user
              EOF

  tags = {
    Name = "MyPortfolioEc2"
  }
}

# Outputs for GitHub Actions
output "portfolio_ec2_public_ip" {
  value       = aws_instance.myPortfolioEc2.public_ip
  description = "Public IP of portfolio EC2 instance"
}

output "portfolio_ec2_instance_id" {
  value       = aws_instance.myPortfolioEc2.id
  description = "EC2 instance ID for SSM deployment"
}
