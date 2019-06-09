package com.tlm.could.order.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * @author tanglm
 * @date 2019-06-09 13:52
 * @Description:
 */
@Data
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


    public  static  Result error(String message){
        return  new Result(0,message,null);
    }



}
