package com.cibertec.waifustore.waifustore.implement;

import com.cibertec.waifustore.waifustore.model.Worker;
import com.cibertec.waifustore.waifustore.service.WorkerService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class WorkerServiceImpl implements WorkerService{

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Worker> getAll(){
        return entityManager.createQuery("SELECT w FROM Worker w", Worker.class).getResultList();
    }
    @Override
    public Optional<Worker> getWorkerById(int id){
        Worker worker = entityManager.find(Worker.class, id);
        return Optional.ofNullable(worker);
    }
    @Transactional
    @Override
    public  Worker save(Worker worker){
        if(worker.getId() == null){
            entityManager.persist(worker);
        }else {
            worker = entityManager.merge(worker);
        }
        return worker;
    }
    @Transactional
    @Override
    public void deleteUserById(int id){
        Worker worker = entityManager.find(Worker.class, id);
        if(worker != null){
            entityManager.remove(worker);
        }
    }

}
