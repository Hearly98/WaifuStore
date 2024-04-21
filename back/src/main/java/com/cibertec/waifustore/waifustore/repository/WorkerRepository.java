package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Integer> {

}
