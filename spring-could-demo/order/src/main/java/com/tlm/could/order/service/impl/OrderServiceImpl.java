package com.tlm.could.order.service.impl;

import com.google.common.collect.Maps;
import com.tlm.could.order.feign.ProductClient;
import com.tlm.could.order.form.OrderForm;
import com.tlm.could.order.mapper.OrderMapper;
import com.tlm.could.order.service.OrderService;
import com.tlm.could.order.utils.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @author tanglm
 * @date 2019-06-09 14:39
 * @Description:
 */
@Slf4j
@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderMapper orderMapper;
//    @Autowired
//    private RestTemplate restTemplate;
    @Autowired
    private ProductClient productClient;

    @Override
    public Map<String, Object> createOrder(OrderForm orderForm) {
      log.info("【orderForm】={}",orderForm);
        //查询商品

        List<String> productInfoIds = Arrays.stream(orderForm.getItems()).map(e->e.getProductId()).collect(Collectors.toList());
        log.info("【productInfoIds】={}",productInfoIds);

//        RestTemplate restTemplate = new RestTemplate();

//        MultiValueMap<String,String >header = new LinkedMultiValueMap<>();
//        header.set("Content-type", "application/json");
//        HttpEntity<List<String>> entity = new HttpEntity(productInfoIds,header);
//        String result = restTemplate.postForObject("http://product/product/ids",entity,
//                String.class);

      Result result=   productClient.list(productInfoIds);


        log.info("【result】={}",result);

        //计算总金额
        return null;
    }
}
