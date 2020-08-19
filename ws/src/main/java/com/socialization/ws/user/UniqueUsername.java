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
    String message() default "{socialization.constraint.username.UniqueUserName.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
