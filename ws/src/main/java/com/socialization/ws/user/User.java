package com.socialization.ws.user;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue
    private long id;

    @NotNull(message = "{socialization.constraint.username.NotNull.message}")
    @Size(min = 4, max = 255)
    @UniqueUsername
    private String userName;

    @NotNull(message = "{socialization.constraint.displayName.NotNull.message}")
    @Size(min = 4, max = 255)
    private String displayName;

    @NotNull(message = "{socialization.constraint.password.NotNull.message}")
    @Size(min = 8, max = 255)
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{socialization.constraint.password.Pattern.message}")
    private String password;
}
