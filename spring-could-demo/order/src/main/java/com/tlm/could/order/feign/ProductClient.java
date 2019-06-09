package com.tlm.could.order.feign;

import com.tlm.could.order.utils.Result;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

/**
 * @author tanglm
 * @date 2019-06-09 18:30
 * @Description:
 */
@FeignClient(name="product")
public interface ProductClient {
    @PostMapping("/product/ids")
    public Result list(List<String> ids);

}
