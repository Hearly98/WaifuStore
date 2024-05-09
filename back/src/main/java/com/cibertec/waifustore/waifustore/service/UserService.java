package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.User;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface UserService {
    List<User> getAll();
    Optional<User> getUserById(int id) ;
    User save(User user);
    void deleteUserById(int id);
    List<User> getUsersWithoutRolWorker();
}
