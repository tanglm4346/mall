package com.tlm.could.product.server.mapper;

import com.tlm.could.product.common.entity.Category;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {
    List<Category> getAllList();
}
