package com.tlm.could.product.server.mapper;

import com.tlm.could.product.server.ProductApplicationTests;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
@Slf4j
public class ProductInfoMapperTest extends ProductApplicationTests {


    @Autowired
    private ProductInfoMapper productInfoMapper;

    @Test
    public void getProductInfoListByIds() {
        List list = productInfoMapper.getProductInfoListByIds(Arrays.asList("157875196366160022", "157875227953464068"));
        log.info("【list】={}", list);
    }
}
