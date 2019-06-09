package com.tlm.could.order.form;

import lombok.Data;

/**
 * @author tanglm
 * @date 2019-06-09 14:43
 * @Description:
 */
@Data
public class OrderDetailForm {

    private String productId;
    private Integer productQuantity;
}
