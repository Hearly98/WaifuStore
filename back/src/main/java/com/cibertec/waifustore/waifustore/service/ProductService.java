package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public interface ProductService {

    List<Product> getAll();
    Optional<Product> getById(int id);
    Product save(Product product);
    void deleteById(int id);
}
