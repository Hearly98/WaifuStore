package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.Brand;

import java.util.List;
import java.util.Optional;

public interface BrandService {
    List<Brand> getAll();
    Optional<Brand> getById(int id);
    Brand save(Brand brand);
    void deleteById(int id);
}
