package com.tlm.could.order.service.impl;

import com.tlm.could.order.entity.OrderDetail;
import com.tlm.could.order.mapper.OrderDetailMapper;
import com.tlm.could.order.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author tanglm
 * @date 2019-06-09 15:09
 * @Description:
 */
@Service
public class OrderDetailServiceImpl implements OrderDetailService {
    @Autowired
    private OrderDetailMapper orderDetailMapper;
    @Override
    public void insert(OrderDetail orderDetail) {
        orderDetailMapper.insert(orderDetail);
    }
}
