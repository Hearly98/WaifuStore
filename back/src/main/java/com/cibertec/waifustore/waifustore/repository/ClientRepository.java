package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

}
