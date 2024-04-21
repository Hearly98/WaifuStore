package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesRepository extends JpaRepository <Roles, Integer> {
}
