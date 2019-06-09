package com.tlm.could.product.utils;

import lombok.Getter;
import lombok.Setter;

/**
 * @author tanglm
 * @date 2019-06-09 13:52
 * @Description:
 */
@Getter
@Setter
public class Result {
    private Integer code;
    private String message;
    private Object  data;

    private Result(Integer code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public  static  Result success(Object data){
        return  new Result(0,null,data);
    }


    public  static  Result success(String message){
        return  new Result(0,message,null);
    }







}
