package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StateRepository extends JpaRepository<State, Integer> {
}
