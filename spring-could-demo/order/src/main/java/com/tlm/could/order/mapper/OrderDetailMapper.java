package com.tlm.could.order.mapper;

import com.tlm.could.order.entity.OrderDetail;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderDetailMapper {
    void insert(OrderDetail orderDetail);
}
