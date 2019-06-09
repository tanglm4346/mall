package com.tlm.could.product.service.impl;

import com.tlm.could.product.entity.Category;
import com.tlm.could.product.mapper.CategoryMapper;
import com.tlm.could.product.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author tanglm
 * @date 2019-06-09 13:48
 * @Description:
 */
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryMapper categoryMapper;
    @Override
    public List<Category> getAllList() {
        return categoryMapper.getAllList();
    }
}
