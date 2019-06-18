package com.tlm.could.product.server.mapper;

import com.tlm.could.product.common.entity.ProductInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ProductInfoMapper {
    List<ProductInfo> getProductInfoListByCategoryType(@Param("categoryType") Integer categoryType);

    List<ProductInfo> getProductInfoListByIds(@Param("list") List<String> productInfoIds);
}
