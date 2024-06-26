package com.cibertec.waifustore.waifustore.implement;

import com.cibertec.waifustore.waifustore.model.User;
import com.cibertec.waifustore.waifustore.repository.UserRepository;
import com.cibertec.waifustore.waifustore.service.UserService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImpl implements UserService  {

    private final EntityManager entityManager;

    public UserServiceImpl(UserRepository userRepository, EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll(){
        return entityManager.createQuery("SELECT u FROM User u", User.class).getResultList();
    }
    @Override
    public Optional<User> getUserById(int id){
        User user = entityManager.find(User.class, id);
        return Optional.ofNullable(user);
    }
    @Transactional
    @Override
    public  User save(User user){
        if(user.getId() == null){
            entityManager.persist(user);
        }else {
            user = entityManager.merge(user);
        }
        return user;
    }
    @Transactional
    @Override
    public void deleteUserById(int id){
        User user = entityManager.find(User.class, id);
        if(user != null){
            entityManager.remove(user);
        }
    }
        @Override
        public List<User> getUsersWithoutRolWorker(){
            return userRepository.findUserWithoutRolWorker();
        }
}

