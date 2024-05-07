package com.cibertec.waifustore.waifustore.controller;

import com.cibertec.waifustore.waifustore.model.Document;
import com.cibertec.waifustore.waifustore.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/documents")
public class DocumentController {

    @Autowired
    private DocumentRepository documentRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Document>> getAllDocuments(){
       List<Document> documents = documentRepository.findAll();
        return new ResponseEntity<>(documents, HttpStatus.OK);
    }
}
