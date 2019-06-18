package com.tlm.could.product.server.mapper;

import com.tlm.could.product.server.ProductApplicationTests;
import com.tlm.could.product.server.entity.Category;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class CategoryMapperTest extends ProductApplicationTests {
    @Autowired
    private CategoryMapper categoryMapper;

    @Test
    public void getAllList() {
        List<Category> list = categoryMapper.getAllList();
        log.info("list={}", list);
    }
}
