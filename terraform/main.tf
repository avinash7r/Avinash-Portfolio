terraform {
  backend "s3" {
    bucket         = "devops-portfolio-bucket-6545548"
    key            = "devops-portfolio/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "devops-portfolio-lock-table"
  }
}

provider "aws" {
  region = "ap-south-1"
}

resource "aws_security_group" "avinash-portfolio-sg" {
  name        = "avinash-portfolio-sg"
  description = "Security group for avinash portfolio"
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name = "avinash-portfolio-sg"
  }
}

resource "aws_instance" "avinash-portfolio-ec2-instance-devops" {
  ami                    = "ami-0d4cbf33677f7d3c5"
  instance_type          = "t2.micro"
  key_name               = "avinash-key"
  vpc_security_group_ids = [aws_security_group.avinash-portfolio-sg.id]

  user_data = <<-EOF
                #!/bin/bash
                sudo yum update -y
                sudo yum install -y docker
                sudo systemctl start docker
                sudo systemctl enable docker
                sudo usermod -aG docker ec2-user
                sudo docker pull avinashrajure/portfolio:latest
                sudo docker run -d -p 80:3000 avinashrajure/portfolio
                EOF
}

output "instance_public_ip" {
  value = aws_instance.avinash-portfolio-ec2-instance-devops.public_ip
}
