package com.socialization.ws.user;

import com.socialization.ws.Error.ApiError;
import com.socialization.ws.Shared.GenericResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/api/1.0/users")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> createUser(@Validated @RequestBody User user) {
        ApiError error = new ApiError(400, "Validation error", "api/1.0/users");
        Map<String, String> validationErrors = new HashMap<>();

        String username = user.getUserName();
        String displayName = user.getDisplayName();

        if(username == null || username.isEmpty()) validationErrors.put("userName", "Username cannot be null");
        if(displayName == null || displayName.isEmpty()) validationErrors.put("displayName", "Displayname cannot be null");

        if(validationErrors.size() > 0) {
            error.setValidationErrors(validationErrors);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
        }

        userService.save(user);
        return ResponseEntity.ok(new GenericResponse("user created"));
    }
}
