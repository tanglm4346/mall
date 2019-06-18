package com.tlm.webflux.demo.pojo;

import lombok.Data;

/**
 * @author tanglm
 * @date 2019-06-11 13:13
 * @Description:
 */
@Data
public class User {
    private Long id;
    private String name;
    private  Integer age;

    public User(Long id, String name, Integer age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public User() {
    }
}
