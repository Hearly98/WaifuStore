package com.cibertec.waifustore.waifustore.controller;

import com.cibertec.waifustore.waifustore.model.Worker;
import com.cibertec.waifustore.waifustore.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/auth/worker")
public class WorkerController {
    @Autowired
    private WorkerService workerService;
    @GetMapping("all")
    public ResponseEntity<List<Worker>> getAllUsers(){
        List<Worker> workers = workerService.getAll();
        return  new ResponseEntity<>(workers, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable("id") int id){
        return workerService.getWorkerById(id)
                .map(worker -> new ResponseEntity<>(worker, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/save")
    public ResponseEntity<Worker> saveWorker(@RequestBody Worker worker){
        Worker saveWorker = workerService.save(worker);
        return new ResponseEntity<>(saveWorker, HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int id){
        workerService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

