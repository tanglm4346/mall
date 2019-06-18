package com.tlm.webflux.demo.handler;

import com.tlm.webflux.demo.pojo.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.time.temporal.TemporalUnit;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.function.Consumer;

/**
 * @author tanglm
 * @date 2019-06-11 10:31
 * @Description:
 */

@Slf4j
@Component
public class UserHandler {
    /**
     * 返回普通的字符串
     * @param request(不可以缺少)
     * @return
     */
    public Mono<ServerResponse> helloworldWebFlux(ServerRequest request){
//        Mono<String> mono=  Mono.just("");
        return  ServerResponse.ok().contentType(MediaType.TEXT_PLAIN)
                .body(BodyInserters.fromObject("hello World webflux"));
    }


    /**
     * 返回一个集合
     *
     * @param request
     * @return
     */
    public Mono<ServerResponse> userList(ServerRequest request){
        User user1 = new User(1L,"张三",18);
        User user2 = new User(2L,"李四",28);
        User user3 = new User(3L,"王五",38);
        List<User> list =  Arrays.asList(user1,user2,user3);

        Flux<User>  flux= Flux.fromIterable(list) ;
        return  ServerResponse.ok().contentType(MediaType.APPLICATION_JSON_UTF8)
                .body(flux,User.class);



    }

    /**
     * 返回一个集合
     *
     * @param request
     * @return
     */
    public Mono<ServerResponse> getUserById(ServerRequest request){
        log.info("【接收到id】={}", request.pathVariable("id"));
        log.info("【接收到id】={}", request.queryParam("id").get());
        User user = new User(1L,"张三",18);
        Mono<User>  mono= Mono.just(user) ;
        return  ServerResponse.ok().contentType(MediaType.APPLICATION_JSON_UTF8)
                .body(mono,User.class);
    }


    public Mono<ServerResponse> addUser(ServerRequest request){
        Mono<User> mono = request.bodyToMono(User.class);
        return  ServerResponse.ok().contentType(MediaType.APPLICATION_JSON_UTF8)
                .body(mono,User.class);
    }






}
