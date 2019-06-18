package com.tlm.could.order.enums;

import lombok.Getter;

@Getter
public enum PayStatus {
    WAIT(0,"待支付"),
    SUCCESS(1,"支付成功"),
    FAIL(2,"支付失败");
    private int code;
    private String message;


    private PayStatus(int code, String message) {
       this.code = code;
        this.message = message;
    }
}
