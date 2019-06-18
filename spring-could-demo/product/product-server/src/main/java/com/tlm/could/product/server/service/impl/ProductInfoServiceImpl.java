package com.tlm.could.product.server.service.impl;


import com.tlm.could.product.common.entity.Category;
import com.tlm.could.product.common.entity.ProductInfo;
import com.tlm.could.product.server.mapper.ProductInfoMapper;
import com.tlm.could.product.server.service.CategoryService;
import com.tlm.could.product.server.service.ProductInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author tanglm
 * @date 2019-06-09 13:34
 * @Description:
 */
@Service
public class ProductInfoServiceImpl implements ProductInfoService {
    @Autowired
    private ProductInfoMapper productInfoMapper;
    @Autowired
    private CategoryService categoryService;

    @Override
    public List<Map<String, Object>> getProductInfoList() {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        List<Category> categoryList = categoryService.getAllList();
        for (Category category : categoryList) {
            Map<String, Object> map = new HashMap<String, Object>();
            List<ProductInfo> productList = productInfoMapper.getProductInfoListByCategoryType(category.getCategoryType());
            map.put("name", category.getCategoryName());
            map.put("type", category.getCategoryType());
            map.put("foods", productList);
            list.add(map);
        }
        return list;
    }

    @Override
    public List<ProductInfo> getProductInfoListByIds(List<String> productInfoIds) {
        return productInfoMapper.getProductInfoListByIds(productInfoIds);
    }
}
