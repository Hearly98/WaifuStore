package com.cibertec.waifustore.waifustore.repository;


import com.cibertec.waifustore.waifustore.model.Header;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeaderRepository extends JpaRepository<Header,Integer>{
}
