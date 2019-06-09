package com.tlm.could.order.service;

import com.tlm.could.order.form.OrderForm;

import java.util.Map;

/**
 * @author tanglm
 * @date 2019-06-09 14:38
 * @Description:
 */
public interface OrderService {
    Map<String,Object> createOrder(OrderForm orderForm) ;
}
