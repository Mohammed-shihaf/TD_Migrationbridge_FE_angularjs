terraform {
  required_version = ">= 1.7.0"
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "app" {
  name = "td-migrationbridge-fe-angularjs:latest"
  build {
    context    = "."
    dockerfile = "infra/Dockerfile"
  }
}

resource "docker_container" "app" {
  name  = "td-migrationbridge-fe-angularjs-container"
  image = docker_image.app.image_id
  ports {
    internal = 80
    external = 80
  }
}
