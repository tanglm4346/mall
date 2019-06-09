package com.tlm.could.order.mapper;

import com.tlm.could.order.entity.Order;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderMapper {
    void insert(Order order);
}
