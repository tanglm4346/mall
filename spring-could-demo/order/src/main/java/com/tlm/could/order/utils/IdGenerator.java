package com.tlm.could.order.utils;

import org.apache.commons.lang.math.RandomUtils;

import java.util.UUID;

/**
 * @author tanglm
 * @date 2019-06-18 11:03
 * @Description:
 */
public class IdGenerator {
    public static String generate() {
        return Long.toString(System.currentTimeMillis()) + Integer.toString(RandomUtils.nextInt(999999));
    }
}
