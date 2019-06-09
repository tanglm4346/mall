package com.tlm.could.product.entity;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
@Data
public class ProductInfo {
    private String productId;

    private String productName;

    private BigDecimal productPrice;

    private Integer productStock;

    private String productDescription;

    private String productIcon;

    private Byte productStatus;

    private Integer categoryType;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;
}
