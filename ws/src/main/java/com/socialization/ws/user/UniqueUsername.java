package com.socialization.ws.user;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(
        validatedBy = {UniqueUserNameValidator.class}
)
public @interface UniqueUsername {
    String message() default "Username must be unique";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
