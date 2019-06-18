package com.tlm.could.product.server.controller;

import com.tlm.could.product.common.entity.ProductInfo;
import com.tlm.could.product.common.utils.Result;
import com.tlm.could.product.server.service.ProductInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @author tanglm
 * @date 2019-06-09 13:46
 * @Description:
 */
@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductInfoService productInfoService;

    @GetMapping("/list")
    public Result list() {
        List<Map<String, Object>> list = productInfoService.getProductInfoList();
        return Result.success(list);
    }

    @PostMapping("/ids")
    public Result list(@RequestBody List<String> ids) {
        List<ProductInfo> list = productInfoService.getProductInfoListByIds(ids);
        return Result.success(list);
    }
}
