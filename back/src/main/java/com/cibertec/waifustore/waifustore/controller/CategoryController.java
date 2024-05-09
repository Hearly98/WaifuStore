package com.cibertec.waifustore.waifustore.controller;

import com.cibertec.waifustore.waifustore.model.Brand;
import com.cibertec.waifustore.waifustore.model.Category;
import com.cibertec.waifustore.waifustore.service.BrandService;
import com.cibertec.waifustore.waifustore.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> category = categoryService.getAll();
        return new ResponseEntity<>(category, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") int id) {
        return categoryService.getById(id)
                .map(category -> new ResponseEntity<>(category, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/save")
    public ResponseEntity<Category> saveBrand(@RequestBody Category category) {
        Category savedCategory = categoryService.save(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }


    //RECORDAR QUE SOLO FUNCIONARIA PARA CATEGORYS NO REFERENCIADAS (RECIEN CREADAS)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBrand(@PathVariable("id") int id) {
        categoryService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
