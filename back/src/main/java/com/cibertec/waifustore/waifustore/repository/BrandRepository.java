package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer> {
}
