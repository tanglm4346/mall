package com.tlm.could.order.service.impl;

import com.google.common.collect.Maps;
import com.tlm.could.order.entity.Order;
import com.tlm.could.order.entity.OrderDetail;
import com.tlm.could.order.enums.OrderStatus;
import com.tlm.could.order.enums.PayStatus;
import com.tlm.could.order.exception.OrderException;
import com.tlm.could.order.form.OrderDetailForm;
import com.tlm.could.order.form.OrderForm;
import com.tlm.could.order.mapper.OrderDetailMapper;
import com.tlm.could.order.mapper.OrderMapper;
import com.tlm.could.order.service.OrderService;
import com.tlm.could.order.utils.IdGenerator;
import com.tlm.could.product.client.ProductClient;
import com.tlm.could.product.common.entity.ProductInfo;
import com.tlm.could.product.common.utils.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
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
    @Autowired
    private OrderDetailMapper orderDetailMapper;
    //    @Autowired
//    private RestTemplate restTemplate;
    @Autowired
    private ProductClient productClient;

    @Override
    @Transactional
    public Map<String, Object> createOrder(OrderForm orderForm) {
        log.info("【orderForm】={}", orderForm);
        String orderId = IdGenerator.generate();
        //查询商品

        List<String> productInfoIds = Arrays.stream(orderForm.getItems()).map(e -> e.getProductId()).collect(Collectors.toList());
        log.info("【productInfoIds】={}", productInfoIds);

//        RestTemplate restTemplate = new RestTemplate();

//        MultiValueMap<String,String >header = new LinkedMultiValueMap<>();
//        header.set("Content-type", "application/json");
//        HttpEntity<List<String>> entity = new HttpEntity(productInfoIds,header);
//        String result = restTemplate.postForObject("http://product/product/ids",entity,
//                String.class);

        Result<List<ProductInfo>> result = productClient.list(productInfoIds);

        if (result.getCode().equals(0)) {
            List<ProductInfo> productInfoList = result.getData();
            log.info("【productInfoList】={}", productInfoList);
            BigDecimal amount = BigDecimal.ZERO;
            for(OrderDetailForm detailForm :orderForm.getItems()){
                ProductInfo productInfo = productInfoList.stream().filter(e->e.getProductId().equals( detailForm.getProductId())).
                        collect(Collectors.toList()).get(0);
                //1.检查库存
                if(productInfo.getProductStock()<detailForm.getProductQuantity()){
                    log.error("库存不足");
                    throw new OrderException("库存不足");
                }
                //2.计算金额
                amount= amount.add(productInfo.getProductPrice().
                        multiply(new BigDecimal(detailForm.getProductQuantity())));
            }
            log.info("【总金额】={}", amount);
            //新增订单
            Order order = new Order();
            order.setBuyerAddress(orderForm.getAddress());
            order.setBuyerName(orderForm.getName());
            order.setBuyerOpenid(orderForm.getOpenid());
            order.setBuyerPhone(orderForm.getPhone());
            order.setOrderAmount(amount);
            order.setOrderId(orderId);
            order.setPayStatus(PayStatus.WAIT.getCode());
            order.setOrderStatus(OrderStatus.PAY.getCode());
            orderMapper.insert(order);
            //添加订单详情
            for(OrderDetailForm detailForm :orderForm.getItems()){
                ProductInfo productInfo = productInfoList.stream().filter(e->e.getProductId().equals( detailForm.getProductId())).
                        collect(Collectors.toList()).get(0);
                OrderDetail orderDetail = new OrderDetail();
                orderDetail.setDetailId(IdGenerator.generate());
                orderDetail.setOrderId(orderId);
                orderDetail.setProductId(productInfo.getProductId());
                orderDetail.setProductIcon(productInfo.getProductIcon());
                orderDetail.setProductName(productInfo.getProductName());
                orderDetail.setProductPrice(productInfo.getProductPrice());
                orderDetail.setProductQuantity(detailForm.getProductQuantity());
                orderDetailMapper.insert(orderDetail);
            }
        }else{
            log.error("查无此商品");
            throw new OrderException("查无此商品");
        }
        log.info("【result】={}", result);
        //计算总金额
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("orderId", orderId);
        return map;
    }
}
