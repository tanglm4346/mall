package com.tlm.could.order.bean;

import com.tlm.could.product.client.ProductClient;
import com.tlm.could.product.common.entity.ProductInfo;
import com.tlm.could.product.common.utils.Result;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * @author tanglm
 * @date 2019-06-09 18:07
 * @Description:
 */
@Configuration
public class Beans {
//    @LoadBalanced
//    @Bean
//    public RestTemplate restTemplate(){
//        return  new RestTemplate();
//    }

}
