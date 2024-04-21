package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.Worker;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public interface WorkerService {
    List<Worker> getAll();
    Optional<Worker> getWorkerById(int id) ;
    Worker save(Worker worker);
    void deleteUserById(int id);
}
