package com.tlm.could.product.server.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * @author tanglm
 * @date 2019-06-20 13:23
 * @Description:
 */
@ConfigurationProperties(prefix = "test.refresh")
public class TestProperties {


    private String girl;

    public String getGirl() {
        return girl;
    }

    public void setGirl(String girl) {
        this.girl = girl;
    }
}
