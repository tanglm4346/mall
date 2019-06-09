package com.tlm.could.product.mapper;

import com.tlm.could.product.entity.Category;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {
    List<Category> getAllList();
}
