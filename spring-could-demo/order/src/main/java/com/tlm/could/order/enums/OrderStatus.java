package com.tlm.could.order.enums;

import lombok.Getter;

/**
 * @author tanglm
 * @date 2019-06-18 11:16
 * @Description:
 */
@Getter
public enum  OrderStatus {
    PAY(0,"等待支付"),
    PICK(1,"正在取货"),
    DELIVERY(2,"正在配送"),
    FINESH(3,"完成"),
    CANCEL(4,"取消订单");

    private int code;
    private String message;


    private OrderStatus(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
