package com.cibertec.waifustore.waifustore.implement;

import com.cibertec.waifustore.waifustore.model.Category;
import com.cibertec.waifustore.waifustore.service.CategoryService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Category> getAll() {
        return entityManager.createQuery("SELECT c from Category c",Category.class).getResultList();
    }

    @Override
    public Optional<Category> getById(int id) {
        Category category = entityManager.find(Category.class,id);

        return Optional.ofNullable(category);
    }
    @Transactional
    @Override
    public Category save(Category category) {
        if (category.getId() == null) {
            entityManager.persist(category);
        } else {
            category = entityManager.merge(category);
        }
        return category;
    }

    @Transactional
    @Override
    public void deleteById(int id) {
        Category category = entityManager.find(Category.class,id);
        if (category != null) {
            entityManager.remove(category);
        }

    }
}
