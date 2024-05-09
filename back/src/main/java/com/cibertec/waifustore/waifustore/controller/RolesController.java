package com.cibertec.waifustore.waifustore.controller;

import com.cibertec.waifustore.waifustore.model.Roles;
import com.cibertec.waifustore.waifustore.repository.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auth/roles")
public class RolesController {
    @Autowired
    RolesRepository rolesRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Roles>>getAllRoles(){
        List<Roles> roles = rolesRepository.findAll();
        return new ResponseEntity<>(roles, HttpStatus.OK);
    }
}
