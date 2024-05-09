package com.cibertec.waifustore.waifustore.controller;

import com.cibertec.waifustore.waifustore.model.Header;
import com.cibertec.waifustore.waifustore.service.HeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/auth/header")
public class HeaderController {
    @Autowired
    private HeaderService headerService;

    // Obtener todos los encabezados
    @GetMapping("/all")
    public ResponseEntity<List<Header>> getAllHeaders() {
        List<Header> headers = headerService.getAll();
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }

    // Obtener un encabezado por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Header> getHeaderById(@PathVariable("id") int id) {
        Optional<Header> header = headerService.getById(id);
        return header.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Crear un nuevo encabezado
    @PostMapping("/save")
    public ResponseEntity<Header> createHeader(@RequestBody Header header) {
        Header newHeader = headerService.save(header);
        return new ResponseEntity<>(newHeader, HttpStatus.CREATED);
    }
}
