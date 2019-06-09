package com.tlm.could.product.mapper;

import com.tlm.could.product.entity.ProductInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
@Mapper
public interface ProductInfoMapper {
    List<ProductInfo> getProductInfoListByCategoryType(@Param("categoryType") Integer categoryType );
    List<ProductInfo> getProductInfoListByIds(@Param("list") List<String> productInfoIds);
}
