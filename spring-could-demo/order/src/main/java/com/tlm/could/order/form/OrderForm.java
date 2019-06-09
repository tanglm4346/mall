package com.tlm.could.order.form;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

/**
 * @author tanglm
 * @date 2019-06-09 14:41
 * @Description:
 */
@Data
public class OrderForm {
    @NotEmpty(message = "姓名不能为空")
    private String name;
    @NotEmpty(message = "联系电话不能为空")
    private String phone;
    @NotEmpty(message = "联系地址不能为空")
    private String address;
    @NotEmpty(message = "openid不能为空")
    private String openid;
    @Size(min=1,message = "购物车不能为空")
    private OrderDetailForm[] items;
}
