package com.tlm.webflux.demo.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.util.Map;

/**
 * @author tanglm
 * @date 2019-06-11 15:34
 * @Description:
 */
@Slf4j
@Configuration
public class WebFluxFilter implements WebFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange serverWebExchange, WebFilterChain webFilterChain) {
        Map<String,Object> params = serverWebExchange.getAttributes();
        params.keySet().stream().forEach(e->{
            log.info("参数{}={}",e,params.get(e));
        });


        return Mono.empty();
    }
}
