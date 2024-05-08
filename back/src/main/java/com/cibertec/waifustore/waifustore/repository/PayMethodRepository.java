package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.PayMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayMethodRepository extends JpaRepository<PayMethod,Integer> {
}
