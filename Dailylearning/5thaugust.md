# 05.08.2026

# Docker Basics, Images, Containers & Container Management

## Objective

Today's objective was to understand the fundamentals of Docker, including Docker architecture, Docker Images, Docker Containers, the container lifecycle, basic Linux commands inside containers, and essential Docker container management operations. I also learned how Docker Desktop works with WSL and how Docker creates, executes, stops, and restarts containers.

---

## Topics Covered

### 1. What is Docker?

I learned that Docker is a containerization platform that packages an application along with its dependencies into lightweight containers. These containers can run consistently across different operating systems without worrying about dependency or environment issues.

---

### 2. Why Docker is Used

I understood that Docker solves the "It works on my machine" problem by providing isolated environments. It ensures that applications behave the same during development, testing, and deployment.

---

### 3. Docker Architecture

I learned about the main components involved in Docker.

- Docker Desktop
- Docker Engine
- Docker Client
- Docker Hub
- Windows Subsystem for Linux (WSL)

I understood how these components work together to create and manage containers.

---

### 4. Docker Images

I learned that a Docker Image is a read-only template containing the operating system, application code, runtime, libraries, and dependencies required to run an application.

An image acts as a blueprint from which one or more containers can be created.

**Command:**

```bash
docker images
```

---

### 5. Docker Containers

I understood that a Docker Container is a running instance of an image. Containers provide isolated environments where applications execute independently from the host operating system.

I also learned that multiple containers can be created from a single image.

**Commands:**

```bash
docker ps
```

```bash
docker ps -a
```

---

### 6. Running the Hello World Container

I executed the `hello-world` image to understand Docker's workflow. Docker first checks whether the image exists locally, downloads it from Docker Hub if necessary, creates a container, executes the application, and automatically stops the container after the program finishes.

**Command:**

```bash
docker run hello-world
```

---

### 7. Running an Ubuntu Container

I learned how to create an interactive Ubuntu container using Bash. Unlike the `hello-world` container, the Ubuntu container continues running because Bash waits for user input.

**Command:**

```bash
docker run -it ubuntu bash
```

---

### 8. Basic Linux Commands Inside a Container

Inside the Ubuntu container, I practiced Linux commands for navigating the filesystem and managing directories.

**Commands:**

```bash
pwd
```

```bash
ls
```

```bash
mkdir docker-demo
```

```bash
cd docker-demo
```

```bash
mkdir practice2
```

```bash
exit
```

---

### 9. Docker Container Management

I learned how to manage running containers by entering, stopping, restarting, and viewing their status.

**Commands:**

```bash
docker exec -it <container-id> bash
```

```bash
docker stop <container-id>
```

```bash
docker start <container-id>
```

---

### 10. Difference Between `docker run` and `docker exec`

I learned that `docker run` always creates a new container from an image, whereas `docker exec` opens a new terminal session inside an already running container.

---

## Learning Summary

Today I focused on understanding the complete Docker workflow from installation to container management.

I learned:

- What Docker is.
- Why Docker is used.
- Docker Architecture.
- Docker Images.
- Docker Containers.
- Difference between Images and Containers.
- How Docker downloads images from Docker Hub.
- How containers are created and executed.
- Why the `hello-world` container exits automatically.
- Why Ubuntu containers remain running.
- Basic Linux commands inside containers.
- Difference between `docker run` and `docker exec`.
- How to stop, restart, and manage containers.

---

## Key Takeaways

- Docker packages applications and their dependencies into portable containers.
- Images are templates, whereas containers are runnable instances.
- One image can create multiple containers.
- `docker run` creates a new container every time it is executed.
- `docker exec` enters an existing running container.
- `docker ps` displays running containers.
- `docker ps -a` displays all containers.
- Containers have isolated filesystems.
- Ubuntu containers remain active because Bash continuously waits for user input.

---

## Next Step

In the next session, I will learn Docker Compose, understand the purpose of the `docker-compose.yml` file, and practice running multiple services together using Docker Compose.