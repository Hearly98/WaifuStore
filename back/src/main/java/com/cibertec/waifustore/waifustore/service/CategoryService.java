package com.cibertec.waifustore.waifustore.service;

import com.cibertec.waifustore.waifustore.model.Brand;
import com.cibertec.waifustore.waifustore.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    List<Category> getAll();
    Optional<Category> getById(int id);
    Category save(Category category);
    void deleteById(int id);
}
