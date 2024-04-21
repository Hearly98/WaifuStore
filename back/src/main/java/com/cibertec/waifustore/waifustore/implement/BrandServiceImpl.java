package com.cibertec.waifustore.waifustore.implement;

import com.cibertec.waifustore.waifustore.model.Brand;
import com.cibertec.waifustore.waifustore.model.Product;
import com.cibertec.waifustore.waifustore.service.BrandService;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BrandServiceImpl implements BrandService {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Brand> getAll() {
        return entityManager.createQuery("SELECT b from Brand b",Brand.class).getResultList();

    }

    @Override
    public Optional<Brand> getById(int id) {
        Brand brand = entityManager.find(Brand.class,id);
        return Optional.ofNullable(brand);
    }

    @Transactional
    @Override
    public Brand save(Brand brand) {
        if (brand.getId() == null) {
            entityManager.persist(brand);
        } else {
            brand = entityManager.merge(brand);
        }
        return brand;
    }

    @Transactional
    @Override
    public void deleteById(int id) {
        Brand brand = entityManager.find(Brand.class, id);
        if (brand != null) {
            entityManager.remove(brand);
        }
    }
}
