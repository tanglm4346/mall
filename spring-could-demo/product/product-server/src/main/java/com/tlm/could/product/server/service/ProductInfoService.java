package com.tlm.could.product.server.service;

import com.tlm.could.product.common.entity.ProductInfo;

import java.util.List;
import java.util.Map;

public interface ProductInfoService {
    List<Map<String, Object>> getProductInfoList();

    List<ProductInfo> getProductInfoListByIds(List<String> productInfoIds);
}
