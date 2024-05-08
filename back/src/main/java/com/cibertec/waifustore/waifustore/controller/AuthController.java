package com.cibertec.waifustore.waifustore.controller;


import com.cibertec.waifustore.waifustore.model.AuthResponse;
import com.cibertec.waifustore.waifustore.model.AuthService;
import com.cibertec.waifustore.waifustore.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping(value = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody User request)
    {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping(value = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody User request)
    {
        return ResponseEntity.ok(authService.register(request));
    }
}

