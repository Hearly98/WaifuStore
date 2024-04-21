package com.cibertec.waifustore.waifustore.implement;

import com.cibertec.waifustore.waifustore.model.Client;
import com.cibertec.waifustore.waifustore.service.ClientService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ClientServiceImpl implements ClientService{

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Client> getAll(){
        return entityManager.createQuery("SELECT c FROM Client c", Client.class).getResultList();
    }
    @Override
    public Optional<Client> getClientById(int id){
        Client client = entityManager.find(Client.class, id);
        return Optional.ofNullable(client);
    }
    @Transactional
    @Override
    public  Client save(Client client){
        if(client.getId() == null){
            entityManager.persist(client);
        }else {
            client = entityManager.merge(client);
        }
        return client;
    }
    @Transactional
    @Override
    public void deleteUserById(int id){
        Client client = entityManager.find(Client.class, id);
        if(client != null){
            entityManager.remove(client);
        }
    }

}
