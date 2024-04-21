package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.Client;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface ClientService {
    List<Client> getAll();
    Optional<Client> getClientById(int id) ;
    Client save(Client client);
    void deleteUserById(int id);
}
