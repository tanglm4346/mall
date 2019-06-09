package com.tlm.could.order.controller;

import com.tlm.could.order.form.OrderForm;
import com.tlm.could.order.service.OrderService;
import com.tlm.could.order.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * @author tanglm
 * @date 2019-06-09 14:36
 * @Description:
 */
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public Result create(@RequestBody  @Valid  OrderForm orderForm, BindingResult result){
        if(result.hasErrors()){
            return  Result.error(result.getFieldError().getDefaultMessage());
        }
        orderService.createOrder(orderForm);
        return  Result.success("123123123");
    }

}
