package com.cibertec.waifustore.waifustore.controller;

import com.cibertec.waifustore.waifustore.model.User;
import com.cibertec.waifustore.waifustore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("all")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAll();
        return  new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") int id){
        return userService.getUserById(id)
                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/save")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        User saveUser = userService.save(user);
        return new ResponseEntity<>(saveUser, HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int id){
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/withoutRolWorker")
    public ResponseEntity<List<User>>getUsersWithoutRolWorker(){
        List<User> users= userService.getUsersWithoutRolWorker();
        return ResponseEntity.ok(users);
    }
}

