package com.cibertec.waifustore.waifustore.controller;


import com.cibertec.waifustore.waifustore.model.Category;
import com.cibertec.waifustore.waifustore.model.PayMethod;
import com.cibertec.waifustore.waifustore.service.CategoryService;
import com.cibertec.waifustore.waifustore.service.PayMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth/payMethod")
public class PayMethodController {
    @Autowired
    private PayMethodService payMethodService;

    @GetMapping("/all")
    public ResponseEntity<List<PayMethod>> getAllPayMethod() {
        List<PayMethod> payMethod = payMethodService.getAll();
        return new ResponseEntity<>(payMethod, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<PayMethod> getPayMethodById(@PathVariable("id") int id) {
        return payMethodService.getById(id)
                .map(payMethod -> new ResponseEntity<>(payMethod, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/save")
    public ResponseEntity<PayMethod> savePayMethod(@RequestBody PayMethod payMethod) {
        PayMethod savedPayMethod = payMethodService.save(payMethod);
        return new ResponseEntity<>(savedPayMethod, HttpStatus.CREATED);
    }


    //RECORDAR QUE SOLO FUNCIONARIA PARA CATEGORYS NO REFERENCIADAS (RECIEN CREADAS)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePayMethod(@PathVariable("id") int id) {
        payMethodService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
