package com.tlm.webflux.demo.config;

import com.tlm.webflux.demo.handler.UserHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

/**
 * @author tanglm
 * @date 2019-06-11 10:29
 * @Description:
 */
@Configuration
public class RoutingConfiguration {
    @Bean
    public RouterFunction<ServerResponse> userRouter(UserHandler userHandler){
        return  RouterFunctions.route
                (RequestPredicates.GET("/hello").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)), userHandler::helloworldWebFlux)
                .andRoute(RequestPredicates.GET("/list").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)), userHandler::userList)
                .andRoute(RequestPredicates.GET("/user/{id}").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)), userHandler::getUserById)
                .andRoute(RequestPredicates.POST("/user").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)), userHandler::addUser)


                ;

    }

}
