package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
