provider "aws" {
    region = "ap-south-1"
}



resource "aws_security_group" "web_sg" {
    name = "web_sg"
    description = "Allow HTTP and SSH traffic"
    
    ingress {
        description= "SSH"
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
        }
    ingress {
        description= "HTTP"
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

resource "aws_instance" "myPortfolioEc2" {
    ami = "ami-0d4cbf33677f7d3c5"
    instance_type = "t2.micro"
    key_name = "myportfolio"
    vpc_security_group_ids = [ aws_security_group.web_sg.id ]
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

output "portfolio_ec2_public_ip" {
  value       = aws_instance.myPortfolioEc2.public_ip
  description = "Public IP of portfolio EC2 instance"
}

