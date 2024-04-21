package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Integer> {

}
