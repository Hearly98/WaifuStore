package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.repository.ClientRepository;
import com.cibertec.waifustore.waifustore.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class CountService {
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private WorkerRepository workerRepository;

    public long countClients() {
        return clientRepository.count();
    }

    public long countWorkers() {
        return workerRepository.count();
    }
}
