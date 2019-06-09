package com.tlm.could.product.entity;

import lombok.Data;

import java.time.LocalDateTime;
@Data
public class Category {
    private Integer categoryId;

    private String categoryName;

    private Integer categoryType;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;
}
