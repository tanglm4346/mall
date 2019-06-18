package com.tlm.could.product.common.utils;

import lombok.Getter;
import lombok.Setter;

/**
 * @author tanglm
 * @date 2019-06-09 13:52
 * @Description:
 */
@Getter
@Setter
public class Result<T> {
    private Integer code;
    private String message;
    private T data;

    private Result(Integer code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static<T> Result<T> success(T data) {
        return new Result(0, null, data);
    }


    public static Result error(String message) {
        return new Result(0, message, null);
    }
}
