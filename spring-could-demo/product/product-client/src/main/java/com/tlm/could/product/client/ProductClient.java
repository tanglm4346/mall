package com.tlm.could.product.client;

import com.tlm.could.product.common.entity.ProductInfo;
import com.tlm.could.product.common.utils.Result;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

/**
 * @author tanglm
 * @date 2019-06-09 18:30
 * @Description:
 */
@FeignClient(name="product")
public interface ProductClient {
    @PostMapping("/product/ids")
     Result<List<ProductInfo>> list(List<String> ids);

}
