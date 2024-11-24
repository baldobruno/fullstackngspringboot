FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install openjdk-17-jdk -y
RUN apt-get install libfreetype6 -y
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package

FROM amazoncorretto:17

EXPOSE 8080

COPY --from=build /target/fullstackngsb-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "app.jar"]